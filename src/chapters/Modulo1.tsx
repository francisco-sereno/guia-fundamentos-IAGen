import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';
import { PEASInteractiveExplorer, CompetenceMappingCard } from '../components/InteractiveComponents';
import { Bot, Sparkles, XCircle, Settings, Target, PenTool, Globe, HelpCircle, Box, UserCheck, Search, AlertTriangle, Layers, BookOpen, Eye, Zap, Wrench, FileText, Palette, Key, BarChart2, CheckCircle2 } from 'lucide-react';

export const Modulo1Content = () => (
  <div className="prose-custom">
    <AuthorNote>
      Esta guía nace para desmitificar la IA y acercarla a personas que, como SofIA, buscan herramientas prácticas para potenciar su camino sin necesidad de ser expertos técnicos. El caso de SofIA nos servirá de hilo conductor para entender cómo la tecnología se aplica a desafíos reales.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Fundamentos de la IA generativa</h1>
    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">El caso de SofIA: docente de educación secundaria y el diagnóstico de competencias</p>

    <h2 id="sec-modulo1-0" className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">Introducción: el caso de SofIA</h2>
    <p>La <GlossaryTerm term="IA generativa"><strong>inteligencia artificial generativa</strong></GlossaryTerm> representa una de las transformaciones tecnológicas más significativas de nuestra era. Esta guía explora sus fundamentos conceptuales, funcionamiento técnico y aplicaciones prácticas, utilizando como eje articulador el caso de <strong>SofIA</strong>: una <GlossaryTerm term="Docente de educación secundaria"><strong>docente de educación secundaria</strong></GlossaryTerm> que utiliza herramientas de IA generativa para realizar su propio diagnóstico de competencias pedagógicas y optimizar su proceso de articulación e innovación profesional en el sector de <GlossaryTerm term="EdTech"><strong>tecnología educativa (EdTech)</strong></GlossaryTerm> y <GlossaryTerm term="Diseño instruccional"><strong>diseño instruccional</strong></GlossaryTerm>.</p>

    <InfoCard type="idea" title="Idea central">
      <p>La IA generativa no es magia, ni debe reemplazar el pensamiento crítico del docente. Es una <strong>herramienta de amplificación pedagógica</strong> que, utilizada con comprensión conceptual y <GlossaryTerm term="Prompt">prompts</GlossaryTerm> efectivos en consonancia con el <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm> y el <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm>, puede democratizar el acceso a capacidades que antes estaban reservadas para consultores especializados.</p>
    </InfoCard>

    <h2 id="sec-modulo1-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">¿Qué es la inteligencia artificial?</h2>
    <p>La inteligencia artificial (IA) es la ciencia y la ingeniería de crear máquinas inteligentes. A pesar de su impacto, no existe una sola definición. Históricamente, la investigación se ha dividido en torno a dos preguntas fundamentales: ¿El objetivo es el pensamiento interno o el comportamiento externo? ¿Nos enfocamos en la fidelidad humana o en la racionalidad?</p>
    
    <Accordion title="Los cuatro enfoques para definir la inteligencia" icon={BookOpen}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300 mb-2">Pensar como humanos</h4>
          <p className="text-sm text-slate-300"><strong>Modelado cognitivo:</strong> Construir programas que piensen como humanos, comparando los pasos del razonamiento del programa con los de sujetos humanos.</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300 mb-2">Pensar racionalmente</h4>
          <p className="text-sm text-slate-300"><strong>Leyes del pensamiento:</strong> Basado en la lógica y el razonamiento irrefutable (silogismos de Aristóteles). Intentar codificar el "pensamiento correcto".</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300 mb-2">Actuar como humanos</h4>
          <p className="text-sm text-slate-300"><strong>Prueba de Turing:</strong> Crear una máquina que sea indistinguible de un ser humano a través de respuestas escritas.</p>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h4 className="font-bold text-indigo-300 mb-2">Actuar racionalmente</h4>
          <p className="text-sm text-slate-300"><strong>Agente racional:</strong> Diseñar agentes que actúan para lograr el mejor resultado esperado. Es el modelo estándar actual de la IA.</p>
        </div>
      </div>
    </Accordion>

    <h2 id="sec-modulo1-2" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-24">La trayectoria de la IA: Ciclos de entusiasmo y realidad</h2>
    <p className="mb-8 text-slate-700 dark:text-slate-300">La historia de la IA no es una línea recta, sino una serie de ciclos de éxito seguidos por crisis de financiamiento (inviernos de la IA).</p>
    
    <div className="relative border-l-[3px] border-indigo-200 dark:border-indigo-500/30 ml-4 md:ml-6 space-y-10 pb-8">
      {/* Event 1 */}
      <div className="relative pl-8 md:pl-10 group">
        <div className="absolute w-5 h-5 bg-indigo-500 rounded-full -left-[11px] top-1 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        <h4 className="font-bold text-lg text-indigo-800 dark:text-indigo-300 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
          Gestación 
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 w-fit">1943-1956</span>
        </h4>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-white/5 shadow-sm group-hover:shadow-md transition-all">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">McCulloch y Pitts proponen neuronas artificiales. Turing introduce la Prueba de Turing. El término "inteligencia artificial" nace en el Taller de Dartmouth (1956).</p>
        </div>
      </div>

      {/* Event 2 */}
      <div className="relative pl-8 md:pl-10 group">
        <div className="absolute w-5 h-5 bg-indigo-500 rounded-full -left-[11px] top-1 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        <h4 className="font-bold text-lg text-indigo-800 dark:text-indigo-300 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
          Gran entusiasmo 
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 w-fit">1952-1969</span>
        </h4>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-white/5 shadow-sm group-hover:shadow-md transition-all">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">Programas de damas que aprenden. Micromundos (mundo de los bloques) permiten avances en visión y planificación.</p>
        </div>
      </div>

      {/* Event 3 (Winter) */}
      <div className="relative pl-8 md:pl-10 group">
        <div className="absolute w-5 h-5 bg-rose-500 rounded-full -left-[11px] top-1 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 group-hover:bg-rose-600 transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
        <h4 className="font-bold text-lg text-rose-700 dark:text-rose-400 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
          Dosis de realidad / 1er invierno 
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 w-fit">1966-1973</span>
        </h4>
        <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-sm border border-rose-200/50 dark:border-rose-900/30 shadow-sm group-hover:shadow-md transition-all">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">Explosión combinatoria: los sistemas fallan al escalar. El informe Lighthill corta el financiamiento.</p>
        </div>
      </div>

      {/* Event 4 */}
      <div className="relative pl-8 md:pl-10 group">
        <div className="absolute w-5 h-5 bg-indigo-500 rounded-full -left-[11px] top-1 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        <h4 className="font-bold text-lg text-indigo-800 dark:text-indigo-300 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
          Sistemas expertos 
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 w-fit">1969-1986</span>
        </h4>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-white/5 shadow-sm group-hover:shadow-md transition-all">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">Cambio de paradigma: conocimiento poderoso y específico del dominio (DENDRAL, MYCIN).</p>
        </div>
      </div>

      {/* Event 5 */}
      <div className="relative pl-8 md:pl-10 group">
        <div className="absolute w-5 h-5 bg-indigo-500 rounded-full -left-[11px] top-1 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
        <h4 className="font-bold text-lg text-indigo-800 dark:text-indigo-300 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
          Redes neuronales y Big Data 
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 w-fit">1986-presente</span>
        </h4>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-white/5 shadow-sm group-hover:shadow-md transition-all">
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed m-0">Reinvención del back-propagation. El auge de la web y el poder computacional crean el Deep Learning moderno (ImageNet 2012).</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24">Tipos y componentes de la IA</h2>
    
    <Accordion title="Tipos de inteligencia artificial" icon={Layers}>
      <p className="mb-4">La inteligencia artificial se clasifica generalmente en tres categorías principales según sus capacidades y nivel de desarrollo:</p>
      <div className="space-y-4">
        <InfoCard type="definicion" title="1. IA estrecha o débil (Narrow AI)">
          <p>Es la IA que existe hoy en día. Está diseñada y entrenada para realizar una tarea específica o un conjunto limitado de tareas (ej. reconocimiento facial, asistentes de voz, recomendaciones de productos). Aunque puede parecer muy inteligente, opera bajo un conjunto estricto de restricciones y limitaciones.</p>
        </InfoCard>
        <InfoCard type="definicion" title="2. IA general o fuerte (AGI)">
          <p>Es una forma teórica de IA que tendría una inteligencia equivalente a la humana. Podría comprender, aprender y aplicar conocimientos en diferentes dominios para resolver problemas complejos, de manera similar a como lo hace un ser humano. Aún no existe.</p>
        </InfoCard>
        <InfoCard type="definicion" title="3. Superinteligencia artificial (ASI)">
          <p>Es un concepto hipotético donde la IA superaría la inteligencia y capacidad humana en todos los aspectos, desde la creatividad hasta la resolución de problemas generales y las habilidades sociales.</p>
        </InfoCard>
      </div>
    </Accordion>

    <Accordion title="Componentes y disciplinas de la IA" icon={Settings}>
      <p className="mb-4">La IA es un campo amplio que abarca múltiples subdisciplinas y tecnologías:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200">
              <th className="p-3 border border-slate-200 dark:border-slate-700">Disciplina</th>
              <th className="p-3 border border-slate-200 dark:border-slate-700">Descripción</th>
              <th className="p-3 border border-slate-200 dark:border-slate-700">Ejemplos de uso</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold text-indigo-800 dark:text-indigo-300">Machine learning (ML)</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Permite a los sistemas aprender y mejorar a partir de la experiencia sin ser programados explícitamente.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Sistemas de recomendación, detección de fraudes.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold text-indigo-800 dark:text-indigo-300">Deep learning (DL)</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Subconjunto del ML basado en redes neuronales artificiales con múltiples capas (profundas) para modelar abstracciones complejas.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Reconocimiento de voz avanzado, conducción autónoma.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold text-indigo-800 dark:text-indigo-300">Procesamiento de Lenguaje Natural (NLP)</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Permite a las computadoras entender, interpretar y manipular el lenguaje humano.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Chatbots, traducción automática, análisis de sentimientos.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-200 dark:border-slate-700 font-bold text-indigo-800 dark:text-indigo-300">Visión por Computadora</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Permite a las máquinas extraer información significativa de imágenes digitales, videos y otras entradas visuales.</td>
              <td className="p-3 border border-slate-200 dark:border-slate-700">Análisis de imágenes médicas, control de calidad en manufactura.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Accordion>

    <h2 id="sec-modulo1-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Bot size={24} /> Modelos y agentes de IA
    </h2>
    
    <Accordion title="¿Qué es un modelo de IA?" icon={Box}>
      <p>Un <strong>modelo de IA</strong> es un programa que ha sido entrenado con un conjunto de datos para reconocer determinados patrones o tomar decisiones sin más intervención humana. Aplican diferentes algoritmos a las entradas de datos para lograr las salidas para las que han sido programados.</p>
      <InfoCard type="definicion" title="Algoritmos vs. modelos">
        <p>Los <strong>algoritmos</strong> son procedimientos lógicos o matemáticos que se aplican a un conjunto de datos. Los <strong>modelos</strong> son el resultado (output) de un algoritmo que se ha aplicado a un conjunto de datos. En términos sencillos, un modelo de IA se utiliza para hacer predicciones o tomar decisiones y un algoritmo es la lógica con la que funciona ese modelo.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="¿Qué son los agentes de IA?" icon={UserCheck}>
      <p>Un <strong>agente de IA</strong> es cualquier entidad capaz de percibir su entorno a través de sensores y actuar sobre ese entorno mediante actuadores para alcanzar objetivos específicos.</p>
      
      <div className="mt-6">
        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">El marco PEAS: especificación del entorno de tarea</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">La arquitectura subyacente y la evaluación de cualquier agente inteligente se diseña mediante el marco conceptual PEAS, que define los cuatro pilares inexorables de su operatividad:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <p className="text-slate-800 dark:text-slate-200"><strong>[P]erformance (Rendimiento):</strong> Define el criterio de éxito del agente computacional. Es la métrica cualitativa o cuantitativa de su capacidad para alcanzar un objetivo (ej. satisfacción del usuario, seguridad).</p>
          </div>
          <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <p className="text-slate-800 dark:text-slate-200"><strong>[E]nvironment (Entorno):</strong> El espacio operativo en el que el agente existe y toma decisiones, ya sea digital (una base de datos) o físico (una habitación).</p>
          </div>
          <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <p className="text-slate-800 dark:text-slate-200"><strong>[A]ctuators (Actuadores):</strong> Los mecanismos de salida mediante los cuales el agente interviene en su entorno (ej. motores en un robot, altavoces o llamadas a API en un asistente).</p>
          </div>
          <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <p className="text-slate-800 dark:text-slate-200"><strong>[S]ensors (Sensores):</strong> Las entradas de datos cruciales que capturan la información del mundo exterior para alimentar el estado interno del agente (ej. cámaras, reconocimiento de voz).</p>
          </div>
        </div>
        
        {/* Interactive PEAS Explorer */}
        <PEASInteractiveExplorer />
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">Dimensiones del entorno</h4>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Observabilidad:</strong> Totalmente observable (Ajedrez) vs. Parcialmente observable (Conducción, Póker).</li>
          <li><strong>Dinamismo:</strong> Estático (Crucigramas) vs. Dinámico (Taxi).</li>
          <li><strong>Causalidad:</strong> Determinista (Ajedrez) vs. Estocástico (Taxi: fallas, tráfico).</li>
          <li><strong>Tiempo:</strong> Episódico (Clasificar imágenes) vs. Secuencial (Ajedrez, Taxi).</li>
          <li><strong>Interacción:</strong> Agente único (Crucigrama) vs. Multiagente (Tráfico, Ajedrez).</li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">Evolución de los agentes (de simple a complejo)</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">La sofisticación de la inteligencia artificial no es uniforme; los agentes se clasifican en una jerarquía evolutiva estricta basada en su capacidad de procesamiento lógico, uso de la memoria y razonamiento prospectivo.</p>
        <div className="space-y-4">
          <InfoCard type="definicion" title="1. Agentes de reflejos simples">
            <p>Operan bajo strictly reglas predefinidas de "condición-acción". Dependen únicamente de la percepción actual, ignorando el historial de datos. <em>Nivel de inteligencia: Limitada/Baja.</em></p>
          </InfoCard>
          <InfoCard type="definicion" title="2. Agentes reactivos basados en modelos">
            <p>Poseen y mantienen un modelo interno del mundo. Consideran el historial de interacciones pasadas para entender las partes del entorno que sus sensores no pueden observar directamente en el momento actual. <em>Nivel de inteligencia: Media.</em></p>
          </InfoCard>
          <InfoCard type="definicion" title="3. Agentes basados en objetivos (metas)">
            <p>Razonan de manera proyectiva. Simulan futuros posibles y comparan diferentes enfoques y secuencias de acciones para elegir el camino más eficiente hacia una meta futura específica. <em>Nivel de inteligencia: Alta.</em></p>
          </InfoCard>
          <InfoCard type="definicion" title="4. Agentes basados en utilidad">
            <p>Evalúan estados futuros mediante una función matemática de "utilidad" (felicidad o eficiencia). Cuando existen múltiples metas en conflicto, eligen la que maximiza el rendimiento global del sistema. <em>Nivel de inteligencia: Muy Alta.</em></p>
          </InfoCard>
          <InfoCard type="definicion" title="5. Agentes de aprendizaje continuo">
            <p>Modifican su propia arquitectura y reglas internas con el tiempo. Observan los resultados de sus acciones pasadas y utilizan retroalimentación para perfeccionar su desempeño, logrando tareas que no fueron explícitamente programadas. <em>Nivel de inteligencia: Evolutiva.</em></p>
          </InfoCard>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">Representación del conocimiento y razonamiento ontológico</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">Para que un sistema posea verdadera pericia, debe ser capaz de interiorizar, organizar y razonar sobre la información estructuradamente. La Representación del Conocimiento busca describir el mundo de manera formal, detallando explícitamente los hechos, objetos, conceptos y las interrelaciones jerárquicas que los conectan.</p>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <p><strong>Ontologías computacionales:</strong> Funcionan como el sistema central de archivo enciclopédico de la máquina, erradicando la ambigüedad lingüística. Se dividen en <em>Ontologías de dominio</em> (específicas de un campo temático) y <em>Ontologías generales</em> (conceptos filosóficos de alto nivel).</p>
          <p><strong>El motor de inferencia:</strong> Actúa como el cerebro calculador dentro del sistema de representación. Al igual que un detective policial resolviendo un crimen, recolecta pistas (datos de entrada) y las contrasta contra un extenso archivo (la base de conocimientos y la ontología formal) utilizando métodos rigurosos de la lógica matemática para generar deducciones.</p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">Ejemplos prácticos de agentes de IA en acción</h4>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">A continuación, se presentan tres ejemplos concretos de cómo los agentes de IA operan en diferentes escenarios, detallando su entorno, objetivo, actuadores y sensores (PEAS):</p>
        <div className="space-y-4">
          <InfoCard type="ejemplo" title="1. Agente de productividad personal">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Objetivo (Rendimiento):</strong> Maximizar el tiempo libre del usuario, minimizar conflictos de agenda y asegurar respuestas oportunas a correos importantes.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Entorno:</strong> Calendario digital, bandeja de entrada de correo electrónico, lista de contactos y preferencias del usuario.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Actuadores:</strong> Crear/modificar eventos en el calendario, redactar y enviar correos electrónicos, establecer recordatorios.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Sensores:</strong> Nuevos correos entrantes, invitaciones a reuniones, cambios en la disponibilidad del usuario.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300"><strong>Razonamiento:</strong> Al recibir una invitación, el agente verifica la disponibilidad en el calendario. Si hay conflicto, sugiere horarios alternativos basados en las preferencias del usuario. Si es un correo urgente, redacta un borrador de respuesta y notifica al usuario.</p>
          </InfoCard>
          <InfoCard type="ejemplo" title="2. Agente de servicio al cliente">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Objetivo (Rendimiento):</strong> Resolver consultas de clientes rápidamente, mantener alta satisfacción del cliente y reducir la carga de trabajo de los agentes humanos.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Entorno:</strong> Plataforma de chat en vivo del sitio web, base de datos de conocimientos de la empresa, historial de pedidos del cliente.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Actuadores:</strong> Enviar mensajes de texto en el chat, proporcionar enlaces a artículos de ayuda, escalar el ticket a un humano si es necesario.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Sensores:</strong> Mensajes de texto del cliente, clics en opciones del menú del chat, información de la cuenta del usuario conectado.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300"><strong>Razonamiento:</strong> Analiza el mensaje del cliente para identificar la intención (ej. "dónde está mi pedido"). Consulta la base de datos con el número de pedido del cliente y formula una respuesta con el estado actual. Si la consulta es compleja, transfiere el contexto a un agente humano.</p>
          </InfoCard>
          <InfoCard type="ejemplo" title="3. Agente de análisis de datos">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Objetivo (Rendimiento):</strong> Proporcionar insights precisos y accionables, generar informes a tiempo y detectar anomalías en los datos.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Entorno:</strong> Bases de datos de la empresa (SQL, NoSQL), herramientas de visualización, repositorios de archivos (CSV, Excel).</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Actuadores:</strong> Ejecutar consultas de bases de datos, generar gráficos y tablas, enviar informes por correo electrónico o Slack.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Sensores:</strong> Actualizaciones en las bases de datos, solicitudes de informes de los usuarios, alertas de umbrales predefinidos.</p>
            <p className="text-sm text-slate-700 dark:text-slate-300"><strong>Razonamiento:</strong> Monitorea continuamente las métricas clave. Si detecta una caída inusual en las ventas, ejecuta consultas para identificar la causa raíz (ej. por región o producto). Genera un informe visual con los hallazgos y alerta al equipo correspondiente.</p>
          </InfoCard>
        </div>
      </div>
    </Accordion>

    <h2 id="sec-modulo1-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Sparkles size={24} /> ¿Qué es la inteligencia artificial generativa?
    </h2>
    
    <InfoCard type="definicion" title="Definición">
      <p>La <GlossaryTerm term="IA generativa">IA generativa</GlossaryTerm> es una rama de la inteligencia artificial que tiene la capacidad de <strong>crear contenido original y novedoso</strong> —como textos, imágenes, audio o código— a partir de patrones aprendidos de grandes cantidades de datos.</p>
    </InfoCard>

    <Accordion title="Características clave de la IA generativa" icon={Search}>
      <ul className="space-y-3">
          <li><strong>Creatividad algorítmica:</strong> No replica, sino que genera contenido nuevo basándose en patrones aprendidos</li>
          <li><strong>Adaptabilidad contextual:</strong> Ajusta sus respuestas según el contexto y las instrucciones recibidas</li>
          <li><strong>Escalabilidad:</strong> Puede procesar y generar grandes volúmenes de contenido en poco tiempo</li>
          <li><strong><GlossaryTerm term="Multimodalidad">Multimodalidad</GlossaryTerm>:</strong> Algunas versiones pueden trabajar con múltiples tipos de datos simultáneamente (texto, imagen, audio)</li>
      </ul>
    </Accordion>

    <Accordion title="Limitaciones importantes" icon={AlertTriangle}>
      <InfoCard type="conexion" title="Lo que la IA generativa NO hace:">
        <ul className="space-y-2">
            <li>No comprende el significado real de lo que genera</li>
            <li>No tiene conciencia ni intencionalidad</li>
            <li>No puede verificar la veracidad de sus propias respuestas</li>
            <li>No tiene juicio ético autónomo</li>
            <li>Puede generar <GlossaryTerm term="Alucinaciones">alucinaciones</GlossaryTerm> (información falsa presentada con confianza)</li>
        </ul>
      </InfoCard>
      <InfoCard type="reflexion" title="Relación con los marcos DECIDE-IA y PotencIA">
        <p>Reconocer estas limitaciones es indispensable para aplicar el <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm> (Evaluación crítica de impactos y verificación de fuentes) y el <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm> (Supervisión docente activa e integración ética en la educación secundaria).</p>
      </InfoCard>
    </Accordion>

    <h2 id="sec-modulo1-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <XCircle size={24} /> Mitos de la IA
    </h2>
    
    <div className="space-y-4">
      <Accordion title="Mito 1: la IA es 100% objetiva y neutral" icon={AlertTriangle}>
        <p><strong>Realidad:</strong> Los modelos de IA aprenden de datos generados por humanos, los cuales contienen <GlossaryTerm term="Sesgos"><strong>sesgos</strong></GlossaryTerm> históricos y culturales. Si no se auditan mediante el <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm>, los sistemas pueden perpetuar inequidades.</p>
      </Accordion>
      <Accordion title="Mito 2: la IA reemplazará todos los trabajos humanos" icon={AlertTriangle}>
        <p><strong>Realidad:</strong> Si bien la IA automatizará ciertas tareas, potencia el rol del <GlossaryTerm term="Docente de educación secundaria"><strong>docente de educación secundaria</strong></GlossaryTerm> como copiloto pedagógico según el <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm>.</p>
      </Accordion>
      <Accordion title="Mito 3: la IA tiene conciencia y entiende lo que dice" icon={AlertTriangle}>
        <p><strong>Realidad:</strong> Los modelos como los <GlossaryTerm term="LLM"><strong>LLM</strong></GlossaryTerm> son motores estadísticos avanzados que predicen la siguiente palabra basándose en patrones. No tienen comprensión real, empatía, ni conciencia de sí mismos.</p>
      </Accordion>
      <Accordion title="Mito 4: la IA es una caja mágica infalible" icon={AlertTriangle}>
        <p><strong>Realidad:</strong> La IA comete errores, sufre de <GlossaryTerm term="Alucinaciones"><strong>alucinaciones</strong></GlossaryTerm> y depende de la calidad de sus datos e instrucciones (<GlossaryTerm term="Prompt"><strong>prompts</strong></GlossaryTerm>).</p>
      </Accordion>
      <Accordion title="Mito 5: la IA creará una singularidad tecnológica incontrolable" icon={AlertTriangle}>
        <p><strong>Realidad:</strong> La <GlossaryTerm term="Singularidad"><strong>singularidad</strong></GlossaryTerm> es una hipótesis teórica. El desarrollo de la IA en educación debe guiarse por los marcos de la <GlossaryTerm term="UNESCO AI"><strong>UNESCO AI</strong></GlossaryTerm>, <GlossaryTerm term="DECIDE-IA"><strong>DECIDE-IA</strong></GlossaryTerm> y <GlossaryTerm term="PotencIA"><strong>PotencIA</strong></GlossaryTerm>.</p>
      </Accordion>
      <Accordion title="Mito 6: La IA avanzada siempre será malévola" icon={AlertTriangle}>
        <p><strong>Realidad:</strong> La IA no tiene intenciones. Su comportamiento depende del diseño humano y los marcos de <GlossaryTerm term="Alineación"><strong>alineación</strong></GlossaryTerm> ética.</p>
      </Accordion>
    </div>

    <h2 id="sec-modulo1-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Settings size={24} /> Funcionamiento técnico: ¿cómo funciona realmente?
    </h2>
    
    <Accordion title="Arquitectura Transformer" icon={Layers}>
        <p className="mb-3">Los modelos de lenguaje generativo modernos se basan en la arquitectura <GlossaryTerm term="Transformer"><strong>Transformer</strong></GlossaryTerm> (Vaswani et al., 2017), que revolucionó el <GlossaryTerm term="Procesamiento de Lenguaje Natural"><strong>procesamiento de lenguaje natural</strong></GlossaryTerm>.</p>
        <InfoCard type="definicion" title="Componentes clave:">
            <ul className="space-y-2">
                <li><GlossaryTerm term="Mecanismo de atención"><strong>Mecanismo de atención</strong></GlossaryTerm>: Permite al modelo "enfocarse" en las partes relevantes del contexto.</li>
                <li><GlossaryTerm term="Codificación posicional"><strong>Codificación posicional</strong></GlossaryTerm>: Mantiene el orden de las palabras en la secuencia.</li>
                <li><strong>Capas de procesamiento:</strong> Múltiples capas que refinan progresivamente la representación del lenguaje.</li>
            </ul>
        </InfoCard>
        <InfoCard type="reflexion" title="Aplicación ética (DECIDE-IA y PotencIA)">
          <p>Comprender que los Transformers operan mediante patrones de atención matemática refuerza la necesidad del <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm> y del <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm>, recordando al docente que la herramienta sintetiza probabilidades probabilísticas sin criterio valorativo propio.</p>
        </InfoCard>
    </Accordion>

    <Accordion title="Proceso de entrenamiento y paradigmas de aprendizaje" icon={BookOpen}>
        <div className="space-y-4">
            <InfoCard type="practica" title="Fase 1: Preentrenamiento">
                <p>El modelo es entrenado con <strong>vastos corpus de texto</strong> mediante <GlossaryTerm term="Aprendizaje no supervisado"><strong>aprendizaje no supervisado</strong></GlossaryTerm> para aprender patrones lingüísticos y conocimiento general. Este proceso permite el <GlossaryTerm term="Transfer learning"><strong>Transfer learning</strong></GlossaryTerm>.</p>
            </InfoCard>
            <InfoCard type="practica" title="Fase 2: Afinamiento (fine-tuning)">
                <p>Se especializa el modelo con <strong>datos específicos</strong> de tareas o dominios particulares mediante <GlossaryTerm term="Aprendizaje supervisado"><strong>aprendizaje supervisado</strong></GlossaryTerm>.</p>
            </InfoCard>
            <InfoCard type="practica" title="Fase 3: Aprendizaje por refuerzo (RL)">
                <p>Para que un agente trascienda la ejecución de reglas predefinidas, se utiliza el <GlossaryTerm term="Aprendizaje por refuerzo"><strong>aprendizaje por refuerzo</strong></GlossaryTerm>. Funciona mediante un bucle de retroalimentación donde el agente interactúa con el entorno y ajusta su comportamiento.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="Percepción computacional avanzada" icon={Eye}>
        <p className="mb-3">Antes de que un agente lógico pueda razonar, necesita captar información. La percepción computacional convierte estímulos visuales y acústicos en estructuras de datos procesables.</p>
        <div className="space-y-4">
            <InfoCard type="definicion" title="Visión artificial">
                <p>Enseña a las máquinas a otorgar significado semántico a estímulos ópticos mediante redes neuronales convolucionales y clasificación de patrones.</p>
            </InfoCard>
            <InfoCard type="definicion" title="Procesamiento de lenguaje natural (PLN)">
                <p>Actúa como el córtex auditivo y discursivo. Inicia con la <GlossaryTerm term="Tokenización"><strong>tokenización</strong></GlossaryTerm> (fragmentar texto en trozos manejables), seguido de la <GlossaryTerm term="NLU (Comprensión del Lenguaje Natural)"><strong>comprensión del lenguaje natural (NLU)</strong></GlossaryTerm> para analizar el significado semántico, y finaliza con la <GlossaryTerm term="NLG (Generación de Lenguaje Natural)"><strong>generación de lenguaje natural (NLG)</strong></GlossaryTerm> para producir texto fluido y estructurado.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="Generación de respuestas" icon={Zap}>
        <p className="mb-3">La IA generativa no "piensa" ni "comprende". En cambio:</p>
        <ol className="space-y-2">
            <li>Procesa el texto de entrada (<GlossaryTerm term="Prompt">prompt</GlossaryTerm>) convirtiéndolo en representaciones numéricas</li>
            <li>Calcula <strong>probabilidades</strong> de qué palabra debería seguir en la secuencia</li>
            <li>Selecciona palabras basándose en estas probabilidades (con algún grado de aleatoriedad controlada)</li>
            <li>Repite el proceso hasta completar la respuesta</li>
        </ol>
        <InfoCard type="idea" title="Metáfora clave">
            <p>Es como un "autocomplete ultra sofisticado" que predice la continuación más probable del texto basándose en patrones estadísticos, no en comprensión genuina.</p>
        </InfoCard>
    </Accordion>

    <h2 id="sec-modulo1-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Target size={24} /> Aplicación práctica: El caso de SofIA
    </h2>
    <InfoCard type="reflexion" title="El caso de SofIA">
        <p><strong>SofIA</strong> es una profesional del ámbito educativo que utiliza herramientas de <GlossaryTerm term="IA generativa"><strong>IA generativa</strong></GlossaryTerm> para realizar su propio diagnóstico de competencias: analizar su trayectoria pedagógica, extraer habilidades transferibles y mapearlas con las palabras clave que exigen los proyectos de <GlossaryTerm term="EdTech"><strong>tecnología educativa (EdTech)</strong></GlossaryTerm> y <GlossaryTerm term="Diseño instruccional"><strong>diseño instruccional</strong></GlossaryTerm>.</p>
    </InfoCard>
    <CompetenceMappingCard />

    <Accordion title="¿Por qué el diagnóstico de competencias es crucial?" icon={Search}>
        <p className="mb-3">Muchas profesionales en educación poseen una experiencia valiosa pero necesitan estructurar cómo:</p>
        <ul className="space-y-2">
            <li>Identificar qué competencias demuestran sus experiencias docentes y de gestión previas</li>
            <li>Expresarlas en el lenguaje que filtran los sistemas de evaluación algorítmica</li>
            <li>Conectar su práctica de aula y diseño didáctico con los requisitos de proyectos e instituciones de innovación</li>
            <li>Reformular su portafolio y perfiles de proyectos de manera estratégica</li>
        </ul>
        <InfoCard type="conexion" title="Ejemplo real del caso de SofIA:">
            <p>Una profesional con 8 años de experiencia en educación y gestión pedagógica que realiza su reconversión e innovación hacia roles de diseño instruccional, coordinación de proyectos educativos y tecnología educativa (EdTech) posee competencias avanzadas en:</p>
            <ul className="ml-4 mt-2 space-y-1">
                <li>Diseño de secuencias didácticas y evaluación formativa centrada en el aprendizaje</li>
                <li>Liderazgo de proyectos educativos y coordinación de equipos docentes multitarea</li>
                <li>Aplicación de la Taxonomía de Bloom para la graduación de objetivos cognitivos</li>
                <li>Integración pedagógica de herramientas digitales e IA generativa</li>
            </ul>
            <p className="mt-2">Sin embargo, sin una articulación estratégica, podría limitarse a describir su labor como "dictar clases y corregir pruebas", perdiendo oportunidades de participación en roles como Especialista en Diseño Instruccional y Proyectos EdTech.</p>
        </InfoCard>
    </Accordion>

    <Accordion title="¿Cómo utiliza SofIA la IA generativa en su proceso?" icon={Wrench}>
        <div className="space-y-4">
            <InfoCard type="practica" title="1. Análisis de su trayectoria pedagógica">
                <p>Utiliza herramientas de IA generativa para procesar descripciones de su experiencia educativa e identificar competencias implícitas que no había reconocido explícitamente.</p>
            </InfoCard>
            <InfoCard type="practica" title="2. Mapeo con requerimientos de proyectos EdTech">
                <p>Compara las competencias extraídas con las palabras clave de proyectos de innovación educativa específicos, identificando coincidencias y brechas en su perfil docente.</p>
            </InfoCard>
            <InfoCard type="practica" title="3. Reformulación estratégica">
                <p>Solicita a la IA versiones optimizadas de sus descripciones docentes usando el lenguaje especializado que buscan los comités de evaluación y sistemas de evaluación algorítmica.</p>
            </InfoCard>
            <InfoCard type="practica" title="4. Preparación para presentaciones de proyectos">
                <p>Practica con la IA para articular respuestas que conecten sus experiencias concretas de aula con las competencias valoradas por las instituciones de innovación.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="Ventajas de usar IA generativa para diagnóstico de competencias" icon={Zap}>
        <ul className="space-y-3">
            <li><strong>Escalabilidad personal:</strong> Permite analizar múltiples versiones del portafolio y explorar diferentes enfoques simultáneamente</li>
            <li><strong>Actualización constante:</strong> Acceso a información actualizada sobre tendencias del sector EdTech y lenguaje corporativo vigente</li>
            <li><strong>Personalización inmediata:</strong> Adaptación del lenguaje al sector y nivel profesional específico de cada oferta</li>
            <li><strong>Democratización del acceso:</strong> Herramientas antes disponibles solo a través de servicios costosos de coaching profesional</li>
            <li><strong>Iteración rápida:</strong> Posibilidad de probar múltiples versiones de portafolios, propuestas y perfiles en minutos</li>
        </ul>
    </Accordion>

    <h2 id="sec-modulo1-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <PenTool size={24} /> Ingeniería de prompts: La clave del éxito
    </h2>
    
    <InfoCard type="idea" title="La importancia del prompt">
        <p><strong>La calidad de los resultados de una IA generativa depende directamente de la calidad de las instrucciones (prompts) que le proporcionamos.</strong> Un prompt mal formulado generará respuestas genéricas o irrelevantes; un prompt bien diseñado puede producir resultados excepcionalmente útiles.</p>
    </InfoCard>

    <Accordion title="Componentes de un prompt efectivo" icon={FileText}>
        <div className="space-y-4">
            <InfoCard type="definicion" title="1. Contexto completo">
                <p>Proporcione toda la información relevante sobre la situación, incluyendo antecedentes, limitaciones y objetivos específicos.</p>
            </InfoCard>
            <InfoCard type="definicion" title="2. Objetivo claro">
                <p>Sea explícito sobre qué espera obtener. En lugar de "ayúdame con mi portafolio", especifique "reformula mi experiencia docente para resaltar competencias en diseño instruccional y proyectos EdTech".</p>
            </InfoCard>
            <InfoCard type="definicion" title="3. Formato deseado">
                <p>Indique cómo quiere recibir la respuesta: lista con viñetas, párrafo narrativo, tabla comparativa, etc.</p>
            </InfoCard>
            <InfoCard type="definicion" title="4. Restricciones específicas">
                <p>Establezca límites claros: longitud máxima, tono (formal/informal), perspectiva (primera/tercera persona), etc.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="Ejemplo práctico: Prompts que usa SofIA" icon={Palette}>
        <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
                <h4 className="font-bold mb-3 text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle size={18} />
                  <span>Prompt deficiente:</span>
                </h4>
                <div className="bg-slate-100 dark:bg-slate-900/80 p-4 rounded-lg mb-4 border border-slate-200 dark:border-white/5">
                    <p className="italic text-slate-800 dark:text-slate-300">"Ayúdame a mejorar mi portafolio"</p>
                </div>
                <p className="mb-2 text-slate-900 dark:text-slate-200"><strong>Problemas:</strong></p>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                    <li>Demasiado vago</li>
                    <li>Sin contexto profesional</li>
                    <li>Sin objetivo específico</li>
                </ul>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
                <h4 className="font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  <span>Prompt efectivo:</span>
                </h4>
                <div className="bg-slate-100 dark:bg-slate-900/80 p-4 rounded-lg mb-4 border border-slate-200 dark:border-white/5">
                    <p className="italic text-slate-800 dark:text-slate-300">"Soy SofIA, una docente con 8 años de experiencia en aula y gestión pedagógica. He coordinado equipos de 12 profesores, optimizado planificaciones y mejorado los resultados de aprendizaje en un 20%. Quiero insertarme en un rol de .Especialista en Diseño Instruccional EdTech.. Reformula mi experiencia en 3 viñetas que resalten: (1) liderazgo de equipos educativos, (2) diseño de recursos de aprendizaje, (3) mejora continua con tecnología. Usa terminología de diseño instruccional y mantén un tono profesional. Máximo 50 palabras por viñeta."</p>
                </div>
                <p className="mb-2 text-slate-900 dark:text-slate-200"><strong>Fortalezas:</strong></p>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                    <li>Contexto profesional detallado</li>
                    <li>Objetivo específico (tipo de proyecto)</li>
                    <li>Formato claro (3 viñetas)</li>
                    <li>Restricciones precisas (tono, longitud)</li>
                </ul>
            </div>
        </div>
    </Accordion>

    <Accordion title="Principios clave de la ingeniería de prompts" icon={Key}>
        <ol className="space-y-3">
            <li><strong>Especificidad sobre generalidad:</strong> Cuanto más específico sea el prompt, más relevante será la respuesta</li>
            <li><strong>Iteración es normal:</strong> Raramente el primer prompt produce resultados perfectos. Refine y ajuste según sea necesario</li>
            <li><strong>Proporcione ejemplos:</strong> Si es posible, incluya ejemplos del tipo de respuesta que espera</li>
            <li><strong>Solicite justificación:</strong> Pida a la IA que explique su razonamiento para detectar errores lógicos</li>
            <li><strong>Verificación es esencial:</strong> Nunca use resultados sin revisarlos críticamente. La IA puede "alucinar" información falsa</li>
        </ol>
    </Accordion>

    <h2 id="sec-modulo1-9" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Globe size={24} /> Democratización del acceso profesional
    </h2>
    
    <p>Una de las promesas más importantes de la IA generativa es la <strong>democratización del acceso</strong> a herramientas y servicios que antes estaban reservados para quienes podían pagar consultores especializados.</p>

    <InfoCard type="reflexion" title="¿Quiénes se benefician?">
        <p className="mb-3">La IA generativa es especialmente valiosa para:</p>
        <ul className="space-y-2">
            <li><strong>Profesionales en transición:</strong> Personas que cambian de sector y necesitan "traducir" su experiencia</li>
            <li><strong>Trabajadores de oficios tradicionales:</strong> Gasfíteres, cocineros, choferes, estilistas que quieren formalizar su experiencia</li>
            <li><strong>Migrantes profesionales:</strong> Personas que necesitan adaptar su historial profesional a nuevos contextos culturales</li>
            <li><strong>Profesionales sin acceso a redes:</strong> Quienes no tienen contactos en sus sectores objetivo</li>
            <li><strong>Emprendedores tempranos:</strong> Personas que inician proyectos sin presupuesto para servicios especializados</li>
        </ul>
    </InfoCard>

    <Accordion title="Impacto en el sector educativo chileno" icon={BarChart2}>
        <p className="mb-3">Según estudios de CEPAL (2024) y Deloitte (2025), la IA generativa está transformando el panorama profesional en América Latina:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard type="practica" title="Oportunidades">
                <ul className="space-y-1 text-sm">
                    <li>Reducción de brechas de acceso a herramientas avanzadas</li>
                    <li>Aceleración de procesos de articulación en proyectos</li>
                    <li>Mejora en la articulación estratégica de grupos tradicionalmente excluidos</li>
                </ul>
            </InfoCard>
            <InfoCard type="conexion" title="Desafíos">
                <ul className="space-y-1 text-sm">
                    <li>Brecha digital y acceso a tecnología</li>
                    <li>Necesidad de alfabetización digital</li>
                    <li>Riesgo de dependencia tecnológica</li>
                </ul>
            </InfoCard>
        </div>
    </Accordion>

    <InfoCard type="idea" title="Reflexión final">
        <p>La IA generativa no debe verse como un "reemplazo" del desarrollo de competencias humanas, sino como un <strong>"copiloto profesional"</strong> que amplifica nuestras capacidades. El pensamiento crítico, la autenticidad y la verificación constante siguen siendo responsabilidades humanas ineludibles.</p>
    </InfoCard>

    <h2 id="sec-modulo1-10" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <HelpCircle size={24} /> Preguntas de reflexión
    </h2>
    <InfoCard type="reflexion" title="Para profundizar en el capítulo">
        <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>¿Cómo crees que el caso de SofIA se aplica a tu propia trayectoria profesional?</li>
            <li>¿Qué mitos sobre la IA te sorprendieron más y por qué?</li>
            <li>¿De qué manera podrías utilizar la ingeniería de prompts para mejorar tu comunicación profesional?</li>
        </ul>
    </InfoCard>
  </div>
);

