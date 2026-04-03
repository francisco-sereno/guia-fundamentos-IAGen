import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const Modulo2Content = () => (
  <div className="prose-custom">
    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ingeniería de prompts</h1>
    <p className="text-xl text-slate-300 mb-8">Fundamentos y aplicaciones en inteligencia artificial generativa</p>

    <AuthorNote>
      En este capítulo, mi objetivo es que dejes de ver los prompts como simples preguntas y empieces a diseñarlos como instrucciones de ingeniería. La precisión aquí marca la diferencia entre una respuesta útil y una genérica.
    </AuthorNote>

    <h2 id="sec-1-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">1. Introducción</h2>
    <p>La <strong>ingeniería de prompts</strong> representa una de las habilidades más críticas en la era de la inteligencia artificial generativa. En un contexto donde los modelos de lenguaje grandes (<GlossaryTerm term="LLM">LLM</GlossaryTerm>) son cada vez más accesibles y potentes, la capacidad de comunicarse efectivamente con estos sistemas se ha convertido en una competencia fundamental.</p>

    <InfoCard type="idea" title="Reflexión inicial">
      <p>A medida que los modelos de IA se vuelven más sofisticados, la calidad de las interacciones humano-máquina depende cada vez más de nuestra capacidad para articular instrucciones precisas, contextualmente ricas y estratégicamente diseñadas. La ingeniería de prompts no es solo sobre "qué decir" a la IA, sino sobre cómo estructurar ese diálogo para maximizar la utilidad, precisión y relevancia de las respuestas generadas.</p>
    </InfoCard>

    <h2 id="sec-1-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">2. Fundamentos teóricos</h2>
    
    <Accordion title="2.1 Definición y contexto conceptual">
      <InfoCard type="definicion" title="¿Qué es la ingeniería de instrucciones?">
        <p>La <strong>ingeniería de instrucciones (prompt engineering)</strong> es el arte y la ciencia de diseñar y optimizar instrucciones para guiar a los modelos de IA, en particular los LLM, a generar las respuestas deseadas. Cuando creas instrucciones con cuidado, le proporcionas al modelo contexto, instrucciones y ejemplos que lo ayudan a comprender tu intención y a responder de forma significativa. Considéralo como una hoja de ruta para la IA, que la orienta hacia el resultado específico que tienes en mente.</p>
      </InfoCard>
      <p className="mt-4 text-slate-300">En el contexto de la IA, una instrucción es la entrada que le proporcionas al modelo para generar una respuesta específica. Esto puede tomar varias formas, desde preguntas simples o palabras clave hasta instrucciones complejas, fragmentos de código o incluso muestras de escritura creativa. La eficacia de tu instrucción influye directamente en la calidad y relevancia de los resultados de la IA.</p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mt-4">
        <li><strong>Comprensión arquitectónica:</strong> Entender cómo funcionan los LLM, sus mecanismos de atención, y cómo procesan el contexto.</li>
        <li><strong>Estrategia comunicativa:</strong> Articular instrucciones que aprovechen las fortalezas del modelo mientras minimizan sus debilidades conocidas.</li>
        <li><strong>Iteración sistemática:</strong> Refinar prompts basándose en resultados empíricos y feedback del sistema.</li>
        <li><strong>Adaptabilidad contextual:</strong> Ajustar el enfoque según el dominio de aplicación, la complejidad de la tarea y las necesidades específicas del usuario.</li>
      </ul>
    </Accordion>

    <Accordion title="2.2 Componentes de un prompt efectivo">
      <p className="mb-4">Varios elementos clave contribuyen a una ingeniería de instrucciones eficaz. Dominar estas opciones te permite comunicarte de forma eficaz con los modelos de IA y aprovechar todo su potencial. El formato de tu instrucción juega un papel importante en la forma en que la IA interpreta tu solicitud. Los diferentes modelos pueden responder mejor a formatos específicos, como preguntas de lenguaje natural, comandos directos o entradas estructuradas.</p>
      <div className="space-y-4">
        <InfoCard type="practica" title="1. Instrucción (Instruction)">
          <p>La tarea específica que se solicita al modelo. Debe ser clara, directa y accionable. Ejemplo: "Analiza las tres estrategias de marketing digital más efectivas para startups tecnológicas en 2024".</p>
        </InfoCard>
        <InfoCard type="practica" title="2. Contexto (Context)">
          <p>Información de fondo que permite al modelo entender el marco de referencia. Esto puede incluir antecedentes del problema, características del público objetivo, restricciones técnicas o temporales.</p>
        </InfoCard>
        <InfoCard type="practica" title="3. Datos de entrada (Input Data)">
          <p>La información específica sobre la cual el modelo debe operar. Puede ser texto, números, descripciones de situaciones, código, o cualquier dato relevante para la tarea.</p>
        </InfoCard>
        <InfoCard type="practica" title="4. Formato de salida (Output Indicator)">
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

    <h2 id="sec-1-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">3. Técnicas avanzadas de prompting</h2>
    
    <Accordion title="3.1 Zero-shot prompting">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>zero-shot prompting</strong> consiste en solicitar al modelo que realice una tarea sin proporcionar ejemplos previos. Esta técnica se basa enteramente en las capacidades de generalización que el modelo ha adquirido durante su entrenamiento.</p>
      </InfoCard>
      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-emerald-500 mt-4">
        <p className="font-semibold text-emerald-400 mb-2">✅ Prompt efectivo:</p>
        <p className="italic text-slate-300">"Analiza el siguiente perfil profesional y extrae las cinco competencias técnicas más relevantes. Presenta cada competencia con un nivel de proficiencia estimado (básico/intermedio/avanzado) basado en la descripción de experiencia proporcionada."</p>
      </div>
    </Accordion>

    <Accordion title="3.2 Few-shot prompting">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>few-shot prompting</strong> implica proporcionar al modelo algunos ejemplos de la tarea deseada antes de solicitar que realice una instancia nueva. Esta técnica es extraordinariamente poderosa porque permite "enseñar" al modelo mediante demostración en lugar de descripción.</p>
      </InfoCard>
      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
        <p className="font-semibold text-blue-400 mb-3">Ejemplo estructurado: SofIA</p>
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
        <p className="font-semibold text-emerald-400 mb-2">✅ Con CoT:</p>
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

    <Accordion title="3.7 Step-back prompting">
      <InfoCard type="definicion" title="Concepto">
        <p>El <strong>step-back prompting</strong> es una técnica que instruye al modelo a "dar un paso atrás" y considerar primero los principios o conceptos generales antes de abordar el problema específico. Esta abstracción inicial ayuda a evitar respuestas superficiales o basadas en patrones superficiales.</p>
      </InfoCard>
    </Accordion>

    <h2 id="sec-1-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">4. Caso de estudio: SofIA</h2>
    <p>El caso de SofIA demuestra que la ingeniería de prompts efectiva no es sobre usar una única técnica avanzada, sino sobre <strong>orquestar múltiples técnicas estratégicamente</strong> según las necesidades de cada sub-tarea.</p>
    
    <div className="space-y-6 mt-6">
      <InfoCard type="practica" title="Ejemplo 1: Extracción de competencias (Few-shot + CoT)">
        <p>La extracción de competencias se beneficia de few-shot para establecer el formato deseado, combinado con CoT para asegurar que el modelo analice correctamente la experiencia antes de clasificarla.</p>
      </InfoCard>
      <InfoCard type="practica" title="Ejemplo 2: Evaluación de adecuación (Self-consistency)">
        <p>Para decisiones críticas (¿Mi perfil es adecuado para este puesto?), SofIA genera 3 análisis independientes, cada uno usando CoT. Luego compara las conclusiones para aumentar la confiabilidad.</p>
      </InfoCard>
      <InfoCard type="practica" title="Ejemplo 3: Optimización de CV (Step-back + ReAct)">
        <p>La optimización de documentos utiliza un flujo ReAct guiado por step-back, permitiendo al modelo analizar el CV actual contra principios generales de ATS antes de proponer reformulaciones específicas.</p>
      </InfoCard>
    </div>

    <h2 id="sec-1-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">5. Buenas prácticas y errores comunes</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-4 text-emerald-400">✅ Mejores prácticas</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Iteración sistemática:</strong> Documenta tus prompts y resultados. Cambia una variable a la vez.</li>
          <li><strong>Especificidad progresiva:</strong> Comienza con prompts simples, agrega complejidad solo cuando sea necesaria.</li>
          <li><strong>Delimitadores claros:</strong> Usa comillas, triple comillas, o marcadores XML para separar instrucciones de datos de entrada.</li>
          <li><strong>Ejemplos diversos:</strong> En few-shot, asegúrate de que los ejemplos cubran casos típicos y edge cases.</li>
        </ul>
      </div>

      <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-4 text-red-400">❌ Errores comunes a evitar</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Ambigüedad no intencional:</strong> "Analiza este documento" → ¿Qué aspecto? ¿Con qué criterios?</li>
          <li><strong>Prompts demasiado complejos:</strong> Solicitar 10 cosas diferentes en un solo prompt.</li>
          <li><strong>Olvidar el contexto:</strong> Asumir que el modelo "sabe" el contexto de tu proyecto o industria.</li>
          <li><strong>No especificar formato de salida:</strong> Obtener respuestas en formatos difíciles de procesar.</li>
        </ul>
      </div>
    </div>

    <h2 id="sec-1-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">6. Conclusión y perspectivas futuras</h2>
    <p>La ingeniería de prompts ha evolucionado rápidamente de un conjunto ad-hoc de trucos empíricos a un campo con fundamentos teóricos sólidos y metodologías sistemáticas. Lo que comenzó como simple "prompt tuning" se ha convertido en una disciplina que requiere comprensión de arquitecturas de modelos, lingüística aplicada, diseño de interfaces, y consideraciones éticas profundas.</p>
    <p>A medida que estos sistemas continúan evolucionando, también lo harán las técnicas y metodologías de la ingeniería de prompts. Sin embargo, los principios fundamentales establecidos —claridad, contexto, estructura e iteración sistemática— probablemente permanecerán como pilares de la práctica efectiva.</p>
  </div>
);
