import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote, CopyButton } from '../components/Shared';

export const Modulo2Content = () => (
  <div className="prose-custom">
    <AuthorNote>
      En esta sección, veremos cómo dejar de tratar a la IA como un buscador y empezar a verla como un colaborador. La precisión en tus instrucciones es lo que permite que personas sin formación técnica logren resultados extraordinarios.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ingeniería de prompts: fundamentos y aplicaciones en inteligencia artificial generativa</h1>
    <p className="text-xl text-slate-300 mb-8">El arte y la ciencia de la comunicación efectiva con modelos de lenguaje</p>

    <h2 id="sec-modulo2-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">1. Introducción</h2>
    <p>La emergencia de modelos de lenguaje de gran escala ha transformado radicalmente el panorama tecnológico contemporáneo, estableciendo nuevos paradigmas en la interacción humano-computador. En este contexto, la <strong>ingeniería de prompts</strong> ha evolucionado desde ser una curiosidad técnica hasta convertirse en una disciplina fundamental que determina la efectividad de nuestra comunicación con sistemas de inteligencia artificial generativa. Como señalan Schulhoff et al. (2024), "la ingeniería de prompts representa la interfaz crítica entre la intención humana y la capacidad computacional, definiendo no solo qué pueden hacer estos sistemas, sino qué harán efectivamente en la práctica" (p. 3).</p>

    <InfoCard type="idea" title="Idea clave">
      <p>La aplicación sistemática de técnicas de prompting puede mejorar la calidad de las respuestas de la IA hasta en un <strong>50%</strong> y la precisión en tareas específicas en un <strong>31%</strong>, convirtiéndose en una competencia profesional crítica (Brown et al., 2023).</p>
    </InfoCard>

    <p className="mt-6">La relevancia de esta disciplina trasciende el ámbito puramente técnico. Investigaciones recientes demuestran que el uso de metodologías estructuradas es vital en un contexto donde la inteligencia artificial generativa permea cada vez más aspectos de la actividad profesional y académica. El presente apunte examina los fundamentos teóricos y aplicaciones prácticas, proporcionando un marco comprehensivo para comprender y aplicar estas técnicas en diversos contextos.</p>

    <h2 id="sec-modulo2-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">2. Fundamentos teóricos</h2>
    
    <Accordion title="2.1 Definición y alcance">
      <InfoCard type="definicion" title="Definición clave">
        <p>La <strong>ingeniería de prompts</strong> se define como el proceso sistemático de diseñar, estructurar y optimizar las instrucciones proporcionadas a modelos de lenguaje para obtener respuestas que sean precisas, relevantes y útiles para el propósito específico del usuario (Wei et al., 2023).</p>
      </InfoCard>
      <p className="mt-4 text-slate-300">Esta disciplina combina elementos de lingüística computacional, psicología cognitiva y diseño de interacción para establecer protocolos efectivos de comunicación. El alcance se extiende más allá de la simple formulación de preguntas; abarca la comprensión profunda de cómo los modelos procesan información, interpretan contexto y generan respuestas.</p>
      <p className="mt-2 text-slate-300">La evolución histórica refleja el desarrollo de los modelos de lenguaje. La transición hacia los "mega-prompts" representa un cambio paradigmático fundamental, donde investigaciones demuestran que prompts más largos y contextuales producen resultados superiores de manera consistente (PromptHub, 2024).</p>
    </Accordion>

    <Accordion title="2.2 Componentes estructurales de un prompt efectivo">
      <p className="mb-4">Varios elementos clave contribuyen a una ingeniería de instrucciones eficaz. Dominar estas opciones permite aprovechar todo el potencial de la IA:</p>
      <div className="space-y-4">
        <InfoCard type="practica" title="1. Instrucción (instruction)">
          <p>La tarea específica que se solicita al modelo. Debe ser clara, directa y accionable. Ejemplo: "Analiza las tres estrategias de marketing digital más efectivas para startups tecnológicas en 2024".</p>
        </InfoCard>
        <InfoCard type="practica" title="2. Contexto (context)">
          <p>Información de fondo que permite al modelo entender el marco de referencia. Esto puede incluir antecedentes del problema, características del público objetivo, restricciones técnicas o temporales.</p>
        </InfoCard>
        <InfoCard type="practica" title="3. Datos de entrada (input data)">
          <p>La información específica sobre la cual el modelo debe operar (texto, números, código, etc.).</p>
        </InfoCard>
        <InfoCard type="practica" title="4. Formato de salida (output indicator)">
          <p>Especificaciones sobre cómo debe estructurarse la respuesta (lista, tabla, JSON, tono formal, longitud, etc.).</p>
        </InfoCard>
      </div>
    </Accordion>

    <Accordion title="2.3 Principios universales del prompting efectivo">
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
              <td className="p-3 border border-slate-700">Instrucciones inequívocas que minimizan ambigüedad.</td>
              <td className="p-3 border border-slate-700">Usar verbos de acción específicos: "analiza", "compara".</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Especificidad</td>
              <td className="p-3 border border-slate-700">Detalles concretos sobre qué, cómo y por qué.</td>
              <td className="p-3 border border-slate-700">En lugar de "dame ideas", usar "genera 3 propuestas de valor".</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Contexto</td>
              <td className="p-3 border border-slate-700">Información de fondo suficiente para orientar la respuesta.</td>
              <td className="p-3 border border-slate-700">Incluir información sobre audiencia y propósito.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold">Estructura</td>
              <td className="p-3 border border-slate-700">Organización lógica de los elementos del prompt.</td>
              <td className="p-3 border border-slate-700">Contexto → tarea → especificaciones → formato.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Accordion>

    <h2 id="sec-modulo2-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">3. Técnicas avanzadas</h2>
    
    <Accordion title="3.1 Chain-of-thought (CoT) prompting">
      <InfoCard type="definicion" title="Razonamiento paso a paso">
        <p>Solicita explícitamente al modelo que muestre su razonamiento antes de llegar a una conclusión. Mejora dramáticamente el rendimiento en tareas lógicas y matemáticas.</p>
      </InfoCard>
      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-emerald-500 mt-4">
        <p className="italic text-slate-300">"¿Este candidato es adecuado para un rol senior? Analiza paso a paso considerando: (1) experiencia, (2) competencias técnicas, (3) liderazgo. Luego, proporciona una recomendación."</p>
      </div>
    </Accordion>

    <Accordion title="3.2 Few-shot learning y demostración por ejemplos">
      <InfoCard type="definicion" title="Aprendizaje con pocos ejemplos">
        <p>Proporcionar al modelo algunos ejemplos de la tarea deseada antes de solicitar que realice una instancia nueva. Permite "enseñar" mediante demostración.</p>
      </InfoCard>
      <div className="bg-slate-900/80 p-4 rounded-lg border-l-4 border-blue-500 mt-4 text-sm text-slate-300">
        <p><strong>Ejemplo 1:</strong> Input: "He usado Python para scripts básicos." &rarr; Output: Nivel: Básico</p>
        <p><strong>Ejemplo 2:</strong> Input: "Desarrollo apps web con Django." &rarr; Output: Nivel: Avanzado</p>
      </div>
    </Accordion>

    <Accordion title="3.3 Role prompting y asignación de perspectivas">
      <InfoCard type="definicion" title="Asignación de roles">
        <p>Instruir al modelo para que adopte una personalidad o pericia específica. Ayuda a ajustar el tono, el vocabulario y el enfoque de la respuesta.</p>
      </InfoCard>
      <p className="mt-4 italic text-slate-400">"Actúa como un experto en reclutamiento de startups tecnológicas..."</p>
    </Accordion>

    <Accordion title="3.4 Tree of thoughts (ToT) y exploración sistemática">
      <InfoCard type="definicion" title="Exploración deliberada">
        <p>Permite explorar múltiples rutas de razonamiento simultáneamente, evaluando cada rama y retrocediendo si un camino no es prometedor.</p>
      </InfoCard>
    </Accordion>

    <h2 id="sec-modulo2-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">4. Diferencias entre modelos principales</h2>
    <InfoCard type="idea" title="Idea clave">
      <p>No existe un "mejor" modelo universal. La elección correcta depende de la tarea específica.</p>
    </InfoCard>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
        <h4 className="font-bold text-indigo-300 mb-2">OpenAI GPT-4.x</h4>
        <p className="text-sm text-slate-300">Requiere seguimiento literal. Ideal para generación de código, instrucciones complejas y contextos largos. El "prompting agéntico" es esencial aquí.</p>
      </div>
      <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
        <h4 className="font-bold text-indigo-300 mb-2">Google Gemini</h4>
        <p className="text-sm text-slate-300">Multimodal nativo. Mayor flexibilidad en la interpretación y rendimiento superior en <em>few-shot learning</em>. Ventajas únicas por su integración con el ecosistema Google.</p>
      </div>
      <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
        <h4 className="font-bold text-indigo-300 mb-2">Anthropic Claude</h4>
        <p className="text-sm text-slate-300">Optimizado para formatos estructurados (XML). Excelente para análisis de documentos largos y mantenimiento de contexto en conversaciones extensas.</p>
      </div>
    </div>

    <h2 id="sec-modulo2-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">5. Metodologías de optimización</h2>
    <InfoCard type="idea" title="El ciclo de optimización">
      <p>La optimización de prompts es un proceso científico de 5 pasos: 1) Fijar línea base, 2) Identificar fallos, 3) Aplicar mejoras, 4) Probar, y 5) Validar.</p>
    </InfoCard>
    <p className="mt-4">La evaluación objetiva es crucial, usando métricas cuantitativas (relevancia semántica) y cualitativas. Herramientas como <strong>Promptfoo</strong> permiten automatizar este proceso con el mismo rigor que el código de software.</p>

    <h2 id="sec-modulo2-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">6. Conexión práctica: el mega-prompt</h2>
    <p>El "mega-prompt" no es solo un ejemplo, sino un modelo de cómo construir herramientas de análisis complejas. Al integrar múltiples técnicas (rol, CoT, ToT, few-shot) en un solo prompt, se crea un "agente" especializado.</p>
    <div className="bg-slate-900/80 p-6 rounded-xl border border-indigo-500/30 mt-4">
      <h4 className="font-bold text-indigo-300 mb-2">Ejemplo de estructura de mega-prompt:</h4>
      <pre className="text-xs text-slate-400 whitespace-pre-wrap">
        {`[ROL]: Actúa como un consultor senior de estrategia empresarial...
[CONTEXTO]: Estoy planificando un emprendimiento de [X] en el mercado de [Y]...
[TAREA]: Realiza un análisis DAFO detallado y una proyección de 3 escenarios...
[PROCESO]: Piensa paso a paso (Chain-of-Thought). Explora 3 rutas críticas (Tree of Thoughts)...
[FORMATO]: Entrega un informe estructurado en Markdown con tablas comparativas...`}
      </pre>
    </div>

    <h2 id="sec-modulo2-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">7. Aplicaciones prácticas y casos de estudio</h2>
    <div className="space-y-4 mt-6">
      <Accordion title="📈 Marketing digital">
        <p>Una empresa de e-commerce logró incrementar clics en 40% y conversión en 25% usando prompts optimizados para personalización basados en historial de compras y datos demográficos.</p>
      </Accordion>
      <Accordion title="🏥 Salud">
        <p>El sistema <strong>Medprompt</strong> de Microsoft logra rendimiento comparable a médicos especialistas combinando selección dinámica de ejemplos y cadenas de pensamiento auto-generadas.</p>
      </Accordion>
      <Accordion title="🎓 Educación">
        <p>Estudios en Chile mostraron mejoras del 32% en comprensión al usar prompts para generar material adaptado a contextos vocacionales específicos.</p>
      </Accordion>
    </div>

    <h2 id="sec-modulo2-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">8. Herramientas y ecosistema tecnológico</h2>
    <p>El ecosistema ha madurado ofreciendo soluciones robustas:</p>
    <ul className="list-disc ml-6 space-y-2 text-slate-300 mt-4">
      <li><strong>PromptLayer:</strong> Gestión visual de prompts.</li>
      <li><strong>LangSmith:</strong> Depuración técnica y trazabilidad.</li>
      <li><strong>Vertex AI Prompt Optimizer:</strong> Optimización automatizada de Google.</li>
      <li><strong>Promptfoo:</strong> Estándar para pruebas rigurosas y evaluación.</li>
    </ul>

    <h2 id="sec-modulo2-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">9. Perspectivas futuras y conclusiones</h2>
    <Accordion title="🚀 Tendencias emergentes">
      <p>La automatización inteligente y la <strong>multimodalidad nativa</strong> (pionerizada por Gemini) están redefiniendo el prompt. La capacidad de combinar texto, imagen, audio y video en una única instrucción abre posibilidades infinitas.</p>
      <InfoCard type="definicion" title="Multimodalidad nativa">
        <p>Capacidad de procesar y generar contenido combinando diferentes formatos de forma nativa dentro de un único prompt y respuesta.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="⚖️ Consideraciones éticas y responsabilidad">
      <p>La capacidad de influir en las salidas de la IA requiere responsabilidad. Debemos evitar la amplificación de sesgos y asegurar transparencia. La "Ética del Prompt" debate si la responsabilidad recae en el ingeniero, la plataforma o el usuario.</p>
    </Accordion>

    <InfoCard type="idea" title="Conclusión final">
      <p>La ingeniería de prompts es la nueva alfabetización del siglo XXI. La evidencia empírica es clara: la aplicación sistemática de estos principios produce mejoras sustanciales y medibles. Quienes dominen esta disciplina estarán mejor posicionados para liderar la próxima revolución tecnológica.</p>
    </InfoCard>

    <h2 id="sec-modulo2-9" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">🤔 Preguntas de reflexión</h2>
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-300">
        <li>¿Cuál de las técnicas presentadas te parece más útil para tu trabajo diario?</li>
        <li>¿Cómo podrías aplicar la técnica de "Chain of Thought" para resolver un problema complejo actual?</li>
        <li>¿Por qué es importante tratar la optimización de prompts como un proceso científico y no como un arte?</li>
      </ul>
    </div>
  </div>
);
