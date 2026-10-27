import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { 
  BookOpen, Cpu, MessageSquare, Shield, ChevronRight, 
  ChevronLeft, Menu, X, CheckCircle, HelpCircle, Terminal, Layers, 
  Bot, Compass, Sun, Moon, Maximize2, Minimize2, ArrowUp, Search, ExternalLink
} from 'lucide-react';
import { AboutModal, glossaryTerms } from './src/components/Shared';
import { Modulo1 } from './src/chapters/Modulo1';
import { LLMs } from './src/chapters/LLMs';
import { Modulo2 } from './src/chapters/Modulo2';
import { Catalogo } from './src/chapters/Catalogo';
import { Etica } from './src/chapters/Etica';
import { Agentes } from './src/chapters/Agentes';
import { Futuro } from './src/chapters/Futuro';
import { FAQ } from './src/chapters/FAQ';
import { Referencias } from './src/chapters/Referencias';

export interface Chapter {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  readTime: string;
  subsections?: string[];
  content: React.ReactNode;
}

const chapters: Chapter[] = [
  {
    id: 'modulo1',
    code: 'MÓDULO 01',
    title: 'Fundamentos de la IA',
    subtitle: 'De la racionalidad computacional y el marco PEAS a los modelos pequeños (SLMs) y Edge AI en 2026',
    icon: Cpu,
    readTime: '14 min de lectura',
    subsections: [
      'Propósito y caso de estudio (SofIA)',
      '1. ¿Qué es realmente la inteligencia artificial?',
      '2. Evolución histórica (1950–2026)',
      '3. Taxonomía por alcance: ANI, AGI y ASI',
      '4. Anatomía en capas: IA, ML, DL e IA Generativa',
      '5. Los cuatro paradigmas de entrenamiento',
      '6. Revolución de los modelos pequeños (SLMs)',
      '7. IA discriminativa frente a IA generativa',
      '8. Límites estructurales: alucinaciones y sesgos',
      '9. Marcos UNESCO y diagnóstico de competencias',
      '10. Síntesis y autoevaluación'
    ],
    content: <Modulo1 />
  },
  {
    id: 'llms',
    code: 'MÓDULO 02',
    title: 'Modelos de lenguaje y razonamiento',
    subtitle: 'Arquitectura Transformer, Mixture of Experts (MoE), Test-Time Compute, RLVR y RAG Híbrido / GraphRAG',
    icon: Layers,
    readTime: '12 min de lectura',
    subsections: [
      '1. Tokenización, embeddings y atención',
      '2. Modelos de razonamiento y Test-Time Compute',
      '3. Ventanas masivas frente a RAG y GraphRAG',
      '4. Hiperparámetros y presupuesto de pensamiento',
      '5. Ecosistema 2026: multimodalidad y pesos abiertos'
    ],
    content: <LLMs />
  },
  {
    id: 'modulo2',
    code: 'MÓDULO 03',
    title: 'Ingeniería de prompts y de contexto',
    subtitle: 'Marcos CO-STAR, PROSE y PARTE, delimitadores XML, esquemas tipados y evaluación continua (PromptOps)',
    icon: Terminal,
    readTime: '16 min de lectura',
    subsections: [
      'Propósito y evolución a Ingeniería de Contexto',
      '1. ¿Por qué la estructura transforma la respuesta?',
      '2. Anatomía de una especificación de contexto',
      '3. Marcos estructurados: CO-STAR, PROSE y PARTE',
      '4. La plantilla de Simulación Socrática',
      '5. Aprendizaje en contexto: Zero, One y Few-Shot',
      '6. Chain-of-Thought, Tree-of-Thoughts y CoVe',
      '7. Delimitadores XML y JSON Schema',
      '8. Evaluación sistemática (PromptOps y CI/CD)',
      '9. Antipatrones frecuentes y corrección',
      '10. Caso práctico completo de SofIA',
      '11. Síntesis y autoevaluación'
    ],
    content: <Modulo2 />
  },
  {
    id: 'catalogo',
    code: 'MÓDULO 04',
    title: 'Catálogo interactivo de técnicas',
    subtitle: 'Repositorio filtrable de arquitecturas de contexto, patrones socráticos y técnicas de frontera 2026',
    icon: MessageSquare,
    readTime: '10 min de lectura',
    subsections: [
      'Explorador interactivo del catálogo (2026)',
      '1. Técnicas fundacionales y de estructuración',
      '2. Técnicas de razonamiento y verificación',
      '3. Patrones pedagógicos y de Frontera 2026',
      '4. Matriz de decisión según Taxonomía de Bloom'
    ],
    content: <Catalogo />
  },
  {
    id: 'etica',
    code: 'MÓDULO 05',
    title: 'Ética, gobernanza y regulación',
    subtitle: 'Reglamento Europeo (EU AI Act), marcos UNESCO, procedencia C2PA, sostenibilidad y protocolos PotencIA / DECIDE-IA',
    icon: Shield,
    readTime: '14 min de lectura',
    subsections: [
      'Propósito y urgencia de la gobernanza',
      '1. Sesgos, opacidad y procedencia C2PA',
      '2. Regulación vinculante: EU AI Act y UNESCO',
      '3. Privacidad, soberanía de datos y Prompt Injection',
      '4. Huella ecológica y sobriedad computacional',
      '5. Metodología RAM de preparación institucional',
      '6. Marcos prácticos: PotencIA y DECIDE-IA',
      '7. Síntesis y autoevaluación ética'
    ],
    content: <Etica />
  },
  {
    id: 'agentes',
    code: 'MÓDULO 06',
    title: 'Agentes autónomos y protocolo MCP',
    subtitle: 'Bucle ReAct, estándar abierto Model Context Protocol (MCP), interoperabilidad A2A y seguridad multi-agente',
    icon: Bot,
    readTime: '16 min de lectura',
    subsections: [
      'Propósito y transición hacia sistemas agénticos',
      '1. LLM pasivo frente a Agente autónomo',
      '2. Los cuatro pilares de la arquitectura agéntica',
      '3. El bucle operativo ReAct en detalle',
      '4. Estándares 2026: MCP y Protocolo A2A',
      '5. Implementación de Function Calling',
      '6. Sistemas Multi-Agente y orquestación',
      '7. Topologías: Jerárquica, Secuencial y Debate',
      '8. Frameworks de desarrollo agéntico',
      '9. Seguridad agéntica y aislamiento (Sandboxing)',
      '10. Caso aplicado: ecosistema de SofIA',
      '11. Observabilidad y control de costos',
      '12. Cuándo NO usar un agente autónomo',
      '13. Síntesis y autoevaluación'
    ],
    content: <Agentes />
  },
  {
    id: 'futuro',
    code: 'MÓDULO 07',
    title: 'El futuro de la IA (Horizonte 2026–2030)',
    subtitle: 'Modelos de Mundo (JEPA), robótica física, verificación formal neuro-simbólica, datos sintéticos y AI for Science',
    icon: Compass,
    readTime: '10 min de lectura',
    subsections: [
      '1. World Models, inteligencia espacial y robótica',
      '2. Datos sintéticos verificados y auto-juego',
      '3. Soberanía cognitiva y computación híbrida Edge',
      '4. Transformación del trabajo y AI for Science',
      '5. Gobernanza deliberativa y bienes públicos',
      '6. Epílogo: la síntesis del viaje de SofIA',
      '7. Autoevaluación final de cierre'
    ],
    content: <Futuro />
  },
  {
    id: 'faq',
    code: 'MÓDULO 08',
    title: 'Preguntas frecuentes (FAQ)',
    subtitle: 'Respuestas directas sobre modelos razonadores, RAG vs. contexto largo, MCP, detectores de IA y privacidad',
    icon: HelpCircle,
    readTime: '8 min de lectura',
    subsections: [
      '1. Fundamentos, modelos y razonamiento',
      '2. Ingeniería de Contexto, MCP y Agentes',
      '3. Ética, privacidad y evaluación docente'
    ],
    content: <FAQ />
  },
  {
    id: 'referencias',
    code: 'MÓDULO 09',
    title: 'Referencias y bibliografía científica',
    subtitle: 'Artículos seminales, reportes técnicos de frontera 2025–2026, especificaciones MCP/A2A y normativa internacional',
    icon: BookOpen,
    readTime: '6 min de lectura',
    subsections: [
      'Bibliografía científica y normativa (2026)'
    ],
    content: <Referencias />
  }
];

