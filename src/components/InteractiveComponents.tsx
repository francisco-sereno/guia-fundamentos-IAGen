import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Cpu, BrainCircuit, Database, Search, Layout, Wrench, ShieldCheck, 
  Sparkles, Terminal, Copy, Check, Sliders, RefreshCw, Eye, 
  Layers, ArrowRight, Play, CheckCircle2, AlertTriangle, Scale, 
  HelpCircle, UserCheck, FileText, Zap, ChevronDown, Activity, User, Code2,
  BookOpen, ChevronRight, GraduationCap, Target, ExternalLink
} from 'lucide-react';
import { cn, CopyButton } from './Shared';

// --- 1. PEAS INTERACTIVE EXPLORER ---
interface PEASScenario {
  id: string;
  name: string;
  category: string;
  performance: string;
  environment: string;
  actuators: string;
  sensors: string;
  properties: {
    observability: string;
    dynamism: string;
    causality: string;
    time: string;
    agents: string;
  };
}

const peasScenarios: PEASScenario[] = [
  {
    id: 'sofia_edtech',
    name: 'Diagnóstico de portafolio y perfil de SofIA (Educación y EdTech)',
    category: 'Educación / Diseño instruccional / EdTech',
    performance: 'Precisión en extracción de competencias docentes y de gestión pedagógica, alineación con requerimientos EdTech, recomendaciones éticas sin invención.',
    environment: 'Base de datos de proyectos educativos/EdTech, formato PDF del portafolio pedagógico, taxonomías de diseño instruccional.',
    actuators: 'Generación de informe de diagnóstico, matriz de brechas de competencias, sugerencias de palabras clave estructuradas.',
    sensors: 'Parser de documentos de texto, analizador léxico de proyectos educativos, entrada de prompt del usuario.',
    properties: {
      observability: 'Totalmente observable (el texto introducido es 100% accesible)',
      dynamism: 'Estático durante el análisis (el documento no cambia solo)',
      causality: 'Determinista (mismas reglas producen mismo diagnóstico)',
      time: 'Episódico (cada análisis de portafolio es independiente)',
      agents: 'Agente único (o asistente supervisado por SofIA)'
    }
  },
  {
    id: 'autonomous_vehicle',
    name: 'Taxi autónomo urbano',
    category: 'Robótica y transporte',
    performance: 'Seguridad de los pasajeros, tiempo de viaje optimizado, cumplimiento de normas de tránsito, confort en el viaje.',
    environment: 'Calles de la ciudad, condiciones climáticas cambiantes, otros vehículos, peatones, semáforos, obras viales.',
    actuators: 'Control de aceleración, frenado, dirección hidráulica, señales de giro, pantalla informativa al pasajero.',
    sensors: 'Cámaras HD, sensores LIDAR, RADAR, ultrasonido, GPS diferencial, acelerómetros, tacómetro.',
    properties: {
      observability: 'Parcialmente observable (puntos ciegos, clima adverso)',
      dynamism: 'Altamente dinámico (el entorno cambia milisegundo a milisegundo)',
      causality: 'Estocástico (incertidumbre en reacciones de peatones)',
      time: 'Secuencial (decisiones pasadas afectan la trayectoria futura)',
      agents: 'Multiagente (interactúa con otros conductores y peatones)'
    }
  },
  {
    id: 'medical_diag',
    name: 'Asistente de diagnóstico médico',
    category: 'Salud y medicina',
    performance: 'Alta sensibilidad epidemiológica, minimización de falsos negativos, explicabilidad de los factores de riesgo.',
    environment: 'Historiales clínicos electrónicos, imágenes médicas (rayos X, resonancias), resultados de laboratorios.',
    actuators: 'Generación de informe sintomático para el médico, alertas de contraindicaciones, cálculo de probabilidades.',
    sensors: 'Entrada de datos biométricos, imágenes DICOM, formulario de síntomas, lecturas de monitores de signos vitales.',
    properties: {
      observability: 'Parcialmente observable (síntomas ocultos o no reportados)',
      dynamism: 'Semi-estático (los síntomas evolucionan gradualmente)',
      causality: 'Estocástico (biología humana con variabilidad individual)',
      time: 'Secuencial (el tratamiento modifica la respuesta del paciente)',
      agents: 'Agente único colaborando con el equipo médico'
    }
  },
  {
    id: 'chess_bot',
    name: 'Motor de ajedrez computacional',
    category: 'Juegos y estrategia',
    performance: 'Victoria en la partida, tasa de victorias con blancas/negras, eficiencia en tiempo de cálculo por movimiento.',
    environment: 'Tablero de ajedrez de 64 casillas con 32 piezas en posiciones discretas.',
    actuators: 'Generación y envío del movimiento seleccionado en notación algebraíca (ej. e2-e4).',
    sensors: 'Lector del estado del tablero en formato FEN (Notation de Forsyth-Edwards).',
    properties: {
      observability: 'Totalmente observable (todas las piezas están a la vista)',
      dynamism: 'Estático mientras el reloj no corre el turno propio',
      causality: 'Determinista (las reglas del juego no cambian)',
      time: 'Secuencial (cada jugada define el árbol táctico futuro)',
      agents: 'Multiagente competitivo (2 jugadores en suma cero)'
    }
  }
];

