import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Wrench, ArrowRight, MessageSquare, ShieldCheck, Cpu, Database, Search, Layout } from 'lucide-react';

export const MultiAgentDiagram = () => {
  return (
    <div className="my-12 p-8 bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50" />
      
      <h4 className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-12">Arquitectura de un sistema multiagente</h4>
      
      <div className="relative flex flex-col items-center gap-12">
        {/* User Input */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-4 rounded-full bg-slate-800 border border-slate-700 text-slate-300 shadow-xl">
            <User size={32} />
          </div>
          <span className="text-xs font-bold text-slate-400">Usuario</span>
          <div className="h-8 w-px bg-gradient-to-b from-slate-700 to-indigo-500" />
        </motion.div>

        {/* Orchestrator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-6 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 shadow-[0_0_30px_rgba(79,70,229,0.2)] text-center w-full max-w-md z-20"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-[10px] font-bold rounded-full text-white uppercase tracking-tighter">
            Orquestador (Manager)
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cpu className="text-indigo-400" size={28} />
            <span className="text-lg font-bold text-white">Agente supervisor</span>
          </div>
          <p className="text-xs text-indigo-200/70 leading-relaxed">
            Recibe la tarea compleja, la descompone en subtareas y coordina a los especialistas.
          </p>
        </motion.div>

        {/* Specialized Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">
          {/* Connection lines from Orchestrator to Agents */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full h-12 hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 400 50" fill="none">
              <path d="M200 0V25M200 25H50V50M200 25H350V50M200 25V50" stroke="currentColor" strokeWidth="1" className="text-indigo-500/30" />
            </svg>
          </div>

          {[
            { label: 'Investigador', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', desc: 'Busca datos en la web.' },
            { label: 'Analista', icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', desc: 'Procesa y estructura datos.' },
            { label: 'Escritor', icon: Layout, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', desc: 'Genera el reporte final.' }
          ].map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-xl ${agent.bg} border ${agent.border} flex flex-col items-center text-center gap-3 relative z-10`}
            >
              <div className={`p-3 rounded-lg bg-slate-900/80 ${agent.color}`}>
                <agent.icon size={24} />
              </div>
              <h5 className={`font-bold text-sm ${agent.color}`}>{agent.label}</h5>
              <p className="text-[10px] text-slate-400 leading-tight">{agent.desc}</p>
              
              {/* Tools connection */}
              <div className="h-6 w-px bg-slate-700" />
              <div className="flex gap-2">
                <div className="p-1.5 rounded-md bg-slate-800 border border-slate-700 text-slate-500" title="Herramienta">
                  <Wrench size={12} />
                </div>
                <div className="p-1.5 rounded-md bg-slate-800 border border-slate-700 text-slate-500" title="Base de datos">
                  <Database size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Feedback Loop */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-300 text-xs italic"
        >
          <ShieldCheck size={18} />
          <span>Validación y entrega de resultados al usuario</span>
        </motion.div>
      </div>
    </div>
  );
};
