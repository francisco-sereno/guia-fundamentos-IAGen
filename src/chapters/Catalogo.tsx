import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote, CopyButton } from '../components/Shared';

export const CatalogoContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      Este catálogo presenta las herramientas que SofIA utilizó para superar sus propios desafíos. No es una lista teórica, sino un conjunto de soluciones prácticas que cualquier persona puede adaptar a su propia búsqueda de herramientas y oportunidades.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Catálogo de técnicas de prompting</h1>
    <p className="text-xl text-slate-300 mb-8">Caso de estudio: SofIA | Persona en búsqueda de empleo</p>

    <h2 id="sec-2-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🎯 Introducción al catálogo</h2>
    <p>Este catálogo interactivo te permite explorar y dominar 43 técnicas esenciales de prompting aplicadas al caso de <strong>SofIA</strong>, una persona en búsqueda de empleo que utiliza la IA para potenciar su perfil profesional.</p>

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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Analiza mi historial laboral en retail y genera una lista de 5 competencias transferibles que sean valiosas para un rol de analista de operaciones." />
                </div>
                <p className="text-sm text-slate-300 italic">"Analiza mi historial laboral en retail y genera una lista de 5 competencias transferibles que sean valiosas para un rol de analista de operaciones."</p>
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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Convierte estas tareas en logros:\nEjemplo 1: 'Supervisé personal' → 'Lideré un equipo de 12 personas logrando un 15% más de eficiencia'\nAhora hazlo con: 'Manejé el cierre de caja diario...'" />
                </div>
                <p className="text-sm text-slate-300 italic whitespace-pre-wrap">"Convierte estas tareas en logros:\nEjemplo 1: 'Supervisé personal' → 'Lideré un equipo de 12 personas logrando un 15% más de eficiencia'\nAhora hazlo con: 'Manejé el cierre de caja diario...'"</p>
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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Analiza paso a paso si mi experiencia en gestión de inventarios es relevante para logística: 1. Define requisitos de logística 2. Compara con mis tareas 3. Identifica brechas 4. Concluye." />
                </div>
                <p className="text-sm text-slate-300 italic">"Analiza paso a paso si mi experiencia en gestión de inventarios es relevante para logística: 1. Define requisitos de logística 2. Compara con mis tareas 3. Identifica brechas 4. Concluye."</p>
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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Actúa como una experta en reclutamiento de startups tecnológicas. Revisa mi resumen profesional y dime si suena demasiado tradicional o si encaja con la cultura ágil." />
                </div>
                <p className="text-sm text-slate-300 italic">"Actúa como una experta en reclutamiento de startups tecnológicas. Revisa mi resumen profesional y dime si suena demasiado tradicional o si encaja con la cultura ágil."</p>
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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Genera 3 análisis independientes sobre si mi perfil es mejor para 'Project Coordinator' o 'Operations Associate'. Luego, resume los puntos en común de los 3 análisis." />
                </div>
                <p className="text-sm text-slate-300 italic">"Genera 3 análisis independientes sobre si mi perfil es mejor para 'Project Coordinator' o 'Operations Associate'. Luego, resume los puntos en común de los 3 análisis."</p>
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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Paso 1: Extrae mis 3 mayores logros. [Respuesta] Paso 2: Redáctalos usando el método STAR. [Respuesta] Paso 3: Optimízalos para una oferta de analista de datos." />
                </div>
                <p className="text-sm text-slate-300 italic">"Paso 1: Extrae mis 3 mayores logros. [Respuesta] Paso 2: Redáctalos usando el método STAR. [Respuesta] Paso 3: Optimízalos para una oferta de analista de datos."</p>
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
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Explora 3 estrategias para mi transición: 1. Ascenso interno 2. Cambio de industria 3. Emprendimiento. Evalúa riesgos y beneficios de cada una para mi situación actual." />
                </div>
                <p className="text-sm text-slate-300 italic">"Explora 3 estrategias para mi transición: 1. Ascenso interno 2. Cambio de industria 3. Emprendimiento. Evalúa riesgos y beneficios de cada una para mi situación actual."</p>
            </div>
        </div>

        {/* Technique 8 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🤔</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">ReAct (reasoning + acting)</h3>
            <p className="text-slate-400 text-sm mb-4">Alternar entre razonamiento (pensar) y acción (hacer), permitiendo ajustar el enfoque basándose en resultados intermedios.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Pensamiento: Analiza mi CV. Acción: Sugiere 3 cursos de Coursera. Pensamiento: Evalúa cuál es más urgente. Acción: Crea un plan de estudio de 4 semanas." />
                </div>
                <p className="text-sm text-slate-300 italic">"Pensamiento: Analiza mi CV. Acción: Sugiere 3 cursos de Coursera. Pensamiento: Evalúa cuál es más urgente. Acción: Crea un plan de estudio de 4 semanas."</p>
            </div>
        </div>

        {/* Technique 9 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📐</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Meta-prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Prioriza los aspectos arquitectónicos y sintácticos de la resolución de un problema, descartando la carga narrativa específica para evitar sesgos.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Aplica el siguiente marco lógico abstracto (Identificar variables -> Calcular determinantes -> Estructurar despeje) a mi problema de transición laboral, sin dejarte influenciar por el sector específico." />
                </div>
                <p className="text-sm text-slate-300 italic">"Aplica el siguiente marco lógico abstracto (Identificar variables -&gt; Calcular determinantes -&gt; Estructurar despeje) a mi problema de transición laboral, sin dejarte influenciar por el sector específico."</p>
            </div>
        </div>

        {/* Technique 10 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🧭</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Directional stimulus prompting (DSP)</h3>
            <p className="text-slate-400 text-sm mb-4">Utiliza un modelo auxiliar para generar "pistas" latentes o estímulos direccionales que guían al modelo principal sin alterar sus parámetros.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="[El sistema genera internamente 5 palabras clave sobre mi CV] -> Usa estas directrices invisibles para redactar mi resumen profesional de forma altamente optimizada." />
                </div>
                <p className="text-sm text-slate-300 italic">"[El sistema genera internamente 5 palabras clave sobre mi CV] -&gt; Usa estas directrices invisibles para redactar mi resumen profesional de forma altamente optimizada."</p>
            </div>
        </div>

        {/* Technique 11 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">⚖️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Auto-consistencia informada por confianza (CISC)</h3>
            <p className="text-slate-400 text-sm mb-4">El modelo genera múltiples rutas de razonamiento y asigna un puntaje de confianza a cada una, realizando una votación ponderada para elegir la mejor respuesta.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Genera 3 estrategias para mi entrevista técnica. Para cada una, asigna un puntaje de confianza (0-100) basado en su viabilidad, y entrégame solo la estrategia con mayor puntaje ponderado." />
                </div>
                <p className="text-sm text-slate-300 italic">"Genera 3 estrategias para mi entrevista técnica. Para cada una, asigna un puntaje de confianza (0-100) basado en su viabilidad, y entrégame solo la estrategia con mayor puntaje ponderado."</p>
            </div>
        </div>

        {/* Technique 12 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🪞</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Reflexion (auto-corrección crítica)</h3>
            <p className="text-slate-400 text-sm mb-4">El agente evalúa su propia respuesta preliminar emitiendo críticas explícitas para forzar una rectificación iterativa, aunque requiere validadores externos para no degenerar.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Redacta mi carta de presentación. Luego, evalúala críticamente marcando errores sintácticos o de tono, y reescríbela corrigiendo esos fallos específicos." />
                </div>
                <p className="text-sm text-slate-300 italic">"Redacta mi carta de presentación. Luego, evalúala críticamente marcando errores sintácticos o de tono, y reescríbela corrigiendo esos fallos específicos."</p>
            </div>
        </div>

        {/* Technique 13 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📚</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Retrieval augmented generation (RAG)</h3>
            <p className="text-slate-400 text-sm mb-4">Combina el modelo generativo con la recuperación de información en tiempo real desde bases de datos externas para evitar alucinaciones.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="[El sistema consulta la base de datos actualizada de salarios 2026] -> Basado en los datos recuperados, sugiere un rango salarial realista para mi perfil en Madrid." />
                </div>
                <p className="text-sm text-slate-300 italic">"[El sistema consulta la base de datos actualizada de salarios 2026] -&gt; Basado en los datos recuperados, sugiere un rango salarial realista para mi perfil en Madrid."</p>
            </div>
        </div>

        {/* Technique 14 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">❄️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Absolute zero reasoner (AZR)</h3>
            <p className="text-slate-400 text-sm mb-4">Un paradigma de coevolución donde un modelo 'Propositor' inventa desafíos y un 'Resolutor' los soluciona, aprendiendo sin intervención humana.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Utiliza un entorno AZR para simular escenarios de entrevistas técnicas cada vez más difíciles, adaptándose dinámicamente a mis respuestas hasta que domine el tema." />
                </div>
                <p className="text-sm text-slate-300 italic">"Utiliza un entorno AZR para simular escenarios de entrevistas técnicas cada vez más difíciles, adaptándose dinámicamente a mis respuestas hasta que domine el tema."</p>
            </div>
        </div>

        {/* Technique 15 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🌐</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Multimodal CoT (Chain of Thought Multimodal)</h3>
            <p className="text-slate-400 text-sm mb-4">Integra razonamiento topológico, espacial y visual, permitiendo al modelo digerir diagramas complejos y datos pictóricos simultáneamente.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="[Subo un diagrama de arquitectura de software complejo] -> Analiza este esquema visual y explica cómo mi experiencia previa se alinea con esta topología." />
                </div>
                <p className="text-sm text-slate-300 italic">"[Subo un diagrama de arquitectura de software complejo] -&gt; Analiza este esquema visual y explica cómo mi experiencia previa se alinea con esta topología."</p>
            </div>
        </div>
        {/* Technique 16 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📝</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Plan-and-solve prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Divide el problema en un plan de pasos y luego lo ejecuta secuencialmente para evitar omisiones.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Primero comprendamos el problema de mi transición laboral y diseñemos un plan. Luego, ejecutemos el plan paso a paso." />
                </div>
                <p className="text-sm text-slate-300 italic">"Primero comprendamos el problema de mi transición laboral y diseñemos un plan. Luego, ejecutemos el plan paso a paso."</p>
            </div>
        </div>

        {/* Technique 17 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🗳️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Universal self-consistency</h3>
            <p className="text-slate-400 text-sm mb-4">El propio modelo evalúa y agrega respuestas de formato abierto para encontrar un consenso.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Revisa estas 5 cartas de presentación generadas previamente y sintetiza un consenso con los mejores argumentos de cada una." />
                </div>
                <p className="text-sm text-slate-300 italic">"Revisa estas 5 cartas de presentación generadas previamente y sintetiza un consenso con los mejores argumentos de cada una."</p>
            </div>
        </div>

        {/* Technique 18 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">💻</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Program-aided language models (PAL)</h3>
            <p className="text-slate-400 text-sm mb-4">El modelo traduce el problema a código (ej. Python) y un intérprete externo lo ejecuta para obtener resultados exactos.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Escribe un script en Python para calcular mi salario neto esperado tras impuestos, y ejecútalo para darme la cifra exacta." />
                </div>
                <p className="text-sm text-slate-300 italic">"Escribe un script en Python para calcular mi salario neto esperado tras impuestos, y ejecútalo para darme la cifra exacta."</p>
            </div>
        </div>

        {/* Technique 19 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🦴</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Skeleton-of-thought (SoT)</h3>
            <p className="text-slate-400 text-sm mb-4">Genera primero un esqueleto o esquema de la respuesta y luego expande cada punto en paralelo para reducir la latencia.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Primero, dame un esquema de 5 puntos clave para mi entrevista. Luego, expande cada punto detalladamente." />
                </div>
                <p className="text-sm text-slate-300 italic">"Primero, dame un esquema de 5 puntos clave para mi entrevista. Luego, expande cada punto detalladamente."</p>
            </div>
        </div>

        {/* Technique 20 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🗜️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Chain of density (CoD)</h3>
            <p className="text-slate-400 text-sm mb-4">Refina iterativamente un resumen, forzando al modelo a incluir cada vez más entidades clave manteniendo la misma longitud.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Resume mi CV en 80 palabras. Luego, reescríbelo 3 veces, añadiendo más logros específicos en cada iteración sin exceder las 80 palabras." />
                </div>
                <p className="text-sm text-slate-300 italic">"Resume mi CV en 80 palabras. Luego, reescríbelo 3 veces, añadiendo más logros específicos en cada iteración sin exceder las 80 palabras."</p>
            </div>
        </div>

        {/* Technique 21 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🎯</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Active-prompt</h3>
            <p className="text-slate-400 text-sm mb-4">Identifica las preguntas con mayor incertidumbre y solicita ejemplos específicos para esas áreas antes de inferir.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Revisa estas posibles preguntas de entrevista. Identifica las 3 donde tus respuestas varían más y pídeme ejemplos de mi experiencia para anclarlas." />
                </div>
                <p className="text-sm text-slate-300 italic">"Revisa estas posibles preguntas de entrevista. Identifica las 3 donde tus respuestas varían más y pídeme ejemplos de mi experiencia para anclarlas."</p>
            </div>
        </div>

        {/* Technique 22 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🚫</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">Básico</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Negative prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Instrucciones explícitas sobre lo que el modelo *no* debe hacer o incluir, muy usado en generación de imágenes y control de formato.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Escribe un correo de seguimiento. NO uses jerga corporativa, NO te disculpes por molestar, y NO excedas los 3 párrafos." />
                </div>
                <p className="text-sm text-slate-300 italic">"Escribe un correo de seguimiento. NO uses jerga corporativa, NO te disculpes por molestar, y NO excedas los 3 párrafos."</p>
            </div>
        </div>

        {/* Technique 23 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🧠</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Compaction systems / agentic memory</h3>
            <p className="text-slate-400 text-sm mb-4">Técnicas para gestionar el límite de contexto, resumiendo interacciones pasadas y manteniendo notas externas.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Resume nuestra conversación de la última hora en 5 viñetas y guárdalas en tu memoria a largo plazo antes de continuar con la siguiente tarea." />
                </div>
                <p className="text-sm text-slate-300 italic">"Resume nuestra conversación de la última hora en 5 viñetas y guárdalas en tu memoria a largo plazo antes de continuar con la siguiente tarea."</p>
            </div>
        </div>

        {/* Technique 24 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">👔</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Manager-worker (multi-agente)</h3>
            <p className="text-slate-400 text-sm mb-4">Un agente supervisor divide y asigna tareas a agentes trabajadores especializados, consolidando luego sus resultados.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Agente supervisor: Asigna la revisión de mi CV al agente de RRHH y el análisis de mercado al agente de datos. Luego consolida ambos reportes." />
                </div>
                <p className="text-sm text-slate-300 italic">"Agente supervisor: Asigna la revisión de mi CV al agente de RRHH y el análisis de mercado al agente de datos. Luego consolida ambos reportes."</p>
            </div>
        </div>

        {/* Technique 25 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">👥</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Peer review (multi-agente)</h3>
            <p className="text-slate-400 text-sm mb-4">Múltiples agentes debaten o revisan el trabajo del otro para encontrar errores y llegar a un consenso robusto.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Agente 1: Escribe mi carta de presentación. Agente 2: Critica la carta buscando debilidades. Agente 1: Reescribe basándote en las críticas." />
                </div>
                <p className="text-sm text-slate-300 italic">"Agente 1: Escribe mi carta de presentación. Agente 2: Critica la carta buscando debilidades. Agente 1: Reescribe basándote en las críticas."</p>
            </div>
        </div>

        {/* Technique 26 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🏭</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Pipelines (multi-agente)</h3>
            <p className="text-slate-400 text-sm mb-4">Flujo secuencial donde la salida de un agente especializado es la entrada del siguiente, refinando la información paso a paso.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Pasa mi perfil por el pipeline: Agente extractor -> Agente analista -> Agente redactor, para obtener un perfil de LinkedIn perfecto." />
                </div>
                <p className="text-sm text-slate-300 italic">"Pasa mi perfil por el pipeline: Agente extractor -&gt; Agente analista -&gt; Agente redactor, para obtener un perfil de LinkedIn perfecto."</p>
            </div>
        </div>

        {/* Technique 27 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🎯</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">Básico</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt exacto</h3>
            <p className="text-slate-400 text-sm mb-4">Instrucción directa y precisa para obtener un resultado específico sin ambigüedades.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Traduce el siguiente párrafo al inglés británico, manteniendo un tono formal." />
                </div>
                <p className="text-sm text-slate-300 italic">"Traduce el siguiente párrafo al inglés británico, manteniendo un tono formal."</p>
            </div>
        </div>

        {/* Technique 28 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🖼️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50">Básico</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Contextual prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Proporciona información de fondo o detalles situacionales para enmarcar la respuesta del modelo.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Contexto: Estoy aplicando a una empresa de tecnología que valora la innovación. Sugiere 3 preguntas para hacer al final de la entrevista." />
                </div>
                <p className="text-sm text-slate-300 italic">"Contexto: Estoy aplicando a una empresa de tecnología que valora la innovación. Sugiere 3 preguntas para hacer al final de la entrevista."</p>
            </div>
        </div>

        {/* Technique 29 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🔄</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt iterativo</h3>
            <p className="text-slate-400 text-sm mb-4">Proceso de enviar un prompt, evaluar la respuesta y enviar un prompt ajustado para refinar el resultado.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Hazlo más corto. Ahora, cambia el tono para que suene más entusiasta. Por último, añade un llamado a la acción." />
                </div>
                <p className="text-sm text-slate-300 italic">"Hazlo más corto. Ahora, cambia el tono para que suene más entusiasta. Por último, añade un llamado a la acción."</p>
            </div>
        </div>

        {/* Technique 30 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📖</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt basado en conocimiento</h3>
            <p className="text-slate-400 text-sm mb-4">Incorpora datos o hechos específicos en el prompt para fundamentar la respuesta del modelo.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Sabiendo que el salario promedio para este rol es de 45.000€ y la empresa acaba de recibir financiación, ¿cómo debería negociar mi oferta?" />
                </div>
                <p className="text-sm text-slate-300 italic">"Sabiendo que el salario promedio para este rol es de 45.000€ y la empresa acaba de recibir financiación, ¿cómo debería negociar mi oferta?"</p>
            </div>
        </div>

        {/* Technique 31 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">⚖️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt comparativo</h3>
            <p className="text-slate-400 text-sm mb-4">Solicita al modelo que evalúe, contraste o compare dos o más elementos, conceptos o soluciones.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Compara las ventajas y desventajas de trabajar en una startup frente a una corporación multinacional para mi perfil." />
                </div>
                <p className="text-sm text-slate-300 italic">"Compara las ventajas y desventajas de trabajar en una startup frente a una corporación multinacional para mi perfil."</p>
            </div>
        </div>

        {/* Technique 32 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🧩</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt combinado</h3>
            <p className="text-slate-400 text-sm mb-4">Integra múltiples técnicas (ej. few-shot + CoT + role) en una sola instrucción compleja.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Actúa como reclutador (Role). Analiza paso a paso (CoT) mi CV. Usa este formato de salida: [Ejemplo] (Few-shot)." />
                </div>
                <p className="text-sm text-slate-300 italic">"Actúa como reclutador (Role). Analiza paso a paso (CoT) mi CV. Usa este formato de salida: [Ejemplo] (Few-shot)."</p>
            </div>
        </div>

        {/* Technique 33 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">⏪</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt inverso</h3>
            <p className="text-slate-400 text-sm mb-4">Se le da al modelo un resultado (ej. un texto o imagen) y se le pide que genere el prompt que lo habría creado.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Aquí tienes una oferta de trabajo perfecta para mí. ¿Qué prompt usarías para generar una oferta similar en el futuro?" />
                </div>
                <p className="text-sm text-slate-300 italic">"Aquí tienes una oferta de trabajo perfecta para mí. ¿Qué prompt usarías para generar una oferta similar en el futuro?"</p>
            </div>
        </div>

        {/* Technique 34 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">📋</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">JSON prompt / working with schemas</h3>
            <p className="text-slate-400 text-sm mb-4">Obliga al modelo a estructurar su salida (o entrada) en un formato de datos estricto como JSON para integraciones de software.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Extrae mis habilidades y devuélvelas estrictamente en este formato JSON: { 'habilidades_tecnicas': [], 'habilidades_blandas': [] }" />
                </div>
                <p className="text-sm text-slate-300 italic">"Extrae mis habilidades y devuélvelas estrictamente en este formato JSON: { '{' } 'habilidades_tecnicas': [], 'habilidades_blandas': [] { '}' }"</p>
            </div>
        </div>

        {/* Technique 35 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🕵️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt para deep research</h3>
            <p className="text-slate-400 text-sm mb-4">Instrucciones diseñadas para que el modelo realice investigaciones exhaustivas, cruzando múltiples fuentes y sintetizando hallazgos.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Realiza una investigación profunda sobre las tendencias de contratación en IA para 2026, citando fuentes y cruzando datos de mercado." />
                </div>
                <p className="text-sm text-slate-300 italic">"Realiza una investigación profunda sobre las tendencias de contratación en IA para 2026, citando fuentes y cruzando datos de mercado."</p>
            </div>
        </div>

        {/* Technique 36 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🤖</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/50">Frontera 2026</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Prompt para usar agentes IA</h3>
            <p className="text-slate-400 text-sm mb-4">Instrucciones que definen el objetivo, contexto y restricciones para que un agente autónomo ejecute tareas complejas.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Agente de búsqueda de empleo: Tu objetivo es encontrar 5 ofertas diarias que coincidan con mi perfil, filtrando las que requieran presencialidad." />
                </div>
                <p className="text-sm text-slate-300 italic">"Agente de búsqueda de empleo: Tu objetivo es encontrar 5 ofertas diarias que coincidan con mi perfil, filtrando las que requieran presencialidad."</p>
            </div>
        </div>

        {/* Technique 37 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">⚙️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">System prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Define el comportamiento base, las reglas fundamentales y la identidad del modelo a nivel de sistema.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="System: Eres un asistente de carrera. Nunca des consejos médicos o legales. Responde siempre en español." />
                </div>
                <p className="text-sm text-slate-300 italic">"System: Eres un asistente de carrera. Nunca des consejos médicos o legales. Responde siempre en español."</p>
            </div>
        </div>

        {/* Technique 38 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🔙</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Step-back prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Pide al modelo que primero responda una pregunta general o abstracta sobre el tema antes de resolver el problema específico.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Antes de decirme cómo responder a esta pregunta de entrevista, explícame qué buscan evaluar generalmente los reclutadores con ella." />
                </div>
                <p className="text-sm text-slate-300 italic">"Antes de decirme cómo responder a esta pregunta de entrevista, explícame qué buscan evaluar generalmente los reclutadores con ella."</p>
            </div>
        </div>

        {/* Technique 39 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🤖</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Automatic prompt engineering (APE)</h3>
            <p className="text-slate-400 text-sm mb-4">Usar el propio modelo de lenguaje para generar, evaluar y optimizar prompts para una tarea específica.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Genera 5 variaciones de prompts para pedirte que mejores mi CV. Evalúalas y dime cuál produciría el mejor resultado." />
                </div>
                <p className="text-sm text-slate-300 italic">"Genera 5 variaciones de prompts para pedirte que mejores mi CV. Evalúalas y dime cuál produciría el mejor resultado."</p>
            </div>
        </div>

        {/* Technique 40 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">💻</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Code prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Técnicas específicas para guiar al modelo en la escritura, depuración, explicación o traducción de código fuente.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Explícame este fragmento de código Python línea por línea y sugiere cómo optimizarlo para mi prueba técnica." />
                </div>
                <p className="text-sm text-slate-300 italic">"Explícame este fragmento de código Python línea por línea y sugiere cómo optimizarlo para mi prueba técnica."</p>
            </div>
        </div>

        {/* Technique 41 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🧠</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50">Intermedio</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Generate knowledge prompting</h3>
            <p className="text-slate-400 text-sm mb-4">Pedir al modelo que primero genere conocimiento o hechos relevantes sobre un tema antes de responder a la pregunta principal para mejorar la precisión.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Primero, enumera las 5 habilidades más demandadas en análisis de datos este año. Luego, basándote en esa lista, dime cómo debería estructurar mi CV." />
                </div>
                <p className="text-sm text-slate-300 italic">"Primero, enumera las 5 habilidades más demandadas en análisis de datos este año. Luego, basándote en esa lista, dime cómo debería estructurar mi CV."</p>
            </div>
        </div>

        {/* Technique 42 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🛠️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Automatic reasoning and tool-use (ART)</h3>
            <p className="text-slate-400 text-sm mb-4">Combinar el razonamiento automático con la capacidad de usar herramientas externas (como calculadoras o buscadores) para resolver problemas complejos.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Calcula mi salario neto esperado si pido $60,000 brutos en Madrid. Usa la herramienta de cálculo de impuestos y explícame el desglose paso a paso." />
                </div>
                <p className="text-sm text-slate-300 italic">"Calcula mi salario neto esperado si pido $60,000 brutos en Madrid. Usa la herramienta de cálculo de impuestos y explícame el desglose paso a paso."</p>
            </div>
        </div>

        {/* Technique 43 */}
        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">🕸️</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50">Avanzado</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">GraphPrompt</h3>
            <p className="text-slate-400 text-sm mb-4">Estructurar la información y las relaciones en forma de grafo para ayudar al modelo a entender conexiones complejas entre conceptos o entidades.</p>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Ejemplo práctico: SofIA</p>
                    <CopyButton text="Considera estas relaciones: Yo conozco a Ana. Ana trabaja en TechCorp. TechCorp busca un analista. ¿Cómo puedo usar mi red para llegar a la vacante?" />
                </div>
                <p className="text-sm text-slate-300 italic">"Considera estas relaciones: Yo conozco a Ana. Ana trabaja en TechCorp. TechCorp busca un analista. ¿Cómo puedo usar mi red para llegar a la vacante?"</p>
            </div>
        </div>
    </div>

    <h2 id="sec-2-1" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">📊 Tabla resumen de técnicas</h2>
    <div className="overflow-x-auto bg-slate-900/80 border border-slate-700 rounded-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-800 text-slate-200">
            <th className="p-4 border-b border-slate-700 font-bold">Técnica</th>
            <th className="p-4 border-b border-slate-700 font-bold">Tipo</th>
            <th className="p-4 border-b border-slate-700 font-bold">Breve descripción</th>
            <th className="p-4 border-b border-slate-700 font-bold">Ejemplo práctico aplicado a SofIA</th>
          </tr>
        </thead>
        <tbody className="text-slate-300">
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Zero-shot prompting</td>
              <td className="p-3"><span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Básico</span></td>
              <td className="p-3 text-slate-300 text-sm">Pedir directamente a la IA que realice una tarea sin darle ejemplos previos, confiando en su conocimiento general.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Analiza mi historial laboral en retail y genera una lista de 5 competencias transferibles que sean valiosas para un rol de analista de operaciones."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Few-shot prompting</td>
              <td className="p-3"><span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Básico</span></td>
              <td className="p-3 text-slate-300 text-sm">Proporcionar algunos ejemplos del tipo de respuesta que esperas antes de hacer tu pregunta principal.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Convierte estas tareas en logros:\nEjemplo 1: 'Supervisé personal' → 'Lideré un equipo de 12 personas logrando un 15% más de eficiencia'\nAhora hazlo con: 'Manejé el cierre de caja diario...'"</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Chain-of-thought (CoT)</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Pedirle a la IA que muestre su razonamiento paso a paso antes de dar una respuesta final.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Analiza paso a paso si mi experiencia en gestión de inventarios es relevante para logística: 1. Define requisitos de logística 2. Compara con mis tareas 3. Identifica brechas 4. Concluye."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Role prompting</td>
              <td className="p-3"><span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Básico</span></td>
              <td className="p-3 text-slate-300 text-sm">Asignarle a la IA un rol específico (experto, profesor, consultor) para que responda desde esa perspectiva.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Actúa como una experta en reclutamiento de startups tecnológicas. Revisa mi resumen profesional y dime si suena demasiado tradicional o si encaja con la cultura ágil."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Self-consistency</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Generar múltiples respuestas con razonamiento independiente y seleccionar la más consistente.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Genera 3 análisis independientes sobre si mi perfil es mejor para 'Project Coordinator' o 'Operations Associate'. Luego, resume los puntos en común de los 3 análisis."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt chaining</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Dividir una tarea compleja en una secuencia de prompts más simples, donde la salida de uno alimenta al siguiente.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Paso 1: Extrae mis 3 mayores logros. [Respuesta] Paso 2: Redáctalos usando el método STAR. [Respuesta] Paso 3: Optimízalos para una oferta de analista de datos."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Tree of thoughts</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Explorar múltiples caminos de razonamiento simultáneamente, evaluando cada rama antes de continuar.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Explora 3 estrategias para mi transición: 1. Ascenso interno 2. Cambio de industria 3. Emprendimiento. Evalúa riesgos y beneficios de cada una para mi situación actual."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">ReAct (reasoning + acting)</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Alternar entre razonamiento (pensar) y acción (hacer), permitiendo ajustar el enfoque basándose en resultados intermedios.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Pensamiento: Analiza mi CV. Acción: Sugiere 3 cursos de Coursera. Pensamiento: Evalúa cuál es más urgente. Acción: Crea un plan de estudio de 4 semanas."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Meta-prompting</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Prioriza los aspectos arquitectónicos y sintácticos de la resolución de un problema, descartando la carga narrativa específica para evitar sesgos.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Aplica el siguiente marco lógico abstracto (Identificar variables -&gt; Calcular determinantes -&gt; Estructurar despeje) a mi problema de transición laboral, sin dejarte influenciar por el sector específico."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Directional stimulus prompting (DSP)</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Utiliza un modelo auxiliar para generar "pistas" latentes o estímulos direccionales que guían al modelo principal sin alterar sus parámetros.</td>
              <td className="p-3 text-slate-400 text-sm italic">"[El sistema genera internamente 5 palabras clave sobre mi CV] -&gt; Usa estas directrices invisibles para redactar mi resumen profesional de forma altamente optimizada."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Auto-consistencia informada por confianza (CISC)</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">El modelo genera múltiples rutas de razonamiento y asigna un puntaje de confianza a cada una, realizando una votación ponderada para elegir la mejor respuesta.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Genera 3 estrategias para mi entrevista técnica. Para cada una, asigna un puntaje de confianza (0-100) basado en su viabilidad, y entrégame solo la estrategia con mayor puntaje ponderado."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Reflexion (auto-corrección crítica)</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">El agente evalúa su propia respuesta preliminar emitiendo críticas explícitas para forzar una rectificación iterativa, aunque requiere validadores externos para no degenerar.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Redacta mi carta de presentación. Luego, evalúala críticamente marcando errores sintácticos o de tono, y reescríbela corrigiendo esos fallos específicos."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Retrieval augmented generation (RAG)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Combina el modelo generativo con la recuperación de información en tiempo real desde bases de datos externas para evitar alucinaciones.</td>
              <td className="p-3 text-slate-400 text-sm italic">"[El sistema consulta la base de datos actualizada de salarios 2026] -&gt; Basado en los datos recuperados, sugiere un rango salarial realista para mi perfil en Madrid."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Absolute zero reasoner (AZR)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Un paradigma de coevolución donde un modelo 'Propositor' inventa desafíos y un 'Resolutor' los soluciona, aprendiendo sin intervención humana.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Utiliza un entorno AZR para simular escenarios de entrevistas técnicas cada vez más difíciles, adaptándose dinámicamente a mis respuestas hasta que domine el tema."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Multimodal CoT (Chain of Thought Multimodal)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Integra razonamiento topológico, espacial y visual, permitiendo al modelo digerir diagramas complejos y datos pictóricos simultáneamente.</td>
              <td className="p-3 text-slate-400 text-sm italic">"[Subo un diagrama de arquitectura de software complejo] -&gt; Analiza este esquema visual y explica cómo mi experiencia previa se alinea con esta topología."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Plan-and-solve prompting</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Divide el problema en un plan de pasos y luego lo ejecuta secuencialmente para evitar omisiones.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Primero comprendamos el problema de mi transición laboral y diseñemos un plan. Luego, ejecutemos el plan paso a paso."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Universal self-consistency</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">El propio modelo evalúa y agrega respuestas de formato abierto para encontrar un consenso.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Revisa estas 5 cartas de presentación generadas previamente y sintetiza un consenso con los mejores argumentos de cada una."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Program-aided language models (PAL)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">El modelo traduce el problema a código (ej. Python) y un intérprete externo lo ejecuta para obtener resultados exactos.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Escribe un script en Python para calcular mi salario neto esperado tras impuestos, y ejecútalo para darme la cifra exacta."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Skeleton-of-thought (SoT)</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Genera primero un esqueleto o esquema de la respuesta y luego expande cada punto en paralelo para reducir la latencia.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Primero, dame un esquema de 5 puntos clave para mi entrevista. Luego, expande cada punto detalladamente."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Chain of density (CoD)</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Refina iterativamente un resumen, forzando al modelo a incluir cada vez más entidades clave manteniendo la misma longitud.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Resume mi CV en 80 palabras. Luego, reescríbelo 3 veces, añadiendo más logros específicos en cada iteración sin exceder las 80 palabras."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Active-prompt</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Identifica las preguntas con mayor incertidumbre y solicita ejemplos específicos para esas áreas antes de inferir.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Revisa estas posibles preguntas de entrevista. Identifica las 3 donde tus respuestas varían más y pídeme ejemplos de mi experiencia para anclarlas."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Negative prompting</td>
              <td className="p-3"><span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Básico</span></td>
              <td className="p-3 text-slate-300 text-sm">Instrucciones explícitas sobre lo que el modelo *no* debe hacer o incluir, muy usado en generación de imágenes y control de formato.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Escribe un correo de seguimiento. NO uses jerga corporativa, NO te disculpes por molestar, y NO excedas los 3 párrafos."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Compaction systems / agentic memory</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Técnicas para gestionar el límite de contexto, resumiendo interacciones pasadas y manteniendo notas externas.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Resume nuestra conversación de la última hora en 5 viñetas y guárdalas en tu memoria a largo plazo antes de continuar con la siguiente tarea."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Manager-worker (multi-agente)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Un agente supervisor divide y asigna tareas a agentes trabajadores especializados, consolidando luego sus resultados.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Agente supervisor: Asigna la revisión de mi CV al agente de RRHH y el análisis de mercado al agente de datos. Luego consolida ambos reportes."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Peer review (multi-agente)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Múltiples agentes debaten o revisan el trabajo del otro para encontrar errores y llegar a un consenso robusto.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Agente 1: Escribe mi carta de presentación. Agente 2: Critica la carta buscando debilidades. Agente 1: Reescribe basándote en las críticas."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Pipelines (multi-agente)</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Flujo secuencial donde la salida de un agente especializado es la entrada del siguiente, refinando la información paso a paso.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Pasa mi perfil por el pipeline: Agente extractor -&gt; Agente analista -&gt; Agente redactor, para obtener un perfil de LinkedIn perfecto."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt exacto</td>
              <td className="p-3"><span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Básico</span></td>
              <td className="p-3 text-slate-300 text-sm">Instrucción directa y precisa para obtener un resultado específico sin ambigüedades.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Traduce el siguiente párrafo al inglés británico, manteniendo un tono formal."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Contextual prompting</td>
              <td className="p-3"><span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">Básico</span></td>
              <td className="p-3 text-slate-300 text-sm">Proporciona información de fondo o detalles situacionales para enmarcar la respuesta del modelo.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Contexto: Estoy aplicando a una empresa de tecnología que valora la innovación. Sugiere 3 preguntas para hacer al final de la entrevista."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt iterativo</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Proceso de enviar un prompt, evaluar la respuesta y enviar un prompt ajustado para refinar el resultado.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Hazlo más corto. Ahora, cambia el tono para que suene más entusiasta. Por último, añade un llamado a la acción."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt basado en conocimiento</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Incorpora datos o hechos específicos en el prompt para fundamentar la respuesta del modelo.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Sabiendo que el salario promedio para este rol es de 45.000€ y la empresa acaba de recibir financiación, ¿cómo debería negociar mi oferta?"</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt comparativo</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Solicita al modelo que evalúe, contraste o compare dos o más elementos, conceptos o soluciones.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Compara las ventajas y desventajas de trabajar en una startup frente a una corporación multinacional para mi perfil."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt combinado</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Integra múltiples técnicas (ej. few-shot + CoT + role) en una sola instrucción compleja.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Actúa como reclutador (Role). Analiza paso a paso (CoT) mi CV. Usa este formato de salida: [Ejemplo] (Few-shot)."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt inverso</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Se le da al modelo un resultado (ej. un texto o imagen) y se le pide que genere el prompt que lo habría creado.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Aquí tienes una oferta de trabajo perfecta para mí. ¿Qué prompt usarías para generar una oferta similar en el futuro?"</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">JSON prompt / working with schemas</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Obliga al modelo a estructurar su salida (o entrada) en un formato de datos estricto como JSON para integraciones de software.</td>
              <td className="p-3 text-slate-400 text-sm italic">{"\"Extrae mis habilidades y devuélvelas estrictamente en este formato JSON: { 'habilidades_tecnicas': [], 'habilidades_blandas': [] }\""}</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt para deep research</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Instrucciones diseñadas para que el modelo realice investigaciones exhaustivas, cruzando múltiples fuentes y sintetizando hallazgos.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Realiza una investigación profunda sobre las tendencias de contratación en IA para 2026, citando fuentes y cruzando datos de mercado."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Prompt para usar agentes IA</td>
              <td className="p-3"><span className="text-purple-400 font-semibold text-xs uppercase tracking-wider">Frontera 2026</span></td>
              <td className="p-3 text-slate-300 text-sm">Instrucciones que definen el objetivo, contexto y restricciones para que un agente autónomo ejecute tareas complejas.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Agente de búsqueda de empleo: Tu objetivo es encontrar 5 ofertas diarias que coincidan con mi perfil, filtrando las que requieran presencialidad."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">System prompting</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Define el comportamiento base, las reglas fundamentales y la identidad del modelo a nivel de sistema.</td>
              <td className="p-3 text-slate-400 text-sm italic">"System: Eres un asistente de carrera. Nunca des consejos médicos o legales. Responde siempre en español."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Step-back prompting</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Pide al modelo que primero responda una pregunta general o abstracta sobre el tema antes de resolver el problema específico.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Antes de decirme cómo responder a esta pregunta de entrevista, explícame qué buscan evaluar generalmente los reclutadores con ella."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Automatic prompt engineering (APE)</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Usar el propio modelo de lenguaje para generar, evaluar y optimizar prompts para una tarea específica.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Genera 5 variaciones de prompts para pedirte que mejores mi CV. Evalúalas y dime cuál produciría el mejor resultado."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Code prompting</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Técnicas específicas para guiar al modelo en la escritura, depuración, explicación o traducción de código fuente.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Explícame este fragmento de código Python línea por línea y sugiere cómo optimizarlo para mi prueba técnica."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Generate knowledge prompting</td>
              <td className="p-3"><span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Intermedio</span></td>
              <td className="p-3 text-slate-300 text-sm">Pedir al modelo que primero genere conocimiento o hechos relevantes sobre un tema antes de responder a la pregunta principal para mejorar la precisión.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Primero, enumera las 5 habilidades más demandadas en análisis de datos este año. Luego, basándote en esa lista, dime cómo debería estructurar mi CV."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">Automatic reasoning and tool-use (ART)</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Combinar el razonamiento automático con la capacidad de usar herramientas externas (como calculadoras o buscadores) para resolver problemas complejos.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Calcula mi salario neto esperado si pido $60,000 brutos en Madrid. Usa la herramienta de cálculo de impuestos y explícame el desglose paso a paso."</td>
            </tr>
            <tr className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-medium text-indigo-300">GraphPrompt</td>
              <td className="p-3"><span className="text-red-400 font-semibold text-xs uppercase tracking-wider">Avanzado</span></td>
              <td className="p-3 text-slate-300 text-sm">Estructurar la información y las relaciones en forma de grafo para ayudar al modelo a entender conexiones complejas entre conceptos o entidades.</td>
              <td className="p-3 text-slate-400 text-sm italic">"Considera estas relaciones: Yo conozco a Ana. Ana trabaja en TechCorp. TechCorp busca un analista. ¿Cómo puedo usar mi red para llegar a la vacante?"</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
);
