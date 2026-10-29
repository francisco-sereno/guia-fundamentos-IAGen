import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronRight, X, 
  BrainCircuit, AlertTriangle, 
  TerminalSquare, ShieldCheck, Rocket, CheckCircle2,
  Info, Lightbulb, Link as LinkIcon, XCircle, Copy, Check,
  Layers, Compass, HelpCircle, Code2, FileCode2, Zap, Palette, MonitorPlay, Smile, Type, User,
  RotateCcw, ExternalLink
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- GLOSSARY DATA (UPDATED FOR 2026 FRONTIER) ---
export const glossaryTerms: Record<string, string> = {
  "IA generativa": "Rama de la inteligencia artificial que crea contenido original (texto, imágenes, audio, video o código) y ejecuta razonamientos complejos a partir de patrones aprendidos en modelos fundacionales.",
  "IA tradicional": "Sistemas analíticos diseñados para clasificar datos, reconocer patrones estadísticos y realizar predicciones específicas basadas en reglas o modelos discriminativos.",
  "Alucinaciones": "Fenómeno donde un modelo de IA genera afirmaciones plausibles y sintácticamente coherentes, pero factualmente falsas o no respaldadas por datos reales.",
  "Prompt": "Instrucción, especificación contextual o conjunto de restricciones de entrada que se proporciona a un modelo de IA para guiar su inferencia y formato de salida.",
  "Algoritmo": "Conjunto finito de reglas matemáticas o pasos lógicos sistemáticos que un sistema informático ejecuta para procesar datos y resolver una tarea.",
  "Sesgos": "Distorsiones o prejuicios sistemáticos en las salidas de la IA derivados de desequilibrios históricos, culturales o estadísticos en sus datos de entrenamiento.",
  "LLM (Large Language Model)": "Gran modelo de lenguaje. Red neuronal profunda basada en la arquitectura Transformer entrenada con billones de tokens para procesar, razonar y generar lenguaje natural.",
  "LLM": "Siglas de Large Language Model (gran modelo de lenguaje). Motor fundacional capaz de comprender y generar texto, código y estructuras lógicas.",
  "RAG (Retrieval-Augmented Generation)": "Generación aumentada por recuperación. Arquitectura que conecta un modelo de lenguaje con bases de datos o documentos verificados en tiempo real antes de responder.",
  "RAG": "Siglas de Retrieval-Augmented Generation. Técnica que ancla las respuestas de la IA en fuentes externas verificables para mitigar alucinaciones.",
  "Agente autónomo": "Sistema de IA capaz de percibir su entorno, descomponer metas complejas, planificar acciones multi-paso y utilizar herramientas externas (vía MCP o APIs) con supervisión graduada.",
  "JSON": "JavaScript Object Notation. Formato ligero de intercambio de datos estructurados fundamental para conectar salidas de LLMs con software y funciones (Function Calling).",
  "Multimodalidad": "Capacidad nativa de un modelo para procesar, correlacionar y generar simultáneamente texto, imagen, audio, video y código en un mismo espacio de representación.",
  "Token": "Unidad mínima de procesamiento lingüístico (palabra, subpalabra o carácter) en que se divide la información al entrar y salir de un modelo Transformer.",
  "Temperatura": "Hiperparámetro de inferencia que regula la distribución de probabilidad en la elección de tokens: valores bajos (0.0-0.2) priorizan determinismo; valores altos (>0.7) aumentan diversidad.",
  "Alineación": "Disciplina de seguridad e ingeniería que busca garantizar que el comportamiento de los modelos y agentes respete las intenciones, leyes y valores éticos humanos.",
  "Ingeniería de prompts": "Disciplina de diseñar, estructurar y evaluar sistemáticamente las instrucciones, contextos y esquemas de control para dirigir modelos de lenguaje y razonamiento.",
  "Ingeniería de contexto": "Evolución avanzada del prompting enfocada en curar dinámicamente toda la información, memoria, herramientas MCP y restricciones que rodean la inferencia del modelo.",
  "Test-Time Compute": "Cómputo en tiempo de inferencia (TTC). Paradigma donde el modelo asigna tiempo y presupuesto de tokens adicionales ('thinking budget') para razonar, verificar hipótesis y autocorregirse antes de emitir la respuesta final.",
  "Model Context Protocol": "Estándar abierto universal (MCP) mantenido bajo la Linux Foundation que permite conectar de forma segura y homogénea modelos de IA con fuentes de datos, herramientas y entornos empresariales.",
  "MCP": "Siglas de Model Context Protocol. Protocolo estándar cliente-servidor (JSON-RPC) que elimina la fragmentación al conectar agentes de IA con bases de datos, repositorios y APIs.",
  "Protocolo A2A": "Agent-to-Agent Protocol. Estándar de interoperabilidad diseñado para que agentes autónomos desarrollados en distintos frameworks puedan descubrirse, negociar tareas y colaborar.",
  "SLM": "Small Language Model (Modelo de lenguaje pequeño). Modelos compactos de alta eficiencia (1B a 14B parámetros) capaces de ejecutarse localmente en dispositivos (Edge AI) con privacidad total.",
  "EU AI Act": "Reglamento Europeo de Inteligencia Artificial. Primer marco legal vinculante integral que clasifica los sistemas de IA según niveles de riesgo, imponiendo auditorías estrictas en educación y empleo.",
  "Parámetros": "Pesos sinápticos y variables numéricas internas que una red neuronal ajusta durante el entrenamiento y que codifican su conocimiento aprendido.",
  "Aprendizaje supervisado": "Paradigma donde el modelo aprende a partir de pares de entrada-salida etiquetados explícitamente por humanos o sistemas verificadores.",
  "Aprendizaje no supervisado": "Método de entrenamiento autosupervisado donde el modelo descubre estructuras semánticas y sintácticas ocultas en grandes volúmenes de datos sin etiquetar.",
  "Aprendizaje por refuerzo": "Paradigma donde un modelo o agente aprende mediante ensayo y error interactuando con un entorno o verificador formal (RLVR) que premia el razonamiento válido.",
  "Transfer Learning": "Capacidad de reutilizar las representaciones aprendidas por un modelo fundacional generalista para especializarlo rápidamente en un dominio técnico o pedagógico.",
  "Transfer learning": "Capacidad de reutilizar las representaciones aprendidas por un modelo fundacional generalista para especializarlo rápidamente en un dominio técnico o pedagógico.",
  "Agent-based modeling": "Modelado basado en agentes. Simulación computacional donde múltiples entidades autónomas interactúan para estudiar comportamientos emergentes organizacionales o sociales.",
  "Simulated annealing": "Recocido simulado. Algoritmo probabilístico de optimización global que permite escapar de óptimos locales al explorar espacios de decisión complejos.",
  "Genetic algorithms": "Algoritmos genéticos. Técnicas heurísticas de búsqueda inspiradas en la evolución biológica (selección, cruce y mutación) para optimizar soluciones.",
  "Ventana de contexto": "Capacidad máxima de memoria operativa (desde 128K hasta más de 2 millones de tokens) que un modelo puede atender en una sola sesión de trabajo.",
  "Fine-tuning": "Ajuste fino. Proceso de reentrenar selectivamente los pesos de un modelo preentrenado con un corpus especializado para adaptar su estilo, formato o dominio.",
  "Zero-shot": "Modalidad de inferencia donde el modelo resuelve una tarea directamente a partir de la instrucción sin recibir ejemplos previos en el prompt.",
  "Few-shot": "Técnica in-context learning donde se incluyen de 2 a 5 ejemplos demostrativos de entrada y salida esperada dentro del propio prompt.",
  "Top-P": "Muestreo por núcleo (Nucleus Sampling). Limita la selección del siguiente token al subconjunto más probable cuya suma acumulada alcanza el umbral P.",
  "Embeddings": "Vectores numéricos densos de alta dimensión que representan el significado semántico de textos, imágenes o audios en un espacio geométrico continuo.",
  "Base de datos vectorial": "Motor de almacenamiento e indexación matemática especializado en recuperar embeddings mediante cálculos de similitud coseno o producto punto.",
  "Inferencia": "Fase operativa en la que un modelo ya entrenado procesa nuevas entradas, ejecuta su presupuesto de razonamiento y genera una salida.",
  "Red neuronal": "Modelo computacional compuesto por capas de nodos interconectados que transforman señales mediante operaciones matriciales y funciones de activación.",
  "Deep Learning": "Aprendizaje profundo. Subcampo del Machine Learning basado en arquitecturas neuronales profundas (como Transformers y modelos de difusión).",
  "Machine Learning": "Aprendizaje automático. Ciencia de diseñar algoritmos que extraen patrones de los datos para generalizar hacia casos no vistos previamente.",
  "AGI (Inteligencia Artificial General)": "Sistema hipotético de IA con flexibilidad cognitiva general capaz de aprender, transferir conocimiento y operar al nivel de un experto humano en cualquier disciplina.",
  "Diseño instruccional": "Ingeniería pedagógica dedicada a planificar, estructurar y evaluar experiencias, recursos y entornos de aprendizaje efectivos y medibles.",
  "Evaluación formativa": "Proceso pedagógico continuo de recopilación de evidencias y retroalimentación oportuna para mejorar el aprendizaje durante su desarrollo.",
  "Taxonomía de Bloom": "Marco jerárquico de procesos cognitivos (recordar, comprender, aplicar, analizar, evaluar y crear) esencial para diseñar objetivos y rúbricas con IA.",
  "EdTech": "Tecnología educativa. Ecosistema de plataformas, metodologías instruccionales y sistemas de IA orientados a potenciar la enseñanza y el aprendizaje.",
  "Mapeo de competencias": "Proceso analítico de identificar habilidades demostradas en un dominio (como la docencia) y traducirlas a estándares de otro sector profesional.",
  "Prueba de Turing": "Experimento clásico propuesto por Alan Turing en 1950 para evaluar si una máquina puede exhibir un comportamiento conversacional indistinguible del humano.",
  "Procesamiento de Lenguaje Natural": "Rama de la IA y la lingüística computacional que permite a los sistemas informáticos analizar, comprender y sintetizar idiomas humanos.",
  "Visión por Computadora": "Disciplina de la IA que dota a las máquinas de la capacidad de interpretar imágenes, diagramas y secuencias de video del mundo físico.",
  "Sistemas expertos": "Primera generación de IA simbólica que codificaba explícitamente reglas 'si-entonces' extraídas de especialistas humanos junto a un motor de inferencia.",
  "Agente racional": "Entidad computacional que selecciona en cada instante la acción que maximiza el valor esperado de su métrica de rendimiento dadas sus percepciones.",
  "Modelado cognitivo": "Enfoque científico que busca construir sistemas computacionales cuyos mecanismos internos emulen los procesos psicológicos y neurocognitivos humanos.",
  "Leyes del pensamiento": "Tradición lógica iniciada por Aristóteles que establece reglas formales de deducción mediante las cuales premisas verdaderas conducen a conclusiones válidas.",
  "Cadena de pensamiento": "Chain-of-Thought (CoT). Descomposición explícita de un problema complejo en pasos intermedios secuenciales de razonamiento lógico.",
  "Prompting socrático": "Estrategia dialógica donde se configura a la IA para formular preguntas heurísticas progresivas en lugar de entregar respuestas cerradas, estimulando la metacognición.",
  "Modelo PROSE": "Marco estructurado de diseño de prompts compuesto por: Persona (P), Result (R), Objective (O), Scenario (S) y Extras (E).",
  "Modelo PARTE": "Metodología pedagógica de prompting impulsada por Google: Persona (P), Aim (A), Recipient (R), Theme/Task (T) y Expectations (E).",
  "Human-in-the-Loop (HITL)": "Principio de diseño y gobernanza donde el ser humano mantiene la supervisión activa, validación crítica y autorización final sobre las acciones de la IA.",
  "ReAct (Reason + Act)": "Arquitectura agéntica que alterna ciclos de pensamiento verbalizado (Reasoning), invocación de herramientas (Action) y lectura del entorno (Observation).",
  "Function Calling": "Capacidad técnica de un LLM para detectar cuándo necesita una herramienta externa y emitir un objeto JSON estructurado con el nombre de la función y sus parámetros.",
  "CoT": "Siglas de Chain-of-Thought (Cadena de pensamiento). Técnica base del razonamiento paso a paso en modelos de lenguaje.",
  "Thinking Humanly": "Enfoque de diseño de IA orientado a modelar cómo piensa internamente la mente humana (ciencias cognitivas).",
  "Thinking Rationally": "Enfoque de diseño de IA fundamentado en la lógica formal y la inferencia silogística irrefutable.",
  "Acting Humanly": "Enfoque operacional centrado en emular el comportamiento externo humano en la interacción comunicativa.",
  "Acting Rationally": "Enfoque estándar de la ingeniería de IA moderna orientado a construir agentes que actúan de forma óptima para cumplir objetivos.",
  "UNESCO AI": "Marco global de la UNESCO para la ética de la IA y marcos de competencias en IA para docentes y estudiantes, centrados en derechos humanos y agencia humana.",
  "PotencIA": "Marco institucional del Ministerio de Educación de Chile para orientar la integración pedagógica, ética y segura de la inteligencia artificial en el sistema educativo.",
  "DECIDE-IA": "Marco ético y metodológico de referencia para la toma de decisiones responsables, evaluación crítica y transparencia en el uso profesional de IA.",
  "Docente de educación secundaria": "Profesional de la educación que guía el desarrollo cognitivo, socioemocional y ético de adolescentes, diseñando secuencias didácticas y evaluaciones.",
  "Educación secundaria": "Etapa formativa clave enfocada en el pensamiento crítico, la alfabetización científica, humanista y la ciudadanía digital responsable.",
  "Transformer": "Arquitectura neuronal introducida en 2017 basada en capas de auto-atención paralela que sustenta tanto a los LLMs como a los modelos multimodales actuales.",
  "Mecanismo de atención": "Operación matricial (Query, Key, Value) que calcula dinámicamente el peso o relevancia contextual de cada token respecto a todos los demás.",
  "Codificación posicional": "Señal matemática inyectada en los embeddings de entrada para que el modelo Transformer distinga el orden secuencial y la distancia entre palabras.",
  "Tokenización": "Etapa inicial del procesamiento lingüístico que segmenta el texto crudo en tokens y los asigna a identificadores numéricos del vocabulario del modelo.",
  "NLU (Comprensión del Lenguaje Natural)": "Capacidad del sistema para extraer intención, entidades, relaciones semánticas y matices pragmáticos de un texto o discurso.",
  "NLG (Generación de Lenguaje Natural)": "Capacidad del sistema para planificar y redactar respuestas lingüísticas coherentes, precisas y adaptadas al registro solicitado.",
  "Singularidad": "Hipótesis prospectiva sobre el momento en que sistemas de IA capaces de automejora recursiva acelerarían el cambio tecnológico más allá de la predicción humana.",
  "Responsabilidad profesional": "Compromiso ético intransferible del profesional humano respecto a la veracidad, autoría, impacto y rigor de cualquier trabajo asistido por IA."
};

