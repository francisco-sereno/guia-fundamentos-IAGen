import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, 
  Sparkles, BrainCircuit, AlertTriangle, MapPin, 
  TerminalSquare, ShieldCheck, Rocket, CheckCircle2,
  Info, Lightbulb, Link as LinkIcon, XCircle, Copy, Check
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
  "Genetic algorithms": "Algoritmos genéticos. Métodos de búsqueda y optimización basados en la evolución natural (selección, mutación, cruce). Se utilizan en IA para evolucionar soluciones a problemas complejos, iterando estrategias hasta encontrar la más eficiente."
};

export const GlossaryTerm = ({ term, children }: { term: string; children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const definition = glossaryTerms[term] || "Definición no encontrada.";

  return (
    <span className="relative inline-block group">
      <button 
        className="text-indigo-300 font-medium border-b border-indigo-400/30 hover:border-indigo-400 hover:text-indigo-200 transition-all duration-300 cursor-help"
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 p-5 bg-slate-800/95 backdrop-blur-xl border border-indigo-500/30 text-slate-200 text-sm rounded-2xl shadow-2xl pointer-events-none"
          >
            <strong className="block text-indigo-300 mb-2 font-mono text-xs uppercase tracking-wider">{term}</strong>
            <span className="leading-relaxed">{definition}</span>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-slate-800/95"></span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export const InfoCard = ({ type, title, children }: { type: 'idea' | 'conexion' | 'definicion' | 'reflexion' | 'practica' | 'ejemplo'; title?: string; children: React.ReactNode; }) => {
  const styles = {
    idea: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: Lightbulb, iconColor: 'text-amber-400' },
    conexion: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: LinkIcon, iconColor: 'text-emerald-400' },
    definicion: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Info, iconColor: 'text-blue-400' },
    reflexion: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: BrainCircuit, iconColor: 'text-purple-400' },
    practica: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', icon: TerminalSquare, iconColor: 'text-pink-400' },
    ejemplo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', icon: Rocket, iconColor: 'text-indigo-400' },
  };

  const currentStyle = styles[type];
  const Icon = currentStyle.icon;

  return (
    <div className={cn("relative p-6 rounded-2xl backdrop-blur-sm my-8 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/80 border border-white/10 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1")}>
      <div className="flex items-start gap-4">
        <div className={cn("p-3 rounded-xl bg-slate-900/50 border border-white/5 shadow-inner", currentStyle.iconColor)}>
          <Icon size={24} />
        </div>
        <div className="flex-1">
          {title && <h4 className={cn("font-bold text-lg mb-2", currentStyle.iconColor)}>{title}</h4>}
          <div className="text-slate-300 leading-relaxed text-sm md:text-base">
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

  const isCorrect = selectedOption === quiz.correctAnswerIndex;

  return (
    <div className="mt-12 p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-indigo-500/20 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
          <BrainCircuit size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-100 m-0">Ponte a prueba</h3>
      </div>
      
      <p className="text-lg text-slate-300 mb-6">{quiz.question}</p>
      
      <div className="space-y-3 mb-6">
        {quiz.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const showCorrect = isSubmitted && idx === quiz.correctAnswerIndex;
          const showWrong = isSubmitted && isSelected && !isCorrect;
          
          let buttonClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ";
          
          if (showCorrect) {
            buttonClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-200";
          } else if (showWrong) {
            buttonClass += "bg-red-500/20 border-red-500/50 text-red-200";
          } else if (isSelected) {
            buttonClass += "bg-indigo-500/20 border-indigo-500/50 text-indigo-200";
          } else {
            buttonClass += "bg-slate-800/50 border-white/5 text-slate-300 hover:bg-slate-800 hover:border-white/10";
          }

          return (
            <button
              key={idx}
              onClick={() => !isSubmitted && setSelectedOption(idx)}
              disabled={isSubmitted}
              className={buttonClass}
            >
              <span>{option}</span>
              {showCorrect && <CheckCircle2 className="text-emerald-400 flex-shrink-0 ml-3" size={20} />}
              {showWrong && <XCircle className="text-red-400 flex-shrink-0 ml-3" size={20} />}
            </button>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={cn(
            "px-6 py-3 rounded-xl font-medium transition-all duration-300",
            selectedOption === null 
              ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:-translate-y-0.5"
          )}
        >
          Comprobar respuesta
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className={cn(
            "p-6 rounded-xl border mt-6 relative overflow-hidden",
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
          <h4 className={cn("font-bold text-lg mb-3 flex items-center gap-2", isCorrect ? "text-emerald-400" : "text-amber-400")}>
            {isCorrect ? <><CheckCircle2 size={24} /> ¡Excelente!</> : <><AlertTriangle size={24} /> Sigue intentando</>}
          </h4>
          <p className="text-slate-300 text-base leading-relaxed relative z-10">{quiz.explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn(
      "mb-4 rounded-xl border transition-all duration-300 overflow-hidden",
      isOpen ? "border-indigo-500/30 bg-slate-800/80 shadow-lg" : "border-slate-700 bg-slate-800/40 hover:bg-slate-800/60"
    )}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center font-bold text-slate-200 transition-colors"
      >
        <span className="text-left pr-4">{title}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-indigo-400 flex-shrink-0"
        >
          <ChevronRight size={20} className={isOpen ? "rotate-90" : ""} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-6 pb-5 text-slate-300"
          >
            <div className="pt-2 border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AuthorNote = ({ title = "Nota del autor", children }: { title?: string; children: React.ReactNode }) => {
  return (
    <div className="my-8 p-6 rounded-2xl bg-indigo-700/15 border border-indigo-500/30 flex items-start gap-4">
      <div className="p-2 rounded-lg bg-indigo-900/50 border border-indigo-500/20 text-indigo-400">
        <Info size={24} />
      </div>
      <div className="flex-1">
        <h4 className="font-extrabold text-lg mb-2 text-indigo-400 tracking-tight">{title}</h4>
        <div className="text-slate-300 leading-relaxed text-sm md:text-base italic">
          {children}
        </div>
      </div>
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
      className="p-1.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
      title="Copiar prompt"
    >
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
    </button>
  );
};
