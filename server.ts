import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/competence-mapping", async (req, res) => {
    try {
      const { experience } = req.body;
      if (!experience) {
        return res.status(400).json({ error: "Experience is required" });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `
      Eres un experto en transición profesional, innovación educativa y proyectos EdTech.
      Tu tarea es analizar la siguiente experiencia docente tradicional y mapearla a competencias estratégicas para proyectos EdTech y diseño instruccional.
      
      Experiencia docente: "${experience}"
      
      Devuelve ÚNICAMENTE un objeto JSON válido con la siguiente estructura, sin ningún texto o formato adicional, ni bloques de código (no incluyas \`\`\`json):
      {
        "transferable": "Descripción breve (1 oración) de las habilidades transferibles",
        "bloom": "Los niveles de la taxonomía de Bloom aplicados (ej. Crear, Evaluar)",
        "edtech": "Un rol o posición sugerida en el sector EdTech (ej. Especialista en Diseño Instruccional)"
      }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash-8b",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        }
      });

      const textResponse = response.text || "{}";
      const jsonResponse = JSON.parse(textResponse);
      
      res.json(jsonResponse);
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to process request with AI" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
