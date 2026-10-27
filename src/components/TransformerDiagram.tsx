import React, { useState } from 'react';

export const TransformerDiagram = () => {
  const [selectedStage, setSelectedStage] = useState<number>(2);

  const stages = [
    {
      id: 0,
      step: '01',
      name: 'Tokenización & Embeddings',
      metric: 'Sub-palabras → Vectores R^d',
      desc: 'El texto, código, imagen o audio de entrada se divide en tokens discretos. Cada token se proyecta en un espacio vectorial multidimensional junto con su codificación posicional rotatoria (RoPE) para conservar el orden secuencial.'
    },
    {
      id: 1,
      step: '02',
      name: 'Autoatención (Self-Attention)',
      metric: 'Matrices Query · Key · Value',
      desc: 'Cada token evalúa su relevancia semántica y sintáctica frente a todos los demás tokens del contexto simultáneamente, resolviendo referencias cruzadas a larga distancia (hasta millones de tokens).'
    },
    {
      id: 2,
      step: '03',
      name: 'Mixture of Experts (MoE) & Test-Time Compute',
      metric: 'Enrutamiento disperso + Thinking Tokens',
      desc: 'Un enrutador activa únicamente las sub-redes expertas necesarias para el dominio actual (ej. física, código Python o redacción pedagógica). En modelos razonadores 2026, el sistema genera primero una traza interna de pensamiento verificable antes de emitir la salida.'
    },
    {
      id: 3,
      step: '04',
      name: 'Proyección Logits & Muestreo',
      metric: 'Softmax(z_i / T) → Top-P / Top-K',
      desc: 'La capa final asigna una distribución de probabilidad sobre todo el vocabulario. Los hiperparámetros de Temperatura y Top-P controlan si la selección es determinista (técnica) o exploratoria (creativa).'
    }
  ];

  return (
    <div className="my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
      <div className="pb-4 mb-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Arquitectura interna · Transformer Moderno (MoE + Reasoning)
          </div>
          <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mt-0.5">
            Tubería de procesamiento desde los tokens de entrada hasta la inferencia
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Haz clic en cada bloque arquitectónico
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => setSelectedStage(stage.id)}
            className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
              selectedStage === stage.id
                ? 'bg-sky-50/70 dark:bg-sky-950/30 border-sky-500 dark:border-sky-500'
                : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-sky-600 dark:text-sky-400 mb-1.5">
              <span>FASE {stage.step}</span>
              <span>→</span>
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              {stage.name}
            </div>
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {stage.metric}
            </div>
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
          Inspección técnica · {stages[selectedStage].name} ({stages[selectedStage].metric})
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {stages[selectedStage].desc}
        </p>
      </div>
    </div>
  );
};
