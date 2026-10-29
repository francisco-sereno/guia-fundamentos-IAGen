import React, { useState } from 'react';
import { 
  Activity, Eye, Zap, Globe
} from 'lucide-react';
import { CopyButton } from './Shared';

// 1. PEAS Interactive Explorer (Modulo 1) — Two-Zone Sandbox
export const PEASInteractiveExplorer = () => {
  const [selectedSystem, setSelectedSystem] = useState<'edtech' | 'medical' | 'autonomous' | 'mcp_agent'>('edtech');

  const systems = {
    edtech: {
      name: 'Tutor adaptativo EdTech (Caso SofIA)',
      category: 'Educación digital · 2026',
      p: ['Precisión diagnóstica de brechas', 'Retención conceptual a 30 días', 'Alineación curricular (Bloom / UNESCO)', 'Cero filtración de datos estudiantiles'],
      e: ['Plataforma LMS escolar', 'Estudiantes de secundaria diversos', 'Conectividad variable en aula', 'Marco normativo de protección de menores'],
      a: ['Generador de pistas socráticas', 'Ajuste dinámico de dificultad', 'Alertas tempranas para el docente', 'Retroalimentación formativa estructurada'],
      s: ['Historial de respuestas y latencia', 'Rúbricas de evaluación', 'Consultas en lenguaje natural', 'Estado de avance por unidad']
    },
    mcp_agent: {
      name: 'Agente investigador con MCP',
      category: 'Productividad agéntica · 2026',
      p: ['Fidelidad factual (Grounding > 98%)', 'Costo de tokens optimizado', 'Respeto estricto de permisos OAuth 2.1', 'Latencia de ejecución < 12s'],
      e: ['Servidores MCP locales y remotos', 'Repositorios Git y bases SQL', 'Políticas de seguridad corporativa', 'APIs externas con límites de tasa'],
      a: ['Invocación de herramientas vía JSON-RPC', 'Síntesis de informes verificados', 'Solicitud de confirmación humana (HITL)', 'Actualización de tickets'],
      s: ['Esquemas de recursos MCP', 'Resultados de consultas vectoriales/grafo', 'Logs de errores de ejecución', 'Instrucciones del usuario']
    },
    medical: {
      name: 'Asistente de triaje clínico multimodal',
      category: 'Salud de alto riesgo (EU AI Act)',
      p: ['Sensibilidad en detección de urgencias', 'Tasa de falsos negativos cercana a 0%', 'Explicabilidad clínica trazable', 'Cumplimiento HIPAA / GDPR'],
      e: ['Servicio de urgencias hospitalario', 'Historiales clínicos electrónicos (EHR)', 'Personal médico bajo alta presión', 'Pacientes con síntomas ambiguos'],
      a: ['Sugerencia de nivel de prioridad', 'Resumen estructurado de antecedentes', 'Alerta de interacciones farmacológicas', 'Derivación a especialista'],
      s: ['Signos vitales en tiempo real', 'Notas de enfermería y laboratorio', 'Imágenes diagnósticas previas', 'Protocolos clínicos vigentes']
    },
    autonomous: {
      name: 'Vehículo autónomo con World Models',
      category: 'Robótica física · Edge AI',
      p: ['Seguridad vial absoluta', 'Confort de marcha', 'Eficiencia energética de ruta', 'Cumplimiento de normas de tránsito'],
      e: ['Tráfico urbano denso e impredecible', 'Condiciones climáticas adversas', 'Peatones y ciclistas', 'Infraestructura vial cambiante'],
      a: ['Dirección electrónica (Steer-by-wire)', 'Frenado regenerativo e hidráulico', 'Aceleración y señalización luminosa', 'Replanificación de trayectoria'],
      s: ['Cámaras 360° y LiDAR estado sólido', 'Radar milimétrico y ultrasonido', 'Telemetría inercial (IMU) y GPS RTK', 'Predicción espacial JEPA en dispositivo']
    }
  };

  const current = systems[selectedSystem];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/60 dark:bg-slate-900/60">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Arquitectura de agentes · Marco PEAS
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Explorador interactivo de agentes racionales
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5 bg-slate-200/70 dark:bg-slate-800 p-1 rounded-lg">
          {(Object.keys(systems) as Array<keyof typeof systems>).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedSystem(key)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedSystem === key
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {key === 'edtech' ? 'EdTech (SofIA)' : key === 'mcp_agent' ? 'Agente MCP' : key === 'medical' ? 'Clínico' : 'Robótica'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-baseline justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
          <span className="text-sm font-semibold text-slate-900 dark:text-white">{current.name}</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{current.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm mb-2.5">
              <Activity className="w-4 h-4 shrink-0" />
              <span>Performance (Medida de rendimiento)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {current.p.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-semibold text-sm mb-2.5">
              <Globe className="w-4 h-4 shrink-0" />
              <span>Environment (Entorno operativo)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {current.e.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono text-sky-600 dark:text-sky-400">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm mb-2.5">
              <Zap className="w-4 h-4 shrink-0" />
              <span>Actuators (Actuadores y salidas)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {current.a.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono text-amber-600 dark:text-amber-400">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-2.5">
              <Eye className="w-4 h-4 shrink-0" />
              <span>Sensors (Sensores y entradas de contexto)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {current.s.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Interactive Prompt & Context Engineering Playground (Modulo 2)
export const InteractivePromptPlayground = () => {
  const [role, setRole] = useState(true);
  const [context, setContext] = useState(true);
  const [xmlTags, setXmlTags] = useState(true);
  const [reasoningMode, setReasoningMode] = useState(true);
  const [format, setFormat] = useState(true);

  const buildPrompt = () => {
    let parts: string[] = [];
    if (role) {
      parts.push(xmlTags 
        ? `<system_role>\nActúa como un diseñador instruccional senior especializado en neuroeducación y evaluación formativa para secundaria.\n</system_role>`
        : `Actúa como un diseñador instruccional senior especializado en educación secundaria.`);
    }
    if (context) {
      parts.push(xmlTags
        ? `<context>\nCurso: 2° Medio (15-16 años). Tema: Cambio climático y ciclo del carbono.\nDiagnóstico: El 40% del grupo confunde efecto invernadero natural con calentamiento global antropogénico.\n</context>`
        : `Contexto: Curso de 15-16 años viendo cambio climático. Muchos confunden efecto invernadero con calentamiento global.`);
    }
    parts.push(xmlTags
      ? `<task>\nDiseña una secuencia diagnóstica de 3 preguntas socráticas para desmontar esta preconcepción errónea sin dar la respuesta directamente.\n</task>`
      : `Diseña 3 preguntas para ayudarles a entender la diferencia.`);
    
    if (reasoningMode) {
      parts.push(xmlTags
        ? `<thinking_instructions>\nAntes de redactar las preguntas finales, analiza paso a paso qué obstáculo epistemológico enfrenta el estudiante y verifica que cada pregunta active el nivel "Analizar" de la Taxonomía de Bloom.\n</thinking_instructions>`
        : `Piensa paso a paso en la dificultad de los alumnos antes de responder.`);
    }
    if (format) {
      parts.push(xmlTags
        ? `<output_schema>\nDevuelve una tabla Markdown con columnas: [Pregunta socrática | Respuesta esperada del alumno | Pista de andamiaje si falla].\n</output_schema>`
        : `Entrega el resultado en una tabla con la pregunta, respuesta esperada y una pista.`);
    }
    return parts.join('\n\n');
  };

  const score = [role, context, xmlTags, reasoningMode, format].filter(Boolean).length * 20;

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/60 dark:bg-slate-900/60">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Laboratorio en vivo · Ingeniería de contexto 2026
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Constructor de arquitectura de prompt estructurado
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Robustez estructural:</span>
          <span className={`text-sm font-mono font-bold tabular-nums ${
            score >= 80 ? 'text-emerald-600 dark:text-emerald-400' : score >= 60 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'
          }`}>
            {score}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 p-5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50/30 dark:bg-slate-900/30">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Activa o desactiva las capas de ingeniería de contexto para observar cómo evoluciona la especificación técnica enviada al modelo:
          </p>

          {[
            { id: 'role', label: 'Rol experto y perfil epistémico', state: role, setter: setRole, desc: 'Ancla el registro técnico y marco pedagógico' },
            { id: 'context', label: 'Contexto situacional y diagnóstico', state: context, setter: setContext, desc: 'Delimita la audiencia y la brecha de aprendizaje' },
            { id: 'xml', label: 'Delimitadores semánticos XML', state: xmlTags, setter: setXmlTags, desc: 'Separa instrucciones de datos sin ambigüedad' },
            { id: 'cot', label: 'Pauta de razonamiento (Test-Time Compute)', state: reasoningMode, setter: setReasoningMode, desc: 'Exige verificación pedagógica previa a la salida' },
            { id: 'format', label: 'Esquema determinista de salida', state: format, setter: setFormat, desc: 'Fuerza estructura tabular accionable' },
          ].map((item) => (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                item.state
                  ? 'bg-white dark:bg-slate-800/80 border-sky-500/40 dark:border-sky-500/40'
                  : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-75'
              }`}
            >
              <input
                type="checkbox"
                checked={item.state}
                onChange={() => item.setter(!item.state)}
                className="mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">{item.label}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="lg:col-span-7 p-5 flex flex-col justify-between bg-slate-950 text-slate-100">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-xs font-mono text-slate-400">PROMPT COMPILADO · UTF-8</span>
              <CopyButton text={buildPrompt()} />
            </div>
            <pre className="text-xs font-mono leading-relaxed text-slate-200 whitespace-pre-wrap overflow-x-auto max-h-80">
              {buildPrompt()}
            </pre>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>
              {score === 100
                ? '✓ Especificación de grado de producción (Context Engineering)'
                : score >= 60
                ? '△ Prompt funcional pero vulnerable a deriva de formato'
                : '✕ Prompt ambiguo: alta probabilidad de respuesta genérica'}
            </span>
            <span className="tabular-nums">~{Math.round(buildPrompt().length / 4)} tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. RAG & GraphRAG Interactive Diagram (LLMs / Agentes)
export const RAGDiagram = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '1. Ingesta, fragmentación semántica y grafo',
      metric: 'Chunking + Entidades',
      desc: 'Los documentos curriculares, PDFs y bases de datos de SofIA se dividen en fragmentos coherentes. En arquitecturas 2026 (GraphRAG), además de vectores densos se extraen grafos de entidades y relaciones para responder preguntas globales.',
      detail: 'Vector DB (Embeddings) + Grafo de Conocimiento + Índices BM25 léxicos.'
    },
    {
      title: '2. Búsqueda híbrida y Reranking neuronal',
      metric: 'Top-K → Cross-Encoder',
      desc: 'Ante una consulta del usuario, el sistema ejecuta en paralelo búsqueda semántica (vectores) y léxica exacta (BM25). Un modelo Reranker reordena los fragmentos según relevancia real y descarta ruido antes de consumir ventana de contexto.',
      detail: 'Reducción del 70% en alucinaciones por distracción de contexto medio.'
    },
    {
      title: '3. Síntesis anclada con citación verificable',
      metric: 'Grounding estricto',
      desc: 'El LLM recibe la pregunta junto con los fragmentos verificados dentro de etiquetas XML y genera una respuesta que cita explícitamente la fuente y página de cada afirmación, absteniéndose si la evidencia no figura en el contexto.',
      detail: 'Trazabilidad completa auditable por el docente o supervisor.'
    }
  ];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Arquitectura de recuperación · RAG Híbrido y GraphRAG
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Flujo de anclaje factual (Grounding) en sistemas de producción
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Selecciona cada fase para inspeccionar
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`text-left p-4 rounded-lg border transition-all cursor-pointer ${
              activeStep === index
                ? 'bg-sky-50/70 dark:bg-sky-950/30 border-sky-500 dark:border-sky-500'
                : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
              {step.metric}
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {step.title}
            </div>
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
          {steps[activeStep].desc}
        </p>
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
          Especificación técnica: {steps[activeStep].detail}
        </div>
      </div>
    </div>
  );
};

// 4. Ethics & EU AI Act Spectrum Matrix (Etica)
export const EticaSpectrumMatrix = () => {
  const [selectedLevel, setSelectedLevel] = useState<'unacceptable' | 'high' | 'limited' | 'minimal'>('high');

  const levels = {
    unacceptable: {
      title: 'Riesgo inaceptable (Prohibido)',
      norm: 'EU AI Act Art. 5 · UNESCO Principio de No Daño',
      color: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-500',
      examples: [
        'Reconocimiento emocional biométrico en aulas o centros de trabajo',
        'Puntuación social (Social Scoring) de ciudadanos o estudiantes',
        'Manipulación cognitiva subliminal de menores de edad'
      ],
      action: 'Prohibición absoluta de despliegue y desarrollo.'
    },
    high: {
      title: 'Alto riesgo (Fuertemente regulado)',
      norm: 'EU AI Act Anexo III · Educación y Selección RR.HH.',
      color: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500',
      examples: [
        'Sistemas que determinan el acceso o admisión a instituciones educativas',
        'Evaluación automatizada de exámenes certificativos sin supervisión humana',
        'Sistemas ATS de filtrado curricular y evaluación de candidatos laborales'
      ],
      action: 'Requiere auditoría de sesgos, trazabilidad de logs, gobernanza de datos y supervisión humana efectiva (Human-in-the-Loop).'
    },
    limited: {
      title: 'Riesgo de transparencia específico',
      norm: 'EU AI Act Art. 50 · Deber de información',
      color: 'text-sky-600 dark:text-sky-400',
      border: 'border-sky-500',
      examples: [
        'Chatbots de tutoría y asistentes conversacionales (como el copiloto de SofIA)',
        'Contenido sintético de audio, imagen o video (requiere marca de agua C2PA / SynthID)',
        'Generación asistida de material didáctico'
      ],
      action: 'Obligación de informar claramente al usuario que interactúa con una IA y etiquetar contenido sintético.'
    },
    minimal: {
      title: 'Riesgo mínimo o nulo',
      norm: 'Adopción voluntaria de códigos de conducta',
      color: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-500',
      examples: [
        'Correctores ortográficos y de estilo básicos',
        'Clasificadores de spam o búsqueda semántica en biblioteca escolar',
        'Formateadores de código o plantillas'
      ],
      action: 'Uso libre recomendado bajo buenas prácticas de alfabetización digital y sostenibilidad.'
    }
  };

  const current = levels[selectedLevel];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Matriz regulatoria 2025–2026 · EU AI Act & UNESCO
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Clasificación de sistemas de IA por nivel de riesgo e impacto en derechos
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        {(Object.keys(levels) as Array<keyof typeof levels>).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedLevel(key)}
            className={`px-3 py-2.5 rounded-lg text-xs font-semibold border text-left transition-all cursor-pointer ${
              selectedLevel === key
                ? `bg-slate-50 dark:bg-slate-800 ${levels[key].border} ${levels[key].color}`
                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            {key === 'unacceptable' ? '1. Inaceptable' : key === 'high' ? '2. Alto riesgo' : key === 'limited' ? '3. Transparencia' : '4. Mínimo'}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-3 border-b border-slate-200 dark:border-slate-700/70">
          <h5 className={`text-sm font-bold ${current.color}`}>{current.title}</h5>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{current.norm}</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Casos de uso representativos en educación y trabajo:
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            {current.examples.map((ex, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-mono text-slate-400">•</span>
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 rounded-md bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
          <strong className="font-semibold text-slate-900 dark:text-white">Protocolo de gobernanza exigido: </strong>
          {current.action}
        </div>
      </div>
    </div>
  );
};

// 5. Agent Workflow Simulator with MCP & A2A (Agentes)
export const AgentWorkflowSimulator = () => {
  const [step, setStep] = useState(0);

  const workflowSteps = [
    {
      phase: 'Fase 1 · Recepción y planificación (Test-Time Compute)',
      actor: 'Agente Orquestador',
      protocol: 'Razonamiento interno',
      log: 'Analizando solicitud de SofIA: "Generar reporte semanal de progreso de 2° Medio y preparar guía de refuerzo". Descomponiendo en 3 subtareas verificables.'
    },
    {
      phase: 'Fase 2 · Consulta de datos vía Model Context Protocol (MCP)',
      actor: 'Cliente MCP → Servidor LMS Escolar',
      protocol: 'JSON-RPC 2.0 sobre MCP',
      log: 'Invocando recurso autorizado `mcp://lms-escuela/cursos/2B/calificaciones`. Obtenidas 32 métricas anonimizadas sin exponer datos personales.'
    },
    {
      phase: 'Fase 3 · Delegación entre agentes vía Protocolo A2A',
      actor: 'Agente Orquestador → Agente Diseñador Curricular',
      protocol: 'Agent-to-Agent (A2A)',
      log: 'Enviando perfil de brechas detectadas al Agente Pedagógico. Generando 4 ejercicios escalonados alineados con el currículo nacional.'
    },
    {
      phase: 'Fase 4 · Punto de control humano (Human-in-the-Loop)',
      actor: 'SofIA (Supervisora docente)',
      protocol: 'Aprobación explícita',
      log: 'Borrador presentado a SofIA con citas de fuentes y justificación didáctica. Esperando firma docente antes de publicar en el aula virtual.'
    }
  ];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Trazabilidad de ejecución · Estándares MCP + A2A
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Simulador de ciclo de vida de un sistema multi-agente supervisado
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStep((prev) => (prev > 0 ? prev - 1 : workflowSteps.length - 1))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            Anterior
          </button>
          <button
            onClick={() => setStep((prev) => (prev + 1) % workflowSteps.length)}
            className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0"
          >
            Siguiente paso ({step + 1}/{workflowSteps.length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        {workflowSteps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
              step === idx
                ? 'bg-sky-50/80 dark:bg-sky-950/30 border-sky-500 text-slate-900 dark:text-white'
                : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
            }`}
          >
            <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400">Paso 0{idx + 1}</div>
            <div className="text-xs font-semibold mt-0.5 line-clamp-1">{s.actor}</div>
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-slate-950 text-slate-100 font-mono text-xs space-y-2 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 text-slate-400 border-b border-slate-800 pb-2">
          <span>{workflowSteps[step].phase}</span>
          <span className="text-emerald-400">Protocolo: {workflowSteps[step].protocol}</span>
        </div>
        <p className="text-slate-200 leading-relaxed pt-1">
          &gt; {workflowSteps[step].log}
        </p>
      </div>
    </div>
  );
};

// 6. PROSE, PARTE & CO-STAR Interactive Comparison Table (Modulo 2)
export const PROSEPARTEInteractiveTable = () => {
  const [selectedFramework, setSelectedFramework] = useState<'prose' | 'parte' | 'costar'>('costar');

  const frameworks = {
    costar: {
      name: 'Marco CO-STAR (Estándar en ingeniería de contexto)',
      focus: 'Diseño de salidas adaptadas a audiencias específicas con control tonal y estructural',
      items: [
        { letter: 'C', term: 'Context (Contexto)', desc: 'Situación de fondo, datos de partida y restricciones del dominio.' },
        { letter: 'O', term: 'Objective (Objetivo)', desc: 'Meta clara y medible que debe cumplir la generación.' },
        { letter: 'S', term: 'Style (Estilo)', desc: 'Registro de escritura (ej. académico, divulgativo, técnico, periodístico).' },
        { letter: 'T', term: 'Tone (Tono)', desc: 'Actitud comunicativa (ej. empático, socrático, riguroso, ejecutivo).' },
        { letter: 'A', term: 'Audience (Audiencia)', desc: 'Perfil cognitivo de quien leerá el resultado (ej. alumnos de 15 años, comité directivo).' },
        { letter: 'R', term: 'Response (Respuesta)', desc: 'Formato técnico de salida (JSON validado, tabla Markdown, rúbrica).' }
      ]
    },
    prose: {
      name: 'Marco PROSE (Diseño conversacional y pedagógico)',
      focus: 'Iteración rápida de materiales didácticos y flujos de trabajo docentes',
      items: [
        { letter: 'P', term: 'Propósito', desc: 'Intención educativa o funcional central de la tarea.' },
        { letter: 'R', term: 'Rol', desc: 'Especialidad profesional asignada al modelo.' },
        { letter: 'O', term: 'Objetivo / Output', desc: 'Producto entregable esperado al finalizar.' },
        { letter: 'S', term: 'Situación', desc: 'Restricciones de aula, tiempo y recursos disponibles.' },
        { letter: 'E', term: 'Especificaciones', desc: 'Criterios de calidad, extensión y exclusiones explícitas.' }
      ]
    },
    parte: {
      name: 'Marco PARTE (Auditoría y evaluación de tareas)',
      focus: 'Estructuración de prompts complejos con ejemplos Few-Shot integrados',
      items: [
        { letter: 'P', term: 'Persona', desc: 'Identidad epistémica y marco metodológico que adopta la IA.' },
        { letter: 'A', term: 'Acción', desc: 'Verbo de proceso cognitivo (analizar, contrastar, sintetizar, auditar).' },
        { letter: 'R', term: 'Resultado', desc: 'Estructura exacta del entregable final.' },
        { letter: 'T', term: 'Trasfondo', desc: 'Fuentes de datos, documentos adjuntos y contexto previo.' },
        { letter: 'E', term: 'Ejemplos', desc: 'Demostraciones de entrada/salida (Few-Shot) para calibrar el patrón.' }
      ]
    }
  };

  const current = frameworks[selectedFramework];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/60 dark:bg-slate-900/60">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Arquitecturas de estructuración
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Comparador de marcos: CO-STAR · PROSE · PARTE
          </h4>
        </div>
        <div className="flex gap-1.5 bg-slate-200/70 dark:bg-slate-800 p-1 rounded-lg">
          {(['costar', 'prose', 'parte'] as const).map((fw) => (
            <button
              key={fw}
              onClick={() => setSelectedFramework(fw)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFramework === fw
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {fw === 'costar' ? 'CO-STAR' : fw.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="text-sm font-bold text-slate-900 dark:text-white">{current.name}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{current.focus}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {current.items.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded bg-sky-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.letter}
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">{item.term}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 7. 2026 Model Ecosystem Comparison (LLMs)
export const ModelComparisonCarousel = () => {
  const models = [
    {
      family: 'Familia Google Gemini (2.5 / Serie 3)',
      paradigm: 'Multimodalidad nativa + Contexto masivo (1M–2M tokens)',
      strengths: 'Comprensión simultánea de video, audio, código y PDFs extensos; control explícito de presupuesto de pensamiento (thinkingBudget / thinkingLevel) y anclaje nativo con búsqueda y mapas.',
      useCase: 'Análisis de currículos completos, repositorios enteros y tutoría multimodal.'
    },
    {
      family: 'Modelos de razonamiento (Serie o / DeepSeek-R1)',
      paradigm: 'Test-Time Compute + RLVR (Aprendizaje por refuerzo verificable)',
      strengths: 'Generación de cadenas de pensamiento internas con autoverificación antes de emitir la respuesta final. Sobresalientes en matemáticas, lógica formal, arquitectura de software y planificación.',
      useCase: 'Resolución de problemas complejos, auditoría lógica y diseño de algoritmos.'
    },
    {
      family: 'Familia Anthropic Claude (Sonnet / Opus con Extended Thinking)',
      paradigm: 'Pensamiento extendido híbrido + Uso agéntico de herramientas',
      strengths: 'Alta fidelidad en seguimiento de instrucciones complejas con etiquetas XML, redacción matizada, programación autónoma (Computer Use / MCP) y alineación constitucional.',
      useCase: 'Ingeniería de software asistida, redacción pedagógica rigurosa y flujos MCP.'
    },
    {
      family: 'SLMs y pesos abiertos en dispositivo (Llama, Qwen, Gemma, Phi)',
      paradigm: 'Edge AI + Soberanía de datos (1B a 32B parámetros)',
      strengths: 'Ejecución local en laptops, servidores escolares o móviles mediante cuantización (GGUF / WebGPU) sin enviar datos sensibles a la nube y con costo marginal cero por token.',
      useCase: 'Entornos educativos u hospitalarios con privacidad estricta o sin internet.'
    }
  ];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
          Panorama de arquitecturas · Estado del arte 2026
        </div>
        <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
          Especialización funcional de familias de modelos de lenguaje y razonamiento
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {models.map((m, idx) => (
          <div key={idx} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 mb-1">
                {m.paradigm}
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {m.family}
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {m.strengths}
              </p>
            </div>
            <div className="pt-2.5 border-t border-slate-200/70 dark:border-slate-700/60 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Caso óptimo: {m.useCase}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 8. Prompt Impact Charts (Modulo 2)
export const PromptImpactCharts = () => {
  const metrics = [
    { label: 'Prompt de una línea sin contexto (Zero-Shot ambiguo)', precision: 38, hallucination: 42 },
    { label: 'Prompt estructurado con rol y formato (PROSE / CO-STAR)', precision: 76, hallucination: 18 },
    { label: 'Ingeniería de contexto XML + Ejemplos Few-Shot', precision: 89, hallucination: 8 },
    { label: 'Contexto + RAG Híbrido + Verificación (Test-Time Compute)', precision: 96, hallucination: 2 }
  ];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Métricas de evaluación empírica
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Impacto de la ingeniería de contexto en fidelidad y reducción de alucinaciones
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
          Evaluación en tareas curriculares (0–100%)
        </span>
      </div>

      <div className="space-y-4">
        {metrics.map((m, i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-800 dark:text-slate-200">{m.label}</span>
              <div className="flex items-center gap-3 font-mono tabular-nums">
                <span className="text-emerald-600 dark:text-emerald-400">Precisión: {m.precision}%</span>
                <span className="text-slate-400">·</span>
                <span className="text-rose-600 dark:text-rose-400">Error factual: {m.hallucination}%</span>
              </div>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${m.precision}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 9. AI Competence Mapping Evaluator via Server-Side Gemini API (Modulo 1 / Etica)
export const CompetenceMappingCard = () => {
  const [roleInput, setRoleInput] = useState('Docente de ciencias en secundaria transicionando a diseño instruccional EdTech');
  const [goalInput, setGoalInput] = useState('Automatizar la creación de rúbricas formativas y detectar brechas de comprensión sin comprometer la privacidad de mis alumnos.');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    nivelActual: string;
    competenciasClave: string[];
    riesgoEticoPrincipal: string;
    rutaRecomendada: string;
  }>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const presets = [
    {
      label: 'Caso SofIA (Docente → EdTech)',
      role: 'Docente de ciencias en secundaria transicionando a diseño instruccional EdTech',
      goal: 'Automatizar la creación de rúbricas formativas y detectar brechas de comprensión sin comprometer la privacidad de mis alumnos.'
    },
    {
      label: 'Líder de equipo de software',
      role: 'Tech Lead coordinando un equipo de 6 desarrolladores full-stack',
      goal: 'Integrar agentes con protocolo MCP para revisión de código y pruebas automatizadas evitando vulnerabilidades.'
    },
    {
      label: 'Analista de gestión pública',
      role: 'Coordinador de programas sociales municipales',
      goal: 'Resumir expedientes normativos extensos con trazabilidad documental estricta cumpliendo estándares de transparencia.'
    }
  ];

  const handleAnalyze = async () => {
    if (!roleInput.trim() || !goalInput.trim()) return;
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/evaluate-competence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: roleInput, goal: goalInput })
      });

      if (!response.ok) {
        throw new Error('No se pudo conectar con el evaluador diagnóstico.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setErrorMsg('Diagnóstico local activado: verifica los principios UNESCO y DECIDE-IA para este perfil.');
      setResult({
        nivelActual: 'Nivel 2: Integración metodológica estructurada (Marco UNESCO)',
        competenciasClave: [
          'Ingeniería de contexto con delimitadores XML y esquemas de validación (CO-STAR)',
          'Anclaje documental mediante RAG para evitar alucinaciones en materiales curriculares',
          'Anonimización previa de datos sensibles (PII) antes de procesar en modelos en la nube'
        ],
        riesgoEticoPrincipal: 'Delegación acrítica de la evaluación formativa (sesgo de automatización) y exposición de datos de menores.',
        rutaRecomendada: 'Implementar el flujo Human-in-the-Loop del Marco DECIDE-IA combinando plantillas PROSE con verificación docente obligatoria.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Diagnóstico interactivo · Marcos UNESCO & PotencIA
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Mapeador de competencias y riesgos de adopción de IA
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setRoleInput(p.role);
                setGoalInput(p.goal);
              }}
              className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer whitespace-nowrap shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Tu rol o contexto profesional actual
          </label>
          <input
            type="text"
            value={roleInput}
            onChange={(e) => setRoleInput(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Objetivo principal que deseas resolver con IA
          </label>
          <input
            type="text"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] text-slate-500 dark:text-slate-400">
          Evalúa brechas técnicas, éticas y operativas según el marco de competencias vigente.
        </span>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          {loading ? 'Analizando perfil...' : 'Generar diagnóstico de competencias'}
        </button>
      </div>

      {result && (
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          {errorMsg && (
            <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
              {errorMsg}
            </div>
          )}
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-mono text-sky-600 dark:text-sky-400 mb-1">
              Nivel diagnosticado · {result.nivelActual}
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2">
              Competencias prioritarias a desarrollar:
            </div>
            <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 mb-3">
              {result.competenciasClave.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-mono text-sky-500">0{i + 1}.</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200/70 dark:border-slate-700/60 text-xs">
              <div>
                <span className="font-semibold text-rose-600 dark:text-rose-400">Riesgo ético crítico: </span>
                <span className="text-slate-600 dark:text-slate-300">{result.riesgoEticoPrincipal}</span>
              </div>
              <div>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Ruta recomendada: </span>
                <span className="text-slate-600 dark:text-slate-300">{result.rutaRecomendada}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 10. Interactive AI Evolution Timeline (1950–2026) (Modulo 1)
export const AIHistoryTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number>(5);
  const [showAll, setShowAll] = useState<boolean>(false);

  const eras = [
    {
      period: '1950 – 1956',
      shortLabel: '1950–1956',
      tag: 'Fundamentos y Dartmouth',
      paradigm: 'Lógica formal y cibernética',
      title: 'Test de Turing y nacimiento formal del campo',
      desc: 'Alan Turing publica "Computing Machinery and Intelligence" (1950), formulando el Juego de la Imitación. En el verano de 1956, John McCarthy, Marvin Minsky, Claude Shannon y Nathaniel Rochester organizan el taller de Dartmouth y acuñan formalmente el término "Inteligencia Artificial".',
      milestones: [
        '1943: Modelo neuronal lógico de McCulloch y Pitts',
        '1950: Test de Turing y máquinas de aprendizaje',
        '1956: Logic Theorist (Newell, Simon y Shaw) demuestra teoremas matemáticos',
        '1956: Conferencia fundacional de Dartmouth College'
      ],
      mechanism: 'Manipulación de símbolos discretos según reglas deductivas y búsqueda en árboles de estados.',
      bottleneck: 'Hardware extremadamente limitado (válvulas de vacío) y ausencia de datos digitales a escala.'
    },
    {
      period: '1957 – 1973',
      shortLabel: '1957–1973',
      tag: 'Primer auge y conexión',
      paradigm: 'Heurística y Perceptrón inicial',
      title: 'Del Perceptrón de Rosenblatt a los micro-mundos simbólicos',
      desc: 'Frank Rosenblatt presenta el Perceptrón (1957), precursor físico de las redes neuronales, mientras Joseph Weizenbaum crea ELIZA (1966) y Terry Winograd desarrolla SHRDLU. El optimismo inicial choca con las limitaciones matemáticas de las redes de una sola capa (Minsky y Papert, 1969).',
      milestones: [
        '1957: Perceptrón Mark I de Frank Rosenblatt',
        '1958: John McCarthy inventa el lenguaje LISP',
        '1966: ELIZA simula psicoterapia mediante patrones léxicos',
        '1973: Informe Lighthill desencadena el primer invierno de la IA'
      ],
      mechanism: 'Clasificadores lineales de una capa y resolución simbólica en dominios cerrados ("micro-mundos").',
      bottleneck: 'Incapacidad del perceptrón simple para resolver funciones no lineales (XOR) y explosión combinatoria.'
    },
    {
      period: '1974 – 1996',
      shortLabel: '1974–1996',
      tag: 'Sistemas expertos',
      paradigm: 'IA simbólica (GOFAI) y retropropagación',
      title: 'Auge de los sistemas expertos e incubación conexionista',
      desc: 'Las corporaciones adoptan sistemas expertos basados en reglas "SI-ENTONCES" como MYCIN (diagnóstico médico) y XCON. Aunque un segundo invierno golpea a fines de los 80 por la fragilidad de las reglas manuales, en paralelo Rumelhart, Hinton y Williams popularizan el algoritmo Backpropagation (1986).',
      milestones: [
        '1975: MYCIN para diagnóstico de infecciones sanguíneas',
        '1986: Redescubrimiento de la retropropagación del error (Backpropagation)',
        '1989: Yann LeCun aplica redes convolucionales (LeNet) a dígitos postales',
        '1988: Judea Pearl introduce redes bayesianas e inferencia probabilística'
      ],
      mechanism: 'Motores de inferencia lógica sobre bases de conocimiento codificadas manualmente por expertos humanos.',
      bottleneck: 'Cuello de botella de adquisición del conocimiento: los expertos no pueden verbalizar todo su saber tácito.'
    },
    {
      period: '1997 – 2016',
      shortLabel: '1997–2016',
      tag: 'Deep Learning',
      paradigm: 'Aprendizaje estadístico y redes profundas',
      title: 'Del triunfo estadístico a la revolución del aprendizaje profundo en GPUs',
      desc: 'Deep Blue vence a Garry Kasparov (1997). Con la llegada del Big Data y el uso de tarjetas gráficas (GPUs), AlexNet (2012) revoluciona la visión artificial en ImageNet y AlphaGo (2016) derrota a Lee Sedol combinando redes neuronales profundas con aprendizaje por refuerzo y búsqueda Monte Carlo.',
      milestones: [
        '1997: Deep Blue (IBM) derrota al campeón mundial de ajedrez',
        '2012: AlexNet (Krizhevsky, Sutskever y Hinton) reduce drásticamente el error en ImageNet',
        '2013: Word2Vec inaugura los espacios densos de embeddings semánticos',
        '2016: AlphaGo (DeepMind) domina el juego de Go mediante Deep RL'
      ],
      mechanism: 'Optimización por descenso de gradiente estocástico sobre redes multicapa profundas (CNN, RNN, LSTM).',
      bottleneck: 'Las redes recurrentes (RNN/LSTM) procesaban el texto palabra por palabra de forma secuencial, impidiendo paralelizar corpus masivos.'
    },
    {
      period: '2017 – 2023',
      shortLabel: '2017–2023',
      tag: 'Era Transformer',
      paradigm: 'Modelos fundacionales e IA generativa',
      title: 'Attention Is All You Need y emergencia de los grandes modelos de lenguaje',
      desc: 'Investigadores de Google publican la arquitectura Transformer (2017), reemplazando la recurrencia por mecanismos de autoatención paralela. Esto permite escalar el pre-entrenamiento autosupervisado a billones de tokens, dando origen a BERT, la serie GPT, Gemini, Claude y Llama.',
      milestones: [
        '2017: Vaswani et al. presentan el Transformer ("Attention Is All You Need")',
        '2020: Leyes de escalado neuronal y aprendizaje Few-Shot en GPT-3',
        '2021: AlphaFold 2 resuelve el plegamiento de proteínas',
        '2022–2023: Alineación RLHF y masificación global de asistentes generativos'
      ],
      mechanism: 'Autoatención multicabeza paralela + pre-entrenamiento autorregresivo seguido de ajuste fino y RLHF.',
      bottleneck: 'Respuestas de "Sistema 1" (rápidas pero propensas a alucinaciones lógicas) y desconexión de herramientas en vivo.'
    },
    {
      period: '2024 – 2026',
      shortLabel: '2024–2026',
      tag: 'Frontera actual',
      paradigm: 'Test-Time Compute, SLMs y agentes MCP',
      title: 'Razonamiento verificable, multimodalidad nativa y ecosistemas agénticos',
      desc: 'El escalado se expande hacia el cómputo en tiempo de inferencia (Test-Time Compute) entrenado con recompensas verificables (RLVR). Los modelos deliberan y verifican hipótesis antes de responder, se conectan de forma estándar mediante el protocolo MCP, delegan tareas vía A2A y coexisten con modelos pequeños (SLMs) en el dispositivo.',
      milestones: [
        '2024–2025: Consolidación de modelos razonadores con Test-Time Compute y RLVR',
        '2025: Adopción universal del estándar abierto Model Context Protocol (MCP)',
        '2025–2026: Auge de SLMs en dispositivo (Edge AI) y entrada en vigor del EU AI Act',
        '2026: Orquestación multi-agente (A2A), GraphRAG y modelos de mundo (JEPA)'
      ],
      mechanism: 'Arquitecturas Sparse MoE multimodales + cadenas de pensamiento verificadas (TTC) + protocolos JSON-RPC agénticos.',
      bottleneck: 'Gobernanza de autonomía agéntica, eficiencia energética y verificación formal libre de alucinaciones.'
    }
  ];

  const current = eras[activeIndex];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs">
      {/* Header Bar */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/60 dark:bg-slate-900/60">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Cronología interactiva · 1950–2026
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Genealogía de paradigmas: de la lógica simbólica al razonamiento agéntico
          </h4>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              showAll
                ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {showAll ? 'Vista interactiva por etapa' : 'Ver las 6 etapas completas'}
          </button>
        </div>
      </div>

      {/* Interactive Timeline Stepper Track */}
      <div className="px-5 pt-5 pb-4 border-b border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900">
        <div className="relative">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden md:block absolute top-3.5 left-6 right-6 h-0.5 bg-slate-200 dark:bg-slate-800" />
          <div
            className="hidden md:block absolute top-3.5 left-6 h-0.5 bg-sky-600 dark:bg-sky-400 transition-all duration-300"
            style={{ width: `calc(${(activeIndex / (eras.length - 1)) * 100}% - 2.5rem)` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 relative z-10">
            {eras.map((era, idx) => {
              const isSelected = idx === activeIndex && !showAll;
              const isPast = idx <= activeIndex;
              return (
                <button
                  key={era.period}
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                    setShowAll(false);
                  }}
                  className={`group flex flex-col items-start md:items-center text-left md:text-center p-2.5 md:p-2 rounded-lg border md:border-transparent transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 md:bg-transparent'
                      : 'border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full font-mono text-xs font-bold flex items-center justify-center border-2 transition-all mb-1.5 ${
                      isSelected
                        ? 'bg-sky-600 text-white border-sky-600 ring-4 ring-sky-500/20 scale-110'
                        : isPast
                        ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 border-sky-500 dark:border-sky-400'
                        : 'bg-white dark:bg-slate-900 text-slate-400 border-slate-300 dark:border-slate-700 group-hover:border-slate-400'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div
                    className={`text-[11px] font-mono font-bold tabular-nums ${
                      isSelected
                        ? 'text-sky-600 dark:text-sky-400'
                        : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {era.shortLabel}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {era.tag}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area: Single Selected Era vs All Eras */}
      {!showAll ? (
        <div className="p-5 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400 mb-1">
                <span>ETAPA 0{activeIndex + 1} DE 0{eras.length}</span>
                <span>·</span>
                <span>{current.period}</span>
                <span>·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Paradigma: {current.paradigm}
                </span>
              </div>
              <h5 className="text-lg font-bold font-display text-slate-900 dark:text-white m-0">
                {current.title}
              </h5>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : eras.length - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % eras.length)}
                className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
              >
                Siguiente etapa →
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
            {current.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold mb-2">
                Hitos y sistemas clave
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 m-0 p-0 list-none">
                {current.milestones.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-sky-500">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                Mecanismo computacional
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                {current.mechanism}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold mb-2">
                {activeIndex === eras.length - 1 ? 'Desafío de frontera 2026' : 'Límite que impulsó la siguiente era'}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                {current.bottleneck}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {eras.map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="sm:w-56 shrink-0">
                <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 block">
                  {item.period} · {item.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {item.paradigm}
                </span>
              </div>
              <div className="flex-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1 mt-0">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span><strong className="text-slate-700 dark:text-slate-300">Mecanismo:</strong> {item.mechanism}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

