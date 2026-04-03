import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, 
  Sparkles, BrainCircuit, AlertTriangle, MapPin, 
  TerminalSquare, ShieldCheck, Rocket, CheckCircle2,
  Info, Lightbulb, Link as LinkIcon
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Modulo1Content } from './src/chapters/Modulo1';
import { Modulo2Content } from './src/chapters/Modulo2';
import { CatalogoContent } from './src/chapters/Catalogo';
import { EticaContent } from './src/chapters/Etica';
import { ReferenciasContent } from './src/chapters/Referencias';
import { QuizComponent } from './src/components/Shared';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- BOOK DATA ---
const chapters = [
  {
    id: "modulo1",
    title: "Fundamentos de la IA",
    icon: BookOpen,
    content: <Modulo1Content />,
    subtitles: [
      "Introducción: el caso de SofIA",
      "¿Qué es la inteligencia artificial?",
      "Modelos y agentes de IA",
      "¿Qué es la inteligencia artificial generativa?",
      "Mitos de la IA",
      "Funcionamiento técnico",
      "Aplicación práctica",
      "Ingeniería de prompts",
      "Democratización del acceso profesional"
    ],
    icons: [
      Info, BrainCircuit, BrainCircuit, Sparkles, AlertTriangle, 
      TerminalSquare, MapPin, TerminalSquare, Rocket
    ],
    quiz: {
      question: "¿Cuál es la principal diferencia que introduce la IA generativa en el contexto laboral actual?",
      options: [
        "Reemplaza completamente la necesidad de trabajadores humanos en tareas creativas.",
        "Permite crear contenido nuevo original, transformando cómo los profesionales abordan sus tareas diarias.",
        "Solo sirve para analizar datos numéricos y crear gráficos estadísticos.",
        "Es una tecnología exclusiva para programadores y científicos de datos."
      ],
      correctAnswerIndex: 1,
      explanation: "La IA generativa no reemplaza al humano ni es exclusiva para técnicos; su mayor impacto es la capacidad de sintetizar y crear contenido nuevo, actuando como un copiloto que transforma la eficiencia en tareas diarias."
    }
  },
  {
    id: "modulo2",
    title: "Ingeniería de Prompts",
    icon: TerminalSquare,
    content: <Modulo2Content />,
    subtitles: [
      "Introducción",
      "Fundamentos teóricos",
      "Técnicas avanzadas de prompting",
      "Caso de estudio: SofIA",
      "Buenas prácticas y errores comunes",
      "Conclusión y perspectivas futuras"
    ],
    icons: [Info, BrainCircuit, Sparkles, Lightbulb, AlertTriangle, Rocket],
    quiz: {
      question: "¿Qué técnica de prompting consiste en pedirle al modelo que muestre su razonamiento paso a paso?",
      options: [
        "Zero-shot prompting",
        "Few-shot prompting",
        "Chain of thought (CoT)",
        "Self-consistency"
      ],
      correctAnswerIndex: 2,
      explanation: "Chain of thought (CoT) es la técnica que solicita explícitamente al modelo que muestre su 'razonamiento paso a paso' antes de llegar a una conclusión."
    }
  },
  {
    id: "catalogo",
    title: "Catálogo de Técnicas",
    icon: Sparkles,
    content: <CatalogoContent />,
    subtitles: [
      "Introducción al catálogo"
    ],
    icons: [Sparkles],
    quiz: {
      question: "¿Qué técnica de prompting implica proporcionar algunos ejemplos del tipo de respuesta que esperas?",
      options: [
        "Zero-shot prompting",
        "Few-shot prompting",
        "Role prompting",
        "Prompt chaining"
      ],
      correctAnswerIndex: 1,
      explanation: "Few-shot prompting consiste en proporcionar al modelo algunos ejemplos de la tarea deseada antes de solicitar que realice una instancia nueva."
    }
  },
  {
    id: "etica",
    title: "Autenticidad y Ética",
    icon: ShieldCheck,
    content: <EticaContent />,
    subtitles: [
      "Introducción",
      "Caso de estudio: El dilema de SofIA",
      "Los sistemas ATS: ¿Eficiencia o sesgo algorítmico?",
      "El ecosistema de la IAGen para optimización de CVs",
      "Marco ético de la UNESCO para la inteligencia artificial",
      "Análisis de casos prácticos",
      "Reflexión final y síntesis"
    ],
    icons: [Info, Lightbulb, AlertTriangle, TerminalSquare, ShieldCheck, CheckCircle2, Rocket],
    quiz: {
      question: "Según el continuo ético en la optimización de CVs, ¿qué acción se considera 'Claramente inaceptable'?",
      options: [
        "Uso de IA para mejorar la presentación sin alterar hechos.",
        "Reformulación de experiencias que exagera sutilmente el nivel de responsabilidad.",
        "Agregar habilidades que se están aprendiendo actualmente.",
        "Fabricación de información falsa, como inventar títulos académicos o proyectos inexistentes."
      ],
      correctAnswerIndex: 3,
      explanation: "La fabricación de información falsa, como inventar títulos académicos o proyectos inexistentes, cruza la línea hacia lo éticamente inaceptable y constituye un engaño."
    }
  },
  {
    id: "referencias",
    title: "Referencias",
    icon: Info,
    content: <ReferenciasContent />,
    subtitles: ["Recursos y fuentes consultadas"],
    icons: [LinkIcon]
  }
];

