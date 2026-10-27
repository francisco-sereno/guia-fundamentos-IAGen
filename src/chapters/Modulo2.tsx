import React from 'react';
import { 
  Terminal, Layers, CheckCircle, AlertTriangle, Sparkles, Sliders, FileCode, Compass
} from 'lucide-react';
import { GlossaryTerm, InfoCard, QuizComponent, CodeBlock, AuthorNote } from '../components/Shared';
import { 
  InteractivePromptPlayground, PROSEPARTEInteractiveTable, PromptImpactCharts 
} from '../components/InteractiveComponents';

export const Modulo2 = () => (
  <div className="space-y-8">
    <h2 id="sec-modulo2-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      Propósito y evolución hacia la ingeniería de contexto
    </h2>
    <p>
      Entre 2022 y 2024, la interacción con modelos generativos se popularizó bajo el nombre de <GlossaryTerm term="Prompt Engineering">Ingeniería de Prompts</GlossaryTerm>, a menudo reducida a "trucos de redacción" o frases mágicas. En 2026, la disciplina ha madurado hacia la <strong><GlossaryTerm term="Ingeniería de contexto">Ingeniería de Contexto (Context Engineering)</GlossaryTerm></strong>: el diseño sistemático de toda la información, esquemas de validación, ejemplos demostrativos, delimitadores semánticos y herramientas que condicionan el espacio de probabilidad del modelo.
    </p>

    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
        Aplicación en el caso de estudio · SofIA
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
        Cuando SofIA pasó de hacer consultas sueltas en un chat a diseñar plantillas institucionales para 45 docentes de su red escolar, descubrió que los prompts ambiguos producían actividades superficiales. Al aplicar arquitectura de contexto con marcos como <strong>CO-STAR</strong>, <strong>PROSE</strong> y etiquetas XML, logró que las salidas cumplieran sistemáticamente con la Taxonomía de Bloom y los criterios de evaluación inclusiva.
      </p>
    </div>

    <h2 id="sec-modulo2-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. ¿Por qué la estructura del contexto transforma la respuesta?
    </h2>
    <p>
      Un <GlossaryTerm term="Prompt">prompt</GlossaryTerm> no es una pregunta a un oráculo humano; es un programa en lenguaje natural y estructurado que condiciona las matrices de atención del <GlossaryTerm term="Transformer">Transformer</GlossaryTerm>. Cada restricción explícita, rol experto y delimitador reduce la entropía de la distribución de salida y dirige al modelo hacia el subespacio latente de mayor rigor técnico.
    </p>

    <PromptImpactCharts />

    <h2 id="sec-modulo2-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. Anatomía de una especificación de contexto de alta precisión
    </h2>
    <p>
      Una especificación de contexto robusta en entornos profesionales se compone de cinco bloques modulares claramente delimitados:
    </p>
    <ul>
      <li><strong>1. Instrucción de sistema y rol epistémico (<code className="font-mono text-xs">&lt;system_role&gt;</code>):</strong> Define la perspectiva disciplinar, el nivel de rigor y las normas éticas innegociables que rigen la sesión.</li>
      <li><strong>2. Datos y contexto documental (<code className="font-mono text-xs">&lt;context&gt;</code>):</strong> Información de referencia verificada (fragmentos <GlossaryTerm term="RAG">RAG</GlossaryTerm>, perfil del grupo, rúbrica institucional) sobre la cual debe operar el modelo.</li>
      <li><strong>3. Ejemplos de calibración (<code className="font-mono text-xs">&lt;examples&gt;</code> / <GlossaryTerm term="Few-Shot">Few-Shot</GlossaryTerm>):</strong> Pares de entrada/salida ideales que enseñan en contexto el estilo, profundidad y formato exactos.</li>
      <li><strong>4. Tarea y pauta de razonamiento (<code className="font-mono text-xs">&lt;task&gt;</code>):</strong> El verbo de acción principal junto con los criterios de verificación paso a paso.</li>
      <li><strong>5. Esquema de salida y restricciones negativas (<code className="font-mono text-xs">&lt;output_schema&gt;</code>):</strong> Estructura determinista (JSON Schema, tabla Markdown) y lo que el modelo tiene prohibido hacer.</li>
    </ul>

    <InteractivePromptPlayground />

    <h2 id="sec-modulo2-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. Marcos de diseño estructurado: CO-STAR, PROSE y PARTE
    </h2>
    <p>
      Para estandarizar la calidad dentro de una organización o equipo docente, resulta fundamental adoptar marcos mnemotécnicos compartidos. En la siguiente matriz interactiva puedes explorar cómo se articulan los tres marcos más efectivos en 2026:
    </p>

    <PROSEPARTEInteractiveTable />

    <h2 id="sec-modulo2-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      4. La plantilla de Simulación Socrática e interactiva
    </h2>
    <p>
      Uno de los usos pedagógicos y formativos más potentes de los LLMs no es pedirles que redacten un ensayo por el estudiante, sino invertir los roles mediante una <strong>Simulación Socrática</strong>: configurar al modelo para que actúe como un tutor que formula preguntas progresivas, evalúa la respuesta del aprendiz y ofrece pistas graduadas sin revelar nunca la solución final de inmediato.
    </p>

    <CodeBlock
      language="xml"
      code={`<system_role>
Eres un tutor socrático experto en Física de 2° Medio. Tu objetivo es guiar al estudiante para que descubra por sí mismo por qué los objetos caen con la misma aceleración en el vacío independientemente de su masa.
</system_role>

<pedagogical_rules>
1. NUNCA entregues la respuesta directa ni resuelvas el problema por el alumno.
2. Haz UNA sola pregunta abierta por turno para no saturar su memoria de trabajo.
3. Si el estudiante comete un error conceptual, plantea un contraejemplo cotidiano (ej. una hoja de papel extendida vs. hecha una bola compacta) para provocar conflicto cognitivo.
4. Valida sus aciertos parciales antes de subir al siguiente escalón de la Taxonomía de Bloom.
</pedagogical_rules>

<initial_trigger>
Inicia la sesión saludando al estudiante y planteando el experimento mental de Galileo en la Torre de Pisa.
</initial_trigger>`}
    />

    <h2 id="sec-modulo2-5" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      5. Aprendizaje en contexto: Zero-Shot, One-Shot y Few-Shot
    </h2>
    <p>
      La capacidad de los modelos Transformer para adaptar su comportamiento en tiempo de ejecución sin modificar los pesos de su red neuronal se denomina <em>In-Context Learning</em>:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <InfoCard title="Zero-Shot Prompting" icon={Terminal} color="blue">
        <strong>0 ejemplos previos.</strong> Se entrega únicamente la instrucción estructurada. En 2026 es el modo recomendado cuando se usan <strong>modelos de razonamiento</strong>, ya que demasiados ejemplos rígidos pueden limitar su cadena de pensamiento interna.
      </InfoCard>
      <InfoCard title="One-Shot Prompting" icon={FileCode} color="emerald">
        <strong>1 ejemplo canónico.</strong> Incluye una demostración exacta del formato deseado. Ideal para alinear plantillas de documentos institucionales, correos o estructuras de rúbricas.
      </InfoCard>
      <InfoCard title="Few-Shot Prompting" icon={Layers} color="purple">
        <strong>3 a 5 ejemplos diversos.</strong> Indispensable cuando necesitamos que un modelo rápido clasifique casos ambiguos, adopte un estilo literario muy específico o extraiga entidades no estándar.
      </InfoCard>
    </div>

    <h2 id="sec-modulo2-6" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      6. Elicitación de razonamiento: Chain-of-Thought, Tree-of-Thoughts y verificación
    </h2>
    <p>
      Para tareas que requieren inferencia lógica, cálculo o planificación multicapa, existen tres estrategias principales de elicitación de razonamiento:
    </p>
    <ul>
      <li><strong><GlossaryTerm term="Chain-of-Thought">Cadena de Pensamiento (Chain-of-Thought / CoT)</GlossaryTerm>:</strong> Instruir explícitamente al modelo para que desglose sus premisas intermedias antes de concluir. En modelos estándar aumenta drásticamente la exactitud al distribuir el cómputo a lo largo de más tokens generados.</li>
      <li><strong>Árbol de Pensamientos (Tree-of-Thoughts / ToT):</strong> Solicitar al modelo que proponga 3 rutas o hipótesis distintas para resolver un problema complejo, evalúe los pros y contras de cada rama, descarte las inviables y desarrolle la óptima.</li>
      <li><strong>Chain-of-Verification (CoVe) y Auto-crítica:</strong> Dividir la generación en tres fases: (1) generar un borrador inicial, (2) formular preguntas de auditoría factual sobre las afirmaciones del borrador y (3) reescribir la versión final corrigiendo cualquier inconsistencia detectada.</li>
    </ul>

    <h2 id="sec-modulo2-7" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      7. Delimitadores XML y salidas estructuradas deterministas (JSON Schema)
    </h2>
    <p>
      Cuando los prompts forman parte de una aplicación real (como el evaluador de competencias que probaste en el Módulo 1), el texto libre es insuficiente. La ingeniería de contexto moderna aplica dos garantías técnicas:
    </p>
    <ol>
      <li><strong>Encapsulamiento con etiquetas XML:</strong> Separar los datos proporcionados por el usuario mediante etiquetas como <code className="font-mono text-xs">&lt;ensayo_estudiante&gt;...&lt;/ensayo_estudiante&gt;</code> evita que el modelo confunda el contenido analizado con nuevas órdenes (mitigando además ataques básicos de <GlossaryTerm term="Prompt Injection">Prompt Injection</GlossaryTerm>).</li>
      <li><strong>Decodificación restringida por esquema (<code className="font-mono text-xs">responseSchema</code>):</strong> Los SDKs modernos fuerzan a nivel de token que la salida cumpla estrictamente un esquema JSON tipado, eliminando errores de sintaxis en integraciones de software.</li>
    </ol>

    <h2 id="sec-modulo2-8" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      8. Evaluación sistemática de prompts (PromptOps y CI/CD)
    </h2>
    <p>
      En 2026, ninguna organización seria despliega un prompt crítico probándolo "a ojo" dos o tres veces. La disciplina de <strong>PromptOps / LLMOps</strong> aplica prácticas de ingeniería de software mediante herramientas como <em>Promptfoo</em>, <em>LangSmith</em> o <em>Vertex AI Evaluation</em>:
    </p>
    <div className="my-6 p-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
        Flujo de Integración Continua para Ingeniería de Contexto
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
          <div className="font-bold text-slate-900 dark:text-white mb-1">01. Golden Dataset (Conjunto dorado)</div>
          <p className="text-slate-600 dark:text-slate-300 m-0">
            Reunir entre 30 y 100 casos reales representativos (incluyendo casos borde y entradas ambiguas) con sus criterios de respuesta esperada.
          </p>
        </div>
        <div className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
          <div className="font-bold text-slate-900 dark:text-white mb-1">02. Aserciones y LLM-as-a-Judge</div>
          <p className="text-slate-600 dark:text-slate-300 m-0">
            Evaluar automáticamente cada respuesta con validadores deterministas (JSON válido, longitud, ausencia de PII) y un modelo evaluador con rúbrica estricta.
          </p>
        </div>
        <div className="p-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
          <div className="font-bold text-slate-900 dark:text-white mb-1">03. Prueba de regresión ante cambios</div>
          <p className="text-slate-600 dark:text-slate-300 m-0">
            Cada vez que se edita el prompt o se actualiza la versión del modelo base, se ejecuta la batería de pruebas para verificar que la precisión no retroceda.
          </p>
        </div>
      </div>
    </div>

    <h2 id="sec-modulo2-9" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      9. Antipatrones frecuentes y cómo corregirlos
    </h2>
    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Antipatrón común</th>
            <th>Por qué degrada el resultado</th>
            <th>Solución desde la Ingeniería de Contexto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sobrecarga de instrucciones contradictorias</strong></td>
            <td>Pedir "sé extremadamente breve pero explica todos los detalles históricos y técnicos" diluye los pesos de atención.</td>
            <td>Jerarquizar prioridades explícitamente y definir límites cuantitativos (ej. "máximo 150 palabras por sección").</td>
          </tr>
          <tr>
            <td><strong>Instrucciones solo en negativo ("No pongas...")</strong></td>
            <td>Al igual que en psicología cognitiva ("no pienses en un elefante rosa"), mencionar reiteradamente un término activa sus asociaciones semánticas.</td>
            <td>Formular restricciones afirmativas ("Utiliza exclusivamente lenguaje llano comprensible para alumnos de 14 años").</td>
          </tr>
          <tr>
            <td><strong>Contaminación de contexto largo</strong></td>
            <td>Mantener una misma conversación de 40 turnos mezclando temas distintos arrastra errores y sesgos de turnos previos.</td>
            <td>Aplicar higiene de contexto: iniciar sesiones limpias por tarea o sintetizar el estado validado en un bloque resumen.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-modulo2-10" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      10. Caso práctico completo: transformación de un prompt de SofIA
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-4 rounded-xl bg-rose-50/40 dark:bg-rose-950/15 border border-rose-200 dark:border-rose-900/50">
        <div className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
          ✕ Antes · Prompt ingenuo no estructurado
        </div>
        <p className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded border border-rose-100 dark:border-rose-900/40 mb-2">
          "Hazme una prueba sobre la célula para mis alumnos de secundaria."
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
          <strong>Resultado:</strong> 10 preguntas genéricas de memorización pura, sin alineación curricular, sin distractores diagnosticables ni adaptación de nivel.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/15 border border-emerald-200 dark:border-emerald-900/50">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
          ✓ Después · Especificación CO-STAR + XML
        </div>
        <p className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded border border-emerald-100 dark:border-emerald-900/40 mb-2">
          "&lt;role&gt;Especialista en evaluación de Biología&lt;/role&gt; &lt;context&gt;1° Medio, transporte celular por membrana&lt;/context&gt; &lt;task&gt;Diseña 4 ítems de opción múltiple nivel 'Aplicar/Analizar' (Bloom) donde cada distractor corresponda a un error conceptual frecuente documentado&lt;/task&gt; &lt;output&gt;Tabla con ítem, clave y diagnóstico por distractor&lt;/output&gt;"
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
          <strong>Resultado:</strong> Instrumento diagnóstico accionable que permite a SofIA identificar exactamente por qué falló cada estudiante.
        </p>
      </div>
    </div>

    <h2 id="sec-modulo2-11" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      11. Síntesis y autoevaluación del módulo
    </h2>
    <AuthorNote>
      La evolución desde el <em>Prompt Engineering</em> artesanal hacia la <strong>Ingeniería de Contexto</strong> nos enseña que la calidad de la salida de un modelo nunca supera la claridad epistemológica de quien diseña su contexto. En el siguiente capítulo pondremos a tu disposición el catálogo interactivo completo de técnicas para tus proyectos.
    </AuthorNote>

    <QuizComponent
      question="¿Cuál es la ventaja principal de encapsular los textos proporcionados por usuarios externos dentro de etiquetas XML (ej. <texto_alumno>...</texto_alumno>) en una plantilla de ingeniería de contexto?"
      options={[
        {
          label: 'Hace que el modelo consuma cero tokens de entrada al ignorar todo lo que está entre etiquetas.',
          isCorrect: false,
          explanation: 'Incorrecto: el contenido dentro de etiquetas XML sí se tokeniza y procesa.'
        },
        {
          label: 'Delimita sin ambigüedad dónde terminan las instrucciones del sistema y dónde comienzan los datos a analizar, mejorando la precisión y mitigando inyecciones de prompt.',
          isCorrect: true,
          explanation: '¡Correcto! Los delimitadores semánticos XML estructuran la atención del modelo y separan el plano de control (instrucciones) del plano de datos.'
        },
        {
          label: 'Convierte automáticamente cualquier modelo pequeño en una base de datos relacional.',
          isCorrect: false,
          explanation: 'Incorrecto: XML es un formato de marcado semántico para organizar el contexto de entrada/salida.'
        }
      ]}
    />
  </div>
);
