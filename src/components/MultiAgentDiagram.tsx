import React, { useState } from 'react';

export const MultiAgentDiagram = () => {
  const [selectedNode, setSelectedNode] = useState<'orchestrator' | 'mcp' | 'a2a' | 'hitl'>('orchestrator');

  const nodes = {
    orchestrator: {
      title: 'Agente Orquestador (Supervisor cognitivo)',
      protocol: 'Planificación ReAct + Presupuesto de Pensamiento',
      desc: 'Recibe el objetivo general de SofIA, descompone el problema en un grafo acíclico de subtareas, asigna presupuestos de tokens y evalúa si las salidas parciales cumplen la rúbrica de calidad antes de avanzar.'
    },
    mcp: {
      title: 'Capa de Herramientas vía Model Context Protocol (MCP)',
      protocol: 'Estándar abierto Linux Foundation · JSON-RPC',
      desc: 'Conecta a los agentes de forma estandarizada y segura con fuentes de datos reales: LMS escolar, bases de datos PostgreSQL, repositorios GitHub y motores de búsqueda científica, con permisos granulares OAuth 2.1.'
    },
    a2a: {
      title: 'Enjambre de Agentes Especialistas (Protocolo A2A)',
      protocol: 'Agent-to-Agent Interoperability',
      desc: 'Permite que un Agente Investigador Curricular, un Agente Generador de Evaluaciones y un Agente Crítico Pedagógico intercambien artefactos verificados y auditen mutuamente sus hallazgos.'
    },
    hitl: {
      title: 'Gobernanza Humana en el Bucle (Human-in-the-Loop)',
      protocol: 'Marco DECIDE-IA · Supervisión ética',
      desc: 'Ninguna acción con impacto académico o administrativo se ejecuta sin confirmación explícita. SofIA revisa la trazabilidad, edita matices pedagógicos y autoriza la publicación final.'
    }
  };

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="pb-4 mb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Topología de sistemas · Orquestación MCP y A2A
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Arquitectura de ecosistema multi-agente con supervisión humana
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Selecciona un nodo para ver su protocolo
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {(Object.keys(nodes) as Array<keyof typeof nodes>).map((key, idx) => (
          <button
            key={key}
            onClick={() => setSelectedNode(key)}
            className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
              selectedNode === key
                ? 'bg-sky-50/70 dark:bg-sky-950/30 border-sky-500 dark:border-sky-500'
                : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 mb-1">
              NODO 0{idx + 1}
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
              {nodes[key].title}
            </div>
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <span className="text-xs font-bold text-slate-900 dark:text-white">
            {nodes[selectedNode].title}
          </span>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
            {nodes[selectedNode].protocol}
          </span>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {nodes[selectedNode].desc}
        </p>
      </div>
    </div>
  );
};
