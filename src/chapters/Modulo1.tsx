import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const Modulo1Content = () => (
  <div className="prose-custom">
    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Fundamentos de la IA generativa</h1>
    <p className="text-xl text-slate-300 mb-8">El caso de SofIA y el diagnóstico de competencias</p>

    <AuthorNote>
      Esta guía nace de la necesidad de desmitificar la IA y acercarla a profesionales que, como SofIA, buscan herramientas prácticas para potenciar su carrera sin necesidad de ser expertos técnicos.
    </AuthorNote>

    <h2 id="sec-0-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🚀 Introducción: el caso de SofIA</h2>
    <p>La <strong>inteligencia artificial generativa</strong> representa una de las transformaciones tecnológicas más significativas de nuestra era. Este apunte explora sus fundamentos conceptuales, funcionamiento técnico y aplicaciones prácticas, utilizando como eje articulador el caso de <strong>SofIA</strong>: una profesional en transición laboral que utiliza herramientas de IA generativa para realizar su propio diagnóstico de competencias y optimizar su proceso de búsqueda de empleo.</p>

    <InfoCard type="idea" title="Idea central">
      <p>La IA generativa no es magia, ni debe reemplazar el pensamiento crítico humano. Es una <strong>herramienta de amplificación</strong> que, utilizada con comprensión conceptual y <GlossaryTerm term="Prompt">prompts</GlossaryTerm> efectivos, puede democratizar el acceso a capacidades profesionales antes reservadas para expertos.</p>
    </InfoCard>

    <h2 id="sec-0-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🧠 ¿Qué es la inteligencia artificial?</h2>
    <p>La Inteligencia Artificial (IA) es un campo de la informática que se enfoca en crear máquinas inteligentes que puedan realizar tareas que normalmente requieren inteligencia humana, como aprender, razonar y resolver problemas. Los sistemas de IA aprenden de grandes cantidades de datos, identifican patrones para hacer predicciones o tomar decisiones sin estar programados explícitamente para cada situación.</p>
    
    <Accordion title="🌟 La IA en la vida cotidiana">
      <p>La IA no es ciencia ficción ni se limita a los chatbots. Usamos la IA todos los días en apps de navegación como Google Maps, recomendaciones personalizadas en sitios de compras, filtros de spam en el correo electrónico y asistentes virtuales. Nos ayuda a resolver desafíos difíciles, desde acelerar la investigación médica hasta crear cadenas de suministro más eficientes.</p>
    </Accordion>

    <h2 id="sec-0-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🤖 Modelos y agentes de IA</h2>
    
    <Accordion title="📦 ¿Qué es un modelo de IA?">
      <p>Un <strong>modelo de IA</strong> es un programa que ha sido entrenado con un conjunto de datos para reconocer determinados patrones o tomar decisiones sin más intervención humana. Aplican diferentes algoritmos a las entradas de datos para lograr las salidas para las que han sido programados.</p>
      <InfoCard type="definicion" title="Algoritmos vs. Modelos">
        <p>Los <strong>algoritmos</strong> son procedimientos lógicos o matemáticos que se aplican a un conjunto de datos. Los <strong>modelos</strong> son el resultado (output) de un algoritmo que se ha aplicado a un conjunto de datos. En términos sencillos, un modelo de IA se utiliza para hacer predicciones o tomar decisiones y un algoritmo es la lógica con la que funciona ese modelo.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="🕵️‍♂️ ¿Qué son los agentes de IA?">
      <p>Un <strong>agente de IA</strong> es un sistema diseñado para operar de forma autónoma, capaz de percibir su entorno, tomar decisiones basadas en esa información y ejecutar acciones para alcanzar objetivos específicos sin intervención humana constante.</p>
      
      <div className="mt-4 space-y-3">
        <p><strong>Ciclo fundamental del agente:</strong></p>
        <ul className="list-decimal list-inside space-y-1 ml-2">
          <li><strong>Percibir:</strong> Recopila datos de su entorno (sensores, APIs, bases de datos).</li>
          <li><strong>Decidir:</strong> Procesa la información mediante modelos de IA para determinar la mejor acción.</li>
          <li><strong>Actuar:</strong> Ejecuta la acción (enviar un correo, modificar un archivo, controlar un dispositivo).</li>
        </ul>
      </div>

      <p className="mt-4 font-semibold">Ejemplos concretos en acción:</p>
      <div className="space-y-4 mt-2">
        <InfoCard type="practica" title="1. Agente de Productividad (Gestor de reuniones)">
          <p><strong>Entorno:</strong> Calendario y correo electrónico del usuario.</p>
          <p><strong>Decisión:</strong> Analiza solicitudes de reunión entrantes y cruza disponibilidad con otras citas.</p>
          <p><strong>Acción:</strong> Propone horarios óptimos y envía invitaciones automáticamente.</p>
        </InfoCard>
        <InfoCard type="practica" title="2. Agente de Atención al Cliente (E-commerce)">
          <p><strong>Entorno:</strong> Chat en vivo del sitio web y base de datos de pedidos.</p>
          <p><strong>Decisión:</strong> Identifica la intención del cliente (ej. solicitud de devolución) y verifica el estado del pedido.</p>
          <p><strong>Acción:</strong> Procesa el reembolso o escala el caso a un humano si es complejo.</p>
        </InfoCard>
        <InfoCard type="practica" title="3. Agente de Análisis de Datos (Financiero)">
          <p><strong>Entorno:</strong> Reportes financieros y APIs de mercado en tiempo real.</p>
          <p><strong>Decisión:</strong> Detecta anomalías o tendencias inusuales en los datos financieros.</p>
          <p><strong>Acción:</strong> Genera un informe resumido con alertas y recomendaciones estratégicas.</p>
        </InfoCard>
      </div>

      <p className="mt-4 font-semibold">Arquitecturas y Sistemas:</p>
      <ul className="list-disc list-inside space-y-2 mt-1">
        <li><strong>Arquitectura agéntica:</strong> Define cómo el agente planifica, utiliza herramientas y mantiene memoria de largo plazo.</li>
        <li><strong>Sistemas multiagente:</strong> Grupos de agentes especializados que colaboran (ej. un agente investiga, otro redacta y un tercero revisa) para resolver tareas complejas.</li>
        <li><strong>RAG agentiva:</strong> Agentes que consultan fuentes externas dinámicamente para mejorar sus respuestas.</li>
      </ul>
    </Accordion>

    <h2 id="sec-0-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">✨ ¿Qué es la inteligencia artificial generativa?</h2>
    
    <InfoCard type="definicion" title="Definición">
      <p>La <GlossaryTerm term="IA generativa">IA generativa</GlossaryTerm> es una rama de la inteligencia artificial que tiene la capacidad de <strong>crear contenido original y novedoso</strong> —como textos, imágenes, audio o código— a partir de patrones aprendidos de grandes cantidades de datos.</p>
    </InfoCard>

    <Accordion title="🔍 Características clave de la IA generativa">
      <ul className="list-disc list-inside space-y-3">
          <li><strong>Creatividad algorítmica:</strong> No replica, sino que genera contenido nuevo basándose en patrones aprendidos</li>
          <li><strong>Adaptabilidad contextual:</strong> Ajusta sus respuestas según el contexto y las instrucciones recibidas</li>
          <li><strong>Escalabilidad:</strong> Puede procesar y generar grandes volúmenes de contenido en poco tiempo</li>
          <li><strong><GlossaryTerm term="Multimodalidad">Multimodalidad</GlossaryTerm>:</strong> Algunas versiones pueden trabajar con múltiples tipos de datos simultáneamente (texto, imagen, audio)</li>
      </ul>
    </Accordion>

    <Accordion title="⚠️ Limitaciones importantes">
      <InfoCard type="conexion" title="Lo que la IA generativa NO hace:">
        <ul className="list-disc list-inside space-y-2">
            <li>No comprende el significado real de lo que genera</li>
            <li>No tiene conciencia ni intencionalidad</li>
            <li>No puede verificar la veracidad de sus propias respuestas</li>
            <li>No tiene juicio ético autónomo</li>
            <li>Puede generar <GlossaryTerm term="Alucinaciones">alucinaciones</GlossaryTerm> (información falsa presentada con confianza)</li>
        </ul>
      </InfoCard>
    </Accordion>

    <h2 id="sec-0-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🚫 Mitos de la IA</h2>
    
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

    <h2 id="sec-0-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">⚙️ Funcionamiento técnico: ¿cómo funciona realmente?</h2>
    
    <Accordion title="🧬 Arquitectura Transformer">
        <p className="mb-3">Los modelos de lenguaje generativo modernos se basan en la arquitectura <strong>Transformer</strong> (Vaswani et al., 2017), que revolucionó el procesamiento de lenguaje natural.</p>
        <InfoCard type="definicion" title="Componentes clave:">
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Mecanismo de atención:</strong> Permite al modelo "enfocarse" en las partes relevantes del contexto</li>
                <li><strong>Codificación posicional:</strong> Mantiene el orden de las palabras en la secuencia</li>
                <li><strong>Capas de procesamiento:</strong> Múltiples capas que refinan progresivamente la representación del lenguaje</li>
            </ul>
        </InfoCard>
    </Accordion>

    <Accordion title="📚 Proceso de entrenamiento">
        <div className="space-y-4">
            <InfoCard type="practica" title="Fase 1: Preentrenamiento">
                <p>El modelo es entrenado con <strong>vastos corpus de texto</strong> (libros, artículos, sitios web) para aprender patrones lingüísticos, estructuras gramaticales y conocimiento general.</p>
            </InfoCard>
            <InfoCard type="practica" title="Fase 2: Afinamiento (Fine-tuning)">
                <p>Se especializa el modelo con <strong>datos específicos</strong> de tareas o dominios particulares, mejorando su desempeño en contextos específicos.</p>
            </InfoCard>
            <InfoCard type="practica" title="Fase 3: RLHF (Aprendizaje por refuerzo con retroalimentación humana)">
                <p>Evaluadores humanos califican las respuestas del modelo, permitiendo que aprenda a generar respuestas más útiles, seguras y alineadas con valores humanos (Cevallos et al., 2023).</p>
            </InfoCard>
        </div>
    </Accordion>

    <Accordion title="🎲 Generación de respuestas">
        <p className="mb-3">La IA generativa no "piensa" ni "comprende". En cambio:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Procesa el texto de entrada (<GlossaryTerm term="Prompt">prompt</GlossaryTerm>) convirtiéndolo en representaciones numéricas</li>
            <li>Calcula <strong>probabilidades</strong> de qué palabra debería seguir en la secuencia</li>
            <li>Selecciona palabras basándose en estas probabilidades (con algún grado de aleatoriedad controlada)</li>
            <li>Repite el proceso hasta completar la respuesta</li>
        </ol>
        <InfoCard type="idea" title="Metáfora clave">
            <p>Es como un "autocomplete ultra sofisticado" que predice la continuación más probable del texto basándose en patrones estadísticos, no en comprensión genuina.</p>
        </InfoCard>
    </Accordion>

    <h2 id="sec-0-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🎯 Aplicación práctica: el diagnóstico de competencias con SofIA</h2>
    
    <InfoCard type="reflexion" title="🤖 El caso de SofIA">
        <p><strong>SofIA</strong> es una profesional en transición laboral que utiliza herramientas de IA generativa para realizar su propio <strong>diagnóstico de competencias</strong>: analizar su historial laboral, extraer las competencias subyacentes y mapearlas con las palabras clave que buscan los empleadores en ofertas de trabajo específicas.</p>
    </InfoCard>

    <Accordion title="🔎 ¿Por qué el diagnóstico de competencias es crucial?">
        <p className="mb-3">Muchos profesionales tienen <strong>experiencia valiosa</strong> pero no saben cómo:</p>
        <ul className="list-disc list-inside space-y-2">
            <li>Identificar qué competencias demuestran sus experiencias previas</li>
            <li>Expresarlas en el lenguaje que entienden los sistemas ATS (Applicant Tracking Systems)</li>
            <li>Conectar su experiencia con los requisitos de ofertas laborales</li>
            <li>Reformular sus CV y cartas de presentación de manera estratégica</li>
        </ul>
        <InfoCard type="conexion" title="Ejemplo real:">
            <p>Un gasfíter con 15 años de experiencia puede tener competencias en:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
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
        <ul className="list-disc list-inside space-y-3">
            <li><strong>Escalabilidad personal:</strong> Permite analizar múltiples versiones del CV y explorar diferentes enfoques profesionales simultáneamente</li>
            <li><strong>Actualización constante:</strong> Acceso a información actualizada sobre tendencias del mercado laboral y lenguaje corporativo vigente</li>
            <li><strong>Personalización inmediata:</strong> Adaptación del lenguaje al sector y nivel profesional específico de cada oferta</li>
            <li><strong>Democratización del acceso:</strong> Herramientas antes disponibles solo a través de servicios costosos de coaching profesional</li>
            <li><strong>Iteración rápida:</strong> Posibilidad de probar múltiples versiones de CV, cartas y perfiles en minutos</li>
        </ul>
    </Accordion>

    <h2 id="sec-0-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">✍️ Ingeniería de prompts: la clave del éxito</h2>
    
    <InfoCard type="idea" title="La importancia del Prompt">
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
                <ul className="list-disc list-inside space-y-1 text-slate-300">
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
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Contexto profesional detallado</li>
                    <li>Objetivo específico (tipo de cargo)</li>
                    <li>Formato claro (3 viñetas)</li>
                    <li>Restricciones precisas (tono, longitud)</li>
                </ul>
            </div>
        </div>
    </Accordion>

    <Accordion title="🔑 Principios clave de la ingeniería de prompts">
        <ol className="list-decimal list-inside space-y-3">
            <li><strong>Especificidad sobre generalidad:</strong> Cuanto más específico sea el prompt, más relevante será la respuesta</li>
            <li><strong>Iteración es normal:</strong> Raramente el primer prompt produce resultados perfectos. Refine y ajuste según sea necesario</li>
            <li><strong>Proporcione ejemplos:</strong> Si es posible, incluya ejemplos del tipo de respuesta que espera</li>
            <li><strong>Solicite justificación:</strong> Pida a la IA que explique su razonamiento para detectar errores lógicos</li>
            <li><strong>Verificación es esencial:</strong> Nunca use resultados sin revisarlos críticamente. La IA puede "alucinar" información falsa</li>
        </ol>
    </Accordion>

    <h2 id="sec-0-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🌍 Democratización del acceso profesional</h2>
    
    <p>Una de las promesas más importantes de la IA generativa es la <strong>democratización del acceso</strong> a herramientas y servicios profesionales que antes estaban reservados para quienes podían pagar consultores especializados.</p>

    <InfoCard type="reflexion" title="🎯 ¿Quiénes se benefician?">
        <p className="mb-3">La IA generativa es especialmente valiosa para:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Profesionales en transición:</strong> Personas que cambian de sector y necesitan "traducir" su experiencia</li>
            <li><strong>Trabajadores de oficios tradicionales:</strong> Gasfíteres, cocineros, choferes, estilistas que quieren formalizar su experiencia</li>
            <li><strong>Migrantes laborales:</strong> Personas que necesitan adaptar su historial profesional a nuevos contextos culturales</li>
            <li><strong>Profesionales sin acceso a redes:</strong> Quienes no tienen contactos en sus sectores objetivo</li>
            <li><strong>Emprendedores tempranos:</strong> Personas que inician proyectos sin presupuesto para servicios profesionales</li>
        </ul>
    </InfoCard>

    <Accordion title="📊 Impacto en el mercado laboral chileno">
        <p className="mb-3">Según estudios de CEPAL (2024) y Deloitte (2025), la IA generativa está transformando el panorama laboral en América Latina:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard type="practica" title="Oportunidades">
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Reducción de brechas de acceso a herramientas profesionales</li>
                    <li>Aceleración de procesos de búsqueda laboral</li>
                    <li>Mejora en la empleabilidad de grupos tradicionalmente excluidos</li>
                </ul>
            </InfoCard>
            <InfoCard type="conexion" title="Desafíos">
                <ul className="list-disc list-inside space-y-1 text-sm">
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
  </div>
);
