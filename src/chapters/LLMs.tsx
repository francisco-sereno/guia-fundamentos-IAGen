import React from 'react';
import { 
  Cpu, Layers, Sliders, Sparkles, Database, Eye, Zap, CheckCircle, AlertTriangle
} from 'lucide-react';
import { GlossaryTerm, InfoCard, QuizComponent, CodeBlock, AuthorNote } from '../components/Shared';
import { TransformerDiagram } from '../components/TransformerDiagram';
import { ModelComparisonCarousel, RAGDiagram } from '../components/InteractiveComponents';

export const LLMs = () => (
  <div className="space-y-8">
    <h2 id="sec-llms-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. Del texto a la geometría: tokenización, embeddings y atención
    </h2>
    <p>
      Los Grandes Modelos de Lenguaje (<GlossaryTerm term="LLM">LLMs</GlossaryTerm>) y los modelos multimodales contemporáneos no leen palabras ni ven píxeles como los humanos. Operan transformando cualquier modalidad (texto, código, audio, imagen o video) en secuencias de unidades discretas llamadas <strong><GlossaryTerm term="Token">tokens</GlossaryTerm></strong> mediante algoritmos como <em>Byte-Pair Encoding (BPE)</em>.
    </p>
    <p>
      Cada token se proyecta en un vector continuo de alta dimensión conocido como <strong><GlossaryTerm term="Embedding">Embedding</GlossaryTerm></strong>. En este espacio geométrico multidimensional, la cercanía semántica equivale a proximidad angular (similitud del coseno): conceptos pedagógicos, médicos o financieros afines habitan regiones contiguas del espacio latente.
    </p>

    <TransformerDiagram />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <InfoCard title="Mecanismo de Autoatención (Self-Attention)" icon={Eye} color="blue">
        Introducido por Vaswani et al. (2017), permite que cada token consulte simultáneamente a todos los demás tokens de la secuencia mediante tres proyecciones matriciales: <strong>Query (Consulta)</strong>, <strong>Key (Clave)</strong> y <strong>Value (Valor)</strong>. Así resuelve ambigüedades contextuales a lo largo de cientos de miles de palabras.
      </InfoCard>
      <InfoCard title="Mixture of Experts (MoE)" icon={Layers} color="purple">
        En lugar de activar el 100% de la red neuronal para cada palabra (arquitectura densa), los modelos de frontera actuales dividen sus capas en múltiples sub-redes especializadas ("expertos"). Un enrutador dinámico activa solo una fracción (ej. 2 de 16 expertos por token), multiplicando la velocidad y reduciendo el consumo energético.
      </InfoCard>
    </div>

    <h2 id="sec-llms-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. El salto de paradigma 2025–2026: modelos de razonamiento y Test-Time Compute
    </h2>
    <p>
      Durante años, la mejora de los LLMs dependió casi exclusivamente de escalar el <em>cómputo de pre-entrenamiento</em> (modelos más grandes leyendo más terabytes de internet). Sin embargo, entre 2024 y 2026 emergió una segunda ley de escalado fundamental: el <strong><GlossaryTerm term="Test-Time Compute">cómputo en tiempo de inferencia (Test-Time Compute)</GlossaryTerm></strong>.
    </p>
    <p>
      Mediante <strong>Aprendizaje por Refuerzo con Recompensas Verificables (RLVR)</strong> en dominios exactos (matemáticas, compilación de código, lógica formal), los modelos aprendieron a desplegar una cadena de pensamiento interna (<em>Thinking Tokens</em>) antes de emitir una sola palabra al usuario:
    </p>

    <div className="my-6 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
        Comparativa cognitiva · Inferencia estándar vs. Inferencia con razonamiento
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
            1. Respuesta autorregresiva directa ("Sistema 1")
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
            El modelo emite el primer token de respuesta de forma inmediata con latencia mínima (~200 ms). Ideal para traducción, resumen ejecutivo, clasificación rápida y redacción creativa, pero propenso a errores en problemas de múltiples pasos si se equivoca en una premisa inicial.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/60">
          <div className="text-xs font-bold text-sky-900 dark:text-sky-200 mb-1">
            2. Razonamiento con Test-Time Compute ("Sistema 2")
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
            El modelo dedica un presupuesto configurable de tokens (<code className="font-mono">thinkingBudget</code> o <code className="font-mono">thinkingLevel</code>) a explorar hipótesis, detectar contradicciones, retroceder (<em>backtracking</em>) y verificar restricciones antes de redactar la salida final.
          </p>
        </div>
      </div>
    </div>

    <h2 id="sec-llms-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. Ventanas de contexto masivas frente a RAG Híbrido y GraphRAG
    </h2>
    <p>
      Con la llegada de ventanas de contexto de <strong>1 a 2 millones de tokens</strong> (equivalentes a docenas de libros o repositorios de software enteros en memoria activa), surgió una pregunta habitual en el equipo EdTech de SofIA: <em>"¿Ha muerto <GlossaryTerm term="RAG">RAG</GlossaryTerm>?"</em>. La evidencia de ingeniería en producción demuestra que no; ambos enfoques son complementarios:
    </p>

    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Criterio de arquitectura</th>
            <th>Contexto largo directo (In-Context / Context Caching)</th>
            <th>RAG Híbrido y GraphRAG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Volumen documental</strong></td>
            <td>Óptimo para conjuntos acotados (1 a 50 documentos extensos, un libro curricular o un código base mediano).</td>
            <td>Indispensable para bibliotecas institucionales de miles o millones de documentos dinámicos.</td>
          </tr>
          <tr>
            <td><strong>Latencia y costo por consulta</strong></td>
            <td>Alto si se reenvía todo el corpus en cada turno; eficiente solo cuando se utiliza <em>Context Caching</em> para documentos fijos.</td>
            <td>Baja latencia y costo reducido al inyectar únicamente los 5–15 fragmentos más relevantes tras el <em>Reranking</em>.</td>
          </tr>
          <tr>
            <td><strong>Comprensión relacional</strong></td>
            <td>Excelente atención cruzada sobre el documento completo cargado en memoria.</td>
            <td>Con <strong>GraphRAG</strong> (grafos de entidades + vectores), conecta hechos dispersos en miles de archivos distintos.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <RAGDiagram />

    <h2 id="sec-llms-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      4. Hiperparámetros de inferencia y control de presupuesto de pensamiento
    </h2>
    <p>
      Cuando SofIA configura el motor de IA para su plataforma educativa, ajusta tanto los parámetros clásicos de muestreo probabilístico como el nivel de razonamiento según la naturaleza pedagógica de la tarea:
    </p>

    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Parámetro</th>
            <th>Rango típico</th>
            <th>Efecto matemático en la distribución</th>
            <th>Recomendación de uso en producción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><GlossaryTerm term="Temperatura">Temperatura</GlossaryTerm></strong></td>
            <td className="font-mono text-xs">0.0 – 2.0</td>
            <td>Escala los logits antes de la función Softmax. Valores cercanos a 0 concentran la probabilidad en el token más verosímil.</td>
            <td><strong>0.0 – 0.2</strong> para extracción JSON, código y evaluación factual; <strong>0.7 – 0.9</strong> para lluvia de ideas y narrativa. (En modelos razonadores suele fijarse automáticamente).</td>
          </tr>
          <tr>
            <td><strong><GlossaryTerm term="Top-P">Top-P (Nucleus Sampling)</GlossaryTerm></strong></td>
            <td className="font-mono text-xs">0.1 – 1.0</td>
            <td>Recorta dinámicamente la cola de distribución, muestreando solo el subconjunto mínimo cuya probabilidad acumulada suma <em>P</em>.</td>
            <td>Mantener en <strong>0.9 – 0.95</strong> si se ajusta la temperatura; evita que el modelo seleccione palabras incoherentes de baja probabilidad.</td>
          </tr>
          <tr>
            <td><strong>Thinking Level / Budget</strong></td>
            <td className="font-mono text-xs">LOW / HIGH (o N tokens)</td>
            <td>Controla la cantidad de cómputo en tiempo de prueba asignado a la cadena de verificación previa a la respuesta.</td>
            <td>Usar nivel bajo para clasificación rápida de intenciones y nivel alto para diseño curricular complejo, matemáticas o depuración de código.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <CodeBlock
      language="typescript"
      code={`// Ejemplo 2026: Configuración de inferencia estructurada con @google/genai
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI();

const response = await ai.models.generateContent({
  model: 'gemini-3.8-flash',
  contents: 'Diseña una rúbrica analítica de 3 criterios para evaluar pensamiento crítico en 2° Medio.',
  config: {
    temperature: 0.2,
    responseMimeType: 'application/json',
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        objetivoCurricular: { type: Type.STRING },
        criterios: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              dimension: { type: Type.STRING },
              descriptorDestacado: { type: Type.STRING },
              descriptorEnDesarrollo: { type: Type.STRING }
            },
            required: ['dimension', 'descriptorDestacado', 'descriptorEnDesarrollo']
          }
        }
      },
      required: ['objetivoCurricular', 'criterios']
    }
  }
});`}
    />

    <h2 id="sec-llms-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      5. El ecosistema de modelos en 2026: multimodalidad nativa y pesos abiertos
    </h2>
    <p>
      A diferencia de las primeras generaciones de LLMs que acoplaban módulos separados para voz o visión mediante "parches", los modelos actuales son <strong>nativamente multimodales</strong>: entrenan un mismo espacio de representación sobre texto, audio, imagen y video desde el inicio. Esto permite que SofIA suba la grabación de una clase o la fotografía de un experimento de laboratorio y el modelo comprenda simultáneamente la entonación, los diagramas en la pizarra y las fórmulas escritas.
    </p>

    <ModelComparisonCarousel />

    <AuthorNote>
      En la arquitectura moderna de software e innovación educativa ya no existe "un único modelo para todo". La práctica estándar es el <strong>enrutamiento inteligente de modelos (Model Routing)</strong>: emplear modelos rápidos y económicos para tareas de triaje y formateo, reservar los modelos con alto presupuesto de razonamiento para problemas lógicos profundos, y ejecutar modelos pequeños (SLMs) localmente cuando la privacidad de los datos es innegociable.
    </AuthorNote>

    <QuizComponent
      question="¿Cuál es la diferencia fundamental que introdujeron los modelos de razonamiento con Test-Time Compute frente a los LLMs autorregresivos tradicionales?"
      options={[
        {
          label: 'Eliminaron por completo el uso de tokens y funcionan únicamente con bases de datos relacionales SQL.',
          isCorrect: false,
          explanation: 'Incorrecto: siguen utilizando arquitecturas basadas en tokens y atención.'
        },
        {
          label: 'Asignan cómputo adicional durante la inferencia para generar y verificar cadenas de pensamiento internas (entrenadas con RLVR) antes de producir la respuesta final.',
          isCorrect: true,
          explanation: '¡Exacto! El escalado en tiempo de inferencia permite descomponer problemas, explorar alternativas y corregir errores lógicos antes de entregar la salida al usuario.'
        },
        {
          label: 'Solo pueden ejecutarse con temperatura igual a 2.0 para maximizar la aleatoriedad.',
          isCorrect: false,
          explanation: 'Incorrecto: una temperatura de 2.0 degradaría la coherencia lógica del razonamiento.'
        }
      ]}
    />
  </div>
);
