import React from 'react';
import { Accordion, InfoCard, GlossaryTerm } from '../components/Shared';

export const FAQContent = () => (
  <div className="prose-custom">
    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Preguntas frecuentes (FAQ)</h1>
    <p className="text-xl text-slate-300 mb-12">Respuestas a las dudas más comunes sobre la inteligencia artificial y la ingeniería de prompts.</p>

    <h2 id="sec-faq-0" className="text-2xl font-bold mb-6 text-indigo-400 scroll-mt-24">Fundamentos de la IA</h2>
    
    <Accordion title="¿Qué modelo de IA es el mejor para empezar?">
      <p>No existe un único "mejor" modelo, ya que depende de la tarea. Sin embargo, para principiantes, modelos como ChatGPT (OpenAI), Claude (Anthropic) o Gemini (Google) son excelentes puntos de partida debido a sus interfaces intuitivas y capacidades generales. Es recomendable probar varios para entender sus diferencias.</p>
    </Accordion>

    <Accordion title="¿Mis datos son privados cuando uso IA?">
      <p>Depende de la plataforma y de tu configuración. En las versiones gratuitas de muchos modelos, tus conversaciones pueden ser utilizadas para entrenar futuras versiones. Si manejas información confidencial, debes usar versiones empresariales (Enterprise) o desactivar el historial de chat en la configuración de privacidad.</p>
    </Accordion>

    <Accordion title="¿La IA reemplazará mi trabajo?">
      <p>La IA está diseñada para automatizar tareas, no necesariamente empleos completos. Como dice el dicho en la industria: <em>"La IA no te reemplazará, te reemplazará una persona que sepa usar IA"</em>. El enfoque debe ser aprender a utilizar la IA como un "copiloto" para aumentar tu productividad y creatividad.</p>
    </Accordion>

    <h2 id="sec-faq-1" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">Ingeniería de prompts</h2>

    <Accordion title="¿Qué tan largo debe ser un prompt?">
      <p>Un <GlossaryTerm term="Prompt">prompt</GlossaryTerm> debe ser tan largo como sea necesario para dar el contexto adecuado, pero tan conciso como sea posible para evitar confundir al modelo. La clave es la claridad. Utiliza la técnica de "<GlossaryTerm term="Zero-shot">Zero-shot</GlossaryTerm>" para tareas simples y "<GlossaryTerm term="Few-shot">Few-shot</GlossaryTerm>" o "Chain of thought" para tareas más complejas que requieran mayor contexto.</p>
    </Accordion>

    <Accordion title="¿Por qué la IA a veces inventa información?">
      <p>Esto se conoce como <GlossaryTerm term="Alucinaciones">alucinaciones</GlossaryTerm>. Los modelos de lenguaje están diseñados para predecir la siguiente palabra más probable, no para buscar la verdad absoluta en una base de datos. Para reducir las alucinaciones, pide al modelo que cite sus fuentes, usa técnicas como <GlossaryTerm term="RAG">RAG</GlossaryTerm>, o indícale explícitamente: "Si no sabes la respuesta, di que no lo sabes".</p>
    </Accordion>

    <Accordion title="¿Cómo puedo hacer que la IA escriba con mi estilo?">
      <p>Puedes lograr esto proporcionando ejemplos de tus propios textos en el prompt (técnica Few-shot) y dándole instrucciones claras sobre el tono. Por ejemplo: "Analiza el estilo, tono y vocabulario de los siguientes textos. Luego, escribe un nuevo artículo sobre [tema] imitando exactamente ese mismo estilo."</p>
    </Accordion>

    <h2 id="sec-faq-2" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">Problemas comunes</h2>

    <Accordion title="El modelo se detiene a mitad de la respuesta, ¿qué hago?">
      <p>Esto suele ocurrir porque el modelo ha alcanzado su límite máximo de <GlossaryTerm term="Token">tokens</GlossaryTerm> de salida por respuesta. Simplemente escribe "Continúa" o "Sigue desde donde te quedaste" y el modelo retomará la generación del texto.</p>
    </Accordion>

    <Accordion title="La IA ignora parte de mis instrucciones.">
      <p>Cuando los prompts son muy largos, los modelos pueden sufrir de "amnesia" en el medio del texto. Para solucionarlo: 1) Coloca las instrucciones más importantes al principio o al final del prompt. 2) Estructura tu prompt usando viñetas o etiquetas XML (ej. <code>&lt;instrucciones&gt;</code>). 3) Divide la tarea en pasos más pequeños (Prompt Chaining).</p>
    </Accordion>

    <InfoCard type="idea" title="¿Tienes más dudas?">
      <p>El campo de la IA evoluciona rápidamente. Te recomendamos experimentar constantemente y mantenerte actualizado consultando la sección de <button onClick={() => document.getElementById('sec-referencias-0')?.scrollIntoView({behavior: 'smooth'})} className="text-indigo-400 hover:underline">Referencias</button> de esta guía.</p>
    </InfoCard>
  </div>
);