export const PEASInteractiveExplorer = () => {
  const [selectedId, setSelectedId] = useState<string>('sofia_edtech');
  const activeScenario = peasScenarios.find(s => s.id === selectedId) || peasScenarios[0];

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-950 text-slate-100 rounded-[2.5rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <Bot size={240} className="text-white" />
      </div>

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-xl text-indigo-400 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <Sliders size={24} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">Explorador interactivo del marco PEAS</h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium">Selecciona un escenario para analizar sus cuatro componentes operativos esenciales y la naturaleza de su entorno.</p>
        </div>
      </div>

      {/* Scenario Tabs */}
      <div className="flex flex-wrap gap-2.5 my-8 relative z-10">
        {peasScenarios.map(sc => (
          <button
            key={sc.id}
            onClick={() => setSelectedId(sc.id)}
            className={cn(
              "px-5 py-2.5 rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 border backdrop-blur-md",
              selectedId === sc.id
                ? "bg-indigo-600/90 text-white border-indigo-400/50 shadow-[0_8px_20px_rgba(79,70,229,0.25)] ring-1 ring-indigo-400/30"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
            )}
          >
            {sc.name}
          </button>
        ))}
      </div>

      {/* Selected Scenario Header */}
      <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 mb-6">
        <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">{activeScenario.category}</span>
        <h4 className="text-lg font-bold text-white mt-0.5">{activeScenario.name}</h4>
      </div>

      {/* PEAS 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <motion.div key={`${selectedId}-P`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-2xl bg-slate-800/70 border border-emerald-500/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center border border-emerald-500/40">P</span>
            <h5 className="font-bold text-emerald-300 text-sm">Performance (Rendimiento)</h5>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{activeScenario.performance}</p>
        </motion.div>

        <motion.div key={`${selectedId}-E`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-5 rounded-2xl bg-slate-800/70 border border-blue-500/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-mono font-bold text-sm flex items-center justify-center border border-blue-500/40">E</span>
            <h5 className="font-bold text-blue-300 text-sm">Environment (Entorno)</h5>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{activeScenario.environment}</p>
        </motion.div>

        <motion.div key={`${selectedId}-A`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-5 rounded-2xl bg-slate-800/70 border border-purple-500/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-mono font-bold text-sm flex items-center justify-center border border-purple-500/40">A</span>
            <h5 className="font-bold text-purple-300 text-sm">Actuators (Actuadores)</h5>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{activeScenario.actuators}</p>
        </motion.div>

        <motion.div key={`${selectedId}-S`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="p-5 rounded-2xl bg-slate-800/70 border border-amber-500/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold text-sm flex items-center justify-center border border-amber-500/40">S</span>
            <h5 className="font-bold text-amber-300 text-sm">Sensors (Sensores)</h5>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{activeScenario.sensors}</p>
        </motion.div>
      </div>

      {/* Environment Properties Checklist */}
      <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
        <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
          <Activity size={15} /> Propiedades del entorno operativo
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px] font-mono uppercase">Observabilidad</span>
            <strong className="text-indigo-200">{activeScenario.properties.observability}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px] font-mono uppercase">Dinamismo</span>
            <strong className="text-indigo-200">{activeScenario.properties.dynamism}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px] font-mono uppercase">Causalidad</span>
            <strong className="text-indigo-200">{activeScenario.properties.causality}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block text-[10px] font-mono uppercase">Horizonte temporal</span>
            <strong className="text-indigo-200">{activeScenario.properties.time}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 sm:col-span-2 lg:col-span-2">
            <span className="text-slate-400 block text-[10px] font-mono uppercase">Número de agentes</span>
            <strong className="text-indigo-200">{activeScenario.properties.agents}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- 2. INTERACTIVE PROMPT PLAYGROUND ---
