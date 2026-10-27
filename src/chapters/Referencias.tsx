import React from 'react';
import { BookOpen, ExternalLink, FileText, Globe, Award } from 'lucide-react';
import { AuthorNote } from '../components/Shared';

interface ReferenceEntry {
  category: string;
  items: {
    authors: string;
    year: string;
    title: string;
    source: string;
    url?: string;
    note: string;
  }[];
}

const referenceGroups: ReferenceEntry[] = [
  {
    category: '1. Libros fundacionales y arquitectura de sistemas inteligentes',
    items: [
      {
        authors: 'Russell, S., & Norvig, P.',
        year: '2021',
        title: 'Artificial Intelligence: A Modern Approach (4th ed.)',
        source: 'Pearson Education',
        note: 'Obra canónica de referencia para la definición de agentes racionales y el marco arquitectónico PEAS.'
      },
      {
        authors: 'Goodfellow, I., Bengio, Y., & Courville, A.',
        year: '2016',
        title: 'Deep Learning',
        source: 'MIT Press',
        url: 'https://www.deeplearningbook.org/',
        note: 'Fundamentos matemáticos de redes neuronales profundas, optimización por descenso de gradiente y representaciones.'
      },
      {
        authors: 'Vaswani, A., Shazeer, N., Parmar, N., et al.',
        year: '2017',
        title: 'Attention Is All You Need',
        source: 'Advances in Neural Information Processing Systems (NeurIPS)',
        url: 'https://arxiv.org/abs/1706.03762',
        note: 'Artículo seminal que introdujo la arquitectura Transformer y el mecanismo de autoatención.'
      }
    ]
  },
  {
    category: '2. Modelos de razonamiento, Test-Time Compute e Ingeniería de Contexto (2022–2026)',
    items: [
      {
        authors: 'Wei, J., Wang, X., Schuurmans, D., et al.',
        year: '2022',
        title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
        source: 'NeurIPS',
        url: 'https://arxiv.org/abs/2201.11903',
        note: 'Demostración empírica de cómo el desglose de pasos intermedios emerge como propiedad de escala.'
      },
      {
        authors: 'Yao, S., Zhao, J., Yu, D., et al.',
        year: '2023',
        title: 'ReAct: Synergizing Reasoning and Acting in Language Models',
        source: 'ICLR',
        url: 'https://arxiv.org/abs/2210.03629',
        note: 'Patrón base de los agentes modernos que unifica trazas de razonamiento con invocación de herramientas.'
      },
      {
        authors: 'Snell, C., Lee, J., Xu, K., & Kumar, A.',
        year: '2024',
        title: 'Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters',
        source: 'arXiv / ICLR 2025',
        url: 'https://arxiv.org/abs/2408.03314',
        note: 'Estudio fundamental sobre cómo el cómputo en tiempo de inferencia permite a modelos más compactos superar a modelos masivos.'
      },
      {
        authors: 'DeepSeek-AI, Guo, D., Yang, D., et al.',
        year: '2025',
        title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning',
        source: 'arXiv Technical Report',
        url: 'https://arxiv.org/abs/2501.12948',
        note: 'Evidencia abierta de cómo el aprendizaje por refuerzo con recompensas verificables (RLVR) induce autoverificación y reflexión.'
      },
      {
        authors: 'Edge, D., Trinh, H., et al. (Microsoft Research)',
        year: '2024',
        title: 'From Local to Global: A Graph RAG Approach to Query-Focused Summarization',
        source: 'arXiv',
        url: 'https://arxiv.org/abs/2404.16130',
        note: 'Arquitectura GraphRAG que combina grafos de conocimiento con recuperación vectorial para síntesis de corpus complejos.'
      }
    ]
  },
  {
    category: '3. Protocolos Agénticos e Interoperabilidad (MCP & A2A)',
    items: [
      {
        authors: 'Model Context Protocol Specification (Anthropic / Linux Foundation)',
        year: '2025–2026',
        title: 'Model Context Protocol (MCP): Open Standard for Connecting AI Assistants to Systems of Record',
        source: 'modelcontextprotocol.io',
        url: 'https://modelcontextprotocol.io/',
        note: 'Especificación técnica oficial de recursos, herramientas y prompts sobre JSON-RPC para agentes.'
      },
      {
        authors: 'Google Cloud & Partner Ecosystem',
        year: '2025',
        title: 'Agent2Agent (A2A) Protocol Specification',
        source: 'Google Developers / Open Source Specification',
        note: 'Estándar de interoperabilidad horizontal entre agentes autónomos heterogéneos y descubrimiento de capacidades.'
      }
    ]
  },
  {
    category: '4. Ética, Regulación Internacional y Marcos Educativos (UNESCO & EU AI Act)',
    items: [
      {
        authors: 'UNESCO',
        year: '2024–2025',
        title: 'AI Competency Framework for Teachers & AI Competency Framework for Students',
        source: 'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (París)',
        url: 'https://www.unesco.org/en/digital-education/ai-future-learning/competency-frameworks',
        note: 'Marcos globales que definen las progresiones de competencias éticas, pedagógicas y técnicas para docentes y estudiantes.'
      },
      {
        authors: 'Parlamento Europeo y Consejo de la Unión Europea',
        year: '2024–2026',
        title: 'Reglamento (UE) 2024/1689 por el que se establecen normas armonizadas en materia de inteligencia artificial (EU AI Act)',
        source: 'Diario Oficial de la Unión Europea',
        url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
        note: 'Primera ley integral vinculante sobre IA basada en niveles de riesgo, con disposiciones específicas para educación y empleo.'
      },
      {
        authors: 'UNESCO',
        year: '2023',
        title: 'Readiness Assessment Methodology (RAM): A Tool of the Recommendation on the Ethics of Artificial Intelligence',
        source: 'UNESCO Publishing',
        note: 'Metodología de diagnóstico institucional y nacional sobre preparación ética, legal y técnica en IA.'
      }
    ]
  }
];

export const Referencias = () => (
  <div className="space-y-8">
    <h2 id="sec-referencias-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      Bibliografía científica, estándares técnicos y marcos normativos (Actualización 2026)
    </h2>
    <p>
      Todo el contenido conceptual, arquitectónico y ético de esta guía se sustenta en literatura científica revisada por pares, especificaciones técnicas abiertas y marcos regulatorios internacionales vigentes:
    </p>

    <div className="space-y-6">
      {referenceGroups.map((group, idx) => (
        <div
          key={idx}
          className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
            {group.category}
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {group.items.map((item, i) => (
              <div key={i} className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                    {item.title}
                  </h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    {item.authors} · {item.year}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 italic mb-1.5">
                  {item.source}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                  {item.note}
                </p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline mt-1.5"
                  >
                    <span>Consultar documento original</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <AuthorNote>
      Esta guía se mantiene en actualización continua conforme evolucionan los estándares abiertos de la disciplina. Te invitamos a contrastar siempre las fuentes primarias y aplicar el método científico en cada implementación.
    </AuthorNote>
  </div>
);
