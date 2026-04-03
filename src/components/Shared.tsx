import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, 
  Sparkles, BrainCircuit, AlertTriangle, MapPin, 
  TerminalSquare, ShieldCheck, Rocket, CheckCircle2,
  Info, Lightbulb, Link as LinkIcon, XCircle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- GLOSSARY DATA ---
export const glossaryTerms: Record<string, string> = {
  "IA generativa": "Tipo de inteligencia artificial capaz de crear contenido nuevo (texto, imágenes, código, etc.) a partir de patrones aprendidos en grandes volúmenes de datos.",
  "IA tradicional": "Sistemas de IA diseñados principalmente para analizar datos, reconocer patrones y hacer predicciones o clasificaciones basadas en reglas predefinidas o entrenamiento previo, sin generar contenido original.",
  "Alucinaciones": "Respuestas generadas por un modelo de IA que suenan plausibles y convincentes, pero que son incorrectas o no están basadas en hechos reales.",
  "Prompt": "Instrucción o texto de entrada que se proporciona a un modelo de IA generativa para guiar su respuesta o creación de contenido.",
  "Algoritmo": "Conjunto de instrucciones o reglas definidas paso a paso que un programa informático sigue para realizar una tarea o resolver un problema.",
  "Sesgos": "Prejuicios o inclinaciones sistemáticas presentes en los resultados de un modelo de IA, generalmente derivados de los datos con los que fue entrenado.",
  "LLM": "Large Language Model (Gran Modelo de Lenguaje). Un modelo de IA entrenado con cantidades masivas de texto para entender y generar lenguaje humano.",
  "RAG": "Retrieval-Augmented Generation. Técnica que mejora las respuestas de un LLM conectándolo a una base de datos externa para obtener información actualizada y precisa.",
  "Agente Autónomo": "Sistema de IA que puede percibir su entorno, tomar decisiones y ejecutar acciones de forma independiente para alcanzar un objetivo específico.",
  "Multimodalidad": "Capacidad de un modelo de IA para procesar y generar múltiples tipos de datos simultáneamente, como texto, imágenes, audio y video."
};

export const GlossaryTerm = ({ term, children }: { term: string; children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const definition = glossaryTerms[term] || "Definición no encontrada.";

  return (
    <span className="relative inline-block group">
      <button 
        className="text-indigo-400 font-semibold underline decoration-indigo-400/50 decoration-dotted underline-offset-4 hover:text-indigo-300 transition-colors cursor-help"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-expanded={isOpen}
      >
        {children || term}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 p-4 bg-slate-800/95 backdrop-blur-xl border border-indigo-500/30 text-slate-200 text-sm rounded-xl shadow-2xl pointer-events-none"
          >
            <strong className="block text-indigo-300 mb-1 font-mono text-xs uppercase tracking-wider">{term}</strong>
            <span className="leading-relaxed">{definition}</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-slate-800/95"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export const InfoCard = ({ type, title, children }: { type: 'idea' | 'conexion' | 'definicion' | 'reflexion' | 'practica'; title?: string; children: React.ReactNode; }) => {
  const styles = {
    idea: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: Lightbulb, iconColor: 'text-amber-400' },
    conexion: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: LinkIcon, iconColor: 'text-emerald-400' },
    definicion: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Info, iconColor: 'text-blue-400' },
    reflexion: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: BrainCircuit, iconColor: 'text-purple-400' },
    practica: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', icon: TerminalSquare, iconColor: 'text-pink-400' },
  };

  const currentStyle = styles[type];
  const Icon = currentStyle.icon;

  return (
    <div className={cn("relative p-6 rounded-2xl border backdrop-blur-sm my-6", currentStyle.bg, currentStyle.border)}>
      <div className="flex items-start gap-4">
        <div className={cn("p-2 rounded-lg bg-slate-900/50 border border-white/5", currentStyle.iconColor)}>
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
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]"
          )}
        >
          Comprobar respuesta
        </button>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "p-5 rounded-xl border mt-6",
            isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-amber-500/10 border-amber-500/30"
          )}
        >
          <h4 className={cn("font-bold mb-2", isCorrect ? "text-emerald-400" : "text-amber-400")}>
            {isCorrect ? "¡Correcto!" : "Respuesta incorrecta"}
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">{quiz.explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center font-bold text-slate-200 hover:bg-slate-700/50 transition-colors"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-4 text-slate-300"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AuthorNote = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-8 p-6 rounded-2xl bg-indigo-900/20 border border-indigo-500/30 flex items-start gap-4">
      <div className="p-2 rounded-lg bg-indigo-900/50 border border-indigo-500/20 text-indigo-400">
        <Info size={24} />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-lg mb-2 text-indigo-400">Nota del autor</h4>
        <div className="text-slate-300 leading-relaxed text-sm md:text-base italic">
          {children}
        </div>
      </div>
    </div>
  );
};
