import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, 
  Sparkles, BrainCircuit, AlertTriangle, MapPin, 
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

// --- GLOSSARY DATA ---
export const glossaryTerms: Record<string, string> = {
  "IA generativa": "Rama de la inteligencia artificial que crea contenido original (texto, imágenes, audio o código) a partir de patrones aprendidos en grandes volúmenes de datos.",
  "IA tradicional": "Sistemas diseñados para analizar datos, reconocer patrones y realizar predicciones o clasificaciones basadas en reglas, sin generar contenido nuevo.",
  "Alucinaciones": "Fenómeno donde un modelo de IA genera información que parece coherente y verídica, pero que es incorrecta o inventada.",
  "Prompt": "Instrucción, pregunta o texto de entrada que se proporciona a un modelo de IA para guiar su respuesta o la creación de contenido.",
  "Algoritmo": "Conjunto de reglas o pasos lógicos que un sistema informático sigue para procesar información y resolver una tarea específica.",
  "Sesgos": "Prejuicios o errores sistemáticos en los resultados de la IA, causados generalmente por desequilibrios en los datos usados durante su entrenamiento.",
  "LLM (Large Language Model)": "Gran modelo de lenguaje. Modelo de IA entrenado con billones de palabras para comprender y generar lenguaje humano de forma natural.",
  "LLM": "Siglas de Large Language Model (gran modelo de lenguaje). Modelo de IA entrenado con billones de palabras para comprender y generar lenguaje humano.",
  "RAG (Retrieval-Augmented Generation)": "Técnica que permite a la IA consultar fuentes externas de confianza en tiempo real para dar respuestas más precisas, actualizadas y fundamentadas.",
  "RAG": "Siglas de Retrieval-Augmented Generation. Técnica que permite a la IA consultar fuentes externas de confianza para dar respuestas más precisas y actualizadas.",
  "Agente autónomo": "Sistema de IA capaz de percibir su entorno, razonar sobre objetivos y ejecutar acciones de forma independiente para completar tareas complejas sin intervención humana constante.",
  "JSON": "JavaScript Object Notation. Formato de texto ligero para el intercambio de datos, fácil de leer y escribir para humanos, y de interpretar y generar para las máquinas.",
  "Multimodalidad": "Capacidad de un modelo de IA para procesar, entender y generar simultáneamente diferentes tipos de datos, como texto, imagen y sonido.",
  "Token": "Unidad mínima de información (como una sílaba o palabra corta) que los modelos de lenguaje utilizan para procesar y generar texto.",
  "Temperatura": "Parámetro de configuración que determina el nivel de creatividad o aleatoriedad en las respuestas de un modelo de IA.",
  "Alineación": "Campo de estudio que busca asegurar que los objetivos y comportamientos de los sistemas de IA coincidan con los valores e intenciones humanas.",
  "Ingeniería de prompts": "Práctica de diseñar, refinar y optimizar las instrucciones de entrada para obtener los mejores resultados posibles de un modelo de IA.",
  "Parámetros": "Variables internas de un modelo de IA que se ajustan durante el entrenamiento y que determinan cómo el sistema procesa la información.",
  "Aprendizaje supervisado": "Tipo de aprendizaje automático donde el modelo se entrena con datos etiquetados, es decir, con ejemplos que ya incluyen la respuesta correcta.",
  "Aprendizaje no supervisado": "Método de entrenamiento donde el modelo busca patrones, estructuras o agrupaciones en datos que no tienen etiquetas ni respuestas predefinidas.",
  "Aprendizaje por refuerzo": "Técnica de aprendizaje basada en la interacción con un entorno, donde el sistema recibe recompensas o penalizaciones para aprender a tomar decisiones óptimas.",
  "Transfer Learning": "Capacidad de un modelo para aplicar conocimientos adquiridos en una tarea previa a un problema nuevo pero relacionado, acelerando su entrenamiento.",
  "Agent-based modeling": "Modelado basado en agentes. Simulación computacional donde múltiples 'agentes' autónomos interactúan en un entorno. En el desarrollo profesional, ayuda a predecir dinámicas de mercado y comportamientos organizacionales.",
  "Simulated annealing": "Recocido simulado. Algoritmo de optimización inspirado en la metalurgia. En IA, permite a los modelos escapar de soluciones subóptimas (óptimos locales) para encontrar la mejor estrategia global, útil para resolver problemas complejos de planificación.",
  "Genetic algorithms": "Algoritmos genéticos. Métodos de búsqueda y optimización basados en la evolución natural (selección, mutación, cruce). Se utilizan en IA para evolucionar soluciones a problemas complejos, iterando estrategias hasta encontrar la más eficiente.",
  "Ventana de contexto": "Cantidad máxima de texto (medida en tokens) que un modelo de IA puede procesar y 'recordar' en una sola interacción.",
  "Fine-tuning": "Ajuste fino. Proceso de reentrenar un modelo de IA preexistente con un conjunto de datos más pequeño y específico para adaptarlo a una tarea particular.",
  "Zero-shot": "Técnica de prompting donde se le pide a la IA que realice una tarea sin proporcionarle ningún ejemplo previo.",
  "Few-shot": "Técnica de prompting donde se proporcionan algunos ejemplos (generalmente de 2 a 5) para guiar a la IA sobre cómo debe responder.",
  "Top-P": "Parámetro de muestreo que controla la diversidad de las respuestas de la IA limitando la selección a un subconjunto de palabras probables.",
  "Embeddings": "Representaciones matemáticas (vectores) de palabras, frases o imágenes que permiten a la IA comprender relaciones semánticas y similitudes.",
  "Base de datos vectorial": "Sistema de almacenamiento optimizado para guardar y buscar 'embeddings', fundamental para técnicas como RAG.",
  "Inferencia": "Fase en la que un modelo de IA entrenado se utiliza para hacer predicciones o generar contenido a partir de nuevos datos de entrada.",
  "Red neuronal": "Arquitectura computacional inspirada en el cerebro humano, compuesta por capas de nodos interconectados (neuronas artificiales).",
  "Deep Learning": "Aprendizaje profundo. Subcampo del aprendizaje automático que utiliza redes neuronales con múltiples capas para modelar patrones complejos.",
  "Machine Learning": "Aprendizaje automático. Rama de la IA que permite a los sistemas aprender y mejorar a partir de la experiencia sin ser programados explícitamente.",
  "AGI (Inteligencia Artificial General)": "Nivel teórico de IA que igualaría o superaría la capacidad humana para comprender, aprender y realizar cualquier tarea intelectual.",
  "Diseño instruccional": "Disciplina de planificar, diseñar y crear recursos educativos, secuencias didácticas y entornos de aprendizaje adaptados a objetivos pedagógicos claros.",
  "Evaluación formativa": "Proceso continuo de recolección de evidencias sobre el aprendizaje para realizar ajustes pedagógicos oportunos y entregar retroalimentación constructiva.",
  "Taxonomía de Bloom": "Clasificación jerárquica de objetivos educativos organizada en niveles de complejidad cognitiva (recordar, comprender, aplicar, analizar, evaluar, crear).",
  "EdTech": "Tecnología educativa. Uso estratégico de herramientas digitales, plataformas e IA para potenciar los procesos de enseñanza y aprendizaje.",
  "Mapeo de competencias": "Proceso de identificar, estructurar y articular las habilidades pedagógicas y técnicas de una persona con requerimientos de roles profesionales.",
  "Prueba de Turing": "Evaluación propuesta por Alan Turing para determinar si el comportamiento conversacional de una máquina es indistinguible del de un ser humano.",
  "Procesamiento de Lenguaje Natural": "Subcampo de la IA enfocado en la capacidad de las computadoras para entender, interpretar y generar lenguaje humano de forma natural.",
  "Visión por Computadora": "Campo de la IA que entrena a las computadoras para interpretar y comprender el mundo visual a partir de imágenes o videos.",
  "Sistemas expertos": "Programas de IA diseñados para emular la capacidad de toma de decisiones y asesoría de un especialista humano en un dominio específico.",
  "Agente racional": "Sistema que percibe su entorno y actúa de la manera más conveniente para lograr el mejor resultado esperado según sus metas.",
  "Modelado cognitivo": "Enfoque de la IA que busca simular los procesos de pensamiento, percepción y razonamiento del cerebro humano.",
  "Leyes del pensamiento": "Principios de la lógica formal orientados a establecer reglas irrefutables de inferencia y razonamiento válido.",
  "Cadena de pensamiento": "Técnica de prompting que solicita a la IA mostrar su proceso de razonamiento paso a paso antes de dar su respuesta final.",
  "Prompting socrático": "Metodología de interacción donde la IA actúa como facilitadora, haciendo preguntas reflexivas para guiar la metacognición del usuario.",
  "Modelo PROSE": "Marco de diseño de prompts en 5 pilares: Persona (P), Result (R), Objective (O), Scenario (S) y Extras (E).",
  "Modelo PARTE": "Marco de diseño de prompts enfocado en el destinatario: Persona (P), Aim (A), Recipient (R), Theme/Task (T) y Expectations (E).",
  "Human-in-the-Loop (HITL)": "Enfoque donde una persona supervisa, valida y aprueba las acciones tomadas por un sistema o agente de IA antes de su ejecución final.",
  "ReAct (Reason + Act)": "Patrón de diseño agéntico que combina el razonamiento paso a paso con la ejecución de acciones en herramientas o entornos externos.",
  "Function Calling": "Capacidad de un modelo de IA para generar llamadas estructuradas (como objetos JSON) a APIs o funciones de software externas.",
  "CoT": "Abreviatura de Chain-of-Thought (Cadena de pensamiento). Técnica que estimula al modelo a explicar su lógica paso a paso.",
  "Thinking Humanly": "Enfoque de la IA enfocado en modelar y replicar el pensamiento y la psicología de la mente humana.",
  "Thinking Rationally": "Enfoque de la IA basado en la lógica formal para derivar conclusiones irrefutables.",
  "Acting Humanly": "Enfoque operacional centrado en superar la Prueba de Turing mediante comportamientos conversacionales humanos.",
  "Acting Rationally": "Enfoque centrado en agentes inteligentes que actúan de manera óptima para alcanzar metas definidas.",
  "UNESCO AI": "Recomendación y marcos de la UNESCO sobre la ética de la inteligencia artificial, promoviendo el uso inclusivo, equitativo y seguro de la IA.",
  "PotencIA": "Marco institucional de orientación para la integración ética y pedagógica de la inteligencia artificial en el ámbito educativo.",
  "DECIDE-IA": "Marco metodológico y ético de referencia para la toma de decisiones informadas y responsables en el uso de herramientas de IA.",
  "Docente de educación secundaria": "Docente que imparte asignaturas formales a estudiantes de nivel secundario, guiando secuencias didácticas y evaluaciones formativas.",
  "Educación secundaria": "Nivel educativo centrado en adolescentes, orientado al desarrollo de competencias analíticas, científicas, humanistas e integración digital.",
  "Transformer": "Arquitectura de red neuronal introducida en 2017 basada en mecanismos de atención, pilar fundamental de los modelos de lenguaje modernos.",
  "Mecanismo de atención": "Componente de la arquitectura Transformer que evalúa la relevancia relativa de cada palabra en relación con el resto del contexto.",
  "Codificación posicional": "Técnica que asigna información de orden a los elementos en una secuencia dentro de un modelo Transformer.",
  "Tokenización": "Proceso de fragmentar un texto en unidades menores (tokens) para su procesamiento numérico en modelos de lenguaje.",
  "NLU (Comprensión del Lenguaje Natural)": "Subcampo de la IA enfocado en interpretar la intención, estructura semántica y significado del lenguaje humano.",
  "NLG (Generación de Lenguaje Natural)": "Subcampo de la IA enfocado en producir texto fluido y coherente a partir de representaciones de datos.",
  "Singularidad": "Hipótesis teórica que plantea la aparición de una inteligencia artificial autocorrectiva que supere exponencialmente a la humana.",
  "Responsabilidad profesional": "Principio ético que demanda veracidad, honestidad y criterio pedagógico en el uso de herramientas de IA en el ámbito educativo."
};

