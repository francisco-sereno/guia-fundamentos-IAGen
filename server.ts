import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

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

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `
      Eres un experto en transición profesional, innovación educativa, agentes de IA y proyectos EdTech (horizonte 2026).
      Tu tarea es analizar la siguiente experiencia docente tradicional y mapearla a competencias estratégicas para proyectos EdTech, diseño instruccional y arquitectura de aprendizaje asistida por IA.
      
      Experiencia docente: "${experience}"
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              transferable: {
                type: Type.STRING,
                description: "Descripción precisa (1-2 oraciones) de las habilidades transferibles clave identificadas.",
              },
              bloom: {
                type: Type.STRING,
                description: "Los niveles superiores de la taxonomía de Bloom digital aplicados (ej. Evaluar, Crear, Auditar).",
              },
              edtech: {
                type: Type.STRING,
                description: "Rol estratégico sugerido en el sector EdTech 2026 y cómo su experiencia agrega valor único.",
              },
            },
            required: ["transferable", "bloom", "edtech"],
          },
        },
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
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
