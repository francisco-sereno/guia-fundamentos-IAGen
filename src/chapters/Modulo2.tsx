import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote, CopyButton } from '../components/Shared';

export const Modulo2Content = () => (
  <div className="prose-custom">
    <AuthorNote>
      En esta sección, veremos cómo dejar de tratar a la IA como un buscador y empezar a verla como un colaborador. La precisión en tus instrucciones es lo que permite que personas sin formación técnica logren resultados extraordinarios.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ingeniería de prompts</h1>
    <p className="text-xl text-slate-300 mb-8">Fundamentos y aplicaciones en inteligencia artificial generativa</p>

    <h2 id="sec-modulo2-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">1. Introducción al paradigma de la ingeniería de contexto</h2>
    <p>La <strong>ingeniería de prompts</strong> ha evolucionado hacia lo que hoy se conoce como <strong>Ingeniería de Contexto</strong>. En un contexto donde los modelos de lenguaje grandes (<GlossaryTerm term="LLM">LLM</GlossaryTerm>) son cada vez más accesibles y potentes, la capacidad de comunicarse efectivamente con estos sistemas se ha convertido en una competencia fundamental para todas las personas. El axioma "Basura entra, basura sale" (Garbage In, Garbage Out) mantiene su vigencia: la distinción entre una respuesta genérica y una salida experta radica íntegramente en la arquitectura de la solicitud.</p>

    <InfoCard type="idea" title="Principios fundamentales de la interacción">
      <ul className="space-y-2 text-sm">
        <li><strong>Claridad clínica sobre cortesía:</strong> La cortesía lingüística ("por favor", "gracias") introduce ruido semántico. Prioriza la claridad algorítmica.</li>
        <li><strong>Desagrupamiento de instrucciones:</strong> Agrupar múltiples pasos en un solo párrafo induce a fallos de omisión. Separa las instrucciones lógicamente.</li>
        <li><strong>Instrucción negativa explícita:</strong> Establece delimitaciones rígidas (ej. "no utilizar jerga corporativa") para podar el espacio de probabilidad de respuestas no deseadas.</li>
      </ul>
    </InfoCard>

    <h2 id="sec-modulo2-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">2. Fundamentos teóricos</h2>
    
    <Accordion title="2.1 Definición y contexto conceptual">
      <InfoCard type="definicion" title="¿Qué es la ingeniería de instrucciones?">
        <p>La <strong>ingeniería de instrucciones (prompt engineering)</strong> es el arte y la ciencia de diseñar y optimizar instrucciones para guiar a los modelos de IA, en particular los LLM, a generar las respuestas deseadas. Cuando creas instrucciones con cuidado, le proporcionas al modelo contexto, instrucciones y ejemplos que lo ayudan a comprender tu intención y a responder de forma significativa. Considéralo como una hoja de ruta para la IA, que la orienta hacia el resultado específico que tienes en mente.</p>
      </InfoCard>
      <p className="mt-4 text-slate-300">En el contexto de la IA, una instrucción es la entrada que le proporcionas al modelo para generar una respuesta específica. Esto puede tomar varias formas, desde preguntas simples o palabras clave hasta instrucciones complejas, fragmentos de código o incluso muestras de escritura creativa. La eficacia de tu instrucción influye directamente en la calidad y relevancia de los resultados de la IA.</p>
      <ul className="space-y-2 text-slate-300 mt-4">
        <li><strong>Comprensión arquitectónica:</strong> Entender cómo funcionan los LLM, sus mecanismos de atención, y cómo procesan el contexto.</li>
        <li><strong>Estrategia comunicativa:</strong> Articular instrucciones que aprovechen las fortalezas del modelo mientras minimizan sus debilidades conocidas.</li>
        <li><strong>Iteración sistemática:</strong> Refinar prompts basándose en resultados empíricos y feedback del sistema.</li>
        <li><strong>Adaptabilidad contextual:</strong> Ajustar el enfoque según el dominio de aplicación, la complejidad de la tarea y las necesidades específicas del usuario.</li>
      </ul>
    </Accordion>

    <Accordion title="2.2 Componentes de un prompt efectivo">
      <p className="mb-4">Varios elementos clave contribuyen a una ingeniería de instrucciones eficaz. Dominar estas opciones te permite comunicarte de forma eficaz con los modelos de IA y aprovechar todo su potencial. El formato de tu instrucción juega un papel importante en la forma en que la IA interpreta tu solicitud. Los diferentes modelos pueden responder mejor a formatos específicos, como preguntas de lenguaje natural, comandos directos o entradas estructuradas.</p>
      <div className="space-y-4">
        <InfoCard type="practica" title="1. Instrucción (instruction)">
          <p>La tarea específica que se solicita al modelo. Debe ser clara, directa y accionable. Ejemplo: "Analiza las tres estrategias de marketing digital más efectivas para startups tecnológicas en 2024".</p>
        </InfoCard>
        <InfoCard type="practica" title="2. Contexto (context)">
          <p>Información de fondo que permite al modelo entender el marco de referencia. Esto puede incluir antecedentes del problema, características del público objetivo, restricciones técnicas o temporales.</p>
        </InfoCard>
        <InfoCard type="practica" title="3. Datos de entrada (input data)">
          <p>La información específica sobre la cual el modelo debe operar. Puede ser texto, números, descripciones de situaciones, código, o cualquier dato relevante para la tarea.</p>
        </InfoCard>
        <InfoCard type="practica" title="4. Formato de salida (output indicator)">
          <p>Especificaciones sobre cómo debe estructurarse la respuesta. Esto puede incluir el formato (lista, párrafo, tabla, JSON), el tono (formal, casual, técnico), la longitud aproximada.</p>
        </InfoCard>
      </div>
    </Accordion>

    <Accordion title="2.3 Principios clave de diseño">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse mt-4">
          <thead>
            <tr className="bg-slate-800 text-slate-200">
              <th className="p-3 border border-slate-700">Principio</th>
              <th className="p-3 border border-slate-700">Descripción</th>
              <th className="p-3 border border-slate-700">Aplicación práctica</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Claridad</td>
              <td className="p-3 border border-slate-700">Instrucciones inequívocas que minimizan ambigüedad</td>
              <td className="p-3 border border-slate-700">Usar verbos de acción específicos: "analiza", "compara", "identifica"</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Especificidad</td>
              <td className="p-3 border border-slate-700">Detalles concretos sobre qué, cómo y por qué</td>
              <td className="p-3 border border-slate-700">En lugar de "dame ideas", usar "genera 3 propuestas de valor para un SaaS B2B"</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Contexto</td>
              <td className="p-3 border border-slate-700">Información de fondo suficiente para orientar la respuesta</td>
              <td className="p-3 border border-slate-700">Incluir información sobre audiencia, propósito, restricciones y expectativas</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Estructura</td>
              <td className="p-3 border border-slate-700">Organización lógica de los elementos del prompt</td>
              <td className="p-3 border border-slate-700">Presentar información en orden: contexto → tarea → especificaciones → formato deseado</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Iteración</td>
              <td className="p-3 border border-slate-700">Refinamiento continuo basado en resultados</td>
              <td className="p-3 border border-slate-700">Documentar qué funciona, ajustar variables una a la vez, comparar versiones</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Accordion>

    <h2 id="sec-modulo2-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">3. Interacción paramétrica e inferencia condicionada</h2>
    <p className="text-slate-300 mb-6">Estas estrategias aprovechan el conocimiento paramétrico del modelo para mapear el lenguaje natural a representaciones internas de resolución de tareas.</p>

    <Accordion title="3.1 Solicitud directa sin ejemplos (zero-shot prompting)">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>zero-shot prompting</strong> instruye directamente al modelo para ejecutar una tarea basándose exclusivamente en la vasta red de conocimiento paramétrico que adquirió durante su preentrenamiento, sin proporcionar ejemplos previos.</p>
      </InfoCard>
      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-emerald-500 mt-4">
        <div className="flex justify-between items-start mb-2">
          <p className="font-semibold text-emerald-400">✅ Prompt efectivo:</p>
          <CopyButton text="Analiza el siguiente perfil profesional y extrae las cinco competencias técnicas más relevantes. Presenta cada competencia con un nivel de proficiencia estimado (básico/intermedio/avanzado) basado en la descripción de experiencia proporcionada." />
        </div>
        <p className="italic text-slate-300">"Analiza el siguiente perfil profesional y extrae las cinco competencias técnicas más relevantes. Presenta cada competencia con un nivel de proficiencia estimado (básico/intermedio/avanzado) basado en la descripción de experiencia proporcionada."</p>
      </div>
    </Accordion>

    <Accordion title="3.2 Few-shot prompting">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>few-shot prompting</strong> implica proporcionar al modelo algunos ejemplos de la tarea deseada antes de solicitar que realice una instancia nueva. Esta técnica es extraordinariamente poderosa porque permite "enseñar" al modelo mediante demostración en lugar de descripción.</p>
      </InfoCard>
      
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800 text-slate-200">
              <th className="p-3 border border-slate-700">Característica</th>
              <th className="p-3 border border-slate-700">Zero-shot Prompting</th>
              <th className="p-3 border border-slate-700">Few-shot Prompting</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Ejemplos provistos</td>
              <td className="p-3 border border-slate-700">Ninguno</td>
              <td className="p-3 border border-slate-700">Uno o varios (generalmente de 1 a 5)</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Uso ideal</td>
              <td className="p-3 border border-slate-700">Tareas comunes, conocimiento general, instrucciones simples</td>
              <td className="p-3 border border-slate-700">Tareas específicas, formatos de salida estrictos, estilos particulares</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Rendimiento</td>
              <td className="p-3 border border-slate-700">Bueno en modelos grandes (LLMs avanzados)</td>
              <td className="p-3 border border-slate-700">Mejora significativamente la precisión y consistencia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
        <div className="flex justify-between items-start mb-3">
          <p className="font-semibold text-blue-400">Ejemplo estructurado: SofIA</p>
          <CopyButton text={`Ejemplo 1:\nInput: "He usado Python ocasionalmente para scripts de automatización básicos."\nOutput: Python - Nivel: Básico\n\nEjemplo 2:\nInput: "Desarrollo aplicaciones web completas en Python con Django, incluyendo APIs RESTful y gestión de bases de datos."\nOutput: Python - Nivel: Avanzado\n\nAhora evalúa:\nInput: "Utilizo Python para machine learning, implementando modelos con scikit-learn y TensorFlow, además de desplegar soluciones en producción."\nOutput:`} />
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p><strong className="text-emerald-400">Ejemplo 1:</strong><br/>Input: "He usado Python ocasionalmente para scripts de automatización básicos."<br/>Output: Python - Nivel: Básico</p>
          <p><strong className="text-emerald-400">Ejemplo 2:</strong><br/>Input: "Desarrollo aplicaciones web completas en Python con Django, incluyendo APIs RESTful y gestión de bases de datos."<br/>Output: Python - Nivel: Avanzado</p>
          <p className="mt-4 pt-4 border-t border-slate-700"><strong className="text-indigo-400">Ahora evalúa:</strong><br/>Input: "Utilizo Python para machine learning, implementando modelos con scikit-learn y TensorFlow, además de desplegar soluciones en producción."<br/>Output: [El modelo completaría aquí]</p>
        </div>
      </div>
    </Accordion>

    <Accordion title="3.3 Chain of thought (cadena de pensamiento)">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>chain of thought (CoT) prompting</strong> es una técnica que solicita explícitamente al modelo que muestre su "razonamiento paso a paso" antes de llegar a una conclusión. Esta estrategia ha demostrado mejoras dramáticas en tareas que requieren razonamiento complejo, resolución de problemas matemáticos, y análisis multi-paso.</p>
      </InfoCard>
      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-emerald-500 mt-4">
        <div className="flex justify-between items-start mb-2">
          <p className="font-semibold text-emerald-400">✅ Con CoT:</p>
          <CopyButton text="¿Este candidato es adecuado para un rol senior en gestión de proyectos tecnológicos? Analiza paso a paso considerando: (1) años de experiencia relevante, (2) competencias técnicas vs. gestión, (3) evidencia de liderazgo de equipos, (4) familiaridad con metodologías ágiles. Luego, proporciona una recomendación justificada." />
        </div>
        <p className="italic text-slate-300 mb-2">"¿Este candidato es adecuado para un rol senior en gestión de proyectos tecnológicos? Analiza paso a paso considerando: (1) años de experiencia relevante, (2) competencias técnicas vs. gestión, (3) evidencia de liderazgo de equipos, (4) familiaridad con metodologías ágiles. Luego, proporciona una recomendación justificada."</p>
        <p className="text-sm text-slate-400"><em>Respuesta típica:</em> "Analicemos sistemáticamente: [Paso 1] Experiencia: El candidato tiene 8 años en el sector tecnológico... [Paso 2] Balance técnico-gestión: Muestra competencias técnicas sólidas en..., pero la experiencia en gestión directa es limitada a... [Paso 3] Liderazgo: Ha liderado equipos de 3-5 personas en... [Paso 4] Metodologías: Experiencia demostrada con Scrum en... [Conclusión] El candidato tiene una base sólida pero requeriría..."</p>
      </div>
    </Accordion>

    <Accordion title="3.4 Self-consistency">
      <InfoCard type="definicion" title="Concepto">
        <p><strong>Self-consistency</strong> es una técnica meta-cognitiva que genera múltiples cadenas de razonamiento independientes para la misma pregunta y luego selecciona la respuesta que aparece más consistentemente. Este enfoque aprovecha el hecho de que, aunque un modelo pueda cometer errores en paths de razonamiento individuales, la respuesta correcta tiende a emerger más frecuentemente.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="3.5 Tree of thoughts">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>tree of thoughts (ToT)</strong> extiende el chain of thought permitiendo exploración deliberada de múltiples rutas de razonamiento de manera estructurada, similar a <GlossaryTerm term="Algoritmo">algoritmos</GlossaryTerm> de búsqueda en árboles. En lugar de seguir una única cadena lineal, el modelo explora ramificaciones alternativas, evalúa cada rama, y puede retroceder si un camino no es prometedor.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="3.6 ReAct (reasoning and acting)">
      <InfoCard type="definicion" title="Concepto">
        <p><strong>ReAct</strong> combina razonamiento ("Reason") con acciones ("Act") de manera iterativa. El modelo alterna entre pensar sobre qué hacer, ejecutar acciones (como buscar información, hacer cálculos), y luego razonar sobre los resultados de esas acciones para decidir los próximos pasos.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="3.7 Catálogo completo de técnicas aplicadas a SofIA">
      <p className="mb-4 text-slate-300">A continuación, se presentan las 40 técnicas esenciales aplicadas directamente al proceso de transición profesional de SofIA:</p>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">1. Zero-shot prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Analiza mi historial laboral en retail y genera una lista de 5 competencias transferibles que sean valiosas para un rol de analista de operaciones."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">2. Few-shot prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Convierte estas tareas en logros: Ejemplo 1: 'Supervisé personal' → 'Lideré un equipo de 12 personas logrando un 15% más de eficiencia'. Ahora hazlo con: 'Manejé el cierre de caja diario...'"</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">3. Chain-of-thought (CoT)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Analiza paso a paso si mi experiencia en gestión de inventarios es relevante para logística: 1. Define requisitos de logística 2. Compara con mis tareas 3. Identifica brechas 4. Concluye."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">4. Role prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Actúa como una experta en reclutamiento de startups tecnológicas. Revisa mi resumen profesional y dime si suena demasiado tradicional o si encaja con la cultura ágil."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">5. Self-consistency</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Genera 3 análisis independientes sobre si mi perfil es mejor para 'Project Coordinator' o 'Operations Associate'. Luego, resume los puntos en común de los 3 análisis."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">6. Prompt chaining</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Paso 1: Extrae mis 3 mayores logros. Paso 2: Redáctalos usando el método STAR. Paso 3: Optimízalos para una oferta de analista de datos."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">7. Tree of thoughts</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Explora 3 estrategias para mi transición: 1. Ascenso interno 2. Cambio de industria 3. Emprendimiento. Evalúa riesgos y beneficios de cada una."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">8. ReAct (reasoning + acting)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Pensamiento: Analiza mi CV. Acción: Sugiere 3 cursos de Coursera. Pensamiento: Evalúa cuál es más urgente. Acción: Crea un plan de estudio."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">9. Constitutional AI</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Revisa mi carta de presentación siguiendo estas reglas: 1. No uses lenguaje pasivo 2. Mantén un tono profesional pero cercano 3. No inventes experiencia."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">10. Contrastive prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"❌ NO quiero: 'Soy una persona proactiva'. ✅ SÍ quiero: 'Implementé un nuevo sistema de turnos que redujo las ausencias en un 10%'."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">11. Iterative refinement</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Iteración 1: Redacta un correo para un reclutador. Iteración 2: Hazlo más persuasivo. Iteración 3: Menciona mi interés por la cultura de la empresa."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">12. Metacognitive prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Evalúa tu propia respuesta anterior: ¿Es realmente un consejo práctico para alguien que viene del retail o es demasiado genérico?"</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">13. Context stuffing</h4>
          <p className="text-sm italic text-slate-400 mt-1">"=== MI CV === [Texto] === OFERTA LABORAL === [Texto] === MIS MIEDOS === [Texto] Basado en todo esto, ¿cómo puedo destacar?"</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">14. Socratic questioning</h4>
          <p className="text-sm italic text-slate-400 mt-1">"No me digas qué cambiar en mi CV. Hazme 5 preguntas que me obliguen a pensar en mis logros más importantes del último año."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">15. Perspective-taking</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Analiza mi postulación desde 3 puntos de vista: 1. Un reclutador que busca eficiencia 2. Un futuro compañero de equipo 3. El CEO de la startup."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">16. Plan-and-solve prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Primero comprendamos el problema de mi transición laboral y diseñemos un plan. Luego, ejecutemos el plan paso a paso."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">17. Universal self-consistency</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Revisa estas 5 cartas de presentación generadas previamente y sintetiza un consenso con los mejores argumentos de cada una."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">18. Program-aided language models (PAL)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Escribe un script en Python para calcular mi salario neto esperado tras impuestos, y ejecútalo para darme la cifra exacta."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">19. Skeleton-of-thought (SoT)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Primero, dame un esquema de 5 puntos clave para mi entrevista. Luego, expande cada punto detalladamente."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">20. Chain of density (CoD)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Resume mi CV en 80 palabras. Luego, reescríbelo 3 veces, añadiendo más logros específicos en cada iteración sin exceder las 80 palabras."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">21. Active-prompt</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Revisa estas posibles preguntas de entrevista. Identifica las 3 donde tus respuestas varían más y pídeme ejemplos de mi experiencia para anclarlas."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">22. Negative prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Escribe un correo de seguimiento. NO uses jerga corporativa, NO te disculpes por molestar, y NO excedas los 3 párrafos."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">23. Compaction systems / agentic memory</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Resume nuestra conversación de la última hora en 5 viñetas y guárdalas en tu memoria a largo plazo antes de continuar con la siguiente tarea."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">24. Manager-worker (multi-agente)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Agente supervisor: Asigna la revisión de mi CV al agente de RRHH y el análisis de mercado al agente de datos. Luego consolida ambos reportes."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">25. Peer review (multi-agente)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Agente 1: Escribe mi carta de presentación. Agente 2: Critica la carta buscando debilidades. Agente 1: Reescribe basándote en las críticas."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">26. Pipelines (multi-agente)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Pasa mi perfil por el pipeline: Agente extractor -&gt; Agente analista -&gt; Agente redactor, para obtener un perfil de LinkedIn perfecto."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">27. Prompt exacto</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Traduce el siguiente párrafo al inglés británico, manteniendo un tono formal."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">28. Contextual prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Contexto: Estoy aplicando a una empresa de tecnología que valora la innovación. Sugiere 3 preguntas para hacer al final de la entrevista."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">29. Prompt iterativo</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Hazlo más corto. Ahora, cambia el tono para que suene más entusiasta. Por último, añade un llamado a la acción."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">30. Prompt basado en conocimiento</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Sabiendo que el salario promedio para este rol es de 45.000€ y la empresa acaba de recibir financiación, ¿cómo debería negociar mi oferta?"</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">31. Prompt comparativo</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Compara las ventajas y desventajas de trabajar en una startup frente a una corporación multinacional para mi perfil."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">32. Prompt combinado</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Actúa como reclutador (Role). Analiza paso a paso (CoT) mi CV. Usa este formato de salida: [Ejemplo] (Few-shot)."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">33. Prompt inverso</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Aquí tienes una oferta de trabajo perfecta para mí. ¿Qué prompt usarías para generar una oferta similar en el futuro?"</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">34. JSON prompt / working with schemas</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Extrae mis habilidades y devuélvelas estrictamente en este formato JSON: {'{'} 'habilidades_tecnicas': [], 'habilidades_blandas': [] {'}'}"</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">35. Prompt para deep research</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Realiza una investigación profunda sobre las tendencias de contratación en IA para 2026, citando fuentes y cruzando datos de mercado."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">36. Prompt para usar agentes IA</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Agente de búsqueda de empleo: Tu objetivo es encontrar 5 ofertas diarias que coincidan con mi perfil, filtrando las que requieran presencialidad."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">37. System prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"System: Eres un asistente de carrera. Nunca des consejos médicos o legales. Responde siempre en español."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">38. Step-back prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Antes de decirme cómo responder a esta pregunta de entrevista, explícame qué buscan evaluar generalmente los reclutadores con ella."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">39. Automatic prompt engineering (APE)</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Genera 5 variaciones de prompts para pedirte que mejores mi CV. Evalúalas y dime cuál produciría el mejor resultado."</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300">40. Code prompting</h4>
          <p className="text-sm italic text-slate-400 mt-1">"Explícame este fragmento de código Python línea por línea y sugiere cómo optimizarlo para mi prueba técnica."</p>
        </div>
      </div>
    </Accordion>

    <h2 id="sec-modulo2-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">4. Caso de estudio: SofIA</h2>
    <p>El caso de SofIA demuestra que la ingeniería de prompts efectiva no es sobre usar una única técnica avanzada, sino sobre <strong>orquestar múltiples técnicas estratégicamente</strong> según las necesidades de cada sub-tarea.</p>
    
    <div className="space-y-6 mt-6">
      <InfoCard type="practica" title="Ejemplo 1: extracción de competencias (few-shot + CoT)">
        <p>La extracción de competencias se beneficia de few-shot para establecer el formato deseado, combinado con CoT para asegurar que el modelo analice correctamente la experiencia antes de clasificarla.</p>
      </InfoCard>
      <InfoCard type="practica" title="Ejemplo 2: evaluación de adecuación (self-consistency)">
        <p>Para decisiones críticas (¿Mi perfil es adecuado para este puesto?), SofIA genera 3 análisis independientes, cada uno usando CoT. Luego compara las conclusiones para aumentar la confiabilidad.</p>
      </InfoCard>
      <InfoCard type="practica" title="Ejemplo 3: optimización de CV (step-back + ReAct)">
        <p>La optimización de documentos utiliza un flujo ReAct guiado por step-back, permitiendo al modelo analizar el CV actual contra principios generales de ATS antes de proponer reformulaciones específicas.</p>
      </InfoCard>
    </div>

    <h2 id="sec-modulo2-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">5. Buenas prácticas y errores comunes</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-4 text-emerald-400">✅ Mejores prácticas</h3>
        <ul className="space-y-2 text-slate-300">
          <li><strong>Iteración sistemática:</strong> Documenta tus prompts y resultados. Cambia una variable a la vez.</li>
          <li><strong>Especificidad progresiva:</strong> Comienza con prompts simples, agrega complejidad solo cuando sea necesaria.</li>
          <li><strong>Delimitadores claros:</strong> Usa comillas, triple comillas, o marcadores XML para separar instrucciones de datos de entrada.</li>
          <li><strong>Ejemplos diversos:</strong> En few-shot, asegúrate de que los ejemplos cubran casos típicos y edge cases.</li>
        </ul>
      </div>

      <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-4 text-red-400">❌ Errores comunes a evitar</h3>
        <ul className="space-y-2 text-slate-300">
          <li><strong>Ambigüedad no intencional:</strong> "Analiza este documento" → ¿Qué aspecto? ¿Con qué criterios?</li>
          <li><strong>Prompts demasiado complejos:</strong> Solicitar 10 cosas diferentes en un solo prompt.</li>
          <li><strong>Olvidar el contexto:</strong> Asumir que el modelo "sabe" el contexto de tu proyecto o industria.</li>
          <li><strong>No especificar formato de salida:</strong> Obtener respuestas en formatos difíciles de procesar.</li>
        </ul>
      </div>
    </div>

    <h2 id="sec-modulo2-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">6. Conclusión y perspectivas futuras</h2>
    <p>La ingeniería de prompts ha evolucionado rápidamente de un conjunto ad-hoc de trucos empíricos a un campo con fundamentos teóricos sólidos y metodologías sistemáticas. Lo que comenzó como simple "prompt tuning" se ha convertido en una disciplina que requiere comprensión de arquitecturas de modelos, lingüística aplicada, diseño de interfaces, y consideraciones éticas profundas.</p>
    <p>A medida que estos sistemas continúan evolucionando, también lo harán las técnicas y metodologías de la ingeniería de prompts. Sin embargo, los principios fundamentales establecidos —claridad, contexto, estructura e iteración sistemática— probablemente permanecerán como pilares de la práctica efectiva.</p>

    <h2 id="sec-modulo2-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🤔 Preguntas de reflexión</h2>
    <InfoCard type="reflexion" title="Para profundizar en el capítulo">
        <ul className="list-disc ml-5 space-y-2 text-slate-300">
            <li>¿Cuál de las técnicas de ingeniería de prompts presentadas te parece más útil para tu trabajo diario?</li>
            <li>¿Cómo podrías aplicar la técnica de "Chain of Thought" para resolver un problema complejo que enfrentas actualmente?</li>
            <li>¿Por qué es importante iterar sobre los prompts en lugar de esperar la respuesta perfecta a la primera?</li>
        </ul>
    </InfoCard>
  </div>
);
