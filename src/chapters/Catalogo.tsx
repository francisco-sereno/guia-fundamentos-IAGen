import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const CatalogoContent = () => (
  <div className="prose-custom">
    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Catálogo de técnicas de prompting</h1>
    <p className="text-xl text-slate-300 mb-8">Caso de estudio: SofIA | Asistente de transición profesional</p>

    <AuthorNote>
      Este catálogo no es solo una lista de técnicas; es un "menú" de herramientas que he curado basándome en los desafíos reales que enfrenté al guiar a SofIA en su transición profesional. No intentes aprenderlas todas a la vez; elige una y aplícala hoy.
    </AuthorNote>

    <h2 id="sec-2-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🎯 Introducción al catálogo</h2>
    <p>Este catálogo interactivo te permite explorar y dominar 15 técnicas esenciales de prompting aplicadas al caso de <strong>SofIA</strong>, un asistente de IA generativa especializado en transición profesional.</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Technique 1 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🎯</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">Básico</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Zero-shot prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Pedir directamente a la IA que realice una tarea sin darle ejemplos previos, confiando en su conocimiento general.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Analiza mi CV y dime qué competencias puedo destacar para un puesto de Product Manager."</p>
            </div>
        </div>

        {/* Technique 2 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📚</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">Básico</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Few-shot prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Proporcionar algunos ejemplos del tipo de respuesta que esperas antes de hacer tu pregunta principal.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic whitespace-pre-wrap">"Traduce estas experiencias a competencias...\nEjemplo 1: 'Coordiné equipo...' -{'>'} 'Gestión de equipos'\nAhora traduce: 'Manejé clientes...'"</p>
            </div>
        </div>

        {/* Technique 3 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🔗</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Chain-of-thought (CoT)</h3>
            <p className="text-slate-400 text-sm mb-4">Pedirle a la IA que muestre su razonamiento paso a paso antes de dar una respuesta final.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Analiza paso a paso si mi perfil es adecuado: 1. Identifica competencias clave 2. Mapea mi CV 3. Evalúa match 4. Conclusión"</p>
            </div>
        </div>

        {/* Technique 4 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🎭</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">Básico</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Role prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Asignarle a la IA un rol específico (experto, profesor, consultor) para que responda desde esa perspectiva.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Actúa como un reclutador senior de tecnología con 15 años de experiencia. Revisa mi CV y carta de presentación..."</p>
            </div>
        </div>

        {/* Technique 5 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🎲</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Self-consistency</h3>
            <p className="text-slate-400 text-sm mb-4">Generar múltiples respuestas con razonamiento independiente y seleccionar la más consistente.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Genera 3 versiones diferentes de análisis de mi perfil, cada una con un enfoque distinto. Luego identifica qué competencias aparecen consistentemente..."</p>
            </div>
        </div>

        {/* Technique 6 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">⛓️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt chaining</h3>
            <p className="text-slate-400 text-sm mb-4">Dividir una tarea compleja en una secuencia de prompts más simples, donde la salida de uno alimenta al siguiente.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Paso 1: Extrae mis responsabilidades. [Respuesta] Paso 2: Traduce a competencias. [Respuesta] Paso 3: Agrúpalas en categorías."</p>
            </div>
        </div>

        {/* Technique 7 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🌳</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Tree of thoughts</h3>
            <p className="text-slate-400 text-sm mb-4">Explorar múltiples caminos de razonamiento simultáneamente, evaluando cada rama antes de continuar.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Explora 3 rutas diferentes para mi transición a PM. Para cada ruta, evalúa: probabilidad de éxito, tiempo estimado, inversión necesaria."</p>
            </div>
        </div>

        {/* Technique 8 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🤔</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">ReAct (Reasoning + Acting)</h3>
            <p className="text-slate-400 text-sm mb-4">Alternar entre razonamiento (pensar) y acción (hacer), permitiendo ajustar el enfoque basándose en resultados intermedios.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Pensamiento: Analiza mi perfil. Acción: Sugiere 3 cambios. Pensamiento: Evalúa impacto. Acción: Prioriza cambios."</p>
            </div>
        </div>

        {/* Technique 9 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📜</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Constitutional AI</h3>
            <p className="text-slate-400 text-sm mb-4">Incorporar principios o reglas éticas explícitas que la IA debe seguir al generar respuestas.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Analiza mi CV siguiendo estos principios: 1. No hagas suposiciones sobre mi género/edad 2. Enfócate solo en habilidades verificables..."</p>
            </div>
        </div>

        {/* Technique 10 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">⚖️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Contrastive prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Mostrar explícitamente qué quieres y qué NO quieres en la respuesta mediante ejemplos contrastantes.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"❌ NO quiero: 'Responsable de múltiples tareas' ✅ SÍ quiero: 'Lideré equipo de 5 personas en implementación de CRM...'"</p>
            </div>
        </div>

        {/* Technique 11 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🔄</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Iterative refinement</h3>
            <p className="text-slate-400 text-sm mb-4">Mejorar progresivamente una respuesta mediante múltiples rondas de feedback y refinamiento.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Iteración 1: Escribe mi resumen. Iteración 2: Hazlo más conciso. Iteración 3: Agrega una cifra de impacto."</p>
            </div>
        </div>

        {/* Technique 12 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🧠</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Metacognitive prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Pedirle a la IA que reflexione sobre su propio proceso de pensamiento y evalúe la calidad de sus respuestas.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Reflexiona sobre tu análisis: ¿Qué tan confiable es tu mapeo? ¿Qué información adicional te ayudaría? ¿Hay alguna suposición incorrecta?"</p>
            </div>
        </div>

        {/* Technique 13 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📦</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Context stuffing</h3>
            <p className="text-slate-400 text-sm mb-4">Proporcionar todo el contexto relevante de forma estructurada en el prompt para maximizar la calidad de la respuesta.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"=== PERFIL ACTUAL === ... === OBJETIVO === ... === RESTRICCIONES === ... === FORTALEZAS PERCIBIDAS === ... Ahora recomienda mi plan."</p>
            </div>
        </div>

        {/* Technique 14 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">❓</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Socratic questioning</h3>
            <p className="text-slate-400 text-sm mb-4">Usar preguntas dirigidas para guiar a la IA hacia un razonamiento más profundo y descubrir insights por su cuenta.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Antes de optimizar mi CV, responde: ¿Qué historia profesional está contando actualmente? ¿Qué suposiciones haría un reclutador?"</p>
            </div>
        </div>

        {/* Technique 15 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">👥</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Perspective-taking</h3>
            <p className="text-slate-400 text-sm mb-4">Pedirle a la IA que adopte múltiples perspectivas diferentes sobre el mismo problema para obtener un análisis más completo.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo Isabella Andrea</p>
                <p className="text-sm text-slate-300 italic">"Analiza mi decisión desde 3 perspectivas: 1. Como reclutador 2. Como tu futuro yo 3. Como mentor experimentado en PM."</p>
            </div>
        </div>
    </div>
  </div>
);