export const InteractivePromptPlayground = () => {
  const [technique, setTechnique] = useState<'zero' | 'few' | 'cot' | 'role' | 'rag'>('cot');
  const [role, setRole] = useState<'mentor' | 'recruiter' | 'expert'>('mentor');
  const [temperature, setTemperature] = useState<number>(0.2);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedText, setSimulatedText] = useState<string>('');

  const rolesMap = {
    mentor: { title: 'Mentor de desarrollo profesional', desc: 'Acompaña con preguntas reflexivas y orientación estructurada.' },
    recruiter: { title: 'Coordinador de innovación (EdTech expert)', desc: 'Enfocado en precisión técnica pedagógica, métricas de impacto y viabilidad.' },
    expert: { title: 'Consultor de estrategia en IA', desc: 'Enfoque riguroso, técnico y con buenas prácticas de adopción.' }
  };

  const getConstructedPrompt = () => {
    const roleText = `[ROL]: Actúa como un ${rolesMap[role].title}.\n`;

    if (technique === 'zero') {
      return `${roleText}[INSTRUCCIÓN]: Analiza la siguiente trayectoria pedagógica de SofIA y extrae 3 competencias clave relacionadas con el diseño instruccional y la innovación educativa.\n\n[TEXTO]: "Durante 4 años coordiné el equipo docente de 8 asignaturas, diseñé secuencias didácticas integrando tecnologías educativas y apliqué evaluación formativa."`;
    }
    if (technique === 'few') {
      return `${roleText}[EJEMPLOS]:
Entrada: "Lideré la renovación del plan de estudios de ciencias en 2 meses."
Salida: "Diseño instruccional: Planificación e innovación pedagógica con integración de proyectos STEM."

Entrada: "Capacité a los profesores en el uso del LMS institucional."
Salida: "Transformación EdTech: Adopción e integración de entornos virtuales de aprendizaje para docentes."

[TAREA]:
Entrada: "Coordiné a 12 docentes en la creación de rubricas digitales y secuencias adaptativas."
Salida:`;
    }
    if (technique === 'cot') {
      return `${roleText}[INSTRUCCIÓN]: Analiza el siguiente logro pedagógico de SofIA. Razona PASO A PASO antes de entregar la respuesta final:
1. Identifica las acciones educativas realizadas.
2. Determina el impacto de aprendizaje o gestión.
3. Asocia cada acción a un marco de competencias (ej. Taxonomía de Bloom / EdTech).
4. Redacta la versión optimizada respetando la veracidad estricta.

[LOGRO]: "Diseñé e implementé el entorno virtual de aprendizaje institucional, capacitando a 35 docentes en evaluación formativa."`;
    }
    if (technique === 'role') {
      return `${roleText}[CONTEXTO]: SofIA está preparando su propuesta de colaboración de Especialista en Diseño Instruccional en una plataforma EdTech.
[RESTRICCIÓN]: No inventes métricas ni datos no proporcionados. Mantén un tono profesional y centrado en el aprendizaje.
[TAREA]: Reestructura sus responsabilidades docentes previas en viñetas de alto impacto con la fórmula: [Verbo de acción] + [Contexto pedagógico] + [Resultado tangible].`;
    }
    return `${roleText}[CONTEXTO DE FUENTE EXTERNA (RAG)]:
Documento recuperado: "Manual de competencias de diseño instruccional 2026 - Cap. 4: Evaluación formativa e IA."

[INSTRUCCIÓN BASADA EN FUENTE]:
Basándote ÚNICAMENTE en el documento anterior, responde cómo SofIA puede argumentar sus competencias de evaluación adaptativa en su presentación de proyectos.`;
  };

  const simulatedResponses = {
    zero: 'Las 3 competencias clave identificadas para SofIA son:\n1. Diseño de secuencias didácticas adaptativas.\n2. Liderazgo de equipos pedagógicos e integración EdTech.\n3. Implementación de sistemas de evaluación formativa.',
    few: 'Diseño instruccional y liderazgo pedagógico: Coordinación de equipos docentes y estandarización de criterios de evaluación adaptativa en entornos EdTech.',
    cot: 'Paso 1 (Acciones): Implementación de entorno virtual LMS y capacitación de 35 docentes.\nPaso 2 (Impacto): Digitalización institucional y adopción de evaluación formativa continua.\nPaso 3 (Competencia): Diseño instruccional, tecnología educativa (EdTech) y gestión del cambio.\n\nResultado optimizado:\n"Lideró la arquitectura del entorno virtual de aprendizaje institucional, diseñando e impartiendo talleres de alfabetización digital y evaluación formativa que capacitaron a 35 docentes."',
    role: '• Coordinó la planificación didáctica y el diseño instruccional de secuencias didácticas, optimizando los niveles de logro académico.\n• Integró herramientas de IA y recursos digitales interactivos, elevando la participación y autonomía de las y los estudiantes.',
    rag: 'Según el Manual de competencias de diseño instruccional 2026 (Cap. 4), SofIA debe fundamentar su capacidad de evaluación adaptativa mediante:\n1. Diseño de matrices e instrumentos alineados con la Taxonomía de Bloom.\n2. Integración de retroalimentación en tiempo real apoyada por herramientas de IA.\n3. Análisis cualitativo y cuantitativo del progreso cognitivo del estudiante.'
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedText('');
    const fullText = simulatedResponses[technique];
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setSimulatedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 12);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getConstructedPrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Terminal size={22} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Patrón interactivo de diseño de prompts</h3>
            <p className="text-xs md:text-sm text-slate-400">Experimenta en tiempo real con diferentes estructuras de instrucciones para guiar al modelo.</p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
        >
          {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
          <span>{copied ? '¡Copiado!' : 'Copiar prompt'}</span>
        </button>
      </div>

      {/* Control Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Technique Picker */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Técnica de prompting</label>
          <select
            value={technique}
            onChange={e => setTechnique(e.target.value as any)}
            className="w-full bg-slate-800 text-white text-xs md:text-sm p-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500"
          >
            <option value="cot">Chain of thought (Cadena de pensamiento)</option>
            <option value="zero">Zero-shot (Directo)</option>
            <option value="few">Few-shot (Con ejemplos)</option>
            <option value="role">Role prompting (Asignación de rol)</option>
            <option value="rag">RAG Context (Con fuente externa)</option>
          </select>
        </div>

        {/* Role Picker */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Rol / Persona del modelo</label>
          <select
            value={role}
            onChange={e => setRole(e.target.value as any)}
            className="w-full bg-slate-800 text-white text-xs md:text-sm p-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500"
          >
            <option value="mentor">Mentor de carrera</option>
            <option value="recruiter">Coordinador de innovación EdTech</option>
            <option value="expert">Consultor de estrategia en IA</option>
          </select>
        </div>

        {/* Temperature Slider */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Temperatura</label>
            <span className="text-xs font-mono font-bold text-indigo-400">{temperature} ({temperature < 0.3 ? 'Determinista' : temperature < 0.7 ? 'Equilibrado' : 'Creativo'})</span>
          </div>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={temperature}
            onChange={e => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Prompt Preview Display */}
      <div className="mb-6">
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Code2 size={14} className="text-indigo-400" /> Prompt estructurado generado
        </span>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs md:text-sm text-indigo-200 whitespace-pre-wrap leading-relaxed shadow-inner">
          {getConstructedPrompt()}
        </div>
      </div>

      {/* Execute Simulation Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleRunSimulation}
          disabled={isSimulating}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
        >
          {isSimulating ? <RefreshCw size={16} className="animate-spin" /> : <Play size={16} />}
          <span>{isSimulating ? 'Generando respuesta...' : 'Simular respuesta de la IA'}</span>
        </button>
      </div>

      {/* Output Simulation Panel */}
      {(simulatedText || isSimulating) && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30">
          <div className="flex items-center gap-2 mb-3 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={16} /> Resultado simulado (Inferencia del LLM)
          </div>
          <p className="font-mono text-xs md:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
            {simulatedText}
            {isSimulating && <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />}
          </p>
        </motion.div>
      )}
    </div>
  );
};


// --- 3. RAG DIAGRAM ---
export const RAGDiagram = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '1. Ingesta y fragmentación',
      desc: 'Los documentos extensos (PDFs, políticas, portafolios) se dividen en fragmentos pequeños y manejables ("chunks") preservando el contexto semántico.',
      badge: 'Chunking'
    },
    {
      title: '2. Generación de embeddings',
      desc: 'Cada fragmento de texto se convierte mediante un modelo numérico en un vector multidimensional que captura su significado profundo.',
      badge: 'Vector Embeddings'
    },
    {
      title: '3. Almacenamiento vectorial',
      desc: 'Los vectores se guardan en una base de datos vectorial especializada (ej. Pinecone, ChromaDB) optimizada para búsquedas por distancia coseno.',
      badge: 'Vector Database'
    },
    {
      title: '4. Búsqueda por similitud',
      desc: 'Cuando el usuario hace una pregunta, la consulta se convierte a vector y se buscan en la base de datos los fragmentos más conceptualmente similares.',
      badge: 'Semantic Search'
    },
    {
      title: '5. Inyección y generación',
      desc: 'Los fragmentos recuperados se inyectan en el prompt como contexto verificado, permitiendo al LLM responder con información precisa y sin alucinaciones.',
      badge: 'Augmented Generation'
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          <Database size={22} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">Esquema funcional de RAG (Retrieval-Augmented Generation)</h3>
          <p className="text-xs md:text-sm text-slate-400">Interactúa con los pasos de la arquitectura para comprender cómo la IA consulta fuentes externas de confianza.</p>
        </div>
      </div>

      {/* Horizontal Flow Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 my-6">
        {steps.map((st, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={cn(
              "p-3 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between gap-2",
              activeStep === i
                ? "bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30"
                : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800"
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-200 opacity-80">{st.badge}</span>
            <span className="text-xs font-bold leading-tight">{st.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Highlight Box */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl bg-indigo-950/50 border border-indigo-500/30 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="p-4 rounded-2xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shrink-0">
          <Layers size={36} />
        </div>
        <div>
          <span className="text-xs font-mono uppercase font-bold text-indigo-400">{steps[activeStep].badge}</span>
          <h4 className="text-lg font-bold text-white mb-2">{steps[activeStep].title}</h4>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed">{steps[activeStep].desc}</p>
        </div>
      </motion.div>
    </div>
  );
};


