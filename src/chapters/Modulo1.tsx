import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const Modulo1Content = () => (
  <div className="prose-custom">
    <AuthorNote>
      Esta guía nace para desmitificar la IA y acercarla a personas que, como SofIA, buscan herramientas prácticas para potenciar su camino sin necesidad de ser expertos técnicos. El caso de SofIA nos servirá de hilo conductor para entender cómo la tecnología se aplica a desafíos reales.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Fundamentos de la IA generativa</h1>
    <p className="text-xl text-slate-300 mb-8">El caso de SofIA y el diagnóstico de competencias</p>

    <h2 id="sec-0-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🚀 Introducción: el caso de SofIA</h2>
    <p>La <strong>inteligencia artificial generativa</strong> representa una de las transformaciones tecnológicas más significativas de nuestra era. Esta guía explora sus fundamentos conceptuales, funcionamiento técnico y aplicaciones prácticas, utilizando como eje articulador el caso de <strong>SofIA</strong>: una persona en transición laboral que utiliza herramientas de IA generativa para realizar su propio diagnóstico de competencias y optimizar su proceso de búsqueda de empleo.</p>

    <InfoCard type="idea" title="Idea central">
      <p>La IA generativa no es magia, ni debe reemplazar el pensamiento crítico humano. Es una <strong>herramienta de amplificación</strong> que, utilizada con comprensión conceptual y <GlossaryTerm term="Prompt">prompts</GlossaryTerm> efectivos, puede democratizar el acceso a capacidades que antes estaban reservadas para expertos.</p>
    </InfoCard>

    <h2 id="sec-0-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🧠 ¿Qué es la inteligencia artificial?</h2>
    <p>La inteligencia artificial (IA) es la ciencia y la ingeniería de crear máquinas inteligentes. A pesar de su impacto, no existe una sola definición. Históricamente, la investigación se ha dividido en torno a dos preguntas fundamentales: ¿El objetivo es el pensamiento interno o el comportamiento externo? ¿Nos enfocamos en la fidelidad humana o en la racionalidad?</p>
    
    <Accordion title="🏛️ Los cuatro enfoques para definir la inteligencia">
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

    <h2 id="sec-0-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">⏳ La trayectoria de la IA: ciclos de entusiasmo y realidad</h2>
    <p className="mb-4">La historia de la IA no es una línea recta, sino una serie de ciclos de éxito seguidos por crisis de financiamiento (inviernos de la IA).</p>
    <div className="space-y-4">
      <div className="border-l-2 border-indigo-500 pl-4">
        <h4 className="font-bold text-indigo-300">Gestación (1943-1956)</h4>
        <p className="text-sm text-slate-300">McCulloch y Pitts proponen neuronas artificiales. Turing introduce la Prueba de Turing. El término "inteligencia artificial" nace en el Taller de Dartmouth (1956).</p>
      </div>
      <div className="border-l-2 border-indigo-500 pl-4">
        <h4 className="font-bold text-indigo-300">Gran entusiasmo (1952-1969)</h4>
        <p className="text-sm text-slate-300">Programas de damas que aprenden. Micromundos (mundo de los bloques) permiten avances en visión y planificación.</p>
      </div>
      <div className="border-l-2 border-indigo-500 pl-4">
        <h4 className="font-bold text-red-500 pl-0">Dosis de realidad / 1er invierno (1966-1973)</h4>
        <p className="text-sm text-slate-300">Explosión combinatoria: los sistemas fallan al escalar. El informe Lighthill corta el financiamiento.</p>
      </div>
      <div className="border-l-2 border-indigo-500 pl-4">
        <h4 className="font-bold text-indigo-300">Sistemas expertos (1969-1986)</h4>
        <p className="text-sm text-slate-300">Cambio de paradigma: conocimiento poderoso y específico del dominio (DENDRAL, MYCIN).</p>
      </div>
      <div className="border-l-2 border-indigo-500 pl-4">
        <h4 className="font-bold text-indigo-300">Regreso de redes neuronales y Big Data (1986-presente)</h4>
        <p className="text-sm text-slate-300">Reinvención del back-propagation. El auge de la web y el poder computacional crean el Deep Learning moderno (ImageNet 2012).</p>
      </div>
    </div>

    <h2 id="sec-0-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🤖 Tipos y componentes de la IA</h2>
    
    <Accordion title="📊 Tipos de inteligencia artificial">
      <p className="mb-4">La inteligencia artificial se clasifica generalmente en tres categorías principales según sus capacidades y nivel de desarrollo:</p>
      <div className="space-y-4">
        <InfoCard type="definicion" title="1. IA Estrecha o Débil (Narrow AI)">
          <p>Es la IA que existe hoy en día. Está diseñada y entrenada para realizar una tarea específica o un conjunto limitado de tareas (ej. reconocimiento facial, asistentes de voz, recomendaciones de productos). Aunque puede parecer muy inteligente, opera bajo un conjunto estricto de restricciones y limitaciones.</p>
        </InfoCard>
        <InfoCard type="definicion" title="2. IA General o Fuerte (AGI)">
          <p>Es una forma teórica de IA que tendría una inteligencia equivalente a la humana. Podría comprender, aprender y aplicar conocimientos en diferentes dominios para resolver problemas complejos, de manera similar a como lo hace un ser humano. Aún no existe.</p>
        </InfoCard>
        <InfoCard type="definicion" title="3. Superinteligencia Artificial (ASI)">
          <p>Es un concepto hipotético donde la IA superaría la inteligencia y capacidad humana en todos los aspectos, desde la creatividad hasta la resolución de problemas generales y las habilidades sociales.</p>
        </InfoCard>
      </div>
    </Accordion>

    <Accordion title="🧩 Componentes y disciplinas de la IA">
      <p className="mb-4">La IA es un campo amplio que abarca múltiples subdisciplinas y tecnologías:</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800 text-slate-200">
              <th className="p-3 border border-slate-700">Disciplina</th>
              <th className="p-3 border border-slate-700">Descripción</th>
              <th className="p-3 border border-slate-700">Ejemplos de uso</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr>
              <td className="p-3 border border-slate-700 font-bold text-indigo-300">Machine Learning (ML)</td>
              <td className="p-3 border border-slate-700">Permite a los sistemas aprender y mejorar a partir de la experiencia sin ser programados explícitamente.</td>
              <td className="p-3 border border-slate-700">Sistemas de recomendación, detección de fraudes.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold text-indigo-300">Deep Learning (DL)</td>
              <td className="p-3 border border-slate-700">Subconjunto del ML basado en redes neuronales artificiales con múltiples capas (profundas) para modelar abstracciones complejas.</td>
              <td className="p-3 border border-slate-700">Reconocimiento de voz avanzado, conducción autónoma.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold text-indigo-300">Procesamiento de Lenguaje Natural (NLP)</td>
              <td className="p-3 border border-slate-700">Permite a las computadoras entender, interpretar y manipular el lenguaje humano.</td>
              <td className="p-3 border border-slate-700">Chatbots, traducción automática, análisis de sentimientos.</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-700 font-bold text-indigo-300">Visión por Computadora</td>
              <td className="p-3 border border-slate-700">Permite a las máquinas extraer información significativa de imágenes digitales, videos y otras entradas visuales.</td>
              <td className="p-3 border border-slate-700">Análisis de imágenes médicas, control de calidad en manufactura.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Accordion>

    <h2 id="sec-0-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🤖 Modelos y agentes de IA</h2>
    
    <Accordion title="📦 ¿Qué es un modelo de IA?">
      <p>Un <strong>modelo de IA</strong> es un programa que ha sido entrenado con un conjunto de datos para reconocer determinados patrones o tomar decisiones sin más intervención humana. Aplican diferentes algoritmos a las entradas de datos para lograr las salidas para las que han sido programados.</p>
      <InfoCard type="definicion" title="Algoritmos vs. modelos">
        <p>Los <strong>algoritmos</strong> son procedimientos lógicos o matemáticos que se aplican a un conjunto de datos. Los <strong>modelos</strong> son el resultado (output) de un algoritmo que se ha aplicado a un conjunto de datos. En términos sencillos, un modelo de IA se utiliza para hacer predicciones o tomar decisiones y un algoritmo es la lógica con la que funciona ese modelo.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="🕵️‍♂️ ¿Qué son los agentes de IA?">
      <p>Un <strong>agente de IA</strong> es cualquier entidad capaz de percibir su entorno a través de sensores y actuar sobre ese entorno mediante actuadores para alcanzar objetivos específicos.</p>
      
      <div className="mt-6">
        <h4 className="font-bold text-indigo-300 mb-3">El marco PEAS: especificación del entorno de tarea</h4>
        <p className="text-sm text-slate-300 mb-4">La arquitectura subyacente y la evaluación de cualquier agente inteligente se diseña mediante el marco conceptual PEAS, que define los cuatro pilares inexorables de su operatividad:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
            <p><strong>[P]erformance (Rendimiento):</strong> Define el criterio de éxito del agente computacional. Es la métrica cualitativa o cuantitativa de su capacidad para alcanzar un objetivo (ej. satisfacción del usuario, seguridad).</p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
            <p><strong>[E]nvironment (Entorno):</strong> El espacio operativo en el que el agente existe y toma decisiones, ya sea digital (una base de datos) o físico (una habitación).</p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
            <p><strong>[A]ctuators (Actuadores):</strong> Los mecanismos de salida mediante los cuales el agente interviene en su entorno (ej. motores en un robot, altavoces o llamadas a API en un asistente).</p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl">
            <p><strong>[S]ensors (Sensores):</strong> Las entradas de datos cruciales que capturan la información del mundo exterior para alimentar el estado interno del agente (ej. cámaras, reconocimiento de voz).</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-indigo-300 mb-3">Dimensiones del entorno</h4>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><strong>Observabilidad:</strong> Totalmente observable (Ajedrez) vs. Parcialmente observable (Conducción, Póker).</li>
          <li><strong>Dinamismo:</strong> Estático (Crucigramas) vs. Dinámico (Taxi).</li>
          <li><strong>Causalidad:</strong> Determinista (Ajedrez) vs. Estocástico (Taxi: fallas, tráfico).</li>
          <li><strong>Tiempo:</strong> Episódico (Clasificar imágenes) vs. Secuencial (Ajedrez, Taxi).</li>
          <li><strong>Interacción:</strong> Agente único (Crucigrama) vs. Multiagente (Tráfico, Ajedrez).</li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-indigo-300 mb-3">Evolución de los agentes (de simple a complejo)</h4>
        <p className="text-sm text-slate-300 mb-4">La sofisticación de la inteligencia artificial no es uniforme; los agentes se clasifican en una jerarquía evolutiva estricta basada en su capacidad de procesamiento lógico, uso de la memoria y razonamiento prospectivo.</p>
        <div className="space-y-4">
          <InfoCard type="definicion" title="1. Agentes de reflejos simples">
            <p>Operan bajo estrictas reglas predefinidas de "condición-acción". Dependen únicamente de la percepción actual, ignorando el historial de datos. <em>Nivel de inteligencia: Limitada/Baja.</em></p>
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
        <h4 className="font-bold text-indigo-300 mb-3">Representación del conocimiento y razonamiento ontológico</h4>
        <p className="text-sm text-slate-300 mb-4">Para que un sistema posea verdadera pericia, debe ser capaz de interiorizar, organizar y razonar sobre la información estructuradamente. La Representación del Conocimiento busca describir el mundo de manera formal, detallando explícitamente los hechos, objetos, conceptos y las interrelaciones jerárquicas que los conectan.</p>
        <div className="space-y-3 text-sm">
          <p><strong>Ontologías Computacionales:</strong> Funcionan como el sistema central de archivo enciclopédico de la máquina, erradicando la ambigüedad lingüística. Se dividen en <em>Ontologías de Dominio</em> (específicas de un campo temático) y <em>Ontologías Generales</em> (conceptos filosóficos de alto nivel).</p>
          <p><strong>El Motor de Inferencia:</strong> Actúa como el cerebro calculador dentro del sistema de representación. Al igual que un detective policial resolviendo un crimen, recolecta pistas (datos de entrada) y las contrasta contra un extenso archivo (la base de conocimientos y la ontología formal) utilizando métodos rigurosos de la lógica matemática para generar deducciones.</p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-indigo-300 mb-3">Ejemplos prácticos de Agentes de IA en acción</h4>
        <p className="text-sm text-slate-300 mb-4">A continuación, se presentan tres ejemplos concretos de cómo los agentes de IA operan en diferentes escenarios, detallando su entorno, objetivo, actuadores y sensores (PEAS):</p>
        <div className="space-y-4">
          <InfoCard type="ejemplo" title="1. Agente de productividad personal">
            <p className="text-sm text-slate-300 mb-2"><strong>Objetivo (Rendimiento):</strong> Maximizar el tiempo libre del usuario, minimizar conflictos de agenda y asegurar respuestas oportunas a correos importantes.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Entorno:</strong> Calendario digital, bandeja de entrada de correo electrónico, lista de contactos y preferencias del usuario.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Actuadores:</strong> Crear/modificar eventos en el calendario, redactar y enviar correos electrónicos, establecer recordatorios.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Sensores:</strong> Nuevos correos entrantes, invitaciones a reuniones, cambios en la disponibilidad del usuario.</p>
            <p className="text-sm text-slate-300"><strong>Razonamiento:</strong> Al recibir una invitación, el agente verifica la disponibilidad en el calendario. Si hay conflicto, sugiere horarios alternativos basados en las preferencias del usuario. Si es un correo urgente, redacta un borrador de respuesta y notifica al usuario.</p>
          </InfoCard>
          <InfoCard type="ejemplo" title="2. Agente de servicio al cliente">
            <p className="text-sm text-slate-300 mb-2"><strong>Objetivo (Rendimiento):</strong> Resolver consultas de clientes rápidamente, mantener alta satisfacción del cliente y reducir la carga de trabajo de los agentes humanos.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Entorno:</strong> Plataforma de chat en vivo del sitio web, base de datos de conocimientos de la empresa, historial de pedidos del cliente.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Actuadores:</strong> Enviar mensajes de texto en el chat, proporcionar enlaces a artículos de ayuda, escalar el ticket a un humano si es necesario.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Sensores:</strong> Mensajes de texto del cliente, clics en opciones del menú del chat, información de la cuenta del usuario conectado.</p>
            <p className="text-sm text-slate-300"><strong>Razonamiento:</strong> Analiza el mensaje del cliente para identificar la intención (ej. "dónde está mi pedido"). Consulta la base de datos con el número de pedido del cliente y formula una respuesta con el estado actual. Si la consulta es compleja, transfiere el contexto a un agente humano.</p>
          </InfoCard>
          <InfoCard type="ejemplo" title="3. Agente de análisis de datos">
            <p className="text-sm text-slate-300 mb-2"><strong>Objetivo (Rendimiento):</strong> Proporcionar insights precisos y accionables, generar informes a tiempo y detectar anomalías en los datos.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Entorno:</strong> Bases de datos de la empresa (SQL, NoSQL), herramientas de visualización, repositorios de archivos (CSV, Excel).</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Actuadores:</strong> Ejecutar consultas de bases de datos, generar gráficos y tablas, enviar informes por correo electrónico o Slack.</p>
            <p className="text-sm text-slate-300 mb-2"><strong>Sensores:</strong> Actualizaciones en las bases de datos, solicitudes de informes de los usuarios, alertas de umbrales predefinidos.</p>
            <p className="text-sm text-slate-300"><strong>Razonamiento:</strong> Monitorea continuamente las métricas clave. Si detecta una caída inusual en las ventas, ejecuta consultas para identificar la causa raíz (ej. por región o producto). Genera un informe visual con los hallazgos y alerta al equipo correspondiente.</p>
          </InfoCard>
        </div>
      </div>
    </Accordion>

    <h2 id="sec-0-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">✨ ¿Qué es la inteligencia artificial generativa?</h2>
    
    <InfoCard type="definicion" title="Definición">
      <p>La <GlossaryTerm term="IA generativa">IA generativa</GlossaryTerm> es una rama de la inteligencia artificial que tiene la capacidad de <strong>crear contenido original y novedoso</strong> —como textos, imágenes, audio o código— a partir de patrones aprendidos de grandes cantidades de datos.</p>
    </InfoCard>

    <Accordion title="🔍 Características clave de la IA generativa">
      <ul className="space-y-3">
          <li><strong>Creatividad algorítmica:</strong> No replica, sino que genera contenido nuevo basándose en patrones aprendidos</li>
          <li><strong>Adaptabilidad contextual:</strong> Ajusta sus respuestas según el contexto y las instrucciones recibidas</li>
          <li><strong>Escalabilidad:</strong> Puede procesar y generar grandes volúmenes de contenido en poco tiempo</li>
          <li><strong><GlossaryTerm term="Multimodalidad">Multimodalidad</GlossaryTerm>:</strong> Algunas versiones pueden trabajar con múltiples tipos de datos simultáneamente (texto, imagen, audio)</li>
      </ul>
    </Accordion>

    <Accordion title="⚠️ Limitaciones importantes">
      <InfoCard type="conexion" title="Lo que la IA generativa NO hace:">
        <ul className="space-y-2">
            <li>No comprende el significado real de lo que genera</li>
            <li>No tiene conciencia ni intencionalidad</li>
            <li>No puede verificar la veracidad de sus propias respuestas</li>
            <li>No tiene juicio ético autónomo</li>
            <li>Puede generar <GlossaryTerm term="Alucinaciones">alucinaciones</GlossaryTerm> (información falsa presentada con confianza)</li>
        </ul>
      </InfoCard>
    </Accordion>

    <h2 id="sec-0-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🚫 Mitos de la IA</h2>
    
    <div className="space-y-4">
      <Accordion title="Mito 1: La IA es 100% objetiva y neutral">
        <p><strong>Realidad:</strong> Los modelos de IA aprenden de datos generados por humanos, los cuales contienen sesgos históricos y culturales. Si no se auditan, los sistemas de IA pueden perpetuar e incluso amplificar estos sesgos.</p>
      </Accordion>
      <Accordion title="Mito 2: La IA reemplazará todos los trabajos humanos">
        <p><strong>Realidad:</strong> Si bien la IA automatizará ciertas tareas, es más probable que transforme los empleos en lugar de eliminarlos por completo. La IA actúa como un copiloto que aumenta la productividad, y surgirán nuevos roles enfocados en la gestión y supervisión de estas tecnologías.</p>
      </Accordion>
      <Accordion title="Mito 3: La IA tiene conciencia y entiende lo que dice">
        <p><strong>Realidad:</strong> Los modelos como los LLM son motores estadísticos avanzados que predicen la siguiente palabra basándose en patrones. No tienen comprensión real, empatía, ni conciencia de sí mismos.</p>
      </Accordion>
      <Accordion title="Mito 4: La IA es una caja mágica infalible">
        <p><strong>Realidad:</strong> La IA comete errores, sufre de "alucinaciones" (inventa datos con confianza) y depende completamente de la calidad de sus datos de entrenamiento y de las instrucciones (prompts) que recibe.</p>
      </Accordion>
      <Accordion title="Mito 5: La IA creará una singularidad tecnológica incontrolable">
        <p><strong>Realidad:</strong> La "singularidad" es una hipótesis teórica sobre una IA que se mejora a sí misma indefinidamente. Actualmente, estamos lejos de sistemas con esa capacidad, y el desarrollo de la IA está sujeto a marcos éticos, regulatorios y de seguridad humana.</p>
      </Accordion>
      <Accordion title="Mito 6: La IA avanzada siempre será malévola">
        <p><strong>Realidad:</strong> La IA no tiene intenciones, deseos ni emociones. Su comportamiento depende de su diseño, sus datos de entrenamiento y los objetivos que le establezcan los humanos. La seguridad y el alineamiento de la IA son áreas de investigación activa para asegurar que actúe de manera beneficiosa.</p>
      </Accordion>
    </div>

    <h2 id="sec-0-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">⚙️ Funcionamiento técnico: ¿cómo funciona realmente?</h2>
    
    <Accordion title="🧬 Arquitectura Transformer">
        <p className="mb-3">Los modelos de lenguaje generativo modernos se basan en la arquitectura <strong>Transformer</strong> (Vaswani et al., 2017), que revolucionó el procesamiento de lenguaje natural.</p>
        <InfoCard type="definicion" title="Componentes clave:">
            <ul className="space-y-2">
                <li><strong>Mecanismo de atención:</strong> Permite al modelo "enfocarse" en las partes relevantes del contexto</li>
                <li><strong>Codificación posicional:</strong> Mantiene el orden de las palabras en la secuencia</li>
                <li><strong>Capas de procesamiento:</strong> Múltiples capas que refinan progresivamente la representación del lenguaje</li>
            </ul>
        </InfoCard>
    </Accordion>

    <Accordion title="📚 Proceso de entrenamiento y paradigmas de aprendizaje">
        <div className="space-y-4">
            <InfoCard type="practica" title="Fase 1: preentrenamiento">
                <p>El modelo es entrenado con <strong>vastos corpus de texto</strong> mediante <GlossaryTerm term="Aprendizaje no supervisado">aprendizaje no supervisado</GlossaryTerm> para aprender patrones lingüísticos y conocimiento general. Este proceso permite el <GlossaryTerm term="Transfer Learning">Transfer Learning</GlossaryTerm>.</p>
            </InfoCard>
            <InfoCard type="practica" title="Fase 2: afinamiento (fine-tuning)">
                <p>Se especializa el modelo con <strong>datos específicos</strong> de tareas o dominios particulares mediante <GlossaryTerm term="Aprendizaje supervisado">aprendizaje supervisado</GlossaryTerm>.</p>
            </InfoCard>
            <InfoCard type="practica" title="Fase 3: aprendizaje por refuerzo (RL)">
                <p>Para que un agente trascienda la ejecución de reglas predefinidas, se utiliza el <strong>aprendizaje por refuerzo</strong>. Funciona mediante un bucle de retroalimentación (similar al adiestramiento de un perro): el agente interactúa con el entorno, ejecuta acciones y recibe recompensas (positivas o negativas). El agente ajusta su comportamiento para maximizar la recompensa a largo plazo. Existen dos enfoques principales:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li><strong>Sin modelos (model-free):</strong> Aprende de la experiencia directa e inmediata (ensayo y error).</li>
                  <li><strong>Basado en modelos (model-based):</strong> Crea una simulación interna del entorno para planificar y evaluar secuencias de acciones antes de actuar.</li>
                </ul>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="👁️ Percepción computacional avanzada">
        <p className="mb-3">Antes de que un agente lógico pueda razonar, necesita captar información. La percepción computacional convierte estímulos visuales y acústicos en estructuras de datos procesables.</p>
        <div className="space-y-4">
            <InfoCard type="definicion" title="Visión artificial">
                <p>Enseña a las máquinas a otorgar significado semántico a estímulos ópticos. Transforma matrices de píxeles mediante: preprocesamiento, extracción de características geométricas, análisis mediante redes neuronales convolucionales (CNN) y clasificación de patrones.</p>
            </InfoCard>
            <InfoCard type="definicion" title="Procesamiento de lenguaje natural (PLN)">
                <p>Actúa como el córtex auditivo y discursivo. Inicia con la <strong>tokenización</strong> (fragmentar texto en trozos manejables), seguido de la <strong>comprensión del lenguaje natural (NLU)</strong> para analizar el significado semántico, y finaliza con la <strong>generación de lenguaje natural (NLG)</strong> para producir texto fluido y estructurado.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="🎲 Generación de respuestas">
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

    <h2 id="sec-0-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🎯 Aplicación práctica: el diagnóstico de competencias con SofIA</h2>
    
    <InfoCard type="reflexion" title="🤖 El caso de SofIA">
        <p><strong>SofIA</strong> es una profesional en transición laboral que utiliza herramientas de IA generativa para realizar su propio <strong>diagnóstico de competencias</strong>: analizar su historial laboral, extraer las competencias subyacentes y mapearlas con las palabras clave que buscan los empleadores en ofertas de trabajo específicas.</p>
    </InfoCard>

    <Accordion title="🔎 ¿Por qué el diagnóstico de competencias es crucial?">
        <p className="mb-3">Muchas personas tienen <strong>experiencia valiosa</strong> pero no saben cómo:</p>
        <ul className="space-y-2">
            <li>Identificar qué competencias demuestran sus experiencias previas</li>
            <li>Expresarlas en el lenguaje que entienden los sistemas ATS (Applicant Tracking Systems)</li>
            <li>Conectar su experiencia con los requisitos de ofertas laborales</li>
            <li>Reformular sus CV y cartas de presentación de manera estratégica</li>
        </ul>
        <InfoCard type="conexion" title="Ejemplo real:">
            <p>Un gasfíter con 15 años de experiencia puede tener competencias en:</p>
            <ul className="ml-4 mt-2 space-y-1">
                <li>Resolución de problemas complejos</li>
                <li>Gestión de proyectos</li>
                <li>Servicio al cliente</li>
                <li>Manejo de herramientas tecnológicas</li>
            </ul>
            <p className="mt-2">Pero sin ayuda, probablemente describirá su trabajo como "reparé cañerías", perdiendo oportunidades de mostrar su verdadero valor profesional.</p>
        </InfoCard>
    </Accordion>

    <Accordion title="🛠️ ¿Cómo utiliza SofIA la IA generativa en su proceso?">
        <div className="space-y-4">
            <InfoCard type="practica" title="1. Análisis de su historial laboral">
                <p>Utiliza herramientas de IA generativa para procesar descripciones de su experiencia laboral e identificar competencias implícitas que no había reconocido explícitamente.</p>
            </InfoCard>
            <InfoCard type="practica" title="2. Mapeo con ofertas laborales">
                <p>Compara las competencias extraídas con las palabras clave de ofertas de trabajo específicas, identificando coincidencias y brechas en su perfil.</p>
            </InfoCard>
            <InfoCard type="practica" title="3. Reformulación estratégica">
                <p>Solicita a la IA versiones optimizadas de sus descripciones laborales usando el lenguaje corporativo que buscan los reclutadores y sistemas ATS.</p>
            </InfoCard>
            <InfoCard type="practica" title="4. Preparación para entrevistas">
                <p>Practica con la IA para articular respuestas que conecten sus experiencias concretas con las competencias valoradas por los empleadores.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="⚡ Ventajas de usar IA generativa para diagnóstico de competencias">
        <ul className="space-y-3">
            <li><strong>Escalabilidad personal:</strong> Permite analizar múltiples versiones del CV y explorar diferentes enfoques simultáneamente</li>
            <li><strong>Actualización constante:</strong> Acceso a información actualizada sobre tendencias del mercado laboral y lenguaje corporativo vigente</li>
            <li><strong>Personalización inmediata:</strong> Adaptación del lenguaje al sector y nivel profesional específico de cada oferta</li>
            <li><strong>Democratización del acceso:</strong> Herramientas antes disponibles solo a través de servicios costosos de coaching profesional</li>
            <li><strong>Iteración rápida:</strong> Posibilidad de probar múltiples versiones de CV, cartas y perfiles en minutos</li>
        </ul>
    </Accordion>

    <h2 id="sec-0-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">✍️ Ingeniería de prompts: la clave del éxito</h2>
    
    <InfoCard type="idea" title="La importancia del prompt">
        <p><strong>La calidad de los resultados de una IA generativa depende directamente de la calidad de las instrucciones (prompts) que le proporcionamos.</strong> Un prompt mal formulado generará respuestas genéricas o irrelevantes; un prompt bien diseñado puede producir resultados excepcionalmente útiles.</p>
    </InfoCard>

    <Accordion title="📝 Componentes de un prompt efectivo">
        <div className="space-y-4">
            <InfoCard type="definicion" title="1. Contexto completo">
                <p>Proporcione toda la información relevante sobre la situación, incluyendo antecedentes, limitaciones y objetivos específicos.</p>
            </InfoCard>
            <InfoCard type="definicion" title="2. Objetivo claro">
                <p>Sea explícito sobre qué espera obtener. En lugar de "ayúdame con mi CV", especifique "reformula mi experiencia como mesero para resaltar competencias en servicio al cliente y gestión de tiempo".</p>
            </InfoCard>
            <InfoCard type="definicion" title="3. Formato deseado">
                <p>Indique cómo quiere recibir la respuesta: lista con viñetas, párrafo narrativo, tabla comparativa, etc.</p>
            </InfoCard>
            <InfoCard type="definicion" title="4. Restricciones específicas">
                <p>Establezca límites claros: longitud máxima, tono (formal/informal), perspectiva (primera/tercera persona), etc.</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="🎨 Ejemplo práctico: prompts que usa SofIA">
        <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
                <h4 className="font-bold mb-3 text-red-400">❌ Prompt deficiente:</h4>
                <div className="bg-slate-900/80 p-4 rounded-lg mb-4">
                    <p className="italic text-slate-300">"Ayúdame a mejorar mi CV"</p>
                </div>
                <p className="mb-2 text-slate-200"><strong>Problemas:</strong></p>
                <ul className="space-y-1 text-slate-300">
                    <li>Demasiado vago</li>
                    <li>Sin contexto profesional</li>
                    <li>Sin objetivo específico</li>
                </ul>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
                <h4 className="font-bold mb-3 text-emerald-400">✅ Prompt efectivo:</h4>
                <div className="bg-slate-900/80 p-4 rounded-lg mb-4">
                    <p className="italic text-slate-300">"Soy un chef con 8 años de experiencia en restaurantes de comida rápida. He manejado equipos de hasta 12 personas, controlado inventarios y reducido desperdicios en un 20%. Quiero postular a un cargo de 'Supervisor de Operaciones' en una cadena de retail. Reformula mi experiencia laboral en 3 viñetas que resalten: (1) liderazgo de equipos, (2) gestión de recursos, (3) mejora de procesos. Usa terminología corporativa y mantén un tono profesional. Máximo 50 palabras por viñeta."</p>
                </div>
                <p className="mb-2 text-slate-200"><strong>Fortalezas:</strong></p>
                <ul className="space-y-1 text-slate-300">
                    <li>Contexto profesional detallado</li>
                    <li>Objetivo específico (tipo de cargo)</li>
                    <li>Formato claro (3 viñetas)</li>
                    <li>Restricciones precisas (tono, longitud)</li>
                </ul>
            </div>
        </div>
    </Accordion>

    <Accordion title="🔑 Principios clave de la ingeniería de prompts">
        <ol className="space-y-3">
            <li><strong>Especificidad sobre generalidad:</strong> Cuanto más específico sea el prompt, más relevante será la respuesta</li>
            <li><strong>Iteración es normal:</strong> Raramente el primer prompt produce resultados perfectos. Refine y ajuste según sea necesario</li>
            <li><strong>Proporcione ejemplos:</strong> Si es posible, incluya ejemplos del tipo de respuesta que espera</li>
            <li><strong>Solicite justificación:</strong> Pida a la IA que explique su razonamiento para detectar errores lógicos</li>
            <li><strong>Verificación es esencial:</strong> Nunca use resultados sin revisarlos críticamente. La IA puede "alucinar" información falsa</li>
        </ol>
    </Accordion>

    <h2 id="sec-0-9" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🌍 Democratización del acceso profesional</h2>
    
    <p>Una de las promesas más importantes de la IA generativa es la <strong>democratización del acceso</strong> a herramientas y servicios que antes estaban reservados para quienes podían pagar consultores especializados.</p>

    <InfoCard type="reflexion" title="🎯 ¿Quiénes se benefician?">
        <p className="mb-3">La IA generativa es especialmente valiosa para:</p>
        <ul className="space-y-2">
            <li><strong>Profesionales en transición:</strong> Personas que cambian de sector y necesitan "traducir" su experiencia</li>
            <li><strong>Trabajadores de oficios tradicionales:</strong> Gasfíteres, cocineros, choferes, estilistas que quieren formalizar su experiencia</li>
            <li><strong>Migrantes laborales:</strong> Personas que necesitan adaptar su historial profesional a nuevos contextos culturales</li>
            <li><strong>Profesionales sin acceso a redes:</strong> Quienes no tienen contactos en sus sectores objetivo</li>
            <li><strong>Emprendedores tempranos:</strong> Personas que inician proyectos sin presupuesto para servicios especializados</li>
        </ul>
    </InfoCard>

    <Accordion title="📊 Impacto en el mercado laboral chileno">
        <p className="mb-3">Según estudios de CEPAL (2024) y Deloitte (2025), la IA generativa está transformando el panorama laboral en América Latina:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard type="practica" title="Oportunidades">
                <ul className="space-y-1 text-sm">
                    <li>Reducción de brechas de acceso a herramientas avanzadas</li>
                    <li>Aceleración de procesos de búsqueda laboral</li>
                    <li>Mejora en la empleabilidad de grupos tradicionalmente excluidos</li>
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

    <h2 id="sec-0-10" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🤔 Preguntas de reflexión</h2>
    <InfoCard type="reflexion" title="Para profundizar en el capítulo">
        <ul className="list-disc ml-5 space-y-2 text-slate-300">
            <li>¿Cómo crees que el caso de SofIA se aplica a tu propia trayectoria profesional?</li>
            <li>¿Qué mitos sobre la IA te sorprendieron más y por qué?</li>
            <li>¿De qué manera podrías utilizar la ingeniería de prompts para mejorar tu comunicación profesional?</li>
        </ul>
    </InfoCard>
  </div>
);