const InteractiveBook = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setIsSidebarOpen(false);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setActiveSubtitleIndex(0);
    const container = scrollContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const match = id.match(/sec-\d+-(\d+)/);
          if (match) {
            setActiveSubtitleIndex(parseInt(match[1], 10));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const timeoutId = setTimeout(() => {
      const headings = container.querySelectorAll(`[id^="sec-${currentChapterIndex}-"]`);
      headings.forEach(h => observer.observe(h));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentChapterIndex]);

  const currentChapter = chapters[currentChapterIndex];
  const progress = ((currentChapterIndex + 1) / chapters.length) * 100;

  const goToNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (isMobile) setIsSidebarOpen(false);
    }
  };

  const goToPrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (isMobile) setIsSidebarOpen(false);
    }
  };

  const scrollToSection = (subIdx: number) => {
    const element = document.getElementById(`sec-${currentChapterIndex}-${subIdx}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isMobile) setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-200 overflow-hidden selection:bg-indigo-500/30">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? (isMobile ? '85%' : '320px') : '0px',
          x: isSidebarOpen ? 0 : (isMobile ? '-100%' : 0)
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className={cn(
          "fixed md:relative z-50 h-screen flex-shrink-0 bg-slate-900/80 backdrop-blur-2xl border-r border-white/10 overflow-hidden flex flex-col",
          !isSidebarOpen && !isMobile && "md:w-0 md:border-none"
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3 text-indigo-400">
            <BookOpen size={24} />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight whitespace-nowrap">Dominando la IA</span>
              <span className="text-xs text-slate-500">por Francisco Sereño</span>
            </div>
          </div>
          {isMobile && (
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-lg hover:bg-white/5 text-slate-400">
              <X size={20} />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 px-2">Tabla de Contenidos</div>
          {chapters.map((chapter, idx) => {
            const Icon = chapter.icon;
            const isActive = idx === currentChapterIndex;
            return (
              <div key={chapter.id} className="flex flex-col">
                <button
                  onClick={() => {
                    setCurrentChapterIndex(idx);
                    if (isMobile) setIsSidebarOpen(false);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group",
                    isActive 
                      ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]" 
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  )}
                >
                  <Icon size={18} className={cn("flex-shrink-0 transition-transform duration-300", isActive ? "scale-110 text-indigo-400" : "group-hover:text-slate-300")} />
                  <span className="text-sm font-medium leading-tight">{chapter.title}</span>
                </button>
                {isActive && chapter.subtitles && (
                  <div className="ml-11 mt-2 space-y-2 border-l border-white/10 pl-4">
                    {chapter.subtitles.map((subtitle, subIdx) => {
                      const SubIcon = chapter.icons ? chapter.icons[subIdx] : null;
                      return (
                        <div 
                          key={subIdx} 
                          onClick={() => scrollToSection(subIdx)}
                          className={cn(
                            "flex items-center gap-2 text-xs transition-colors cursor-pointer py-1",
                            activeSubtitleIndex === subIdx 
                              ? "text-indigo-400 font-semibold" 
                              : "text-slate-400 hover:text-indigo-300"
                          )}
                        >
                          {SubIcon && <SubIcon size={12} />}
                          {subtitle}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/5 bg-slate-900/50">
          <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>Progreso</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Navigation Bar */}
        <header className="h-16 flex-shrink-0 flex items-center px-4 md:px-8 border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-30">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 -ml-2 rounded-lg hover:bg-white/5 text-slate-400 transition-colors"
          >
            <Menu size={24} />
          </button>
          
          <div className="ml-4 flex-1 flex justify-center md:justify-start">
            <span className="text-sm font-mono text-slate-500 hidden md:inline-block">
              Capítulo {currentChapterIndex + 1} de {chapters.length}
            </span>
          </div>
        </header>

        {/* Scrollable Content */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto scroll-smooth pb-32 pt-8 px-4 md:px-12 lg:px-24 xl:px-32"
        >
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="min-h-[60vh]"
              >
                {currentChapter.content}
                {currentChapter.quiz && <QuizComponent quiz={currentChapter.quiz} />}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation Controls */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={goToPrev}
                disabled={currentChapterIndex === 0}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                  currentChapterIndex === 0 
                    ? "opacity-0 pointer-events-none" 
                    : "bg-slate-800/50 hover:bg-slate-800 text-slate-300 border border-white/5 hover:border-white/10"
                )}
              >
                <ChevronLeft size={20} />
                <span>Anterior</span>
              </button>

              <button
                onClick={goToNext}
                disabled={currentChapterIndex === chapters.length - 1}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  currentChapterIndex === chapters.length - 1 
                    ? "opacity-0 pointer-events-none" 
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
                )}
              >
                <span>Siguiente Capítulo</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<InteractiveBook />);
}