// --- 4. ETICA SPECTRUM MATRIX ---
export const EticaSpectrumMatrix = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = [
    {
      title: 'Corrección ortográfica y sintáctica del portafolio',
      level: 'Uso ético (Asistente)',
      levelColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      description: 'SofIA utiliza la IA para eliminar errores tipográficos y mejorar la fluidez sintáctica de sus logros verídicos.',
      unesco: 'Principio de proporcionalidad e inocuidad: Potencia la claridad sin distorsionar los hechos reales.'
    },
    {
      title: 'Traducción de jerga técnica entre industrias',
      level: 'Zona gris (Optimizador)',
      levelColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      description: 'SofIA adapta sus responsabilidades de aula e innovación docente a términos equivalentes de diseño instruccional y proyectos EdTech para sistemas algorítmicos.',
      unesco: 'Principio de transparencia: Válido solo si las funciones realizadas efectivamente ejercitaron esas competencias.'
    },
    {
      title: 'Fabricación de proyectos o métricas inexistentes',
      level: 'No ético (Fabricante)',
      levelColor: 'text-red-400 bg-red-500/10 border-red-500/30',
      description: 'SofIA le pide a la IA que invente un proyecto donde "redujo costos en un 35%" sin haber participado en él.',
      unesco: 'Violación de integridad y equidad: Introduce falsedades deliberadas y defrauda el proceso de selección.'
    }
  ];

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <Scale size={22} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">Matriz interactiva del espectro ético</h3>
          <p className="text-xs md:text-sm text-slate-400">Evalúa diferentes escenarios de uso de IA frente a los principios del marco normativo de la UNESCO.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {cases.map((cs, i) => (
          <button
            key={i}
            onClick={() => setSelectedCase(i)}
            className={cn(
              "p-4 rounded-2xl text-left transition-all border flex flex-col justify-between gap-3",
              selectedCase === i
                ? "bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-950/50"
                : "bg-slate-900/60 border-slate-800 hover:bg-slate-800/50"
            )}
          >
            <span className={cn("text-[10px] font-mono font-bold uppercase px-2 py-1 rounded-md border inline-block w-max", cs.levelColor)}>
              {cs.level}
            </span>
            <span className="text-xs font-bold text-white leading-snug">{cs.title}</span>
          </button>
        ))}
      </div>

      <motion.div key={selectedCase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <h4 className="text-base font-bold text-white">{cases[selectedCase].title}</h4>
          <span className={cn("text-xs font-bold px-3 py-1 rounded-full border", cases[selectedCase].levelColor)}>
            {cases[selectedCase].level}
          </span>
        </div>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">{cases[selectedCase].description}</p>
        <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-300 flex items-start gap-2.5">
          <ShieldCheck size={18} className="shrink-0 mt-0.5" />
          <span><strong>Evaluación UNESCO:</strong> {cases[selectedCase].unesco}</span>
        </div>
      </motion.div>
    </div>
  );
};


