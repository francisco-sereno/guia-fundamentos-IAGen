import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { CopyButton, AuthorNote } from '../components/Shared';

interface TechniqueItem {
  id: string;
  name: string;
  category: 'Básico' | 'Intermedio' | 'Avanzado' | 'Pedagógico' | 'Frontera 2026';
  bloom: string;
  purpose: string;
  template: string;
  sofiaCase: string;
}

const catalogItems: TechniqueItem[] = [
  {
    id: 'zero-shot',
    name: 'Zero-Shot Estructurado',
    category: 'Básico',
    bloom: 'Comprender / Aplicar',
    purpose: 'Ejecutar una tarea directa sin ejemplos previos apoyándose en instrucciones claras y rol definido.',
    template: `<role>Especialista en comunicación científica escolar</role>\n<task>Explica el concepto de ósmosis celular en 3 párrafos claros para alumnos de 14 años usando una analogía cotidiana.</task>`,
    sofiaCase: 'Generación rápida de analogías introductorias para iniciar una clase.'
  },
  {
    id: 'few-shot',
    name: 'Few-Shot con Calibración de Patrón',
    category: 'Básico',
    bloom: 'Aplicar',
    purpose: 'Condicionar el formato, tono y criterio de clasificación mediante 2 a 4 ejemplos canónicos.',
    template: `Clasifica la retroalimentación docente según su impacto formativo:\nEjemplo 1: "Mal trabajo, estudia más" -> [Descriptiva nula / Desmotivadora]\nEjemplo 2: "Tu hipótesis es clara, pero falta conectar los datos de la tabla 2 con la conclusión" -> [Accionable / Andamiaje específico]\nAnaliza ahora: "{texto_docente}" ->`,
    sofiaCase: 'Estandarizar el estilo de comentarios formativos entre varios profesores del departamento.'
  },
  {
    id: 'costar',
    name: 'Arquitectura CO-STAR',
    category: 'Intermedio',
    bloom: 'Analizar / Crear',
    purpose: 'Alinear Contexto, Objetivo, Estilo, Tono, Audiencia y Respuesta en una especificación reproducible.',
    template: `[C] Contexto: Secuencia didáctica de energías renovables en 1° Medio.\n[O] Objetivo: Crear un estudio de caso local sobre energía solar.\n[S] Estilo: Periodismo de datos riguroso.\n[T] Tono: Indagatorio y motivador.\n[A] Audiencia: Estudiantes de 15 años.\n[R] Respuesta: Documento con datos reales, 2 gráficos descritos y 3 desafíos de debate.`,
    sofiaCase: 'Diseño de estudios de caso contextualizados a la realidad geográfica de la escuela.'
  },
  {
    id: 'cot',
    name: 'Chain-of-Thought (Razonamiento explícito)',
    category: 'Intermedio',
    bloom: 'Analizar',
    purpose: 'Desglosar problemas lógicos, matemáticos o de diagnóstico multicapa paso a paso antes de emitir el veredicto.',
    template: `Analiza la siguiente respuesta errónea de un estudiante a un problema de estequiometría.\nPaso 1: Identifica qué operación realizó en cada línea.\nPaso 2: Localiza el paso exacto donde se produjo la confusión conceptual.\nPaso 3: Redacta una pista socrática breve para que él mismo detecte el fallo.`,
    sofiaCase: 'Diagnóstico preciso de errores procedimentales en física y química.'
  },
  {
    id: 'tot',
    name: 'Tree-of-Thoughts (Exploración de ramas)',
    category: 'Avanzado',
    bloom: 'Evaluar / Crear',
    purpose: 'Generar múltiples alternativas estratégicas en paralelo, evaluar su viabilidad con criterios explícitos y seleccionar la mejor.',
    template: `Propón 3 arquitecturas distintas de proyecto interdisciplinario (Biología + Programación) para un trimestre.\nPara cada rama, evalúa: (a) viabilidad técnica en aula, (b) carga de trabajo docente y (c) profundidad de aprendizaje.\nSelecciona la opción óptima y desarrolla su cronograma.`,
    sofiaCase: 'Planificación de proyectos de aprendizaje basado en problemas (ABP) con recursos limitados.'
  },
  {
    id: 'cove',
    name: 'Chain-of-Verification (CoVe)',
    category: 'Avanzado',
    bloom: 'Evaluar',
    purpose: 'Mitigar alucinaciones obligando al modelo a auditar sus propias afirmaciones fácticas antes de entregar la versión definitiva.',
    template: `1. Redacta un resumen técnico sobre la regulación de IA en educación (EU AI Act).\n2. Extrae una lista de todas las afirmaciones legales o fechas mencionadas en tu borrador.\n3. Verifica independientemente cada afirmación e identifica cualquier imprecisión.\n4. Escribe la versión final depurada.`,
    sofiaCase: 'Revisión de exactitud normativa y científica en guías de estudio.'
  },
  {
    id: 'socratic',
    name: 'Simulación Socrática Adaptativa',
    category: 'Pedagógico',
    bloom: 'Analizar / Evaluar',
    purpose: 'Configurar al modelo como un interlocutor que guía mediante preguntas graduadas sin entregar la solución resuelta.',
    template: `<system_role>Tutor socrático de pensamiento crítico</system_role>\n<rules>Formula una sola pregunta por turno. Si el alumno acierta, complejiza el escenario; si falla, ofrece una analogía más simple.</rules>`,
    sofiaCase: 'Entrenamiento autónomo de argumentación científica previo a un debate escolar.'
  },
  {
    id: 'rubric-judge',
    name: 'LLM-as-a-Judge con Rúbrica Analítica',
    category: 'Pedagógico',
    bloom: 'Evaluar',
    purpose: 'Auditar textos o artefactos frente a descriptores explícitos generando evidencia textual citada para el docente.',
    template: `<rubric>{criterios_json}</rubric>\n<submission>{ensayo_anonimizado}</submission>\nEvalúa el texto exclusivamente con base en la rúbrica. Para cada criterio, cita la frase exacta del ensayo que justifica el nivel sugerido para revisión de la profesora SofIA.`,
    sofiaCase: 'Pre-evaluación formativa asistida manteniendo siempre la calificación final en manos del docente.'
  },
  {
    id: 'context-eng',
    name: 'Ingeniería de Contexto con Esquema Tipado',
    category: 'Frontera 2026',
    bloom: 'Crear',
    purpose: 'Combinar delimitadores XML de entrada con validación estricta JSON Schema en la salida para integraciones de software.',
    template: `<context_documents>{fragmentos_rag_verificados}</context_documents>\n<instructions>Extrae las competencias clave mencionadas únicamente en los documentos adjuntos y devuelve un objeto JSON validado contra responseSchema.</instructions>`,
    sofiaCase: 'Automatización de matrices de trazabilidad curricular conectadas a la plataforma EdTech.'
  },
  {
    id: 'ttc-budget',
    name: 'Prompting para Modelos Razonadores (Test-Time Compute)',
    category: 'Frontera 2026',
    bloom: 'Evaluar / Crear',
    purpose: 'Definir el objetivo final y las restricciones duras dejando que el modelo gestione autónomamente su cadena de pensamiento verificable (thinkingBudget).',
    template: `<goal>Optimizar el horario trimestral de 12 laboratorios escolares</goal>\n<hard_constraints>Ningún grupo puede tener dos bloques seguidos sin descanso; los laboratorios de química requieren 30 min de ventilación entre sesiones; respetar disponibilidad de 8 docentes.</hard_constraints>\n<deliverable>Tabla de asignación libre de conflictos + prueba de cumplimiento de cada restricción.</deliverable>`,
    sofiaCase: 'Resolución de problemas combinatorios y de planificación institucional compleja.'
  },
  {
    id: 'mcp-tool',
    name: 'Especificación de Herramientas MCP (Model Context Protocol)',
    category: 'Frontera 2026',
    bloom: 'Aplicar / Crear',
    purpose: 'Describir con precisión semántica cuándo y con qué parámetros un agente debe invocar un servidor MCP externo.',
    template: `Tienes acceso al servidor MCP 'biblioteca_curricular'.\nRegla de invocación: Siempre que el docente consulte sobre objetivos de aprendizaje oficiales, invoca primero la herramienta 'buscar_oa_vigente' pasando asignatura y nivel antes de redactar cualquier sugerencia.`,
    sofiaCase: 'Conexión segura del asistente de SofIA con la base de datos oficial del Ministerio de Educación.'
  },
  {
    id: 'graphrag-query',
    name: 'Síntesis Relacional con GraphRAG',
    category: 'Frontera 2026',
    bloom: 'Analizar / Evaluar',
    purpose: 'Responder preguntas globales que requieren conectar entidades y relaciones distribuidas en múltiples documentos.',
    template: `<knowledge_graph_nodes>{nodos_y_aristas_recuperados}</knowledge_graph_nodes>\n<text_chunks>{evidencia_documental}</text_chunks>\n<task>Traza cómo se conectan los prerrequisitos de álgebra de 1° Medio con las dificultades observadas en cinemática de 2° Medio según las actas del departamento.</task>`,
    sofiaCase: 'Detección de brechas curriculares longitudinales entre distintos años académicos.'
  }
];

