import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Database, Zap, GitBranch, Layers } from 'lucide-react';

export const TransformerDiagram = () => {
  const steps = [
    { id: 'input', label: 'Entrada (Tokens)', icon: Database, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { id: 'embedding', label: 'Embedding + Posición', icon: Layers, color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
    { id: 'attention', label: 'Auto-Atención (Self-Attention)', icon: GitBranch, color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
    { id: 'ffn', label: 'Red Feed-Forward', icon: Cpu, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { id: 'output', label: 'Salida (Probabilidades)', icon: Zap, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  ];

  return (
    <div className="my-12 p-8 bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-pink-500 via-purple-500 to-amber-500 opacity-50" />
      
      <h4 className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Flujo de Datos en la Arquitectura Transformer</h4>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center p-4 rounded-2xl border ${step.color} w-full lg:w-40 text-center shadow-lg backdrop-blur-sm relative z-10`}
            >
              <div className="p-3 rounded-xl bg-slate-900/80 mb-3 border border-white/5">
                <step.icon size={24} />
              </div>
              <span className="text-xs font-bold leading-tight">{step.label}</span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className="flex lg:flex-row flex-col items-center justify-center py-2 lg:py-0">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-slate-600 lg:rotate-0 rotate-90"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
        
        {/* Decorative background line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 hidden lg:block" />
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-5 bg-slate-800/30 rounded-2xl border border-white/5">
          <h5 className="text-indigo-300 font-bold mb-2 flex items-center gap-2">
            <GitBranch size={16} /> ¿Cómo funciona la Auto-Atención?
          </h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            Imagina la frase: "El animal no cruzó la calle porque estaba muy cansado". El mecanismo de atención permite que el modelo entienda que "estaba" se refiere al "animal" y no a la "calle", analizando la relación semántica entre todas las palabras simultáneamente.
          </p>
        </div>
        <div className="p-5 bg-slate-800/30 rounded-2xl border border-white/5">
          <h5 className="text-pink-300 font-bold mb-2 flex items-center gap-2">
            <Layers size={16} /> Codificación Posicional
          </h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            Como el Transformer procesa todo en paralelo, pierde el orden natural de las palabras. La codificación posicional añade una "etiqueta de tiempo" a cada palabra para que el modelo sepa qué posición ocupa en la oración.
          </p>
        </div>
      </div>
    </div>
  );
};