// --- 5. AGENT WORKFLOW SIMULATOR ---
export const AgentWorkflowSimulator = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);

  const agentSteps = [
    {
      agent: 'Agente Supervisor (Manager)',
      icon: Cpu,
      color: 'text-indigo-400 bg-indigo-500/20 border-indigo-500/30',
      action: 'Analiza la solicitud de SofIA, descompone la tarea en 3 etapas estratégicas y asigna roles especializados.'
    },
    {
      agent: 'Agente Investigador (Research Agent)',
      icon: Search,
      color: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
      action: 'Escanea requerimientos de proyectos en el sector y extrae taxonomías de habilidades clave.'
    },
    {
      agent: 'Agente Redactor (Writer Agent)',
      icon: Layout,
      color: 'text-purple-400 bg-purple-500/20 border-purple-500/30',
      action: 'Alinea las experiencias reales de SofIA con los términos estructurados mediante la fórmula de impacto.'
    },
    {
      agent: 'Agente Evaluador de Calidad (Auditor)',
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
      action: 'Verifica la autenticidad frente al documento original de SofIA para garantizar 0% alucinaciones.'
    }
  ];

  const handleStart = () => {
    setIsRunning(true);
    setStepIndex(0);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < agentSteps.length) {
        setStepIndex(current);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 2000);
  };

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl relative">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Bot size={22} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Simulador de flujo de trabajo multiagente</h3>
            <p className="text-xs md:text-sm text-slate-400">Observa cómo interactúan múltiples agentes autónomos para resolver un objetivo complejo.</p>
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={isRunning}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all disabled:opacity-50 shadow-lg shadow-indigo-600/30"
        >
          {isRunning ? <RefreshCw size={15} className="animate-spin" /> : <Play size={15} />}
          <span>{isRunning ? 'Ejecutando orquestación...' : 'Simular flujo multiagente'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        {agentSteps.map((st, i) => {
          const IconComponent = st.icon;
          const isCurrent = isRunning && stepIndex === i;
          const isDone = stepIndex > i;

          return (
            <div
              key={i}
              className={cn(
                "p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center gap-2 relative",
                isCurrent
                  ? "bg-indigo-950 border-indigo-400 shadow-xl scale-105"
                  : isDone
                  ? "bg-slate-800/80 border-emerald-500/40 opacity-90"
                  : "bg-slate-950/60 border-slate-800 opacity-60"
              )}
            >
              <div className={cn("p-2.5 rounded-xl border", st.color)}>
                <IconComponent size={20} />
              </div>
              <h5 className="text-xs font-bold text-white">{st.agent}</h5>
              {isCurrent && <span className="text-[10px] text-indigo-300 font-mono animate-pulse">Procesando...</span>}
              {isDone && <CheckCircle2 size={16} className="text-emerald-400" />}
            </div>
          );
        })}
      </div>

      {/* Active Step Log Box */}
      <motion.div key={stepIndex} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs">
        <span className="text-slate-500 uppercase tracking-wider block text-[10px] mb-1">Registro de actividad del sistema:</span>
        <p className="text-indigo-300">{agentSteps[stepIndex].action}</p>
      </motion.div>
    </div>
  );
};