export const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Todas', 'Básico', 'Intermedio', 'Avanzado', 'Pedagógico', 'Frontera 2026'];

  const filteredItems = catalogItems.filter((item) => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sofiaCase.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <h2 id="sec-catalogo-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
        Explorador interactivo del catálogo de técnicas (Edición 2026)
      </h2>
      <p>
        Este catálogo reúne las técnicas fundamentales de ingeniería de prompts junto con los patrones de <strong>Ingeniería de Contexto</strong>, <strong>Test-Time Compute</strong> y <strong>protocolos agénticos (MCP / GraphRAG)</strong> consolidados en 2026. Puedes filtrar por nivel de complejidad o buscar por caso de uso y copiar directamente las plantillas para tus proyectos.
      </p>

      {/* Interactive Filter & Search Controls */}
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar técnica o caso..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <span>Mostrando {filteredItems.length} de {catalogItems.length} arquitecturas documentadas</span>
          <span>Alineado con Taxonomía de Bloom y Marcos UNESCO</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
                {item.category} · Bloom: {item.bloom}
              </div>
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0 mb-2">
                {item.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {item.purpose}
              </p>

              <div className="rounded-lg bg-slate-950 text-slate-100 p-3 mb-3 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Plantilla reutilizable</span>
                  <CopyButton text={item.template} />
                </div>
                <pre className="text-[11px] font-mono text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto m-0">
                  {item.template}
                </pre>
              </div>
            </div>

            <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <strong className="font-semibold text-slate-700 dark:text-slate-200">Aplicación SofIA: </strong>
              {item.sofiaCase}
            </div>
          </div>
        ))}
      </div>

      <h2 id="sec-catalogo-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
        1. Técnicas fundacionales y de estructuración (Básico e Intermedio)
      </h2>
      <p>
        Las técnicas de nivel básico e intermedio (<strong>Zero-Shot estructurado</strong>, <strong>Few-Shot</strong> y <strong>CO-STAR</strong>) constituyen el 80% de las operaciones diarias de un profesional. Su objetivo es eliminar la ambigüedad semántica inicial y garantizar que el formato de entrega sea inmediatamente utilizable sin necesidad de múltiples rondas de corrección manual.
      </p>

      <h2 id="sec-catalogo-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
        2. Técnicas de razonamiento profundo y verificación (Avanzado)
      </h2>
      <p>
        Cuando la tarea exige resolver contradicciones, auditar normas o explorar alternativas de diseño, técnicas como <strong>Tree-of-Thoughts (ToT)</strong> y <strong>Chain-of-Verification (CoVe)</strong> obligan al sistema a contrastar múltiples hipótesis y auditar sus propias afirmaciones fácticas antes de consolidar la respuesta.
      </p>

      <h2 id="sec-catalogo-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
        3. Patrones pedagógicos y de Frontera 2026 (Contexto, MCP y Razonadores)
      </h2>
      <p>
        Una novedad clave en la práctica de 2026 es saber diferenciar cómo redactar prompts para un <strong>modelo conversacional rápido</strong> frente a un <strong>modelo razonador con Test-Time Compute</strong>:
      </p>
      <ul>
        <li><strong>En modelos estándar rápidos:</strong> Conviene detallar paso a paso el procedimiento que debe seguir el modelo (<em>Chain-of-Thought explícito</em>) y proporcionar ejemplos Few-Shot.</li>
        <li><strong>En modelos razonadores (Serie o, Gemini con Thinking High, DeepSeek-R1, Claude Extended Thinking):</strong> Es preferible especificar con máxima precisión el <strong>objetivo final, el contexto documental y las restricciones duras</strong>, evitando imponer pasos procedimentales rígidos que interfieran con su búsqueda interna de soluciones.</li>
      </ul>

      <h2 id="sec-catalogo-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
        4. Matriz de decisión rápida por nivel cognitivo (Taxonomía de Bloom)
      </h2>
      <div className="overflow-x-auto my-6">
        <table>
          <thead>
            <tr>
              <th>Nivel cognitivo (Bloom)</th>
              <th>Técnica recomendada del catálogo</th>
              <th>Riesgo a vigilar</th>
              <th>Control de calidad humano</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Recordar y Comprender</strong></td>
              <td>Zero-Shot estructurado + Analogías graduadas</td>
              <td>Simplificación excesiva que induzca errores conceptuales</td>
              <td>Validar que la metáfora no distorsione el principio científico</td>
            </tr>
            <tr>
              <td><strong>Aplicar y Analizar</strong></td>
              <td>Few-Shot + Chain-of-Thought + GraphRAG</td>
              <td>Inferencia causal falsa entre variables no relacionadas</td>
              <td>Exigir citación explícita de los fragmentos de origen</td>
            </tr>
            <tr>
              <td><strong>Evaluar y Crear</strong></td>
              <td>CO-STAR + Tree-of-Thoughts + Chain-of-Verification</td>
              <td>Homogeneización estilística o sesgo de complacencia (sycophancy)</td>
              <td>Iteración crítica liderada por el criterio del experto humano</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AuthorNote>
        Guarda este catálogo como referencia viva de trabajo. El verdadero dominio técnico consiste en combinar estas piezas como bloques modulares: por ejemplo, un flujo que recupera evidencia con <strong>GraphRAG</strong>, la empaqueta mediante <strong>Ingeniería de Contexto XML</strong> y la audita con <strong>Chain-of-Verification</strong>.
      </AuthorNote>
    </div>
  );
};
