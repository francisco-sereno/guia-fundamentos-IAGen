import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote, Workflow } from '../components/Shared';
import { BrainCircuit, Cpu, Database, Network, Zap, GitBranch, MessageSquare, BookOpen, Search, Lightbulb, Target, Layers } from 'lucide-react';
import { TransformerDiagram } from '../components/TransformerDiagram';
import { RAGDiagram, ModelComparisonCarousel } from '../components/InteractiveComponents';

export const LLMContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      Antes de poder dominar la ingeniería de prompts o construir agentes complejos, es fundamental entender qué hay "debajo del capó". Esta sección desmitifica los Modelos de Lenguaje Grandes (LLMs), explicando su arquitectura base (Transformers) y cómo aprenden a predecir el lenguaje humano.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Modelos de lenguaje grandes (LLMs)</h1>
    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">El motor detrás de la revolución de la IA generativa.</p>

    <h2 id="sec-llms-0" className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <BrainCircuit size={24} /> ¿Qué es un LLM?
    </h2>
    <p>
      Un <strong>Modelo de Lenguaje Grande (LLM, por sus siglas en inglés)</strong> es un tipo de inteligencia artificial diseñada para comprender, generar y procesar lenguaje humano a una escala masiva. En su esencia más básica, un LLM es un <em>motor de predicción estadística</em> extremadamente sofisticado.
    </p>
    <p>
      Como señala Google Cloud, un LLM toma un texto secuencial como entrada y predice cuál debería ser el siguiente <GlossaryTerm term="Token">token</GlossaryTerm> (fragmento de palabra), basándose en los patrones que aprendió durante su entrenamiento. Este proceso se repite una y otra vez para generar oraciones, párrafos o código completo.
    </p>

    <InfoCard type="idea" title="La ilusión de la comprensión">
      <p>Cuando un LLM responde a una pregunta compleja, no "entiende" el concepto de la misma manera que un humano. Lo que hace es calcular matemáticamente qué palabras tienen la mayor probabilidad de seguir a tu pregunta, basándose en miles de millones de ejemplos de texto que ha "leído" previamente.</p>
    </InfoCard>

    <InfoCard type="reflexion" title="Relación con los marcos DECIDE-IA y PotencIA">
      <p>Entender los LLM como motores probabilísticos y no como entes conscientes es el pilar del <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm> (evaluación crítica e indagación de fuentes) y del <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm>, fundamentando por qué la o el <GlossaryTerm term="Docente de educación secundaria"><strong>docente de educación secundaria</strong></GlossaryTerm> debe mantener la supervisión humana activa e intencionada sobre cualquier contenido o secuencia didáctica generada.</p>
    </InfoCard>

    <h2 id="sec-llms-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Network size={24} /> La arquitectura Transformer
    </h2>
    <p>
      El avance que hizo posibles a los LLMs modernos fue la arquitectura <strong>Transformer</strong>, presentada por investigadores de Google en 2017 en el famoso artículo <em>"Attention Is All You Need"</em>. Antes de los Transformers, los modelos de lenguaje leían el texto de forma secuencial (palabra por palabra), lo que los hacía lentos y propensos a "olvidar" el contexto en textos largos.
    </p>
    <p>
      La arquitectura Transformer revolucionó esto introduciendo dos conceptos clave:
    </p>

    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
            <Zap size={20} />
          </div>
          <h4 className="text-lg font-bold text-slate-200 m-0">Procesamiento paralelo</h4>
        </div>
        <p className="text-sm text-slate-300">
          A diferencia de modelos anteriores, los Transformers pueden procesar todas las palabras de una oración al mismo tiempo. Esto permitió entrenar modelos con cantidades de datos exponencialmente mayores en mucho menos tiempo.
        </p>
      </div>
      
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
            <GitBranch size={20} />
          </div>
          <h4 className="text-lg font-bold text-slate-200 m-0">Mecanismo de auto-atención</h4>
        </div>
        <p className="text-sm text-slate-300">
          El mecanismo de <em>Self-Attention</em> permite al modelo evaluar la importancia de cada palabra en relación con todas las demás palabras de la oración, sin importar qué tan lejos estén. Esto le da al modelo una comprensión profunda del contexto y la gramática.
        </p>
      </div>
    </div>

    <TransformerDiagram />

    <h2 id="sec-llms-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Database size={24} /> El proceso de entrenamiento
    </h2>
    <p>
      Crear un LLM como GPT-4, Claude o Gemini no ocurre de la noche a la mañana. Es un proceso de varias etapas que requiere supercomputadoras masivas y meses de procesamiento.
    </p>

    <div className="space-y-4 my-6">
      <Accordion title="Fase 1: pre-entrenamiento (pre-training)">
        <p>El modelo es alimentado con un corpus masivo de datos de internet (libros, artículos, sitios web, código). En esta fase, el modelo aprende gramática, hechos sobre el mundo, razonamiento básico e incluso sesgos. Su único objetivo aquí es aprender a predecir la siguiente palabra. El resultado es un "Modelo Base" (Base Model), que es muy conocedor pero difícil de controlar.</p>
      </Accordion>
      <Accordion title="Fase 2: ajuste fino supervisado (supervised fine-tuning - SFT)">
        <p>Para que el modelo sea útil como asistente, se le entrena con miles de ejemplos de alta calidad de formato "Pregunta-Respuesta" creados por humanos. Esto le enseña al modelo a seguir instrucciones y a comportarse como un asistente conversacional útil, en lugar de ser solo un autocompletador de texto.</p>
      </Accordion>
      <Accordion title="Fase 3: aprendizaje por refuerzo con retroalimentación humana (RLHF)">
        <p>Esta es la fase crucial para la seguridad y la alineación. Humanos evalúan múltiples respuestas generadas por el modelo y las clasifican de mejor a peor. El modelo utiliza esta retroalimentación para ajustar sus parámetros internos, aprendiendo a preferir respuestas que sean útiles, honestas e inofensivas, y a evitar generar contenido tóxico o peligroso.</p>
      </Accordion>
    </div>

    <h2 id="sec-llms-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Zap size={24} /> Técnicas de inferencia: RAG vs. CoT
    </h2>
    <p className="mb-6">
      Aunque el entrenamiento crea la base del modelo, existen técnicas que se aplican durante la interacción (inferencia) para mejorar drásticamente sus resultados sin necesidad de reentrenarlo.
    </p>

    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700">
        <thead>
          <tr className="bg-slate-800 text-indigo-300">
            <th className="p-4 font-bold border-b border-slate-700">Característica</th>
            <th className="p-4 font-bold border-b border-slate-700">Retrieval Augmented Generation (RAG)</th>
            <th className="p-4 font-bold border-b border-slate-700">Chain of Thought (CoT)</th>
          </tr>
        </thead>
        <tbody className="text-sm text-slate-300">
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Objetivo principal</td>
            <td className="p-4">Extender el conocimiento del modelo con datos externos y actualizados.</td>
            <td className="p-4">Mejorar la capacidad de razonamiento lógico y resolución de problemas.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Mecanismo</td>
            <td className="p-4">Busca información en una base de datos y la añade al prompt como contexto.</td>
            <td className="p-4">Pide al modelo que "piense paso a paso" antes de dar la respuesta final.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Ideal para...</td>
            <td className="p-4">Hechos recientes, datos privados de una empresa, manuales técnicos.</td>
            <td className="p-4">Matemáticas, lógica, planificación compleja, depuración de código.</td>
          </tr>
          <tr>
            <td className="p-4 font-bold text-slate-200">Ventaja clave</td>
            <td className="p-4">Reduce drásticamente las alucinaciones al basarse en fuentes reales.</td>
            <td className="p-4">Permite al modelo resolver tareas que fallaría si intentara responder directamente.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-bold text-indigo-300 mb-4">Flujo de trabajo: el proceso RAG</h4>
    <Workflow 
      steps={[
        { label: "1. Consulta del usuario", icon: MessageSquare, description: "El usuario hace una pregunta que requiere datos específicos o actualizados." },
        { label: "2. Recuperación (Retrieval)", icon: Search, description: "El sistema busca en una base de datos vectorial los fragmentos de información más relevantes para la consulta." },
        { label: "3. Aumentación", icon: Layers, description: "Se construye un nuevo prompt que combina la pregunta original con la información recuperada." },
        { label: "4. Generación", icon: BrainCircuit, description: "El LLM procesa el prompt aumentado y genera una respuesta fundamentada en el contexto proporcionado." },
        { label: "5. Respuesta final", icon: Target, description: "El usuario recibe una respuesta precisa, citando fuentes si es necesario." }
      ]}
    />

    <RAGDiagram />

    {/* COMPONENT DE COMPARATIVA DE MODELOS LLM */}
    <ModelComparisonCarousel />

    <h2 id="sec-llms-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <MessageSquare size={24} /> Configurando la salida del LLM
    </h2>
    <p>
      Cuando interactúas con un LLM a través de una API o un entorno de desarrollo (como Vertex AI Studio o OpenAI Playground), tienes acceso a parámetros que controlan cómo el modelo genera texto. Entender estos controles es vital para la ingeniería de prompts.
    </p>

    <div className="overflow-x-auto my-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-800/50 border-b border-slate-700">
            <th className="p-4 font-bold text-indigo-300">Parámetro</th>
            <th className="p-4 font-bold text-indigo-300">¿Qué hace?</th>
            <th className="p-4 font-bold text-indigo-300">Casos de uso</th>
          </tr>
        </thead>
        <tbody className="text-sm text-slate-300">
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-semibold text-white">Temperature (temperatura)</td>
            <td className="p-4">Controla el grado de aleatoriedad. Una temperatura baja (ej. 0.1) hace que el modelo elija siempre las palabras más probables (respuestas deterministas). Una temperatura alta (ej. 0.9) permite elecciones menos probables, generando mayor diversidad.</td>
            <td className="p-4"><strong>Baja:</strong> Código, matemáticas, análisis de datos, extracción de información.<br/><strong>Alta:</strong> Escritura creativa, lluvia de ideas, redacción de marketing.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-semibold text-white">Top-K</td>
            <td className="p-4">Limita la selección del siguiente token a los "K" tokens más probables. Un Top-K de 1 es equivalente a una búsqueda codiciosa (greedy decoding).</td>
            <td className="p-4">Útil para evitar que el modelo genere palabras completamente fuera de contexto, manteniendo cierta creatividad.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-semibold text-white">Top-P (nucleus sampling)</td>
            <td className="p-4">Selecciona tokens cuya probabilidad acumulada no exceda un valor "P". Si P=0.9, el modelo solo considerará el subconjunto de palabras que en conjunto suman el 90% de probabilidad.</td>
            <td className="p-4">A menudo se usa en conjunto con la temperatura para controlar la diversidad de la respuesta de manera más dinámica que Top-K.</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold text-white">Max Tokens</td>
            <td className="p-4">Establece un límite estricto sobre la longitud de la respuesta generada.</td>
            <td className="p-4">Control de costos, prevención de respuestas excesivamente largas, o forzar concisión.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <InfoCard type="reflexion" title="El problema del bucle de repetición">
      <p>Configuraciones extremas de temperatura o Top-P pueden causar que el modelo se "atasque" en un bucle, repitiendo la misma palabra o frase indefinidamente. Si observas esto, ajusta los parámetros para encontrar un mejor equilibrio entre determinismo y aleatoriedad.</p>
    </InfoCard>

  </div>
);