// --- 6. PROSE & PARTE INTERACTIVE COMPARISON TABLE ---
export const PROSEPARTEInteractiveTable = () => {
  const [activeModel, setActiveModel] = useState<'prose' | 'parte'>('prose');
  const [activeLetter, setActiveLetter] = useState<string>('P');

  const proseData = [
    {
      letter: 'P',
      name: 'Persona',
      title: 'Persona (Rol asignado)',
      role: 'Identidad que asume la IA',
      desc: 'Define la voz, conocimientos y perspectiva del modelo (ej. coordinador pedagógico, consultor EdTech, auditor de procesos).',
      objective: 'Enfocar la perspectiva del modelo para que la respuesta sea coherente y experta.',
      example: '"Actúa como un coordinador especializado en innovación y tecnología educativa..."',
      icon: User
    },
    {
      letter: 'R',
      name: 'Result',
      title: 'Result (Entregable esperado)',
      role: 'Producto final solicitado',
      desc: 'Especifica con precisión qué debe entregar el modelo: informe, tabla, lista estructurada o guion.',
      objective: 'Eliminar ambigüedades y evitar respuestas divagantes o genéricas.',
      example: '"Elabora una hoja de ruta de 5 pasos con viñetas claras y métricas asociadas..."',
      icon: CheckCircle2
    },
    {
      letter: 'O',
      name: 'Objective',
      title: 'Objective (Propósito central)',
      role: 'Meta fundamental',
      desc: 'Explica el para qué de la tarea y el valor que debe generar para el usuario.',
      objective: 'Alinear la lógica interna de la IA con la estrategia del usuario.',
      example: '"El objetivo es mapear las competencias pedagógicas de SofIA hacia el diseño instruccional y EdTech..."',
      icon: Target
    },
    {
      letter: 'S',
      name: 'Scenario',
      title: 'Scenario (Escenario situacional)',
      role: 'Contexto del problema',
      desc: 'Entrega antecedentes sobre el usuario, la empresa o las restricciones del mercado.',
      objective: 'Proporcionar el marco situacional para que la IA adapte su razonamiento.',
      example: '"SofIA tiene 8 años de experiencia en educación y gestión pedagógica y busca su transición a EdTech..."',
      icon: Layout
    },
    {
      letter: 'E',
      name: 'Extras',
      title: 'Extras (Restricciones y formato)',
      role: 'Límites y reglas de calidad',
      desc: 'Establece reglas de tono, extensión máxima, formato o exclusiones éticas.',
      objective: 'Garantizar el cumplimiento de criterios de autenticidad y concisión.',
      example: '"Usa lenguaje profesional, no inventes experiencia falsa y limita la respuesta a 250 palabras."',
      icon: ShieldCheck
    }
  ];

  const parteData = [
    {
      letter: 'P',
      name: 'Persona',
      title: 'Persona (Rol emisor)',
      role: 'Identidad del sistema',
      desc: 'Establece el nivel de especialización y la autoridad técnica con la que habla la IA.',
      objective: 'Guiar el vocabulario y tono institucional.',
      example: '"Eres un consultor de tecnología educativa (EdTech) especializado en evaluar perfiles pedagógicos..."',
      icon: UserCheck
    },
    {
      letter: 'A',
      name: 'Aim',
      title: 'Aim (Objetivo principal)',
      role: 'Propósito central',
      desc: 'Clarifica la meta clave y el resultado esperado de la interacción.',
      objective: 'Asegurar que la IA se concentre en resolver el problema núcleo.',
      example: '"Explicar los requisitos de la posición de especialista en diseño instruccional a SofIA..."',
      icon: Target
    },
    {
      letter: 'R',
      name: 'Recipient',
      title: 'Recipient (Destinatario)',
      role: 'Audiencia de la respuesta',
      desc: 'Define quién leerá la respuesta para ajustar el nivel de complejidad cognitiva.',
      objective: 'Adaptar el nivel explicativo a los antecedentes y conocimientos del receptor.',
      example: '"Destinado a SofIA, una profesional con experiencia docente que está adoptando herramientas EdTech..."',
      icon: User
    },
    {
      letter: 'T',
      name: 'Theme/Task',
      title: 'Theme/Task (Tema o Tarea)',
      role: 'Operación concreta',
      desc: 'La acción principal a ejecutar sobre los datos de entrada.',
      objective: 'Definir el objeto de análisis y los pasos operativos a seguir.',
      example: '"Traducir los logros de coordinación pedagógica y aula de SofIA en términos de diseño instruccional..."',
      icon: FileText
    },
    {
      letter: 'E',
      name: 'Expectations',
      title: 'Expectations (Expectativas finales)',
      role: 'Formato y restricciones',
      desc: 'Reglas finales sobre tono, estructura visual, longitud y límites éticos.',
      objective: 'Validar que el producto entregado sea listo para uso práctico.',
      example: '"Presenta en una tabla de 3 columnas: Experiencia docente, Competencia transferible, Ejemplo EdTech."',
      icon: Sparkles
    }
  ];

  const currentDataset = activeModel === 'prose' ? proseData : parteData;
  const currentLetterData = currentDataset.find(d => d.letter === activeLetter) || currentDataset[0];

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Herramienta interactiva de diseño de prompts
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">Tabla comparativa de modelos PROSE y PARTE</h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Haz clic en cada letra para desplegar su definición, objetivo y aplicación en la trayectoria de SofIA.
          </p>
        </div>

        {/* Model Switcher */}
        <div className="flex items-center p-1.5 bg-slate-950 rounded-2xl border border-slate-800 shrink-0">
          <button
            onClick={() => { setActiveModel('prose'); setActiveLetter('P'); }}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all",
              activeModel === 'prose'
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            )}
          >
            Modelo PROSE
          </button>
          <button
            onClick={() => { setActiveModel('parte'); setActiveLetter('P'); }}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all",
              activeModel === 'parte'
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                : "text-slate-400 hover:text-white"
            )}
          >
            Modelo PARTE (Google)
          </button>
        </div>
      </div>

      {/* Letters Tabs Grid */}
      <div className="grid grid-cols-5 gap-2.5 mb-6">
        {currentDataset.map(item => {
          const isSelected = activeLetter === item.letter;
          return (
            <button
              key={item.letter}
              onClick={() => setActiveLetter(item.letter)}
              className={cn(
                "p-3.5 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center text-center group relative overflow-hidden",
                isSelected
                  ? activeModel === 'prose'
                    ? "bg-indigo-950 border-indigo-400 text-white shadow-lg shadow-indigo-500/20 scale-105"
                    : "bg-amber-950 border-amber-400 text-white shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              )}
            >
              <span className={cn(
                "text-xl md:text-2xl font-extrabold font-mono mb-1 transition-transform group-hover:scale-110",
                isSelected
                  ? activeModel === 'prose' ? "text-indigo-400" : "text-amber-400"
                  : "text-slate-500"
              )}>
                {item.letter}
              </span>
              <span className="text-[10px] md:text-xs font-semibold truncate max-w-full">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded Letter Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeModel}-${activeLetter}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-6 rounded-2xl border bg-slate-950/90",
            activeModel === 'prose' ? "border-indigo-500/30" : "border-amber-500/30"
          )}
        >
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-2xl font-mono border shrink-0",
                activeModel === 'prose'
                  ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40"
                  : "bg-amber-500/20 text-amber-400 border-amber-500/40"
              )}>
                {currentLetterData.letter}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{currentLetterData.title}</h4>
                <span className="text-xs text-indigo-300/80 font-mono">{currentLetterData.role}</span>
              </div>
            </div>

            <span className={cn(
              "text-xs px-3 py-1 rounded-full border font-semibold",
              activeModel === 'prose'
                ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                : "bg-amber-500/10 text-amber-300 border-amber-500/30"
            )}>
              Estructura {activeModel.toUpperCase()}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4 text-xs md:text-sm">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                <BookOpen size={14} className="text-indigo-400" />
                Definición y concepto
              </strong>
              <p className="text-slate-300 leading-relaxed">{currentLetterData.desc}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                <Target size={14} className="text-emerald-400" />
                Objetivo pedagógico
              </strong>
              <p className="text-slate-300 leading-relaxed">{currentLetterData.objective}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Sparkles size={14} className="text-indigo-400" />
                Aplicación en el caso de SofIA
              </span>
              <CopyButton text={currentLetterData.example} />
            </div>
            <p className="text-xs font-mono text-indigo-200/90 italic bg-slate-950 p-3 rounded-lg border border-indigo-500/10">
              {currentLetterData.example}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- 7. LLM MODEL COMPARISON CAROUSEL ---
export const ModelComparisonCarousel = () => {
  const [activeModelId, setActiveModelId] = useState<'gpt' | 'gemini' | 'claude'>('gemini');

  const models = [
    {
      id: 'gpt',
      name: 'GPT-5.x',
      provider: 'OpenAI',
      badge: 'Razonamiento y ejecución autónoma',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400',
      activeTab: 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30',
      specs: {
        contextWindow: '128K - 1M tokens',
        multimodal: 'Texto, visión HD, audio nativo, ejecución de código',
        strengths: 'Razonamiento lógico paso a paso, matemáticas complejas y orquestación de herramientas externas.',
        idealUseCases: 'Resolución de problemas de ingeniería, agentes autónomos multisistema y automatización de flujos.',
        reasoning: 96,
        code: 94,
        multimodalScore: 92
      },
      description: 'Modelo de arquitectura avanzada enfocado en capacidades de razonamiento sintético, resolución de problemas complejos y ejecución segura de código.'
    },
    {
      id: 'gemini',
      name: 'Gemini 2.x / 3.x',
      provider: 'Google AI',
      badge: 'Multimodalidad nativa y contexto gigante',
      icon: Sparkles,
      color: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/40 text-indigo-400',
      activeTab: 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30',
      specs: {
        contextWindow: '1M - 2M+ tokens',
        multimodal: 'Texto, imágenes, videos extensos, audio completo, código',
        strengths: 'Procesamiento de documentos masivos, comprensión de video largo sin pérdida de aguja en el pajar y grounding con datos de Google.',
        idealUseCases: 'Análisis de libros o informes extensos, procesamiento de reuniones grabadas y copiloto en Google Workspace.',
        reasoning: 95,
        code: 93,
        multimodalScore: 98
      },
      description: 'Modelo nativamente multimodal diseñado por Google para entender e interrelacionar texto, audio, imágenes y video con ventanas de contexto sin precedentes.'
    },
    {
      id: 'claude',
      name: 'Claude 3.5 / 3.7',
      provider: 'Anthropic',
      badge: 'Ingeniería de software y fidelidad ética',
      icon: Bot,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400',
      activeTab: 'bg-amber-600 text-white shadow-lg shadow-amber-600/30',
      specs: {
        contextWindow: '200K tokens',
        multimodal: 'Texto, diagramas de arquitectura, análisis visual',
        strengths: 'Redacción con tono natural de alta calidad, refactorización masiva de código (Claude Code) y rigurosa tasa de autenticidad.',
        idealUseCases: 'Desarrollo de proyectos de software, revisión crítica de contenidos pedagógicos y análisis regulatorio o ético.',
        reasoning: 96,
        code: 97,
        multimodalScore: 90
      },
      description: 'Creado con principios de IA constitucional por Anthropic, destaca por su sobresaliente capacidad en programación, redacción cuidada y alineación de seguridad.'
    }
  ];

  const activeModel = models.find(m => m.id === activeModelId) || models[0];
  const IconComponent = activeModel.icon;

  return (
    <div className="my-10 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-indigo-500/30 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
            Matriz comparativa de la industria
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">Comparativa de modelos de lenguaje (LLMs)</h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Selecciona cada modelo para analizar sus especificaciones, fortalezas visuales y casos de uso recomendados.
          </p>
        </div>

        {/* Model Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 overflow-x-auto">
          {models.map(m => {
            const isSelected = activeModelId === m.id;
            const TabIcon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModelId(m.id as any)}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
                  isSelected
                    ? m.activeTab
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                )}
              >
                <TabIcon size={14} />
                <span>{m.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Model Detail Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeModel.id}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
          className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800"
        >
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-3.5">
              <div className={cn("p-3.5 rounded-2xl bg-gradient-to-br border shadow-lg", activeModel.color)}>
                <IconComponent size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-extrabold text-white">{activeModel.name}</h4>
                  <span className="text-xs text-slate-400 font-mono">({activeModel.provider})</span>
                </div>
                <p className="text-xs text-indigo-300 font-semibold mt-0.5">{activeModel.badge}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Ventana de contexto</span>
              <strong className="text-sm font-mono text-emerald-400 font-bold">{activeModel.specs.contextWindow}</strong>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
            {activeModel.description}
          </p>

          {/* Benchmarks Bars */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400">Razonamiento lógico</span>
                <span className="font-mono text-indigo-300 font-bold">{activeModel.specs.reasoning}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${activeModel.specs.reasoning}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400">Generación de código</span>
                <span className="font-mono text-emerald-300 font-bold">{activeModel.specs.code}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${activeModel.specs.code}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400">Comprensión multimodal</span>
                <span className="font-mono text-purple-300 font-bold">{activeModel.specs.multimodalScore}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${activeModel.specs.multimodalScore}%` }} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="block text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 size={16} />
                Principales fortalezas
              </strong>
              <p className="text-slate-300 leading-relaxed">{activeModel.specs.strengths}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="block text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
                <Zap size={16} />
                Casos de uso ideales
              </strong>
              <p className="text-slate-300 leading-relaxed">{activeModel.specs.idealUseCases}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- 8. PROMPT IMPACT CHARTS ---
export const PromptImpactCharts = () => null;


// --- 9. COMPETENCE MAPPING CARD ---
export const CompetenceMappingCard = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<{ transferable: string; edtech: string; bloom: string } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMap = async () => {
    if (!inputText.trim()) return;
    setIsAnimating(true);
    
    try {
      const response = await fetch('/api/competence-mapping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ experience: inputText })
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch from API');
      }
      
      const data = await response.json();
      
      setResult({ 
        transferable: data.transferable || "No se pudo generar.", 
        edtech: data.edtech || "No se pudo generar.", 
        bloom: data.bloom || "No se pudo generar." 
      });
    } catch (error) {
      console.error(error);
      setResult({ 
        transferable: "Error de conexión. Inténtalo de nuevo.", 
        edtech: "Error de conexión.", 
        bloom: "Error de conexión." 
      });
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <div className="my-10 relative group">
      {/* Decorative Glows */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
      <div className="relative glass-card bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        
        {/* Abstract shapes inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
          <Layers size={140} className="text-indigo-900 dark:text-white" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-white/5">
              <Target size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 dark:text-white tracking-tight">
              Mapeo de Competencias (Caso SofIA)
            </h3>
          </div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-8 max-w-3xl leading-relaxed">
            Describe tu experiencia docente en el aula o coordinación pedagógica, y descubre cómo se traducen tus habilidades a competencias estratégicas para proyectos EdTech y diseño instruccional.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 ml-1">
                  Experiencia Pedagógica Tradicional
                </label>
                <div className="relative">
                  <textarea 
                    className="w-full bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-sm md:text-base text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:outline-none resize-none transition-all shadow-inner"
                    rows={5}
                    placeholder="Ej: Durante 5 años planifiqué clases de ciencias, coordiné el departamento y evalué el progreso de 120 estudiantes..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  {/* Subtle gradient border effect when focused */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent peer-focus:border-indigo-500/30 transition-colors" />
                </div>
              </div>
              <button 
                onClick={handleMap}
                disabled={!inputText.trim() || isAnimating}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgb(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 active:translate-y-0"
              >
                {isAnimating ? (
                  <>
                    <RefreshCw className="animate-spin" size={20} />
                    <span>Mapeando competencias...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    <span>Articular competencias EdTech</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl rounded-2xl p-6 border border-indigo-100 dark:border-indigo-500/30 shadow-lg relative overflow-hidden"
                  >
                    {/* Inner subtle glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-[40px] pointer-events-none" />
                    
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-800 dark:text-indigo-300 mb-5 border-b border-indigo-200/50 dark:border-indigo-800/50 pb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      Articulación Estratégica
                    </h4>
                    
                    <div className="space-y-5">
                      <div className="group">
                        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                          <Layers size={12} /> Habilidades Transferibles
                        </span>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50/50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200/50 dark:border-white/5">{result.transferable}</p>
                      </div>
                      <div className="group">
                        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                          <BrainCircuit size={12} /> Taxonomía de Bloom Aplicada
                        </span>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50/50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200/50 dark:border-white/5">{result.bloom}</p>
                      </div>
                      <div className="pt-2">
                        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-1.5">
                          <Zap size={12} /> Alineación EdTech
                        </span>
                        <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100 leading-relaxed bg-emerald-50/80 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm">{result.edtech}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-700/50 bg-white/20 dark:bg-slate-900/20 rounded-2xl text-slate-500 dark:text-slate-400"
                  >
                    <ArrowRight size={32} className="mb-2 opacity-50" />
                    <p className="text-sm">Ingresa tu experiencia para descubrir tu perfil estratégico en el sector de tecnología educativa.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

