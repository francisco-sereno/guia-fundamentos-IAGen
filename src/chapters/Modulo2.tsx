import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote, CopyButton } from '../components/Shared';
import { InteractivePromptPlayground, PROSEPARTEInteractiveTable } from '../components/InteractiveComponents';
import { Activity, Lightbulb, Rocket, TrendingUp, UserCheck, FileText, Target, LayoutList, ShieldAlert, Sparkles, BookOpen, GraduationCap, Brain, HelpCircle, Layers, CheckCircle2, ExternalLink } from 'lucide-react';

export const Modulo2Content = () => (
  <div className="prose-custom">
    <AuthorNote>
      En esta sección, veremos cómo dejar de tratar a la IA como un buscador y empezar a verla como un colaborador. La precisión en tus instrucciones es lo que permite que personas sin formación técnica logren resultados extraordinarios.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ingeniería de prompts: Fundamentos y aplicaciones en inteligencia artificial generativa</h1>
    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">El arte y la ciencia de la comunicación efectiva con modelos de lenguaje</p>

    <h2 id="sec-modulo2-0" className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">1. Introducción</h2>
    <p>La emergencia de modelos de lenguaje de gran escala ha transformado radicalmente el panorama tecnológico contemporáneo, estableciendo nuevos paradigmas en la interacción humano-computador. En este contexto, la <GlossaryTerm term="Ingeniería de prompts"><strong>ingeniería de prompts</strong></GlossaryTerm> ha evolucionado desde ser una curiosidad técnica hasta convertirse en una disciplina fundamental que determina la efectividad de nuestra comunicación con sistemas de inteligencia artificial generativa. Como señalan Schulhoff et al. (2024), "la ingeniería de prompts representa la interfaz crítica entre la intención humana y la capacidad computacional, definiendo no solo qué pueden hacer estos sistemas, sino qué harán efectivamente en la práctica" (p. 3).</p>

    <InfoCard type="idea" title="Idea clave">
      <p>La aplicación sistemática de técnicas de prompting puede mejorar la calidad de las respuestas de la IA hasta en un <strong>50%</strong> y la precisión en tareas específicas en un <strong>31%</strong>, convirtiéndose en una competencia profesional crítica para el <GlossaryTerm term="Docente de educación secundaria"><strong>docente de educación secundaria</strong></GlossaryTerm> (Brown et al., 2023).</p>
    </InfoCard>

    <p className="mt-6">La relevancia de esta disciplina trasciende el ámbito puramente técnico. Investigaciones recientes demuestran que el uso de metodologías estructuradas es vital en un contexto donde la inteligencia artificial generativa permea cada vez más aspectos de la actividad profesional y académica. El presente apunte examina los fundamentos teóricos y aplicaciones prácticas, proporcionando un marco comprehensivo para comprender y aplicar estas técnicas en diversos contextos.</p>

    <h2 id="sec-modulo2-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">2. Fundamentos teóricos</h2>
    
    <Accordion title="2.1 Definición y alcance">
      <InfoCard type="definicion" title="Definición clave">
        <p>La <GlossaryTerm term="Ingeniería de prompts"><strong>ingeniería de prompts</strong></GlossaryTerm> se define como el proceso sistemático de diseñar, estructurar y optimizar las instrucciones proporcionadas a modelos de lenguaje para obtener respuestas que sean precisas, relevantes y útiles para el propósito específico del usuario (Wei et al., 2023).</p>
      </InfoCard>
      <p className="mt-4 text-slate-700 dark:text-slate-300">Esta disciplina combina elementos de lingüística computacional, psicología cognitiva y diseño de interacción para establecer protocolos efectivos de comunicación. El alcance se extiende más allá de la simple formulación de preguntas; abarca la comprensión profunda de cómo los modelos procesan información, interpretan contexto y generan respuestas.</p>
      <InfoCard type="reflexion" title="Integración con los marcos DECIDE-IA y PotencIA">
        <p>En la práctica docente, estructurar prompts con este nivel de rigurosidad operativa permite responder directamente a los principios del <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm> (Definición clara de objetivos y evaluación continua de respuestas) y a los requerimientos del <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm> (Integración pedagógica responsable e intencionada en la educación secundaria).</p>
      </InfoCard>
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
          <p>Especificaciones sobre cómo debe estructurarse la respuesta (lista, tabla, <GlossaryTerm term="JSON">JSON</GlossaryTerm>, tono formal, longitud, etc.).</p>
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
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Claridad</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Instrucciones inequívocas que minimizan ambigüedad.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Usar verbos de acción específicos: "analiza", "compara".</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Especificidad</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Detalles concretos sobre qué, cómo y por qué.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">En lugar de "dame ideas", usar "genera 3 propuestas de valor".</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Contexto</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Información de fondo suficiente para orientar la respuesta.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Incluir información sobre audiencia y propósito.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold">Estructura</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Organización lógica de los elementos del prompt.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Contexto → tarea → especificaciones → formato.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Accordion>

    <h2 id="sec-modulo2-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">3. Estructura de un prompt</h2>
    <p className="mb-6">
      Un <strong>prompt bien estructurado</strong> se construye combinando de forma deliberada seis dimensiones clave. Esta estructura garantiza que la IA entienda no solo la instrucción en sí, sino el marco ético, situacional y cualitativo en el que debe operar:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs">1</span>
            <h3>ROL</h3>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Quién eres como evaluador o mentor</p>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
            "Eres un mentor de desarrollo profesional especializado en..."
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs">2</span>
            <h3>CONTEXTO</h3>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Situación, perfil y área profesional</p>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
              "SofIA es una profesional con experiencia docente transitando hacia tecnología educativa..."
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs">3</span>
            <h3>TAREA</h3>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Qué quieres que genere</p>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
            "Tu tarea es orientar a SofIA en la estructuración de proyectos..."
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs">4</span>
            <h3>FORMATO</h3>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Cómo debe presentarlo</p>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
            "Responde con 3 a 5 preguntas abiertas estructuradas en viñetas..."
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs">5</span>
            <h3>RESTRICCIONES</h3>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Límites, ética, autenticidad</p>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
            "NUNCA redactes respuestas directas ni inventes experiencia..."
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/80 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs">6</span>
            <h3>EJEMPLO</h3>
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Referente de interacción</p>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700">
            "Modelo de interacción ideal esperada..."
          </p>
        </div>
      </div>
    </div>

    <div className="bg-slate-100 dark:bg-slate-900/80 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 my-6">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-300">Ejemplo de prompt estructurado integrado:</h4>
        <CopyButton text={`[ROL]: Eres un coordinador de innovación especializado en tecnología educativa.\
[CONTEXTO]: SofIA es una profesional docente que busca destacar sus competencias transferibles para un rol en diseño instruccional.\
[TAREA]: Tu tarea es orientar a SofIA para identificar sus mayores logros pedagógicos y traducirlos en formato de impacto para proyectos EdTech.\
[FORMATO]: Responde con 3 a 5 preguntas abiertas orientadoras estructuradas en viñetas.\
[RESTRICCIONES]: NUNCA redactes las respuestas directas ni inventes experiencia; mantén un enfoque ético y orientativo.\
[EJEMPLO]: Modelo de interacción ideal: "¿Qué impacto cuantitativo o métrica de éxito lograste en tu implementación didáctica previa?"`} />
      </div>
      <pre className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 whitespace-pre-wrap font-mono leading-relaxed">
{`[ROL]: Eres un coordinador de innovación especializado en tecnología educativa.\
[CONTEXTO]: SofIA es una profesional docente que busca destacar sus competencias transferibles para un rol en diseño instruccional.\
[TAREA]: Tu tarea es orientar a SofIA para identificar sus mayores logros pedagógicos y traducirlos en formato de impacto para proyectos EdTech.\
[FORMATO]: Responde con 3 a 5 preguntas abiertas orientadoras estructuradas en viñetas.\
[RESTRICCIONES]: NUNCA redactes las respuestas directas ni inventes experiencia; mantén un enfoque ético y orientativo.\
[EJEMPLO]: Modelo de interacción ideal: "¿Qué impacto cuantitativo o métrica de éxito lograste en tu implementación didáctica previa?"`}
      </pre>
    </div>

    <InteractivePromptPlayground />

    <h2 id="sec-modulo2-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">4. Marcos y modelos pedagógicos de prompting</h2>
    <p className="mb-6">
      En el ámbito educativo e instruccional, han surgido marcos especializados de diseño de prompts que operacionalizan los principios pedagógicos, facilitando la creación de materiales, la evaluación formativa y el desarrollo profesional autónomo.
    </p>

    {/* MODELO PROSE */}
    <div className="my-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="p-2.5 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-xl border border-indigo-500/20">
          <BookOpen size={24} />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">Modelo PROSE</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Persona • Result • Objective • Scenario • Extras</p>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        El modelo <strong>PROSE</strong> es un marco de diseño de prompts que facilita la claridad en las instrucciones. Define la <strong>Persona (P)</strong> que asumirá la IA, el <strong>Resultado (R)</strong> esperado como entregable, el <strong>Objetivo (O)</strong> fundamental de la tarea, el <strong>Escenario (S)</strong> contextual, y los <strong>Extras (E)</strong> o restricciones adicionales de formato o exclusión. Es especialmente útil en entornos de orientación profesional y capacitación para asegurar que el contenido generado se ajuste al contexto del usuario y a las necesidades del orientador.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-6 text-center text-xs">
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/40">
          <strong className="block text-indigo-900 dark:text-indigo-300 font-bold mb-1">P - Persona</strong>
          <span className="text-slate-600 dark:text-slate-400">Rol o identidad asumida</span>
        </div>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/40">
          <strong className="block text-indigo-900 dark:text-indigo-300 font-bold mb-1">R - Result</strong>
          <span className="text-slate-600 dark:text-slate-400">Entregable esperado</span>
        </div>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/40">
          <strong className="block text-indigo-900 dark:text-indigo-300 font-bold mb-1">O - Objective</strong>
          <span className="text-slate-600 dark:text-slate-400">Propósito fundamental</span>
        </div>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/40">
          <strong className="block text-indigo-900 dark:text-indigo-300 font-bold mb-1">S - Scenario</strong>
          <span className="text-slate-600 dark:text-slate-400">Marco de situación</span>
        </div>
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/40 col-span-2 md:col-span-1">
          <strong className="block text-indigo-900 dark:text-indigo-300 font-bold mb-1">E - Extras</strong>
          <span className="text-slate-600 dark:text-slate-400">Formatos y límites</span>
        </div>
      </div>

      <Accordion title="Vínculo con la teoría" icon={BookOpen}>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          Este modelo se alinea con la <strong>taxonomía de Bloom</strong> al fomentar el pensamiento de orden superior como el análisis y la evaluación en la autoevaluación de competencias profesionales.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          Desde la perspectiva de <a href="https://www.unesco.org/es/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-0.5">UNESCO AI <ExternalLink size={12} /></a> y el <a href="https://ciudadaniadigital.mineduc.cl/wp-content/uploads/2025/03/PotencIA-el-aprendizaje-IA-en-educacion.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-0.5">Marco PotencIA <ExternalLink size={12} /></a>, facilita el aprendizaje a lo largo de la vida y el empoderamiento profesional al permitir diseñar interacciones estructuradas y éticas con la IA.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          La ética del <a href="https://sintaxis-ai.franciscosereno.cl/decide-ia" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-0.5">marco DECIDE-IA <ExternalLink size={12} /></a> se aborda al promover la <em>'Responsabilidad Profesional'</em> al requerir una formulación explícita del objetivo y las restricciones, garantizando que la IA apoye la preparación real de la docente sin generar perfiles sintéticos o falsos.
        </p>
      </Accordion>

      <Accordion title="Casos de uso" icon={Lightbulb}>
        <ul className="list-disc ml-5 space-y-3 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Diseño de planes de reconversión e innovación pedagógica (Caso SofIA):</strong> Un coordinador pedagógico formula un prompt PROSE para construir una hoja de ruta de aprendizaje adaptada al perfil pedagógico y metas de articulación estratégica en <GlossaryTerm term="EdTech"><strong>EdTech</strong></GlossaryTerm> de SofIA.
          </li>
          <li>
            <strong>Simulación de presentaciones de proyectos estructuradas:</strong> Definir la persona (evaluador técnico en EdTech), el resultado (evaluación cualitativa), el objetivo (medir competencias de <GlossaryTerm term="Diseño instruccional"><strong>diseño instruccional</strong></GlossaryTerm>) y el escenario (institución en transformación digital) con restricciones de formato.
          </li>
        </ul>
      </Accordion>

      <div className="mt-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">Ejemplo de prompt PROSE</span>
          <CopyButton text={`Como coordinador de innovación EdTech (P), elabora un portafolio de proyectos (R) orientado a demostrar competencias en el sector de tecnología educativa (O) para SofIA, una docente en transición hacia roles de diseño instruccional (S), estructurado en una lista Markdown con 5 acciones clave y sin jerga innecesaria (E).`} />
        </div>
        <p className="text-sm font-mono text-slate-800 dark:text-slate-200 italic">
          "Como coordinador de innovación EdTech (P), elabora un portafolio de proyectos (R) orientado a demostrar competencias en el sector de tecnología educativa (O) para SofIA, una docente en transición hacia roles de diseño instruccional (S), estructurado en una lista Markdown con 5 acciones clave y sin jerga innecesaria (E)."
        </p>
      </div>

      <Accordion title="Reflexión pedagógica" icon={HelpCircle}>
        <ul className="list-disc ml-5 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
          <li>
            En el contexto del acompañamiento profesional a personas en reconversión a EdTech como SofIA, ¿cómo ayuda la estructura PROSE a diagnosticar brechas de aprendizaje y estructurar la adquisición de competencias clave?
          </li>
          <li>
            ¿De qué manera la modulación dinámica de 'Persona' y 'Scenario' permite simular contextos educativos cambiantes para una evaluación formativa y reflexiva de las habilidades del participante?
          </li>
          <li>
            ¿Cómo puede integrarse el modelo PROSE en programas de mentoría profesional para que los y las docentes adquieran la capacidad autónoma de consultar e investigar el sector educativo mediante IA?
          </li>
        </ul>
      </Accordion>
    </div>

    {/* MODELO PARTE (GOOGLE) */}
    <div className="my-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="p-2.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-xl border border-amber-500/20">
          <GraduationCap size={24} />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-300">Modelo PARTE (Google)</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Persona • Aim • Recipient • Theme/Task • Expectations</p>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        El modelo <strong>PARTE (Persona, Aim, Recipient, Theme/Task, Expectations)</strong> es una metodología de diseño de prompts utilizada en capacitaciones oficiales de IA, como las de Google. A diferencia de otros marcos, enfatiza el <strong>'Recipient' (Destinatario)</strong>, forzando al modelo a adaptar su lenguaje y complejidad cognitiva a la persona específica. Las <strong>'Expectations'</strong> engloban formato, tono, longitud y restricciones.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mb-6 text-center text-xs">
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/40">
          <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-1">P - Persona</strong>
          <span className="text-slate-600 dark:text-slate-400">Rol o identidad</span>
        </div>
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/40">
          <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-1">A - Aim</strong>
          <span className="text-slate-600 dark:text-slate-400">Objetivo central</span>
        </div>
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/40">
          <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-1">R - Recipient</strong>
          <span className="text-slate-600 dark:text-slate-400">Destinatario clave</span>
        </div>
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/40">
          <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-1">T - Theme/Task</strong>
          <span className="text-slate-600 dark:text-slate-400">Tema o tarea</span>
        </div>
        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/40 col-span-2 md:col-span-1">
          <strong className="block text-amber-900 dark:text-amber-300 font-bold mb-1">E - Expectations</strong>
          <span className="text-slate-600 dark:text-slate-400">Expectativas finales</span>
        </div>
      </div>

      <Accordion title="Vínculo con la teoría" icon={BookOpen}>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          Este modelo se alinea con la <strong>taxonomía de Bloom</strong> al permitir ajustar el nivel cognitivo de las explicaciones o tareas según el grado de seniority y antecedentes del <em>Recipient</em> (destinatario).
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          Desde la perspectiva de <a href="https://www.unesco.org/es/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-0.5">UNESCO AI <ExternalLink size={12} /></a> y el marco <a href="https://ciudadaniadigital.mineduc.cl/wp-content/uploads/2025/03/PotencIA-el-aprendizaje-IA-en-educacion.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-0.5">PotencIA <ExternalLink size={12} /></a>, fomenta un aprendizaje adaptativo continuo que reduce las barreras de entrada a áreas técnicas.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          La <em>'Responsabilidad Profesional'</em> del <a href="https://sintaxis-ai.franciscosereno.cl/decide-ia" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-0.5">marco DECIDE-IA <ExternalLink size={12} /></a> se aborda al exigir una reflexión previa sobre el propósito y las expectativas del mensaje, asegurando que la información sea clara, veraz y comprensible.
        </p>
      </Accordion>

      <Accordion title="Casos de uso" icon={Lightbulb}>
        <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>Explicación adaptativa de requisitos del proyecto (Caso SofIA):</strong> Adaptar la descripción técnica de un rol de especialista en <GlossaryTerm term="Diseño instruccional"><strong>diseño instruccional</strong></GlossaryTerm> a las competencias pedagógicas previas de SofIA para facilitar su comprensión y articulación estratégica.</li>
          <li><strong>Retroalimentación de desempeño y simulación de feedback:</strong> Generar guías de desarrollo personalizables según el nivel de experiencia docente y las metas en <GlossaryTerm term="EdTech"><strong>EdTech</strong></GlossaryTerm>.</li>
          <li><strong>Microcapacitaciones en herramientas digitales:</strong> Crear resúmenes e instrucciones breves ajustadas al nivel de dominio de <GlossaryTerm term="IA generativa"><strong>IA generativa</strong></GlossaryTerm> de la profesional.</li>
        </ul>
      </Accordion>

      <div className="mt-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Ejemplo de prompt PARTE</span>
          <CopyButton text={`Actúa como consultor de tecnología educativa (P), explica las expectativas del rol de especialista en diseño instruccional (A) a SofIA, una profesional con experiencia docente en reconversión e innovación pedagógica (R), usando la analogía de la planificación de una secuencia didáctica (T), en menos de 150 palabras y con viñetas claras (E).`} />
        </div>
        <p className="text-sm font-mono text-slate-800 dark:text-slate-200 italic">
          "Actúa como consultor de tecnología educativa (P), explica las expectativas del rol de especialista en diseño instruccional (A) a SofIA, una profesional con experiencia docente en reconversión e innovación pedagógica (R), usando la analogía de la planificación de una secuencia didáctica (T), en menos de 150 palabras y con viñetas claras (E)."
        </p>
      </div>

      <Accordion title="Reflexión pedagógica" icon={HelpCircle}>
        <ul className="list-disc ml-5 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
          <li>
            ¿De qué manera la especificación explícita del <code className="text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">Recipient</code> (Destinatario) en el modelo PARTE evita la sobrecarga cognitiva en profesionales que aprenden nuevas herramientas digitales como SofIA?
          </li>
          <li>
            ¿Cómo puede un equipo de gestión de personas usar plantillas PARTE para estandarizar la evaluación formativa e intencionada del talento humano sin perder la personalización contextual?
          </li>
          <li>
            ¿De qué forma las <code className="text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">Expectations</code> pueden utilizarse para garantizar que la IA entregue retroalimentación constructiva que fomente la autonomía y autoconfianza del profesional?
          </li>
        </ul>
      </Accordion>
    </div>

    {/* TABLA COMPARATIVA INTERACTIVA PROSE Y PARTE */}
    <PROSEPARTEInteractiveTable />

    {/* SIMULACIÓN SOCRÁTICA */}
    <div className="my-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="p-2.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl border border-emerald-500/20">
          <Brain size={24} />
        </span>
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300">Simulación socrática</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Facilitación mediante preguntas guiadas y metacognición</p>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
        La <strong>Simulación socrática</strong> transforma al modelo de IAGen de un proveedor de respuestas a un facilitador de aprendizaje y coordinador pedagógico. Al instruir explícitamente que no revele respuestas ni redacte textos automáticos, sino que guíe mediante preguntas, se activa un modo de interacción que promueve la metacognición, el descubrimiento guiado y la autoevaluación sincera del propio perfil.
      </p>

      <Accordion title="Vínculo con la teoría" icon={BookOpen}>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          Esta metodología se alinea con la <strong>taxonomía de Bloom</strong> al enfocarse en niveles cognitivos superiores como el análisis, la evaluación y la creación, promoviendo el pensamiento crítico sobre la autogeneración pasiva de contenido.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          Desde la perspectiva de la <strong>UNESCO AI</strong> y el <strong>Marco PotencIA</strong>, representa un ejemplo de acompañamiento que utiliza la IA para enriquecer y personalizar la preparación profesional, centrándose en el desarrollo autónomo de habilidades.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          En términos de <em>'Ética DECIDE-IA: Responsabilidad Profesional'</em>, esta simulación garantiza que la IA no suplante la identidad ni invente información del perfil, sino que actúe como un facilitador ético que ayuda al usuario a encontrar y articular su propia experiencia auténtica.
        </p>
      </Accordion>

      <Accordion title="Casos de uso" icon={Lightbulb}>
        <ul className="list-disc ml-5 space-y-3 text-slate-700 dark:text-slate-300">
          <li>
            <strong>Descubrimiento de la propuesta de valor (Caso SofIA):</strong> Guiar a SofIA mediante preguntas clave para que identifique y redacte con sus propias palabras sus logros cuantificables y competencias diferenciadoras en la educación y el <GlossaryTerm term="Diseño instruccional"><strong>diseño instruccional</strong></GlossaryTerm>.
          </li>
          <li>
            <strong>Preparación para defensa de proyectos por competencias:</strong> Entrenar la argumentación y resolución metódica de dilemas o casos prácticos mediante cuestionamientos progresivos de la IA.
          </li>
          <li>
            <strong>Desarrollo de habilidades de pensamiento crítico en IA:</strong> Ayudar a profesionales a cuestionar los resultados de los modelos y perfeccionar sus propios prompts mediante diálogo socrático.
          </li>
        </ul>
      </Accordion>

      <div className="mt-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Ejemplo de prompt socrático</span>
          <CopyButton text={`Actúa como un mentor pedagógico. No me des respuestas directas ni me redactes el perfil. Hazme preguntas reflexivas, una a una, que me ayuden a identificar mis competencias clave y logros cuantificables para mi portafolio.`} />
        </div>
        <p className="text-sm font-mono text-slate-800 dark:text-slate-200 italic">
          "Actúa como un mentor pedagógico. No me des respuestas directas ni me redactes el perfil. Hazme preguntas reflexivas, una a una, que me ayuden a identificar mis competencias clave y logros cuantificables para mi portafolio."
        </p>
      </div>

      <Accordion title="Reflexión pedagógica" icon={HelpCircle}>
        <ul className="list-disc ml-5 space-y-4 text-slate-700 dark:text-slate-300 text-sm">
          <li>
            ¿Cómo asegura la simulación socrática que profesionales como SofIA mantengan la autenticidad y propiedad intelectual de su perfil profesional, evitando la dependencia ciega de la IA?
          </li>
          <li>
            ¿Qué indicadores formativos permiten medir el avance en el pensamiento crítico y la capacidad de autoevaluación del profesional durante una interacción socrática con la IA?
          </li>
          <li>
            ¿Cómo adaptar el diseño instruccional socrático para evitar la frustración del usuario y asegurar que el proceso guíe eficazmente hacia aprendizajes significativos en el ámbito profesional?
          </li>
        </ul>
      </Accordion>
    </div>

    <h2 id="sec-modulo2-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">5. Técnicas avanzadas</h2>
    
    <Accordion title="5.1 Chain-of-thought (CoT) prompting">
      <InfoCard type="definicion" title="Razonamiento paso a paso">
        <p>Solicita explícitamente al modelo que muestre su razonamiento antes de llegar a una conclusión. Mejora dramáticamente el rendimiento en tareas lógicas y matemáticas.</p>
      </InfoCard>
      <div className="bg-slate-100 dark:bg-slate-900/80 p-4 rounded-lg border-l-4 border-emerald-500 mt-4">
        <p className="italic text-slate-700 dark:text-slate-300">"¿Este profesional es adecuado para un rol senior? Analiza paso a paso considerando: (1) experiencia, (2) competencias técnicas, (3) liderazgo. Luego, proporciona una recomendación."</p>
      </div>
    </Accordion>

    <Accordion title="5.2 Few-shot learning y demostración por ejemplos">
      <InfoCard type="definicion" title="Aprendizaje con pocos ejemplos">
        <p>Proporcionar al modelo algunos ejemplos de la tarea deseada antes de solicitar que realice una instancia nueva. Permite "enseñar" mediante demostración.</p>
      </InfoCard>
      <div className="bg-slate-100 dark:bg-slate-900/80 p-4 rounded-lg border-l-4 border-blue-500 mt-4 text-sm text-slate-700 dark:text-slate-300">
        <p><strong>Ejemplo 1:</strong> Input: "He usado Python para scripts básicos." &rarr; Output: Nivel: Básico</p>
        <p><strong>Ejemplo 2:</strong> Input: "Desarrollo apps web con Django." &rarr; Output: Nivel: Avanzado</p>
      </div>
    </Accordion>

    <Accordion title="5.3 Role prompting y asignación de perspectivas">
      <InfoCard type="definicion" title="Asignación de roles">
        <p>Instruir al modelo para que adopte una personalidad o pericia específica. Ayuda a ajustar el tono, el vocabulario y el enfoque de la respuesta.</p>
      </InfoCard>
      <p className="mt-4 italic text-slate-600 dark:text-slate-400">"Actúa como un experto en reclutamiento de startups tecnológicas..."</p>
    </Accordion>

    <Accordion title="5.4 Tree of thoughts (ToT) y exploración sistemática">
      <InfoCard type="definicion" title="Exploración deliberada">
        <p>Permite explorar múltiples rutas de razonamiento simultáneamente, evaluando cada rama y retrocediendo si un camino no es prometedor.</p>
      </InfoCard>
    </Accordion>

    <h2 id="sec-modulo2-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">6. Diferencias entre modelos principales</h2>
    <InfoCard type="idea" title="Idea clave">
      <p>No existe un "mejor" modelo universal. La elección correcta depende de la tarea específica.</p>
    </InfoCard>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">OpenAI GPT-4.x</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">Requiere seguimiento literal. Ideal para generación de código, instrucciones complejas y contextos largos. El "prompting agéntico" es esencial aquí.</p>
      </div>
      <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Google Gemini</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">Multimodal nativo. Mayor flexibilidad en la interpretación y rendimiento superior en <em>few-shot learning</em>. Ventajas únicas por su integración con el ecosistema Google.</p>
      </div>
      <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Anthropic Claude</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300">Optimizado para formatos estructurados (XML). Excelente para análisis de documentos largos y mantenimiento de contexto en conversaciones extensas.</p>
      </div>
    </div>

    <h2 id="sec-modulo2-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">7. Metodologías de optimización</h2>
    <InfoCard type="idea" title="El ciclo de optimización">
      <p>La optimización de prompts es un proceso científico de 5 pasos: 1) Fijar línea base, 2) Identificar fallos, 3) Aplicar mejoras, 4) Probar, y 5) Validar.</p>
    </InfoCard>
    <p className="mt-4">La evaluación objetiva es crucial, usando métricas cuantitativas (relevancia semántica) y cualitativas. Herramientas como <strong>Promptfoo</strong> permiten automatizar este proceso con el mismo rigor que el código de software.</p>

    <h2 id="sec-modulo2-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">8. Conexión práctica: El mega-prompt</h2>
    <p>El "mega-prompt" no es solo un ejemplo, sino un modelo de cómo construir herramientas de análisis complejas. Al integrar múltiples técnicas (rol, CoT, ToT, few-shot) en un solo prompt, se crea un "agente" especializado.</p>
    <div className="bg-slate-100 dark:bg-slate-900/80 p-6 rounded-xl border border-indigo-200 dark:border-indigo-500/30 mt-4">
      <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Ejemplo de estructura de mega-prompt:</h4>
      <pre className="text-xs text-slate-700 dark:text-slate-400 whitespace-pre-wrap font-mono">
        {`[ROL]: Actúa como un consultor senior de estrategia empresarial...
[CONTEXTO]: Estoy planificando un emprendimiento de [X] en el mercado de [Y]...
[TAREA]: Realiza un análisis DAFO detallado y una proyección de 3 escenarios...
[PROCESO]: Piensa paso a paso (Chain-of-Thought). Explora 3 rutas críticas (Tree of Thoughts)...
[FORMATO]: Entrega un informe estructurado en Markdown con tablas comparativas...`}
      </pre>
    </div>

    <h2 id="sec-modulo2-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">9. Aplicaciones prácticas y casos de estudio</h2>
    <div className="space-y-4 mt-6">
      <Accordion title="Marketing digital" icon={TrendingUp}>
        <p>Una empresa de e-commerce logró incrementar clics en 40% y conversión en 25% usando prompts optimizados para personalización basados en historial de compras y datos demográficos.</p>
      </Accordion>
      <Accordion title="Salud" icon={Activity}>
        <p>El sistema <strong>Medprompt</strong> de Microsoft logra rendimiento comparable a médicos especialistas combinando selección dinámica de ejemplos y cadenas de pensamiento auto-generadas.</p>
      </Accordion>
      <Accordion title="Educación" icon={GraduationCap}>
        <p>Estudios en Chile mostraron mejoras del 32% en comprensión al usar prompts para generar material adaptado a contextos vocacionales específicos.</p>
      </Accordion>
    </div>

    <h2 id="sec-modulo2-9" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">10. Herramientas y ecosistema tecnológico</h2>
    <p>El ecosistema ha madurado ofreciendo soluciones robustas:</p>
    <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300 mt-4">
      <li><strong>PromptLayer:</strong> Gestión visual de prompts.</li>
      <li><strong>LangSmith:</strong> Depuración técnica y trazabilidad.</li>
      <li><strong>Vertex AI Prompt Optimizer:</strong> Optimización automatizada de Google.</li>
      <li><strong>Promptfoo:</strong> Estándar para pruebas rigurosas y evaluación.</li>
    </ul>

    <h2 id="sec-modulo2-10" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">11. Perspectivas futuras y conclusiones</h2>
    <Accordion title="Tendencias emergentes" icon={Rocket}>
      <p>La automatización inteligente y la <strong>multimodalidad nativa</strong> (pionerizada por Gemini) están redefiniendo el prompt. La capacidad de combinar texto, imagen, audio y video en una única instrucción abre posibilidades infinitas.</p>
      <InfoCard type="definicion" title="Multimodalidad nativa">
        <p>Capacidad de procesar y generar contenido combinando diferentes formatos de forma nativa dentro de un único prompt y respuesta.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="Consideraciones éticas y responsabilidad" icon={ShieldAlert}>
      <p>La capacidad de influir en las salidas de la IA requiere responsabilidad. Debemos evitar la amplificación de sesgos y asegurar transparencia. La "Ética del Prompt" debate si la responsabilidad recae en el ingeniero, la plataforma o el usuario.</p>
    </Accordion>

    <InfoCard type="idea" title="Conclusión final">
      <p>La ingeniería de prompts es la nueva alfabetización del siglo XXI. La evidencia empírica es clara: la aplicación sistemática de estos principios produce mejoras sustanciales y medibles. Quienes dominen esta disciplina estarán mejor posicionados para liderar la próxima revolución tecnológica.</p>
    </InfoCard>

    <h2 id="sec-modulo2-11" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2"><HelpCircle size={24} /> Preguntas de reflexión</h2>
    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
        <li>¿Cuál de las técnicas presentadas te parece más útil para tu trabajo diario?</li>
        <li>¿Cómo podrías aplicar la técnica de "Chain of Thought" para resolver un problema complejo actual?</li>
        <li>¿Por qué es importante tratar la optimización de prompts como un proceso científico y no como un arte?</li>
      </ul>
    </div>
  </div>
);
