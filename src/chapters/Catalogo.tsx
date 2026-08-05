import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Wrench, BarChart2, HelpCircle, BrainCircuit, Zap, Rocket, Sparkles } from 'lucide-react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote, CopyButton } from '../components/Shared';

export const CatalogoContent = () => {
  const techniques = [
    { name: "Zero-shot prompting", type: "Básico", color: "text-emerald-400", description: "Pedir directamente a la IA que realice una tarea sin darle ejemplos previos, confiando en su conocimiento general.", example: '"Analiza mi historial docente en educación secundaria y genera una lista de 5 competencias transferibles que sean valiosas para un rol de diseño instruccional EdTech."' },
    { name: "Few-shot prompting", type: "Básico", color: "text-emerald-400", description: "Proporcionar algunos ejemplos del tipo de respuesta que esperas antes de hacer tu pregunta principal.", example: '"Convierte estas tareas pedagógicas en logros:\\nEjemplo 1: \'Diseñé evaluaciones\' → \'Diseñé e implementé 15 rúbricas de evaluación formativa aumentando la autonomía estudiantil en un 20%\'\\nAhora hazlo con: \'Coordiné las reuniones de departamento docente...\'"' },
    { name: "Chain-of-thought (CoT)", type: "Intermedio", color: "text-amber-400", description: "Pedirle a la IA que muestre su razonamiento paso a paso antes de dar una respuesta final.", example: '"Analiza paso a paso si mi experiencia en planificación didáctica de educación secundaria es relevante para el diseño instruccional: 1. Define requisitos de diseño instruccional 2. Compara con mis tareas docentes 3. Identifica brechas 4. Concluye."' },
    { name: "Role prompting", type: "Básico", color: "text-emerald-400", description: "Asignarle a la IA un rol específico (experto, profesor, consultor) para que responda desde esa perspectiva.", example: '"Actúa como una experta en reclutamiento de startups tecnológicas. Revisa mi resumen profesional y dime si suena demasiado tradicional o si encaja con la cultura ágil."' },
    { name: "Self-consistency", type: "Avanzado", color: "text-red-400", description: "Generar múltiples respuestas con razonamiento independiente y seleccionar la más consistente.", example: '"Genera 3 análisis independientes sobre si mi perfil es mejor para \'Project Coordinator\' o \'Operations Associate\'. Luego, resume los puntos en común de los 3 análisis."' },
    { name: "Prompt chaining", type: "Avanzado", color: "text-red-400", description: "Dividir una tarea compleja en una secuencia de prompts más simples, donde la salida de uno alimenta al siguiente.", example: '"Paso 1: Extrae mis 3 mayores logros. [Respuesta] Paso 2: Redáctalos usando el método STAR. [Respuesta] Paso 3: Optimízalos para una oferta de analista de datos."' },
    { name: "Tree of thoughts", type: "Avanzado", color: "text-red-400", description: "Explorar múltiples caminos de razonamiento simultáneamente, evaluando cada rama antes de continuar.", example: '"Explora 3 estrategias para mi transición: 1. Ascenso interno 2. Cambio de industria 3. Emprendimiento. Evalúa riesgos y beneficios de cada una para mi situación actual."' },
    { name: "ReAct (reasoning + acting)", type: "Avanzado", color: "text-red-400", description: "Alternar entre razonamiento (pensar) y acción (hacer), permitiendo ajustar el enfoque basándose en resultados intermedios.", example: '"Pensamiento: Analiza mi portafolio docente. Acción: Sugiere 3 cursos de Coursera sobre diseño instruccional. Pensamiento: Evalúa cuál es más urgente. Acción: Crea un plan de estudio de 4 semanas."' },
    { name: "Meta-prompting", type: "Intermedio", color: "text-amber-400", description: "Prioriza los aspectos arquitectónicos y sintácticos de la resolución de un problema, descartando la carga narrativa específica para evitar sesgos.", example: '"Aplica el siguiente marco lógico abstracto (Identificar variables -> Calcular determinantes -> Estructurar despeje) a mi problema de transición profesional, sin dejarte influenciar por el sector específico."' },
    { name: "Directional stimulus prompting (DSP)", type: "Intermedio", color: "text-amber-400", description: "Utiliza un modelo auxiliar para generar \"pistas\" latentes o estímulos direccionales que guían al modelo principal sin alterar sus parámetros.", example: '"[El sistema genera internamente 5 palabras clave sobre mi perfil docente] -> Usa estas directrices invisibles para redactar mi resumen profesional de forma altamente optimizada."' },
    { name: "Auto-consistencia informada por confianza (CISC)", type: "Avanzado", color: "text-red-400", description: "El modelo genera múltiples rutas de razonamiento y asigna un puntaje de confianza a cada una, realizando una votación ponderada para elegir la mejor respuesta.", example: '"Genera 3 estrategias para mi presentación de portafolio. Para cada una, asigna un puntaje de confianza (0-100) basado en su viabilidad, y entrégame solo la estrategia con mayor puntaje ponderado."' },
    { name: "Reflexion (auto-corrección crítica)", type: "Avanzado", color: "text-red-400", description: "El agente evalúa su propia respuesta preliminar emitiendo críticas explícitas para forzar una rectificación iterativa, aunque requiere validadores externos para no degenerar.", example: '"Redacta mi carta de presentación. Luego, evalúala críticamente marcando errores sintácticos o de tono, y reescríbela corrigiendo esos fallos específicos."' },
    { name: "Retrieval augmented generation (RAG)", type: "Frontera 2026", color: "text-purple-400", description: "Combina el modelo generativo con la recuperación de información en tiempo real desde bases de datos externas para evitar alucinaciones.", example: '"[El sistema consulta la base de datos actualizada de salarios 2026] -> Basado en los datos recuperados, sugiere un rango salarial realista para mi perfil en Madrid."' },
    { name: "Absolute zero reasoner (AZR)", type: "Frontera 2026", color: "text-purple-400", description: "Un paradigma de coevolución donde un modelo \'Propositor\' inventa desafíos y un \'Resolutor\' los soluciona, aprendiendo sin intervención humana.", example: '"Utiliza un entorno AZR para simular escenarios de defensa de proyectos cada vez más difíciles, adaptándose dinámicamente a mis respuestas hasta que domine el tema."' },
    { name: "Multimodal CoT", type: "Frontera 2026", color: "text-purple-400", description: "Integra razonamiento topológico, espacial y visual, permitiendo al modelo digerir diagramas complejos y datos pictóricos simultáneamente.", example: '"[Subo un diagrama de arquitectura de software complejo] -> Analiza este esquema visual y explica cómo mi experiencia previa se alinea con esta topología."' },
    { name: "Plan-and-solve prompting", type: "Intermedio", color: "text-amber-400", description: "Divide el problema en un plan de pasos y luego lo ejecuta secuencialmente para evitar omisiones.", example: '"Primero comprendamos el problema de mi transición profesional y diseñemos un plan. Luego, ejecutemos el plan paso a paso."' },
    { name: "Universal self-consistency", type: "Avanzado", color: "text-red-400", description: "El propio modelo evalúa y agrega respuestas de formato abierto para encontrar un consenso.", example: '"Revisa estas 5 cartas de presentación generadas previamente y sintetiza un consenso con los mejores argumentos de cada una."' },
    { name: "Program-aided language models (PAL)", type: "Frontera 2026", color: "text-purple-400", description: "El modelo traduce el problema a código (ej. Python) y un intérprete externo lo ejecuta para obtener resultados exactos.", example: '"Escribe un script en Python para calcular el presupuesto de mi proyecto educativo tras impuestos, y ejecútalo para darme la cifra exacta."' },
    { name: "Skeleton-of-thought (SoT)", type: "Avanzado", color: "text-red-400", description: "Genera primero un esqueleto o esquema de la respuesta y luego expande cada punto en paralelo para reducir la latencia.", example: '"Primero, dame un esquema de 5 puntos clave para mi presentación. Luego, expande cada punto detalladamente."' },
    { name: "Chain of density (CoD)", type: "Intermedio", color: "text-amber-400", description: "Refina iterativamente un resumen, forzando al modelo a incluir cada vez más entidades clave manteniendo la misma longitud.", example: '"Resume mi portafolio docente en 80 palabras. Luego, reescríbelo 3 veces, añadiendo más logros específicos en cada iteración sin exceder las 80 palabras."' },
    { name: "Active-prompt", type: "Avanzado", color: "text-red-400", description: "Identifica las preguntas con mayor incertidumbre y solicita ejemplos específicos para esas áreas antes de inferir.", example: '"Revisa estas posibles preguntas de evaluación. Identifica las 3 donde tus respuestas varían más y pídeme ejemplos de mi experiencia para anclarlas."' },
    { name: "Negative prompting", type: "Básico", color: "text-emerald-400", description: "Instrucciones explícitas sobre lo que el modelo *no* debe hacer o incluir, muy usado en generación de imágenes y control de formato.", example: '"Escribe un correo de seguimiento. NO uses jerga corporativa, NO te disculpes por molestar, y NO excedas los 3 párrafos."' },
    { name: "Compaction systems / agentic memory", type: "Frontera 2026", color: "text-purple-400", description: "Técnicas para gestionar el límite de contexto, resumiendo interacciones pasadas y manteniendo notas externas.", example: '"Resume nuestra conversación de la última hora en 5 viñetas y guárdalas en tu memoria a largo plazo antes de continuar con la siguiente tarea."' },
    { name: "Manager-worker (multi-agente)", type: "Frontera 2026", color: "text-purple-400", description: "Un agente supervisor divide y asigna tareas a agentes trabajadores especializados, consolidando luego sus resultados.", example: '"Agente supervisor: Asigna la revisión de mi perfil al agente de diseño instruccional y el análisis de mercado al agente de datos EdTech. Luego consolida ambos reportes."' },
    { name: "Peer review (multi-agente)", type: "Frontera 2026", color: "text-purple-400", description: "Múltiples agentes debaten o revisan el trabajo del otro para encontrar errores y llegar a un consenso robusto.", example: '"Agente 1: Escribe mi carta de presentación. Agente 2: Critica la carta buscando debilidades. Agente 1: Reescribe basándote en las críticas."' },
    { name: "Pipelines (multi-agente)", type: "Frontera 2026", color: "text-purple-400", description: "Flujo secuencial donde la salida de un agente especializado es la entrada del siguiente, refinando la información paso a paso.", example: '"Pasa mi perfil por el pipeline: Agente extractor -> Agente analista -> Agente redactor, para obtener un perfil de LinkedIn perfecto."' },
    { name: "Prompt exacto", type: "Básico", color: "text-emerald-400", description: "Instrucción directa y precisa para obtener un resultado específico sin ambigüedades.", example: '"Traduce el siguiente párrafo al inglés británico, manteniendo un tono formal."' },
    { name: "Contextual prompting", type: "Básico", color: "text-emerald-400", description: "Proporciona información de fondo o detalles situacionales para enmarcar la respuesta del modelo.", example: '"Contexto: Estoy aplicando a un proyecto de tecnología educativa que valora la innovación. Sugiere 3 preguntas para hacer al final de la presentación."' },
    { name: "Prompt iterativo", type: "Intermedio", color: "text-amber-400", description: "Proceso de enviar un prompt, evaluar la respuesta y enviar un prompt ajustado para refinar el resultado.", example: '"Hazlo más corto. Ahora, cambia el tono para que suene más entusiasta. Por último, añade un llamado a la acción."' },
    { name: "Prompt basado en conocimiento", type: "Intermedio", color: "text-amber-400", description: "Incorpora datos o hechos específicos en el prompt para fundamentar la respuesta del modelo.", example: '"Sabiendo que el salario promedio para este rol es de 45.000€ y la empresa acaba de recibir financiación, ¿cómo debería negociar mi oferta?"' },
    { name: "Prompt comparativo", type: "Intermedio", color: "text-amber-400", description: "Solicita al modelo que evalúe, contraste o compare dos o más elementos, conceptos o soluciones.", example: '"Compara las ventajas y desventajas de trabajar en una startup frente a una corporación multinacional para mi perfil."' },
    { name: "Prompt combinado", type: "Avanzado", color: "text-red-400", description: "Integra múltiples técnicas (ej. few-shot + CoT + role) en una sola instrucción compleja.", example: '"Actúa como coordinador de proyectos EdTech (Role). Analiza paso a paso (CoT) mi portafolio docente. Usa este formato de salida: [Ejemplo] (Few-shot)."' },
    { name: "Prompt inverso", type: "Intermedio", color: "text-amber-400", description: "Se le da al modelo un resultado (ej. un texto o imagen) y se le pide que genere el prompt que lo habría creado.", example: '"Aquí tienes una oferta de trabajo perfecta para mí. ¿Qué prompt usarías para generar una oferta similar en el futuro?"' },
    { name: "JSON prompt / working with schemas", type: "Avanzado", color: "text-red-400", description: "Obliga al modelo a estructurar su salida (o entrada) en un formato de datos estricto como JSON para integraciones de software.", example: '"Extrae mis habilidades y devuélvelas estrictamente en este formato JSON: { \'habilidades_tecnicas\': [], \'habilidades_blandas\': [] }"' },
    { name: "Prompt para deep research", type: "Frontera 2026", color: "text-purple-400", description: "Instrucciones diseñadas para que el modelo realice investigaciones exhaustivas, cruzando múltiples fuentes y sintetizando hallazgos.", example: '"Realiza una investigación profunda sobre las tendencias de contratación en IA para 2026, citando fuentes y cruzando datos de mercado."' },
    { name: "Prompt para usar agentes IA", type: "Frontera 2026", color: "text-purple-400", description: "Instrucciones que definen el objetivo, contexto y restricciones para que un agente autónomo ejecute tareas complejas.", example: '"Agente de innovación educativa: Tu objetivo es encontrar 5 proyectos EdTech diarios que coincidan con mi perfil docente, filtrando los que requieran presencialidad."' },
    { name: "System prompting", type: "Intermedio", color: "text-amber-400", description: "Define el comportamiento base, las reglas fundamentales y la identidad del modelo a nivel de sistema.", example: '"System: Eres un asistente de carrera. Nunca des consejos médicos o legales. Responde siempre en español."' },
    { name: "Step-back prompting", type: "Intermedio", color: "text-amber-400", description: "Pide al modelo que primero responda una pregunta general o abstracta sobre el tema antes de resolver el problema específico.", example: '"Antes de decirme cómo responder a esta pregunta de diseño de proyectos, explícame qué buscan evaluar generalmente los coordinadores de EdTech con ella."' },
    { name: "Automatic prompt engineering (APE)", type: "Avanzado", color: "text-red-400", description: "Usar el propio modelo de lenguaje para generar, evaluar y optimizar prompts para una tarea específica.", example: '"Genera 5 variaciones de prompts para pedirte que optimices mi propuesta pedagógica. Evalúalas y dime cuál produciría el mejor resultado."' },
    { name: "Code prompting", type: "Intermedio", color: "text-amber-400", description: "Técnicas específicas para guiar al modelo en la escritura, depuración, explicación o traducción de código fuente.", example: '"Explícame este fragmento de código Python línea por línea y sugiere cómo optimizarlo para mi prueba técnica."' },
    { name: "Generate knowledge prompting", type: "Intermedio", color: "text-amber-400", description: "Pedir al modelo que primero genere conocimiento o hechos relevantes sobre un tema antes de responder a la pregunta principal para mejorar la precisión.", example: '"Primero, enumera las 5 habilidades más demandadas en diseño instruccional este año. Luego, basándote en esa lista, dime cómo debería estructurar mi portafolio docente."' },
    { name: "Automatic reasoning and tool-use (ART)", type: "Avanzado", color: "text-red-400", description: "Combinar el razonamiento automático con la capacidad de usar herramientas externas (como calculadoras o buscadores) para resolver problemas complejos.", example: '"Calcula el costo real de un proyecto de innovación si el presupuesto bruto es de $2.500.000 en Santiago. Usa la herramienta de cálculo de impuestos y explícame el desglose paso a paso."' },
    { name: "GraphPrompt", type: "Avanzado", color: "text-red-400", description: "Estructurar la información y las relaciones en forma de grafo para ayudar al modelo a entender conexiones complejas entre conceptos o entidades.", example: '"Considera estas relaciones: Yo conozco a Ana. Ana trabaja en TechCorp. TechCorp busca un diseñador instruccional. ¿Cómo puedo usar mi red para llegar al proyecto?"' },
    { name: "Modelo PROSE", type: "Pedagógico", color: "text-indigo-400", description: "Marco de diseño de prompts en 5 pilares: Persona (P), Result (R), Objective (O), Scenario (S) y Extras (E). Ideal para estructurar solicitudes de desarrollo profesional y mentoría profesional.", example: '"Como mentor de desarrollo profesional (P), elabora un plan de preparación de proyectos (R) orientado a demostrar competencias en tecnología educativa (O) para SofIA en transición a diseño instruccional (S), estructurado en 5 acciones clave (E)."' },
    { name: "Modelo PARTE (Google)", type: "Pedagógico", color: "text-amber-400", description: "Marco enfocado en el destinatario (Recipient): Persona (P), Aim (A), Recipient (R), Theme/Task (T) y Expectations (E). Adapta el contenido a la experiencia de la docente.", example: '"Actúa como consultor EdTech (P), explica las expectativas del rol de especialista en diseño instruccional (A) a SofIA en reconversión e innovación pedagógica (R), usando la analogía de un proyecto pedagógico (T), en menos de 150 palabras (E)."' },
    { name: "Simulación socrática", type: "Pedagógico", color: "text-emerald-400", description: "Transforma la IA en un mentor facilitador que no revela la respuesta directamente, sino que guía mediante preguntas progresivas para que el usuario descubra su propia propuesta de valor.", example: '"No me redactes el perfil directamente. Hazme preguntas reflexivas, una a una, que me ayuden a identificar mis competencias clave y logros cuantificables para mi portafolio docente."' },
  ];

  return (
    <div className="prose-custom">
    <AuthorNote>
      Este catálogo presenta las herramientas que SofIA utilizó para superar sus propios desafíos. No es una lista teórica, sino un conjunto de soluciones prácticas que cualquier persona puede adaptar a su propia búsqueda de herramientas y oportunidades.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Catálogo de técnicas de prompting</h1>
    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Caso de estudio: SofIA | Docente de educación secundaria en reconversión profesional</p>

    <h2 id="sec-catalogo-0" className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-32 flex items-center gap-2"> <Target /> Introducción al catálogo</h2>
    <p>Este catálogo interactivo te permite explorar y dominar 54 técnicas esenciales de prompting aplicadas al caso de <strong>SofIA</strong>, una docente de educación secundaria en reconversión e innovación pedagógica hacia la tecnología educativa (EdTech) que utiliza la IA para potenciar su perfil profesional.</p>

    <h2 id="sec-catalogo-1" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-32 flex items-center gap-2"> <BookOpen /> Fundamentos del catálogo</h2>
    <p className="mb-6">Cada técnica presentada aquí ha sido seleccionada por su relevancia en el flujo de trabajo de un profesional moderno. Desde las bases del <em>Zero-shot</em> hasta las fronteras de los sistemas multi-agente, estas herramientas permiten una comunicación precisa y efectiva con los modelos de lenguaje.</p>
    
    <InfoCard type="ejemplo" title="Cómo usar este catálogo">
      Puedes navegar por la galería visual para ver ejemplos rápidos o consultar la tabla resumen al final para una comparativa técnica detallada. Cada ejemplo está diseñado para ser copiado y adaptado a tus propias necesidades.
    </InfoCard>

    <h2 id="sec-catalogo-2" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-32 flex items-center gap-2"> <Wrench /> Galería de técnicas aplicadas</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {techniques.map((tech, index) => {
        const getTypeStyles = (type) => {
          switch (type) {
            case 'Básico': return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
            case 'Intermedio': return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30';
            case 'Avanzado': return 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30';
            case 'Frontera 2026': return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30';
            default: return 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/30';
          }
        };

        const getIconForType = (type) => {
          switch (type) {
            case 'Básico': return <Target className="text-emerald-600 dark:text-emerald-400" size={28} />;
            case 'Intermedio': return <BrainCircuit className="text-amber-600 dark:text-amber-400" size={28} />;
            case 'Avanzado': return <Zap className="text-red-600 dark:text-red-400" size={28} />;
            case 'Frontera 2026': return <Rocket className="text-purple-600 dark:text-purple-400" size={28} />;
            default: return <Sparkles className="text-indigo-600 dark:text-indigo-400" size={28} />;
          }
        };

        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:border-indigo-500/80 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                  {getIconForType(tech.type)}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeStyles(tech.type)}`}>
                  {tech.type}
                </span>
            </div>
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition-colors">{tech.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{tech.description}</p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mt-auto">
                <div className="flex justify-between items-start mb-3">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ejemplo práctico</p>
                    <CopyButton text={tech.example.replace(/^"|"$/g, '')} />
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">"{tech.example.replace(/^"|"$/g, '')}"</p>
            </div>
          </motion.div>
        );
      })}
    </div>

    <h2 id="sec-catalogo-3" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-32 flex items-center gap-2"> <BarChart2 /> Tabla resumen de técnicas</h2>
    <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-full md:table block">
          <thead className="hidden md:table-header-group">
            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold w-1/4">Técnica</th>
              <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold w-1/6">Tipo</th>
              <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold w-1/4">Descripción</th>
              <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold w-1/3">Ejemplo práctico (SofIA)</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300 block md:table-row-group">
            {techniques.map((tech, index) => (
              <tr key={index} className="border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors block md:table-row p-4 md:p-0">
                <td className="md:p-3 font-medium text-indigo-900 dark:text-indigo-300 block md:table-cell mb-2 md:mb-0">
                  <span className="md:hidden text-slate-500 text-xs uppercase font-bold block mb-1">Técnica</span>
                  {tech.name}
                </td>
                <td className="md:p-3 block md:table-cell mb-2 md:mb-0">
                  <span className="md:hidden text-slate-500 text-xs uppercase font-bold block mb-1">Tipo</span>
                  <span className={`font-semibold text-xs uppercase tracking-wider ${
                    tech.type === 'Básico' ? 'text-emerald-700 dark:text-emerald-400' :
                    tech.type === 'Intermedio' ? 'text-amber-700 dark:text-amber-400' :
                    tech.type === 'Avanzado' ? 'text-red-700 dark:text-red-400' :
                    'text-purple-700 dark:text-purple-400'
                  }`}>
                    {tech.type}
                  </span>
                </td>
                <td className="md:p-3 text-slate-700 dark:text-slate-300 text-sm block md:table-cell mb-2 md:mb-0">
                  <span className="md:hidden text-slate-500 text-xs uppercase font-bold block mb-1">Descripción</span>
                  {tech.description}
                </td>
                <td className="md:p-3 text-slate-600 dark:text-slate-400 text-sm italic block md:table-cell">
                  <span className="md:hidden text-slate-500 text-xs uppercase font-bold block mb-1">Ejemplo práctico</span>
                  {tech.example}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <h2 id="sec-catalogo-4" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-32 flex items-center gap-2"> <HelpCircle /> Preguntas de reflexión</h2>
    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
        <li>¿Qué técnica de prompting te parece más útil para tu situación profesional actual y por qué?</li>
        <li>¿Cómo podrías combinar dos o más técnicas de este catálogo para resolver un problema complejo en tu desarrollo en proyectos EdTech?</li>
        <li>¿Qué técnica te resulta más desafiante de implementar y qué pasos podrías seguir para dominarla?</li>
      </ul>
    </div>
  </div>
);
};