export const GlossaryTerm = ({ term, children }: { term: string; children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const definition = glossaryTerms[term] || "Definición no encontrada.";

  return (
    <span className="relative inline-block group">
      <button 
        className="text-indigo-700 dark:text-indigo-300 font-medium underline decoration-indigo-400/50 dark:decoration-indigo-400/40 underline-offset-4 decoration-dashed hover:decoration-indigo-600 dark:hover:decoration-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition-all duration-200 cursor-help bg-indigo-500/10 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded-md hover:bg-indigo-500/20"
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
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 md:w-80 p-5 bg-white/90 dark:bg-slate-900/80 backdrop-blur-3xl text-slate-900 dark:text-slate-100 border border-slate-200/50 dark:border-indigo-500/30 text-sm rounded-2xl shadow-[0_8px_32px_rgba(79,70,229,0.15)] dark:shadow-[0_8px_32px_rgba(79,70,229,0.25)] pointer-events-auto"
          >
            {/* Glossy gradient accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />
            
            <span className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                <BookOpen size={14} />
              </div>
              <strong className="text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-widest">{term}</strong>
            </span>
            <span className="block leading-relaxed text-slate-600 dark:text-slate-300 text-xs md:text-sm">{definition}</span>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-slate-900"></span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export const InfoCard = ({ type, title, children }: { type: 'idea' | 'conexion' | 'definicion' | 'reflexion' | 'practica' | 'ejemplo'; title?: string; children: React.ReactNode; }) => {
  const styles = {
    idea: { 
      bg: 'from-amber-500/10 via-amber-500/5 to-white dark:from-amber-500/10 dark:via-slate-900/90 dark:to-slate-950/90', 
      border: 'border-amber-300 dark:border-amber-500/30 hover:border-amber-400 dark:hover:border-amber-500/60', 
      badgeBg: 'bg-amber-500/15 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-500/30',
      icon: Lightbulb, 
      iconColor: 'text-amber-600 dark:text-amber-400',
      defaultTitle: 'Idea clave'
    },
    conexion: { 
      bg: 'from-emerald-500/10 via-emerald-500/5 to-white dark:from-emerald-500/10 dark:via-slate-900/90 dark:to-slate-950/90', 
      border: 'border-emerald-300 dark:border-emerald-500/30 hover:border-emerald-400 dark:hover:border-emerald-500/60', 
      badgeBg: 'bg-emerald-500/15 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30',
      icon: LinkIcon, 
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      defaultTitle: 'Conexión'
    },
    definicion: { 
      bg: 'from-blue-500/10 via-blue-500/5 to-white dark:from-blue-500/10 dark:via-slate-900/90 dark:to-slate-950/90', 
      border: 'border-blue-300 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-500/60', 
      badgeBg: 'bg-blue-500/15 text-blue-900 dark:text-blue-300 border-blue-300 dark:border-blue-500/30',
      icon: Info, 
      iconColor: 'text-blue-600 dark:text-blue-400',
      defaultTitle: 'Definición'
    },
    reflexion: { 
      bg: 'from-purple-500/10 via-purple-500/5 to-white dark:from-purple-500/10 dark:via-slate-900/90 dark:to-slate-950/90', 
      border: 'border-purple-300 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-500/60', 
      badgeBg: 'bg-purple-500/15 text-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-500/30',
      icon: BrainCircuit, 
      iconColor: 'text-purple-600 dark:text-purple-400',
      defaultTitle: 'Para reflexionar'
    },
    practica: { 
      bg: 'from-pink-500/10 via-pink-500/5 to-white dark:from-pink-500/10 dark:via-slate-900/90 dark:to-slate-950/90', 
      border: 'border-pink-300 dark:border-pink-500/30 hover:border-pink-400 dark:hover:border-pink-500/60', 
      badgeBg: 'bg-pink-500/15 text-pink-900 dark:text-pink-300 border-pink-300 dark:border-pink-500/30',
      icon: TerminalSquare, 
      iconColor: 'text-pink-600 dark:text-pink-400',
      defaultTitle: 'Aplicación práctica'
    },
    ejemplo: { 
      bg: 'from-indigo-500/10 via-indigo-500/5 to-white dark:from-indigo-500/10 dark:via-slate-900/90 dark:to-slate-950/90', 
      border: 'border-indigo-300 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-500/60', 
      badgeBg: 'bg-indigo-500/15 text-indigo-900 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/30',
      icon: Rocket, 
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      defaultTitle: 'Ejemplo'
    },
  };

  const currentStyle = styles[type];
  const Icon = currentStyle.icon;
  const displayTitle = title || currentStyle.defaultTitle;

  return (
    <div className={cn(
      "group relative p-6 md:p-7 rounded-3xl backdrop-blur-xl my-8 bg-gradient-to-br border shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden",
      currentStyle.bg,
      currentStyle.border
    )}>
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 dark:bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3 group-hover:scale-150 transition-transform duration-700 ease-out" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className={cn("p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-sm shrink-0", currentStyle.iconColor)}>
          <Icon size={24} />
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={cn("inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-bold border backdrop-blur-sm", currentStyle.badgeBg)}>
              {displayTitle}
            </span>
          </div>
          <div className="text-slate-800 dark:text-slate-200 leading-relaxed text-sm md:text-base font-normal">
            {children}
          </div>
        </div>
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

export const QuizComponent = ({ quiz }: { quiz: QuizData }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [quiz]);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption === quiz.correctAnswerIndex;
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="mt-12 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/30 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-500/20 dark:border-indigo-500/30 shadow-inner">
            <BrainCircuit size={22} />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold block">Evaluación interactiva</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 m-0">Ponte a prueba</h3>
          </div>
        </div>
        {isSubmitted && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-white/5 transition-all"
            title="Reintentar pregunta"
          >
            <RotateCcw size={13} />
            <span>Reintentar</span>
          </button>
        )}
      </div>
      
      <p className="text-base md:text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 leading-relaxed">{quiz.question}</p>
      
      <div className="space-y-3 mb-6">
        {quiz.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const showCorrect = isSubmitted && idx === quiz.correctAnswerIndex;
          const showWrong = isSubmitted && isSelected && !isCorrect;
          
          let buttonClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 text-sm md:text-base ";
          
          if (showCorrect) {
            buttonClass += "bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500/60 text-emerald-900 dark:text-emerald-100 shadow-sm";
          } else if (showWrong) {
            buttonClass += "bg-red-500/15 dark:bg-red-500/20 border-red-500/60 text-red-900 dark:text-red-100";
          } else if (isSelected) {
            buttonClass += "bg-indigo-500/15 dark:bg-indigo-500/25 border-indigo-500/60 text-indigo-950 dark:text-indigo-100 shadow-sm";
          } else {
            buttonClass += "bg-slate-50 dark:bg-slate-800/40 border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/30";
          }

          return (
            <button
              key={idx}
              onClick={() => !isSubmitted && setSelectedOption(idx)}
              disabled={isSubmitted}
              className={buttonClass}
            >
              <span className={cn(
                "flex-shrink-0 w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center border transition-colors mt-0.5",
                showCorrect ? "bg-emerald-500 text-white border-emerald-400" :
                showWrong ? "bg-red-500 text-white border-red-400" :
                isSelected ? "bg-indigo-600 text-white border-indigo-400" :
                "bg-slate-200 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-white/10"
              )}>
                {optionLetters[idx] || (idx + 1)}
              </span>
              <span className="flex-1 leading-normal pt-0.5 font-normal">{option}</span>
              {showCorrect && <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" size={20} />}
              {showWrong && <XCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={20} />}
            </button>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={cn(
            "w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm",
            selectedOption === null 
              ? "bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/5 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          )}
        >
          <span>Comprobar respuesta</span>
          <ChevronRight size={16} />
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", bounce: 0.3 }}
          className={cn(
            "p-6 rounded-2xl border relative overflow-hidden",
            isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-amber-500/10 border-amber-500/30"
          )}
        >
          {isCorrect && (
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 0.1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -right-4 -top-4 text-emerald-500 pointer-events-none"
            >
              <Sparkles size={120} />
            </motion.div>
          )}
          <h4 className={cn("font-bold text-base md:text-lg mb-2 flex items-center gap-2", isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-amber-700 dark:text-amber-400")}>
            {isCorrect ? <><CheckCircle2 size={20} /> ¡Correcto!</> : <><AlertTriangle size={20} /> Respuesta incorrecta</>}
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed relative z-10 m-0">{quiz.explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export const Accordion = ({ title, icon: Icon, children }: { title: string; icon?: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn(
      "mb-4 rounded-3xl border transition-all duration-300 overflow-hidden relative group",
      isOpen 
        ? "border-indigo-300/80 dark:border-indigo-500/40 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl" 
        : "border-slate-200/80 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 hover:border-slate-300/80 dark:hover:border-slate-700/80"
    )}>
      {isOpen && (
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/80 dark:bg-indigo-400/80" />
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center font-bold text-slate-800 dark:text-slate-200 transition-colors text-left text-sm md:text-base gap-4"
      >
        <span className="leading-snug flex items-center gap-3">
          {Icon && (
            <div className={cn(
              "p-2 rounded-xl transition-colors duration-300", 
              isOpen ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
            )}>
              <Icon size={20} className="shrink-0" />
            </div>
          )}
          {title}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "shrink-0 p-1.5 rounded-full border transition-colors",
            isOpen ? "bg-indigo-600 text-white border-indigo-600 shadow-md" : "bg-white dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-white/10 group-hover:text-indigo-500"
          )}
        >
          <ChevronRight size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-slate-700 dark:text-slate-300 text-sm md:text-base ml-0 md:ml-[3.25rem] border-t border-slate-200/50 dark:border-white/5 md:border-none md:pt-0">
              <div className="leading-relaxed">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AuthorNote = ({ title = "Nota del autor", children }: { title?: string; children: React.ReactNode }) => {
  return (
    <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-white dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-slate-900/40 border border-indigo-200 dark:border-indigo-500/30 flex items-start gap-4 shadow-md dark:shadow-lg relative overflow-hidden">
      <div className="p-2.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 shrink-0 mt-0.5">
        <Info size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-base md:text-lg mb-1.5 text-indigo-900 dark:text-indigo-300 tracking-tight">{title}</h4>
        <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base italic">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Workflow = ({ steps }: { steps: { label: string; icon: any; description: string }[] }) => {
  return (
    <div className="my-10 space-y-4 relative">
      {/* Vertical connector line */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-indigo-500/10 hidden md:block" />
      
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="relative flex flex-col md:flex-row gap-6 items-start group"
        >
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-400 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-400 z-10 shrink-0 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 group-hover:scale-105 transition-all duration-300 shadow-md dark:shadow-xl">
            <step.icon size={24} />
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex-1 hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="md:hidden p-2 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/30">
                <step.icon size={18} />
              </div>
              <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">Paso {index + 1}</span>
              <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">{step.label}</h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">
              {step.description}
            </p>
          </div>
        </motion.div>
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
      onClick={handleCopy} 
      className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/50 hover:bg-slate-700 transition-all text-xs font-mono flex items-center gap-1.5"
      title="Copiar texto"
    >
      {copied ? (
        <>
          <Check size={14} className="text-emerald-400" />
          <span className="text-emerald-400 font-sans">Copiado</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span className="font-sans">Copiar</span>
        </>
      )}
    </button>
  );
};

export const CodeBlock = ({ code, language = "prompt", title }: { code: string; language?: string; title?: string }) => {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
      <div className="bg-slate-900 px-4 py-2.5 text-xs text-slate-400 font-mono border-b border-slate-800 flex justify-between items-center">
        <span className="flex items-center gap-2 text-indigo-300 font-semibold">
          <TerminalSquare size={14} />
          {title || `Ejemplo de ${language}`}
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 md:p-5 text-sm overflow-x-auto text-slate-200 font-mono leading-relaxed custom-scrollbar whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-xl" onClick={onClose}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl relative text-slate-800 dark:text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none rounded-t-3xl" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-1 block">Información de la guía</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">Acerca de esta guía</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Desarrollado por Francisco Sereño</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/10">
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-6 relative z-10">
          <motion.section variants={itemVariants} className="bg-slate-50 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-slate-900/80 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-inner">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Info size={18} className="text-blue-600 dark:text-blue-400" /> Objetivo educativo
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              Esta guía interactiva ha sido diseñada para acompañar a profesionales en su proceso de aprendizaje y aplicación de técnicas de <strong>prompting</strong> en la innovación pedagógica y reconversión profesional, proporcionando un marco ético y práctico.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 px-1">
              <Sparkles size={18} className="text-amber-500 dark:text-amber-400" /> Funciones principales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Layers, text: "Contenido modular interactivo", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-500/10" },
                { icon: Compass, text: "Navegación por secciones", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10" },
                { icon: BookOpen, text: "Glosario interactivo integrado", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10" },
                { icon: HelpCircle, text: "Ejemplos y cuestionarios prácticos", color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-500/10" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 transition-all">
                  <div className={cn("p-2 rounded-lg shrink-0", item.bg)}>
                    <item.icon size={16} className={item.color} />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid sm:grid-cols-2 gap-4">
            <motion.section variants={itemVariants} className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <TerminalSquare size={16} className="text-emerald-600 dark:text-emerald-400" /> Stack tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Code2, text: "React 18" },
                  { icon: FileCode2, text: "TypeScript" },
                  { icon: Zap, text: "Vite" },
                  { icon: Palette, text: "Tailwind CSS 4" }
                ].map((tech, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
                    <tech.icon size={12} className="text-slate-400 dark:text-slate-500" /> {tech.text}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-white/5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Rocket size={16} className="text-pink-600 dark:text-pink-400" /> Stack gráfico
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: MonitorPlay, text: "Framer Motion" },
                  { icon: Smile, text: "Lucide Icons" },
                  { icon: Type, text: "IBM Plex Sans" }
                ].map((tech, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
                    <tech.icon size={12} className="text-slate-400 dark:text-slate-500" /> {tech.text}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section variants={itemVariants} className="relative overflow-hidden bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-500/20 text-center flex flex-col items-center justify-center mt-2">
            <div className="p-2.5 bg-indigo-500/15 rounded-full mb-3 border border-indigo-500/20">
              <User size={20} className="text-indigo-600 dark:text-indigo-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">Francisco Sereño</h3>
            <p className="text-indigo-700 dark:text-indigo-300/80 text-xs mb-4 font-medium">Desarrollador y autor</p>
            <a 
              href="https://www.linkedin.com/in/francisco-sereno/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-medium transition-all shadow-md hover:-translate-y-0.5"
            >
              <ExternalLink size={14} /> Conectar en LinkedIn
            </a>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};
