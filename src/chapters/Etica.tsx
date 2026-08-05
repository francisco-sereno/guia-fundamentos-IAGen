import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';
import { EticaSpectrumMatrix } from '../components/InteractiveComponents';
import { HelpCircle, UserCheck, ShieldCheck, Scale, AlertTriangle, BookOpen, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const EticaContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      La tecnología avanza rápido, pero nuestra integridad debe ser la brújula. En esta sección exploramos cómo las personas pueden usar la IA de forma honesta, manteniendo su esencia mientras navegan sistemas automatizados.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ética y responsabilidad en la era de la IA generativa</h1>
    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Navegando los desafíos morales de la automatización inteligente.</p>

    <h2 id="sec-etica-0" className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Scale size={24} /> 1. Introducción
    </h2>
    <p>En la era de la inteligencia artificial generativa, muchas personas enfrentan un dilema existencial y ético: ¿cómo utilizar estas poderosas herramientas tecnológicas sin comprometer la autenticidad personal y los principios éticos fundamentales? Esta guía examina críticamente las tensiones entre eficiencia tecnológica e integridad.</p>

    <div className="grid md:grid-cols-3 gap-6 mt-8 mb-8">
        <InfoCard type="idea" title="Objetivo">
            <p className="text-sm">Desarrollar competencias críticas para el uso ético de IA generativa en contextos de búsqueda de herramientas y oportunidades.</p>
        </InfoCard>
        <InfoCard type="conexion" title="Desafío">
            <p className="text-sm">Equilibrar la eficiencia tecnológica con la autenticidad y responsabilidad personal.</p>
        </InfoCard>
        <InfoCard type="practica" title="Propuesta">
            <p className="text-sm">Un marco ético fundamentado en estándares internacionales y reflexión crítica.</p>
        </InfoCard>
    </div>

    <h2 id="sec-etica-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <HeartHandshake size={24} /> 2. Caso de estudio: El dilema de SofIA
    </h2>
    
    <InfoCard type="reflexion" title="Contexto del caso">
        <p className="mb-4">SofIA es una <GlossaryTerm term="Docente de educación secundaria"><strong>docente de educación secundaria</strong></GlossaryTerm> con amplia trayectoria en aula y coordinación pedagógica que busca reorientarse hacia el <GlossaryTerm term="Diseño instruccional"><strong>diseño instruccional</strong></GlossaryTerm> y proyectos de <GlossaryTerm term="EdTech"><strong>tecnología educativa (EdTech)</strong></GlossaryTerm>. A pesar de su experiencia comprobada, enfrenta un obstáculo recurrente en su proceso de articulación: sus propuestas de proyectos son sistemáticamente rechazadas por sistemas de evaluación algorítmica debido a que su portafolio pedagógico describe sus logros en jerga docente tradicional de enseñanza secundaria y no utiliza las palabras clave específicas que las plataformas priorizan.</p>
        <p>Durante los últimos seis meses, ha enviado más de 40 propuestas a proyectos para las cuales se considera plenamente calificada, recibiendo respuestas de menos del 10%. La frustración la lleva a investigar sobre los sistemas de evaluación algorítmica y descubre que su perfil profesional carece del lenguaje específico que estas plataformas buscan.</p>
    </InfoCard>

    <Accordion title="Preguntas centrales del dilema" icon={HelpCircle}>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>¿Es ético usar una <GlossaryTerm term="IA generativa"><strong>IA generativa</strong></GlossaryTerm> para redactar logros pedagógicos que, aunque reales, están expresados en terminología que SofIA nunca usaría habitualmente?</li>
            <li>¿Dónde termina la "optimización de competencias" y dónde empieza la "falta de autenticidad"?</li>
            <li>¿Usar <GlossaryTerm term="Ingeniería de prompts"><strong>ingeniería de prompts</strong></GlossaryTerm> para adaptar su portafolio al perfil EdTech equivale a "engañar al sistema"?</li>
        </ul>
    </Accordion>

    <Accordion title="El conflicto interior" icon={UserCheck}>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li><GlossaryTerm term="Mapeo de competencias"><strong>Presión:</strong></GlossaryTerm> Necesita participar en nuevos proyectos para sostener su desarrollo profesional y está cansada de ser descartada por algoritmos de evaluación sin revisión humana.</li>
            <li><GlossaryTerm term="Sesgos"><strong>Duda ética:</strong></GlossaryTerm> Teme que usar IA para "embellecer" o traducirse al lenguaje corporativo constituya una forma de engaño profesional.</li>
            <li><GlossaryTerm term="Alineación"><strong>Identidad:</strong></GlossaryTerm> Se pregunta si el documento resultante realmente representa su identidad docente o si se convertirá en una versión artificialmente fabricada de sí misma.</li>
        </ul>
    </Accordion>

    <h2 id="sec-etica-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <AlertTriangle size={24} /> 3. La crisis de la "caja negra": interpretabilidad y sesgos algorítmicos
    </h2>
    <p>A medida que los modelos de IA se vuelven más profundos y paramétricamente densos, surge un problema fundamental: la pérdida de interpretabilidad. Operan como "cajas negras" donde incluso sus creadores no pueden rastrear exactamente cómo una entrada específica produjo una salida determinada.</p>

    <Accordion title="Interpretabilidad vs. explicabilidad" icon={ShieldCheck}>
        <div className="space-y-4">
            <InfoCard type="definicion" title="Interpretabilidad (el 'cómo')">
                <p>Es una propiedad intrínseca del modelo. Un modelo es interpretable si un humano puede comprender su mecánica interna (ej. un árbol de decisión simple). Las redes neuronales profundas tienen interpretabilidad casi nula.</p>
            </InfoCard>
            <InfoCard type="definicion" title="Explicabilidad (el 'por qué')">
                <p>Es una propiedad extrínseca. Implica crear herramientas o modelos secundarios que intentan justificar las decisiones de la caja negra en términos comprensibles para los humanos (ej. "El crédito fue denegado porque la variable 'ingresos' tuvo el mayor peso negativo").</p>
            </InfoCard>
        </div>
    </Accordion>

    <h2 id="sec-etica-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <UserCheck size={24} /> 4. Los sistemas de evaluación algorítmica: ¿eficiencia o sesgo?
    </h2>
    <p>Los sistemas de evaluación algorítmica son plataformas que automatizan la gestión de procesos de integración en proyectos. Utilizan <GlossaryTerm term="Algoritmo">algoritmos</GlossaryTerm> de procesamiento de lenguaje natural (PLN) e inteligencia artificial para analizar portafolios y perfiles, identificar palabras clave relevantes y clasificar perfiles.</p>

    <Accordion title="¿Cómo funcionan los sistemas de evaluación?" icon={BookOpen}>
        <div className="space-y-4">
            <InfoCard type="definicion" title="1. Análisis inicial">
                <p>El sistema analiza el portafolio mediante análisis léxico, identificando palabras clave, roles docentes, instituciones, duración de proyectos y competencias técnicas.</p>
            </InfoCard>
            <InfoCard type="definicion" title="2. Puntuación algorítmica">
                <p>Asigna una puntuación de compatibilidad basada en: coincidencia con palabras clave de la descripción del proyecto, presencia de competencias requeridas, estructura cronológica de la trayectoria pedagógica y ausencia de "banderas rojas".</p>
            </InfoCard>
            <InfoCard type="definicion" title="3. Clasificación y filtrado">
                <p>Los perfiles son clasificados en categorías. Solo los perfiles con puntuaciones superiores a un umbral predeterminado llegan a revisión humana en el comité.</p>
            </InfoCard>
        </div>
    </Accordion>

    <InfoCard type="idea" title="El problema de los sesgos algorítmicos">
        <p>El caso de Amazon (2018) ilustra dramáticamente los riesgos del <GlossaryTerm term="Sesgos">sesgo algorítmico</GlossaryTerm> en evaluación de proyectos. La empresa desarrolló un sistema de IA para automatizar la revisión de perfiles de ingenieros de software. Sin embargo, descubrieron que el sistema penalizaba sistemáticamente a perfiles de mujeres porque fue entrenado con datos históricos dominados por hombres.</p>
    </InfoCard>

    <Accordion title="Tipos de sesgos documentados en evaluación algorítmica" icon={AlertTriangle}>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li><strong>Sesgo de género:</strong> Preferencia implícita por términos o trayectorias tradicionalmente masculinas.</li>
            <li><strong>Sesgo de prestigio:</strong> Sobrevaloración de ciertas universidades o empresas de renombre, ignorando el talento de otras instituciones.</li>
            <li><strong>Sesgo de brecha profesional:</strong> Penalización automática de periodos de inactividad (como cuidados familiares), que afectan desproporcionadamente a las mujeres.</li>
            <li><strong>Sesgo racial y étnico:</strong> Discriminación basada en nombres que suenan "étnicos" o códigos postales asociados con comunidades minoritarias.</li>
        </ul>
    </Accordion>

    <h2 id="sec-etica-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <ShieldCheck size={24} /> 5. Marcos éticos: UNESCO, DECIDE-IA y PotencIA
    </h2>
    <p className="mb-6">La <em>Recomendación sobre la ética de la inteligencia artificial</em> de la UNESCO, en articulación con el <GlossaryTerm term="DECIDE-IA"><strong>Marco DECIDE-IA</strong></GlossaryTerm> y el <GlossaryTerm term="PotencIA"><strong>Marco PotencIA</strong></GlossaryTerm>, constituye la referencia normativa para guiar la práctica de la o el <GlossaryTerm term="Docente de educación secundaria"><strong>docente de educación secundaria</strong></GlossaryTerm>. Garantizan que el uso de la IA promueva la rendición de cuentas, la transparencia y la equidad pedagógica.</p>

    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="p-5 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Proporcionalidad e inocuidad</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">El uso de la IA no debe exceder lo necesario para lograr un objetivo legítimo ni causar daño a terceros.</p>
      </div>
      <div className="p-5 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Transparencia y explicabilidad</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">Debemos ser capaces de entender y explicar por qué una IA tomó cierta decisión o generó cierto contenido.</p>
      </div>
      <div className="p-5 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Responsabilidad y rendición de cuentas</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">Los humanos siempre deben ser los responsables finales de las decisiones tomadas con ayuda de la IA.</p>
      </div>
      <div className="p-5 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Equidad y no discriminación</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">Asegurar que los beneficios de la IA sean accesibles para todos y no refuercen desigualdades existentes.</p>
      </div>
    </div>

    <h2 id="sec-etica-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <BookOpen size={24} /> 6. Para reflexionar: La ética del prompt
    </h2>
    <p>La capacidad de influir en las salidas de la IA a través de la ingeniería de prompts conlleva una responsabilidad ética significativa. No se trata solo de <em>qué</em> podemos obtener, sino de <em>cómo</em> lo obtenemos y <em>para qué</em> lo usamos.</p>
    
    <div className="space-y-4 mt-6">
      <Accordion title="6.1 La delgada línea de la veracidad" icon={CheckCircle2}>
        <p>¿Es aceptable usar un prompt para "embellecer" una experiencia pedagógica hasta el punto de que no refleje la realidad? La ética del prompt sugiere que la IA debe ser una herramienta de <strong>amplificación</strong> de la verdad, no de <strong>fabricación</strong> de la misma.</p>
      </Accordion>
      <Accordion title="6.2 Sesgos inducidos por el usuario" icon={AlertTriangle}>
        <p>A veces, nuestros propios prompts pueden inducir sesgos en la IA. Por ejemplo, pedirle que "redacte un perfil para un líder agresivo y dominante" puede forzar al modelo a recurrir a estereotipos de género perjudiciales.</p>
      </Accordion>
      <Accordion title="6.3 Propiedad intelectual y autoría" icon={Scale}>
        <p>¿Quién es el autor de un texto generado por IA? ¿El ingeniero que diseñó el prompt o el modelo que procesó la información? Este debate sigue abierto y redefine nuestra comprensión de la creatividad y el trabajo intelectual.</p>
      </Accordion>
    </div>

    <h2 id="sec-etica-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <Scale size={24} /> 7. Caso práctico: El espectro de la ética
    </h2>
    <p className="mb-6">Consideremos tres niveles de uso de la IA por parte de SofIA para la formulación de su perfil:</p>

    <div className="space-y-4">
      <div className="flex gap-4 items-start p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
        <div className="mt-1 text-emerald-600 dark:text-emerald-400 font-bold">Nivel 1</div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white">Uso ético (Asistente)</h5>
          <p className="text-sm text-slate-700 dark:text-slate-300">SofIA usa la IA para corregir la gramática de sus logros reales y sugerir sinónimos más profesionales. La esencia y los datos son 100% suyos.</p>
        </div>
      </div>

      <div className="flex gap-4 items-start p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
        <div className="mt-1 text-amber-600 dark:text-amber-400 font-bold">Nivel 2</div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white">Zona gris (Optimizador)</h5>
          <p className="text-sm text-slate-700 dark:text-slate-300">SofIA le pide a la IA que "traduzca" sus actividades de docencia de aula en educación secundaria al lenguaje corporativo de diseño instruccional y EdTech. El riesgo es que la IA exagere la relevancia de sus tareas previas.</p>
        </div>
      </div>

      <div className="flex gap-4 items-start p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
        <div className="mt-1 text-red-600 dark:text-red-400 font-bold">Nivel 3</div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white">Uso no ético (Fabricante)</h5>
          <p className="text-sm text-slate-700 dark:text-slate-300">SofIA le pide a la IA que invente logros con números específicos (ej. "aumenté la retención un 20%") que nunca ocurrieron, solo para pasar el filtro algorítmico.</p>
        </div>
      </div>
    </div>

    <EticaSpectrumMatrix />

    <AuthorNote>
      La tecnología es una herramienta poderosa, pero la integridad personal es el activo más valioso de SofIA. En un mundo de respuestas generadas por máquinas, la autenticidad humana se convierte en una ventaja competitiva.
    </AuthorNote>

    <h2 id="sec-etica-7" className="text-2xl font-bold mt-12 mb-6 text-indigo-800 dark:text-indigo-300 scroll-mt-24 flex items-center gap-2">
      <HelpCircle size={24} /> Preguntas de reflexión
    </h2>
    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
        <li>Si supieras que un evaluador de proyectos usa IA para descartar portafolios, ¿cambiaría eso tu perspectiva sobre usar IA para redactar el tuyo?</li>
        <li>¿Cómo puedes asegurar que tu uso de la IA sea transparente y honesto?</li>
        <li>¿Qué principios del marco de la UNESCO te parecen más difíciles de aplicar en la práctica diaria?</li>
      </ul>
    </div>
  </div>
);

