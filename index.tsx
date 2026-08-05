import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, 
  Sparkles, BrainCircuit, AlertTriangle, MapPin, 
  TerminalSquare, ShieldCheck, Rocket, CheckCircle2,
  Info, Lightbulb, Link as LinkIcon, HelpCircle, Bot, Network, Zap, Layers, Target, GraduationCap, Briefcase, Database, MessageSquare,
  Search, Check, Bookmark, ArrowUpRight, ArrowUp, Sun, Moon, Clock
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Modulo1Content } from './src/chapters/Modulo1';
import { Modulo2Content } from './src/chapters/Modulo2';
import { CatalogoContent } from './src/chapters/Catalogo';
import { EticaContent } from './src/chapters/Etica';
import { AgentesContent } from './src/chapters/Agentes';
import { FuturoContent } from './src/chapters/Futuro';
import { FAQContent } from './src/chapters/FAQ';
import { ReferenciasContent } from './src/chapters/Referencias';
import { LLMContent } from './src/chapters/LLMs';
import { QuizComponent, AboutModal, glossaryTerms } from './src/components/Shared';

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
    readTime: "5 min de lectura",
    content: <Modulo1Content />,
    subtitles: [
      "Introducción: el caso de SofIA",
      "¿Qué es la inteligencia artificial?",
      "La trayectoria de la IA: ciclos de entusiasmo y realidad",
      "Modelos y agentes de IA",
      "¿Qué es la inteligencia artificial generativa?",
      "Mitos de la IA",
      "Funcionamiento técnico: ¿cómo funciona realmente?",
      "Aplicación práctica: el diagnóstico de competencias con SofIA",
      "Ingeniería de prompts: la clave del éxito",
      "Democratización del acceso profesional",
      "Preguntas de reflexión"
    ],
    icons: [
      Info, BrainCircuit, BookOpen, BrainCircuit, Sparkles, 
      AlertTriangle, TerminalSquare, MapPin, TerminalSquare, Rocket, HelpCircle
    ],
    quiz: {
      question: "¿Cuál es la principal diferencia que introduce la IA generativa en el contexto educativo actual?",
      options: [
        "Reemplaza completamente la necesidad de trabajadores humanos en tareas creativas.",
        "Permite crear contenido nuevo original, transformando cómo las personas abordan sus tareas diarias.",
        "Solo sirve para analizar datos numéricos y crear gráficos estadísticos.",
        "Es una tecnología exclusiva para programadores y científicos de datos."
      ],
      correctAnswerIndex: 1,
      explanation: "La IA generativa no reemplaza al humano ni es exclusiva para técnicos; su mayor impacto es la capacidad de sintetizar y crear contenido nuevo, actuando como un copiloto que transforma la eficiencia en tareas diarias."
    }
  },
  {
    id: "llms",
    title: "Modelos de lenguaje (LLMs)",
    icon: Database,
    readTime: "6 min de lectura",
    content: <LLMContent />,
    subtitles: [
      "¿Qué es un LLM?",
      "La arquitectura Transformer",
      "El proceso de entrenamiento",
      "Técnicas de inferencia: RAG vs. CoT",
      "Configurando la salida del LLM"
    ],
    icons: [BrainCircuit, Network, Database, Zap, MessageSquare],
    quiz: {
      question: "¿Qué innovación arquitectónica permitió a los modelos de lenguaje procesar texto en paralelo y entender mejor el contexto a largo plazo?",
      options: [
        "Redes Neuronales Recurrentes (RNNs)",
        "La arquitectura Transformer (Mecanismo de Auto-Atención)",
        "Redes Neuronales Convolucionales (CNNs)",
        "Sistemas Multiagente"
      ],
      correctAnswerIndex: 1,
      explanation: "La arquitectura Transformer, introducida en 2017, revolucionó el procesamiento del lenguaje natural al permitir el procesamiento paralelo y utilizar el mecanismo de auto-atención para evaluar la importancia de cada palabra en relación con las demás."
    }
  },
  {
    id: "modulo2",
    title: "Ingeniería de prompts",
    icon: TerminalSquare,
    readTime: "12 min de lectura",
    content: <Modulo2Content />,
    subtitles: [
      "1. Introducción",
      "2. Fundamentos teóricos",
      "3. Estructura de un prompt",
      "4. Marcos y modelos pedagógicos de prompting",
      "5. Técnicas avanzadas",
      "6. Diferencias entre modelos principales",
      "7. Metodologías de optimización",
      "8. Conexión práctica: el mega-prompt",
      "9. Aplicaciones prácticas y casos de estudio",
      "10. Herramientas y ecosistema tecnológico",
      "11. Perspectivas futuras y conclusiones",
      "Preguntas de reflexión"
    ],
    icons: [Info, BrainCircuit, Sparkles, BookOpen, Zap, Layers, Target, TerminalSquare, Briefcase, Database, Rocket, HelpCircle],
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
    title: "Catálogo de técnicas",
    icon: Sparkles,
    readTime: "7 min de lectura",
    content: <CatalogoContent />,
    subtitles: [
      "Introducción al catálogo",
      "Fundamentos del catálogo",
      "Galería de técnicas aplicadas",
      "Tabla resumen de técnicas",
      "Preguntas de reflexión"
    ],
    icons: [Sparkles, BookOpen, Layers, TerminalSquare, HelpCircle],
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
    title: "Autenticidad y ética",
    icon: ShieldCheck,
    readTime: "7 min de lectura",
    content: <EticaContent />,
    subtitles: [
      "1. Introducción",
      "2. Caso de estudio: el dilema de SofIA",
      "3. La crisis de la 'caja negra': interpretabilidad y sesgos algorítmicos",
      "4. Los sistemas de evaluación algorítmica: ¿eficiencia o sesgo?",
      "5. El marco ético de la UNESCO",
      "6. Para reflexionar: la ética del prompt",
      "7. Caso práctico: el espectro de la ética",
      "Preguntas de reflexión"
    ],
    icons: [Info, Lightbulb, BrainCircuit, AlertTriangle, ShieldCheck, MessageSquare, Target, HelpCircle],
    quiz: {
      question: "Según el continuo ético en la optimización de portafolios, ¿qué acción se considera 'claramente inaceptable'?",
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
    id: "agentes",
    title: "Agentes de IA",
    icon: Bot,
    readTime: "15 min de lectura",
    content: <AgentesContent />,
    subtitles: [
      "¿Qué es exactamente un agente de IA?",
      "Modelos vs. agentes",
      "La anatomía de un agente",
      "Tipos de agentes de IA",
      "Las llaves al mundo exterior: herramientas",
      "¿Cuándo necesitas realmente un agente?",
      "Los 5 niveles de autonomía agéntica",
      "Arquitecturas multiagente y frameworks",
      "Del concepto al código: construyendo un agente",
      "Casos de uso reales",
      "Seguridad y guardrails",
      "El factor humano: centauros y cyborgs",
      "Preparando a tu equipo para la IA agéntica",
      "Caso práctico: el flujo de trabajo agéntico de SofIA"
    ],
    icons: [Bot, BrainCircuit, BrainCircuit, Network, Zap, Target, Layers, Network, TerminalSquare, Target, ShieldCheck, Bot, GraduationCap, Briefcase],
    quiz: {
      question: "¿Cuál es la principal diferencia entre un chatbot básico y un agente de IA?",
      options: [
        "El chatbot puede usar herramientas externas, el agente no.",
        "El agente es proactivo, puede planificar y usar herramientas para lograr objetivos, mientras el chatbot es reactivo.",
        "El chatbot tiene memoria a largo plazo, el agente solo a corto plazo.",
        "No hay diferencia, son dos términos para la misma tecnología."
      ],
      correctAnswerIndex: 1,
      explanation: "A diferencia de un chatbot que solo responde a la entrada inmediata, un agente de IA es proactivo, puede planificar pasos, usar herramientas externas (como APIs) y trabajar de manera autónoma hacia un objetivo."
    }
  },
  {
    id: "futuro",
    title: "El futuro de la IA",
    icon: Rocket,
    readTime: "6 min de lectura",
    content: <FuturoContent />,
    subtitles: [
      "1. Hacia una inteligencia general e integrada",
      "2. Desafíos en el escalado de la IA",
      "3. El futuro del aprendizaje: de lo supervisado a lo predictivo",
      "4. Cognición vs. conciencia: el debate filosófico",
      "5. Impactos y riesgos: la singularidad tecnológica",
      "6. Impacto, responsabilidad y riesgos",
      "Preguntas de reflexión"
    ],
    icons: [BrainCircuit, AlertTriangle, Zap, BrainCircuit, Sparkles, ShieldCheck, HelpCircle],
    quiz: {
      question: "¿Cuál es el principal desafío de la 'parálisis de la escala' en la planificación de la IA?",
      options: [
        "La falta de potencia computacional para procesar datos.",
        "La dificultad de los algoritmos actuales para escalar a planes de millones de pasos.",
        "La imposibilidad de entrenar modelos con datos no etiquetados.",
        "El alto costo de los sensores LIDAR y RADAR."
      ],
      correctAnswerIndex: 1,
      explanation: "La parálisis de la escala se refiere a que los algoritmos de búsqueda actuales solo escalan a decenas de pasos, mientras que tareas humanas complejas requieren millones de pasos primitivos."
    }
  },
  {
    id: "faq",
    title: "Preguntas frecuentes",
    icon: HelpCircle,
    readTime: "4 min de lectura",
    content: <FAQContent />,
    subtitles: [
      "Fundamentos de la IA",
      "Ingeniería de prompts",
      "Problemas comunes"
    ],
    icons: [BrainCircuit, TerminalSquare, AlertTriangle]
  },
  {
    id: "referencias",
    title: "Referencias",
    icon: Info,
    readTime: "2 min de lectura",
    content: <ReferenciasContent />,
    subtitles: ["Recursos y fuentes consultadas"],
    icons: [LinkIcon]
  }
];