export const GlossaryTerm = ({ term, children }: { term: string; children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const definition = glossaryTerms[term] || "Concepto clave dentro de la arquitectura y ética de la inteligencia artificial contemporánea.";

  return (
    <span className="relative inline-block">
      <button 
        type="button"
        className="text-sky-700 dark:text-sky-300 font-medium underline decoration-sky-500/50 dark:decoration-sky-400/50 underline-offset-4 decoration-dotted hover:decoration-solid hover:text-sky-900 dark:hover:text-sky-200 transition-colors cursor-help px-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-expanded={isOpen}
      >
        {children || term}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.span 
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-72 md:w-80 p-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-xs md:text-sm rounded-xl shadow-xl pointer-events-auto block font-sans font-normal text-left"
          >
            <span className="flex items-center justify-between gap-2 mb-1.5 pb-1.5 border-b border-slate-100 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white font-semibold text-xs tracking-tight">{term}</strong>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">Glosario</span>
            </span>
            <span className="block leading-relaxed text-slate-600 dark:text-slate-300 text-xs">{definition}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export interface InfoCardProps {
  type?: 'idea' | 'conexion' | 'definicion' | 'reflexion' | 'practica' | 'ejemplo';
  color?: 'blue' | 'purple' | 'amber' | 'emerald' | 'rose';
  icon?: React.ComponentType<any>;
  title?: string;
  children: React.ReactNode;
}

export const InfoCard = ({ type = 'definicion', color, icon: CustomIcon, title, children }: InfoCardProps) => {
  const styles = {
    idea: { 
      surface: 'bg-amber-50/50 dark:bg-amber-950/15 border-amber-200/80 dark:border-amber-800/50', 
      kicker: 'text-amber-800 dark:text-amber-300',
      icon: Lightbulb, 
      defaultTitle: 'Idea clave'
    },
    conexion: { 
      surface: 'bg-emerald-50/50 dark:bg-emerald-950/15 border-emerald-200/80 dark:border-emerald-800/50', 
      kicker: 'text-emerald-800 dark:text-emerald-300',
      icon: LinkIcon, 
      defaultTitle: 'Conexión práctica'
    },
    definicion: { 
      surface: 'bg-sky-50/50 dark:bg-sky-950/15 border-sky-200/80 dark:border-sky-800/50', 
      kicker: 'text-sky-800 dark:text-sky-300',
      icon: Info, 
      defaultTitle: 'Definición formal'
    },
    reflexion: { 
      surface: 'bg-slate-100/80 dark:bg-slate-900/70 border-slate-200/90 dark:border-slate-800', 
      kicker: 'text-slate-700 dark:text-slate-300',
      icon: BrainCircuit, 
      defaultTitle: 'Marco de reflexión'
    },
    practica: { 
      surface: 'bg-sky-50/40 dark:bg-slate-900/80 border-sky-200/70 dark:border-sky-900/60', 
      kicker: 'text-sky-700 dark:text-sky-400',
      icon: TerminalSquare, 
      defaultTitle: 'Aplicación operativa'
    },
    ejemplo: { 
      surface: 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800', 
      kicker: 'text-slate-700 dark:text-slate-300',
      icon: Rocket, 
      defaultTitle: 'Caso aplicado'
    },
  };

  const colorMap = {
    blue: styles.definicion,
    emerald: styles.conexion,
    amber: styles.idea,
    purple: styles.reflexion,
    rose: {
      surface: 'bg-rose-50/50 dark:bg-rose-950/15 border-rose-200/80 dark:border-rose-800/50',
      kicker: 'text-rose-800 dark:text-rose-300',
      icon: AlertTriangle,
      defaultTitle: 'Atención crítica'
    }
  };

  const currentStyle = color ? colorMap[color] : styles[type];
  const Icon = CustomIcon || currentStyle.icon;
  const displayTitle = title || currentStyle.defaultTitle;

  return (
    <div className={cn(
      "my-4 p-5 rounded-xl border transition-colors",
      currentStyle.surface
    )}>
      <div className="flex items-center gap-2 text-xs font-semibold mb-2.5">
        <Icon size={15} className={cn("w-4 h-4 shrink-0", currentStyle.kicker)} />
        <span className={cn("tracking-tight", currentStyle.kicker)}>{displayTitle}</span>
        <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
        <span className="text-slate-500 dark:text-slate-400 font-normal">Nota conceptual</span>
      </div>
      <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs md:text-sm font-normal space-y-2">
        {children}
      </div>
    </div>
  );
};

export type QuizData = {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export type RichQuizOption = {
  label: string;
  isCorrect: boolean;
  explanation: string;
};

export type QuizComponentProps =
  | { quiz: QuizData; question?: never; options?: never }
  | { quiz?: never; question: string; options: RichQuizOption[] };

export const QuizComponent = (props: QuizComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const normalizedQuestion = props.quiz ? props.quiz.question : props.question;
  const normalizedOptions = props.quiz
    ? props.quiz.options.map((opt, idx) => ({
        label: opt,
        isCorrect: idx === props.quiz!.correctAnswerIndex,
        explanation: props.quiz!.explanation
      }))
    : props.options;

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [normalizedQuestion]);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const selectedObj = selectedOption !== null ? normalizedOptions[selectedOption] : null;
  const isCorrect = Boolean(selectedObj?.isCorrect);
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="mt-10 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors shadow-2xs">
      <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <BrainCircuit size={14} className="text-sky-600 dark:text-sky-400" />
            <span>Verificación de lectura</span>
            <span aria-hidden="true">·</span>
            <span>Autoevaluación formativa</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0 font-display">Comprueba tu comprensión</h3>
        </div>
        {isSubmitted && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Reintentar</span>
          </button>
        )}
      </div>
      
      <p className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-100 mb-5 leading-relaxed">{normalizedQuestion}</p>
      
      <div className="space-y-2.5 mb-6">
        {normalizedOptions.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const showCorrect = isSubmitted && option.isCorrect;
          const showWrong = isSubmitted && isSelected && !option.isCorrect;
          
          let buttonClass = "w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 text-xs md:text-sm cursor-pointer ";
          
          if (showCorrect) {
            buttonClass += "bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-500/70 text-emerald-950 dark:text-emerald-100";
          } else if (showWrong) {
            buttonClass += "bg-rose-50/80 dark:bg-rose-950/30 border-rose-500/70 text-rose-950 dark:text-rose-100";
          } else if (isSelected) {
            buttonClass += "bg-sky-50/90 dark:bg-sky-950/40 border-sky-500 text-sky-950 dark:text-sky-100";
          } else {
            buttonClass += "bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700";
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => !isSubmitted && setSelectedOption(idx)}
              disabled={isSubmitted}
              className={buttonClass}
            >
              <span className={cn(
                "flex-shrink-0 w-6 h-6 rounded-md text-xs font-mono font-semibold flex items-center justify-center border transition-colors mt-0.5 tabular-nums",
                showCorrect ? "bg-emerald-600 text-white border-emerald-600" :
                showWrong ? "bg-rose-600 text-white border-rose-600" :
                isSelected ? "bg-sky-600 text-white border-sky-600" :
                "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700"
              )}>
                {optionLetters[idx] || (idx + 1)}
              </span>
              <span className="flex-1 leading-relaxed">{option.label}</span>
              {showCorrect && (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={16} /> Correcta
                </span>
              )}
              {showWrong && (
                <span className="flex items-center gap-1 text-xs font-semibold text-rose-700 dark:text-rose-400 shrink-0 mt-0.5">
                  <XCircle size={16} /> Incorrecta
                </span>
              )}
            </button>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={cn(
            "px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-xs md:text-sm whitespace-nowrap cursor-pointer",
            selectedOption === null 
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 cursor-not-allowed" 
              : "bg-sky-600 hover:bg-sky-500 text-white"
          )}
        >
          <span>Comprobar respuesta</span>
          <ChevronRight size={15} />
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className={cn(
            "p-5 rounded-xl border",
            isCorrect ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60" : "bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/60"
          )}
        >
          <div className={cn("font-semibold text-sm mb-1.5 flex items-center gap-2", isCorrect ? "text-emerald-800 dark:text-emerald-300" : "text-amber-800 dark:text-amber-300")}>
            {isCorrect ? <><CheckCircle2 size={17} /> Respuesta fundamentada</> : <><AlertTriangle size={17} /> Revisión conceptual recomendada</>}
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm leading-relaxed m-0">
            {selectedObj?.explanation}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export type AccordionProps =
  | { title: string; icon?: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode; items?: never }
  | { items: { title: string; content: React.ReactNode }[]; title?: never; icon?: never; children?: never };

const SingleAccordionItem: React.FC<{ title: string; icon?: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }> = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn(
      "mb-3 rounded-xl border transition-colors duration-200 overflow-hidden",
      isOpen 
        ? "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900" 
        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50/80 dark:hover:bg-slate-900"
    )}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex justify-between items-center font-semibold text-slate-900 dark:text-slate-100 transition-colors text-left text-sm gap-4 cursor-pointer"
      >
        <span className="leading-snug flex items-center gap-3">
          {Icon && (
            <Icon size={18} className={cn("shrink-0 transition-colors", isOpen ? "text-sky-600 dark:text-sky-400" : "text-slate-400 dark:text-slate-500")} />
          )}
          <span>{title}</span>
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.18 }}
          className={cn(
            "shrink-0 p-1 rounded-md transition-colors",
            isOpen ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50" : "text-slate-400"
          )}
        >
          <ChevronRight size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-3 text-slate-700 dark:text-slate-300 text-xs md:text-sm border-t border-slate-100 dark:border-slate-800/70 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = (props: AccordionProps) => {
  if ('items' in props && props.items) {
    return (
      <div className="my-4">
        {props.items.map((item, idx) => (
          <SingleAccordionItem key={idx} title={item.title}>
            {item.content}
          </SingleAccordionItem>
        ))}
      </div>
    );
  }
  return (
    <SingleAccordionItem title={props.title} icon={props.icon}>
      {props.children}
    </SingleAccordionItem>
  );
};

export const AuthorNote = ({ title = "Perspectiva editorial", children }: { title?: string; children: React.ReactNode }) => {
  return (
    <div className="my-6 p-5 rounded-xl bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 flex items-start gap-3.5">
      <Info size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
          <strong className="font-semibold text-slate-900 dark:text-slate-200">{title}</strong>
          <span aria-hidden="true">·</span>
          <span>Guía práctica</span>
        </div>
        <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs md:text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Workflow = ({ steps }: { steps: { label: string; icon: any; description: string }[] }) => {
  return (
    <div className="my-8 space-y-3 relative">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-4 items-start p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 transition-colors"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 shrink-0 font-mono text-xs font-semibold">
            <step.icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span className="font-mono font-semibold text-sky-700 dark:text-sky-400 tabular-nums">0{index + 1}</span>
              <span aria-hidden="true">·</span>
              <h4 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 m-0">{step.label}</h4>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button 
      type="button"
      onClick={handleCopy} 
      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 hover:border-sky-500/40 transition-colors text-xs font-medium flex items-center gap-1.5 whitespace-nowrap shrink-0"
      title="Copiar texto"
    >
      {copied ? (
        <>
          <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-700 dark:text-emerald-400">Copiado</span>
        </>
      ) : (
        <>
          <Copy size={13} />
          <span>Copiar</span>
        </>
      )}
    </button>
  );
};

export const CodeBlock = ({ code, language = "prompt", title }: { code: string; language?: string; title?: string }) => {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
      <div className="bg-slate-900 px-4 py-2.5 text-xs text-slate-400 font-mono border-b border-slate-800 flex justify-between items-center">
        <span className="flex items-center gap-2 text-slate-200 font-medium">
          <TerminalSquare size={14} className="text-sky-400" />
          {title || `Especificación (${language})`}
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 text-xs md:text-sm overflow-x-auto text-slate-200 font-mono leading-relaxed custom-scrollbar whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.18 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl relative text-slate-800 dark:text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Documentación del proyecto</span>
              <span aria-hidden="true">·</span>
              <span>Edición actualizada 2026</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-display">Dominando la IA</h2>
          </div>
          <button type="button" onClick={onClose} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors">
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-6">
          <section className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Info size={16} className="text-sky-600 dark:text-sky-400" /> Propósito educativo y alcance
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              Manual interactivo diseñado para acompañar a docentes, especialistas en diseño instruccional y profesionales en la comprensión rigurosa de los fundamentos de la IA generativa, modelos de razonamiento (Test-Time Compute), ingeniería de contexto, protocolo MCP, arquitecturas multiagente y gobernanza ética (UNESCO, EU AI Act, marcos PotencIA y DECIDE-IA).
            </p>
          </section>

          <div className="grid sm:grid-cols-2 gap-4">
            <section className="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Layers size={15} className="text-sky-600 dark:text-sky-400" /> Arquitectura de contenidos
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                9 módulos estructurados con recursos interactivos, explorador del marco PEAS, comparativas de modelos de frontera, catálogo de técnicas y evaluaciones formativas.
              </p>
            </section>

            <section className="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <TerminalSquare size={15} className="text-emerald-600 dark:text-emerald-400" /> Ingeniería de software
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Construido con React, TypeScript, Tailwind CSS 4, Framer Motion e integración con la API de Gemini en servidor para el mapeo de competencias en vivo.
              </p>
            </section>
          </div>

          <section className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-0.5">
                  <span>Autoría y dirección académica</span>
                  <span aria-hidden="true">·</span>
                  <span>Código abierto</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Francisco Sereño Ahumada</h3>
                <p className="text-xs font-medium text-sky-700 dark:text-sky-400 mt-0.5">
                  Líder de Tecnologías Educativas e Inteligencia Artificial · Vicerrectoría de Tecnologías de la Información (VTI), Universidad de Chile
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <a 
                  href="https://portafolio.franciscosereno.cl/sobre-mi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium transition-colors whitespace-nowrap"
                >
                  <span>Portafolio</span>
                  <ExternalLink size={13} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/franciscosereno/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-medium transition-colors whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/80 dark:border-slate-800 pt-3">
              Doctorando (PhDc) en Educación y Sociedad y máster en Entornos de Enseñanza y Aprendizaje Mediados por Tecnologías Digitales (Universidad de Barcelona); magíster en Pedagogía Universitaria y profesor (UMCE). Especialista en innovación educativa, alfabetización algorítmica e integración ética de la inteligencia artificial en la educación superior.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