const App = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0].id);
  const [completedChapters, setCompletedChapters] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dominando_ia_completed_2026');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [glossaryFilter, setGlossaryFilter] = useState('');
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  useEffect(() => {
    try {
      localStorage.setItem('dominando_ia_completed_2026', JSON.stringify(completedChapters));
    } catch {
      // ignore storage errors
    }
  }, [completedChapters]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentIndex = chapters.findIndex((c) => c.id === activeChapterId);
  const currentChapter = chapters[currentIndex];
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  // Keyboard shortcuts: Alt + Left / Right to switch chapters
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'ArrowRight' && nextChapter) {
        e.preventDefault();
        setActiveChapterId(nextChapter.id);
      } else if (e.altKey && e.key === 'ArrowLeft' && prevChapter) {
        e.preventDefault();
        setActiveChapterId(prevChapter.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevChapter, nextChapter]);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (currentChapter.subsections && currentChapter.subsections.length > 0) {
      setActiveSection(`sec-${currentChapter.id}-0`);
    } else {
      setActiveSection('');
    }
    if (typeof document !== 'undefined') {
      document.title = `${currentChapter.title} | Dominando la IA — Guía de IA generativa`;
      const canonical = document.getElementById('canonical-link') as HTMLLinkElement | null;
      if (canonical && typeof window !== 'undefined') {
        canonical.href = window.location.origin + window.location.pathname;
      }
    }
  }, [activeChapterId, currentChapter]);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = mainContent;
      const totalScroll = scrollHeight - clientHeight;
      const currentProgress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setShowBackToTop(scrollTop > 350);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: mainContent, rootMargin: '-10% 0px -75% 0px', threshold: 0 }
    );

    const headings = mainContent.querySelectorAll('h2[id^="sec-"]');
    headings.forEach((h) => observer.observe(h));
    mainContent.addEventListener('scroll', handleScroll);

    return () => {
      headings.forEach((h) => observer.unobserve(h));
      mainContent.removeEventListener('scroll', handleScroll);
    };
  }, [activeChapterId]);

  const toggleChapterCompletion = (id: string) => {
    setCompletedChapters((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };

  const progressPercentage = Math.round((completedChapters.length / chapters.length) * 100);

  const uniqueGlossaryEntries = Object.entries(glossaryTerms).filter(
    ([term, def]) =>
      term.toLowerCase().includes(glossaryFilter.toLowerCase()) ||
      def.toLowerCase().includes(glossaryFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500/20 selection:text-sky-600 dark:selection:text-sky-300">
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />

      {/* Glossary Modal */}
      {isGlossaryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl max-w-2xl w-full p-6 shadow-xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Léxico técnico · Edición 2026
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                  Glosario interactivo de conceptos clave
                </h3>
              </div>
              <button
                onClick={() => setIsGlossaryOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                aria-label="Cerrar glosario"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={glossaryFilter}
                onChange={(e) => setGlossaryFilter(e.target.value)}
                placeholder="Filtrar término (ej. MCP, Test-Time Compute, RAG, EU AI Act)..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="overflow-y-auto space-y-2.5 pr-1">
              {uniqueGlossaryEntries.map(([term, definition]) => (
                <div
                  key={term}
                  className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 mb-1">
                    {term}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                    {definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3-Zone Top Bar Contract (<header>) */}
      <header className="sticky top-0 z-30 h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Identity + Author Credit */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setActiveChapterId('modulo1')}
            className="group relative w-8 h-8 rounded-lg bg-slate-900 dark:bg-sky-500/15 border border-slate-800 dark:border-sky-400/30 flex items-center justify-center text-white shrink-0 shadow-xs hover:border-sky-500 dark:hover:border-sky-400 transition-all cursor-pointer"
            title="Ir al inicio · Dominando la IA"
            aria-label="Ir al inicio de Dominando la IA"
          >
            <svg
              className="w-4 h-4 text-sky-400 group-hover:scale-105 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Isometric Hexagonal Prism / Technical Codex Frame */}
              <path
                d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z"
                className="stroke-sky-400/40 dark:stroke-sky-400/50"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Internal Neural Graph & Open Book Spine */}
              <path
                d="M12 21.5V12M12 12L20.5 7.25M12 12L3.5 7.25"
                className="stroke-sky-400/30"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              {/* Active Reasoning Circuit Paths */}
              <path
                d="M7.5 9.5L12 7L16.5 9.5V14.5L12 17L7.5 14.5V9.5Z"
                className="stroke-white dark:stroke-sky-300"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
              {/* Central Core Node & Vertex Nodes */}
              <circle cx="12" cy="12" r="2" className="fill-sky-400" />
              <circle cx="12" cy="7" r="1.2" className="fill-white" />
              <circle cx="7.5" cy="14.5" r="1.2" className="fill-white" />
              <circle cx="16.5" cy="14.5" r="1.2" className="fill-white" />
            </svg>
          </button>
          <div className="flex items-baseline gap-2.5 truncate">
            <span className="font-bold font-display text-base tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
              Dominando la IA
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <a
              href="https://portafolio.franciscosereno.cl/sobre-mi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors hidden sm:inline whitespace-nowrap shrink-0"
            >
              por Francisco Sereno
            </a>
          </div>
        </div>

        {/* Zone 2: Concise Single-Line Navigation Links (Max 4 items) */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setActiveChapterId('modulo1')}
            className={`text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeChapterId === 'modulo1'
                ? 'text-sky-600 dark:text-sky-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Fundamentos
          </button>
          <button
            onClick={() => setActiveChapterId('catalogo')}
            className={`text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeChapterId === 'catalogo'
                ? 'text-sky-600 dark:text-sky-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Catálogo 2026
          </button>
          <button
            onClick={() => setIsGlossaryOpen(true)}
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Glosario
          </button>
          <button
            onClick={() => setIsAboutModalOpen(true)}
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Acerca de
          </button>
        </nav>

        {/* Zone 3: Single Primary Action Button (GitHub Repository Badge) */}
        <div className="flex items-center">
          <a
            href="https://github.com/francisco-sereno/guia-fundamentos-IAGen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>guia-fundamentos-IAGen</span>
          </a>
        </div>
      </header>

      {/* Reading Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Sidebar Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-xs lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar Navigation (Collapsible in Focus Mode) */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } ${isFocusMode ? 'lg:hidden' : 'lg:translate-x-0'}`}
        >
          {/* Sidebar Progress Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Progreso del curso
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                  {completedChapters.length}/{chapters.length} ({progressPercentage}%)
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="lg:hidden p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  aria-label="Cerrar menú"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="bg-sky-600 dark:bg-sky-500 h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Chapters List */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              const isActive = chapter.id === activeChapterId;
              const isCompleted = completedChapters.includes(chapter.id);

              return (
                <div key={chapter.id} className="space-y-1">
                  <button
                    onClick={() => {
                      setActiveChapterId(chapter.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-sky-50/90 dark:bg-sky-950/40 text-sky-900 dark:text-sky-100 border border-sky-200/80 dark:border-sky-800/60'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    <div
                      className={`mt-0.5 p-1.5 rounded-md shrink-0 ${
                        isActive
                          ? 'bg-sky-600 text-white'
                          : isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {chapter.code} · {chapter.readTime.replace(' de lectura', '')}
                      </div>
                      <div className={`text-xs font-semibold leading-snug mt-0.5 ${isActive ? 'text-sky-950 dark:text-white' : ''}`}>
                        {chapter.title}
                      </div>
                    </div>
                  </button>

                  {/* Subsections Tree for Active Chapter */}
                  {isActive && chapter.subsections && (
                    <div className="ml-5 pl-3 border-l border-slate-200 dark:border-slate-800 space-y-0.5 py-1">
                      {chapter.subsections.map((sub, subIdx) => {
                        const secId = `sec-${chapter.id}-${subIdx}`;
                        const isSecActive = activeSection === secId;
                        return (
                          <button
                            key={secId}
                            onClick={() => {
                              const el = document.getElementById(secId);
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                setActiveSection(secId);
                                setIsMobileMenuOpen(false);
                              }
                            }}
                            className={`w-full text-left py-1.5 px-2 rounded text-[11px] transition-colors cursor-pointer line-clamp-1 ${
                              isSecActive
                                ? 'font-semibold text-sky-600 dark:text-sky-400 bg-sky-50/60 dark:bg-sky-950/30'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                          >
                            {sub}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Sidebar Footer Author Credit */}
          <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between bg-slate-50/40 dark:bg-slate-900/40">
            <a
              href="https://portafolio.franciscosereno.cl/sobre-mi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-sky-400 inline-flex items-center gap-1 font-medium"
            >
              <span>Autor: Francisco Sereno</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="font-mono">v2026.2</span>
          </div>
        </aside>

        {/* Main Content Area */}
        <main
          id="main-content"
          className="flex-1 overflow-y-auto h-[calc(100vh-3.5rem)] relative scroll-smooth"
        >
          {/* Thin Reading Progress Bar */}
          <div className="sticky top-0 z-20 w-full h-0.5 bg-slate-200/60 dark:bg-slate-800/60">
            <div
              className="h-full bg-sky-600 dark:bg-sky-400 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Secondary Workspace Utility Bar */}
          <div className="sticky top-0.5 z-10 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-8 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 cursor-pointer"
                aria-label="Abrir índice de capítulos"
              >
                <Menu className="w-4 h-4" />
              </button>

              {/* Unboxed Metadata with Middot Separators (Zero-Pill Rule) */}
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                <span className="font-semibold text-sky-600 dark:text-sky-400">{currentChapter.code}</span>
                <span className="mx-2">·</span>
                <span>{currentChapter.readTime}</span>
                <span className="hidden sm:inline mx-2">·</span>
                <span className="hidden sm:inline tabular-nums">
                  Lectura: {Math.round(scrollProgress)}%
                </span>
              </div>
            </div>

            {/* Workspace Controls: Glossary, Focus Mode, Theme Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsGlossaryOpen(true)}
                className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer whitespace-nowrap shrink-0 md:hidden"
              >
                Glosario
              </button>

              <button
                onClick={() => setIsFocusMode(!isFocusMode)}
                className={`hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isFocusMode
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
                title="Alternar modo de lectura enfocada"
              >
                {isFocusMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span>{isFocusMode ? 'Mostrar índice' : 'Modo lectura'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-600" />
                    <span className="hidden sm:inline">Oscuro</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Editorial Content Container */}
          <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-12">
            {/* Chapter Hero Header */}
            <div className="mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                {currentChapter.code} · {currentChapter.readTime} · Actualización 2026
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight mb-3">
                {currentChapter.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                {currentChapter.subtitle}
              </p>
            </div>

            {/* Chapter Prose Content */}
            <article className="prose-custom">
              {currentChapter.content}
            </article>

            {/* Chapter Completion & Prev/Next Footer */}
            <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
              <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Registro de avance personal
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {completedChapters.includes(currentChapter.id)
                      ? '¡Módulo completado y registrado en tu progreso!'
                      : '¿Terminaste de revisar los conceptos y simuladores de este módulo?'}
                  </h4>
                </div>
                <button
                  onClick={() => toggleChapterCompletion(currentChapter.id)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    completedChapters.includes(currentChapter.id)
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                      : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {completedChapters.includes(currentChapter.id)
                      ? 'Módulo completado'
                      : 'Marcar como completado'}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevChapter ? (
                  <button
                    onClick={() => setActiveChapterId(prevChapter.id)}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 text-left transition-all cursor-pointer group flex items-center gap-3"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">Módulo anterior (Alt + ←)</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {prevChapter.title}
                      </div>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextChapter ? (
                  <button
                    onClick={() => setActiveChapterId(nextChapter.id)}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 text-right transition-all cursor-pointer group flex items-center justify-end gap-3"
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">Siguiente módulo (Alt + →)</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {nextChapter.title}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 shrink-0" />
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>

          {/* Back to Top Floating Button */}
          {showBackToTop && (
            <button
              onClick={() => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="fixed bottom-6 right-6 z-30 p-2.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg hover:bg-sky-600 dark:hover:bg-sky-400 transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