const InteractiveBook = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('app_theme_v1');
      return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [chapterProgress, setChapterProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [dynamicReadTime, setDynamicReadTime] = useState<string>('');
  const [chapterReadTimes, setChapterReadTimes] = useState<Record<string, string>>({});
  const chapterContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    try {
      localStorage.setItem('app_theme_v1', theme);
    } catch {}
  }, [theme]);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isGlossaryModalOpen, setIsGlossaryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [glossaryFilter, setGlossaryFilter] = useState('');
  const [completedChapters, setCompletedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('completed_chapters_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

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
    try {
      localStorage.setItem('completed_chapters_v1', JSON.stringify(completedChapters));
    } catch {}
  }, [completedChapters]);

  // Calculate dynamic reading time based on actual chapter text content length
  useEffect(() => {
    const timer = setTimeout(() => {
      if (chapterContentRef.current) {
        const text = chapterContentRef.current.innerText || chapterContentRef.current.textContent || '';
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        const mins = Math.max(1, Math.ceil(words / 200));
        const timeStr = `${mins} min de lectura`;
        setDynamicReadTime(timeStr);
        setChapterReadTimes(prev => ({
          ...prev,
          [chapters[currentChapterIndex].id]: timeStr
        }));
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [currentChapterIndex]);

  useEffect(() => {
    setActiveSubtitleIndex(0);
    setShowScrollTop(false);
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTop = 0;

    const observerOptions = {
      root: container,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const match = id.match(/sec-[a-zA-Z0-9]+-(\d+)/);
          if (match) {
            setActiveSubtitleIndex(parseInt(match[1], 10));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const timeoutId = setTimeout(() => {
      const headings = container.querySelectorAll(`[id^="sec-${chapters[currentChapterIndex].id}-"]`);
      headings.forEach(h => observer.observe(h));
    }, 500);

    const handleScroll = () => {
      if (!container) return;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      const currentProgress = isNaN(progress) ? 0 : progress;
      setChapterProgress(currentProgress);
      setShowScrollTop(scrollTop > 250);

      if (currentProgress > 85) {
        const currentId = chapters[currentChapterIndex].id;
        setCompletedChapters(prev => prev.includes(currentId) ? prev : [...prev, currentId]);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentChapterIndex]);

  const currentChapter = chapters[currentChapterIndex];
  const overallProgress = ((completedChapters.length) / chapters.length) * 100;

  const filteredChapters = chapters.filter(chap => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = chap.title.toLowerCase().includes(q);
    const subtitleMatch = chap.subtitles?.some(s => s.toLowerCase().includes(q));
    return titleMatch || subtitleMatch;
  });

  const filteredGlossary = Object.entries(glossaryTerms).filter(([term, def]) => {
    if (!glossaryFilter) return true;
    const q = glossaryFilter.toLowerCase();
    return term.toLowerCase().includes(q) || def.toLowerCase().includes(q);
  });

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
    const element = document.getElementById(`sec-${chapters[currentChapterIndex].id}-${subIdx}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isMobile) setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 overflow-hidden selection:bg-indigo-500/20 dark:selection:bg-indigo-500/30 transition-colors duration-300 relative">
      
      {/* Abstract Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/15 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 dark:bg-cyan-600/15 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/15 dark:bg-purple-600/10 blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen && !isFocusMode ? (isMobile ? '85%' : '320px') : '0px',
          x: isSidebarOpen && !isFocusMode ? 0 : (isMobile ? '-100%' : 0),
          opacity: isSidebarOpen && !isFocusMode ? 1 : 0
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
        className={cn(
          "fixed md:relative z-50 h-screen flex-shrink-0 bg-slate-100/95 dark:bg-slate-900/90 backdrop-blur-2xl border-r border-slate-200 dark:border-white/10 overflow-hidden flex flex-col shadow-2xl transition-colors duration-300",
          (!isSidebarOpen || isFocusMode) && !isMobile && "md:w-0 md:border-none"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-200/80 dark:border-white/5 bg-slate-200/50 dark:bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-500/30 shadow-inner">
              <BookOpen size={20} />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <a href="https://github.com/francisco-sereno/guia-fundamentos-IAGen" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" title="Ver en GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white truncate">Dominando la IA</span>
              </div>
              <a href="https://portafolio.franciscosereno.cl/sobre-mi" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 font-medium transition-colors w-fit">
                Por Francisco Sereño
              </a>
            </div>
          </div>
          {isMobile && (
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Sidebar Search Bar */}
        <div className="px-4 pt-4 pb-2">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar tema o capítulo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-white/10 rounded-xl text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1.5 custom-scrollbar">
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 px-2 flex justify-between items-center">
            <span>Tabla de contenidos</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">{chapters.length} temas</span>
          </div>

          {filteredChapters.map((chapter) => {
            const originalIndex = chapters.findIndex(c => c.id === chapter.id);
            const Icon = chapter.icon;
            const isActive = originalIndex === currentChapterIndex;
            const isCompleted = completedChapters.includes(chapter.id);

            return (
              <div key={chapter.id} className="flex flex-col">
                <button
                  onClick={() => {
                    setCurrentChapterIndex(originalIndex);
                    if (isMobile) setIsSidebarOpen(false);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 group relative",
                    isActive 
                      ? "bg-indigo-50 dark:bg-slate-900 dark:bg-gradient-to-r dark:from-indigo-950/90 dark:to-slate-900 text-indigo-950 dark:text-slate-100 border border-indigo-200 dark:border-indigo-500/40 shadow-sm font-semibold" 
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon size={17} className={cn("shrink-0 transition-transform duration-300", isActive ? "text-indigo-600 dark:text-indigo-400 scale-110" : "group-hover:text-slate-800 dark:group-hover:text-slate-300")} />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs md:text-sm tracking-tight truncate">{chapter.title}</span>
                      <span className={cn("text-[10px] font-medium flex items-center gap-1 mt-0.5", isActive ? "text-indigo-700 dark:text-indigo-300" : "text-slate-500 dark:text-slate-400")}>
                        <Clock size={10} className="text-indigo-500/80 dark:text-indigo-400/80 shrink-0" />
                        <span>{chapterReadTimes[chapter.id] || chapter.readTime}</span>
                      </span>
                    </div>
                  </div>
                  {isCompleted && (
                    <span className="p-1 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shrink-0" title="Capítulo completado">
                      <Check size={10} />
                    </span>
                  )}
                </button>

                {isActive && chapter.subtitles && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-8 mt-1 mb-2 space-y-1 border-l border-indigo-500/30 dark:border-indigo-500/20 pl-3.5"
                  >
                    {chapter.subtitles.map((subtitle, subIdx) => {
                      const SubIcon = chapter.icons ? chapter.icons[subIdx] : null;
                      const isSubActive = activeSubtitleIndex === subIdx;
                      return (
                        <div 
                          key={subIdx} 
                          onClick={() => scrollToSection(subIdx)}
                          className={cn(
                            "flex items-center gap-2 text-xs transition-all cursor-pointer py-1.5 px-2 rounded-lg leading-tight",
                            isSubActive 
                              ? "text-indigo-950 dark:text-indigo-200 font-semibold bg-indigo-100/90 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-500/40 shadow-xs" 
                              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/5"
                          )}
                        >
                          {SubIcon && <SubIcon size={12} className={cn("shrink-0", isSubActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500")} />}
                          <span className="truncate">{subtitle}</span>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-200/80 dark:border-white/5 bg-slate-200/40 dark:bg-slate-900/60 space-y-3">
          <button
            onClick={() => setIsGlossaryModalOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/5 text-xs font-medium text-indigo-700 dark:text-indigo-300 transition-all hover:border-indigo-400/50 dark:hover:border-indigo-500/30 shadow-xs"
          >
            <span className="flex items-center gap-2">
              <BookOpen size={14} className="text-indigo-600 dark:text-indigo-400" />
              Glosario interactivo
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
              {Object.keys(glossaryTerms).length}
            </span>
          </button>

          <div>
            <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
              <span>Progreso general</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">{Math.round(overallProgress)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-300/50 dark:border-white/5">
              <motion.div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        
        {/* Top Navigation Bar */}
        <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 md:px-8 border-b border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl sticky top-0 z-30 transition-colors duration-300">
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => {
                if (isFocusMode) setIsFocusMode(false);
                setIsSidebarOpen(!isSidebarOpen);
              }}
              className="p-2 -ml-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              title="Alternar índice"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 hidden sm:inline-block shrink-0">
                Capítulo {currentChapterIndex + 1}/{chapters.length}
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                {currentChapter.title}
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-2.5 py-0.5 rounded-full hidden md:inline-flex items-center gap-1.5 shrink-0">
                <Clock size={12} className="text-indigo-600 dark:text-indigo-400" />
                <span>{dynamicReadTime || currentChapter.readTime}</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                theme === 'light'
                  ? "bg-amber-500/15 text-amber-900 border-amber-500/30 hover:bg-amber-500/25 shadow-xs"
                  : "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
              )}
              title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={13} className="text-amber-400" />
                  <span className="hidden xs:inline sm:inline">Modo claro</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="text-indigo-600" />
                  <span className="hidden xs:inline sm:inline">Modo oscuro</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsGlossaryModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-indigo-700 dark:hover:text-indigo-300 hover:border-indigo-400/30 dark:hover:border-indigo-500/30"
              title="Glosario de conceptos"
            >
              <BookOpen size={13} className="text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline">Glosario</span>
            </button>

            {!isMobile && (
              <button
                onClick={() => setIsAboutModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                title="Acerca de esta guía"
              >
                <Info size={13} className="text-blue-600 dark:text-blue-400" />
                <span>Acerca de</span>
              </button>
            )}

            {!isMobile && (
              <button
                onClick={() => setIsFocusMode(!isFocusMode)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                  isFocusMode 
                    ? "bg-indigo-500/15 text-indigo-900 dark:text-indigo-300 border-indigo-400 dark:border-indigo-500/40 shadow-xs" 
                    : "bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                )}
                title="Modo lectura sin distracciones"
              >
                <Sparkles size={13} className={isFocusMode ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"} />
                <span>{isFocusMode ? "Modo lectura activo" : "Modo lectura"}</span>
              </button>
            )}
          </div>
          
          {/* Reading Progress Indicator Line */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-slate-200 dark:bg-slate-900 w-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{ width: `${chapterProgress}%` }}
              layout
            />
          </div>
        </header>

        {/* Scrollable Main Article Content */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto scroll-smooth pb-32 pt-8 px-4 md:px-12 lg:px-20 xl:px-28 custom-scrollbar"
        >
          <motion.div 
            animate={{ maxWidth: isFocusMode ? '64rem' : '48rem' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter.id}
                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="min-h-[60vh] prose-custom"
              >
                {/* Chapter Meta Bar */}
                <div className="not-prose flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200/80 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-900 dark:text-indigo-300 text-xs font-semibold shadow-xs">
                      <Clock size={13} className="text-indigo-600 dark:text-indigo-400" />
                      <span>{dynamicReadTime || currentChapter.readTime}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium">
                      <BookOpen size={13} className="text-slate-500 dark:text-slate-400" />
                      <span>{currentChapter.subtitles.length} secciones</span>
                    </span>
                  </div>
                  {completedChapters.includes(currentChapter.id) && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                      <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400" />
                      <span>Capítulo completado</span>
                    </span>
                  )}
                </div>

                <div ref={chapterContentRef}>
                  {currentChapter.content}
                </div>
                {currentChapter.quiz && <QuizComponent quiz={currentChapter.quiz} />}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Chapter Navigation Controls */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
              <button
                onClick={goToPrev}
                disabled={currentChapterIndex === 0}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300",
                  currentChapterIndex === 0 
                    ? "opacity-0 pointer-events-none" 
                    : "bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/30 shadow-xs"
                )}
              >
                <ChevronLeft size={18} />
                <span>Capítulo anterior</span>
              </button>

              <button
                onClick={goToNext}
                disabled={currentChapterIndex === chapters.length - 1}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300",
                  currentChapterIndex === chapters.length - 1 
                    ? "opacity-0 pointer-events-none" 
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                )}
              >
                <span>Siguiente capítulo</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/15 shadow-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all text-xs font-semibold backdrop-blur-md group"
              title="Volver al inicio"
              aria-label="Volver al inicio"
            >
              <ArrowUp size={16} className="text-indigo-600 dark:text-indigo-400 group-hover:-translate-y-0.5 transition-transform duration-200" />
              <span className="hidden sm:inline">Volver al inicio</span>
            </motion.button>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Modals */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />

      {/* Glossary Quick Lookup Modal */}
      <AnimatePresence>
        {isGlossaryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-xl" onClick={() => setIsGlossaryModalOpen(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-white/10 p-6 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl text-slate-800 dark:text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-500/20 dark:border-indigo-500/30">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">Glosario de conceptos</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 m-0">Términos clave de IA e ingeniería de prompts</p>
                  </div>
                </div>
                <button onClick={() => setIsGlossaryModalOpen(false)} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* Glossary Search Input */}
              <div className="relative mb-4">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Filtrar concepto o definición..."
                  value={glossaryFilter}
                  onChange={(e) => setGlossaryFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950/70 border border-slate-300 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500/50"
                />
                {glossaryFilter && (
                  <button onClick={() => setGlossaryFilter('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Terms List */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar prose-custom">
                {filteredGlossary.length > 0 ? (
                  filteredGlossary.map(([term, def], idx) => (
                    <div key={idx} className="group p-4 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/80 dark:border-white/5 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="flex items-center gap-2 mb-1.5 relative z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 group-hover:scale-125 transition-transform duration-300" />
                        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm md:text-base m-0">{term}</h4>
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0 pl-3.5 relative z-10">{def}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-400 dark:text-slate-500 text-sm">
                    No se encontraron conceptos que coincidan con "{glossaryFilter}".
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<InteractiveBook />);
}
