import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const EticaContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      La tecnología avanza rápido, pero nuestra integridad debe ser la brújula. En esta sección exploramos cómo las personas pueden usar la IA de forma honesta, manteniendo su esencia mientras navegan sistemas automatizados.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Autenticidad y ética en la IA generativa</h1>
    <p className="text-xl text-slate-300 mb-8">Navegando dilemas éticos en contratación algorítmica</p>

    <h2 id="sec-etica-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🎯 Introducción</h2>
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

    <h2 id="sec-etica-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">📖 Caso de estudio: el dilema de SofIA</h2>
    
    <InfoCard type="reflexion" title="Contexto del caso">
        <p className="mb-4">SofIA es una profesional en transición laboral, con amplia experiencia en gestión de proyectos. A pesar de su trayectoria comprobada, enfrenta un obstáculo recurrente en su proceso de reinserción: sus postulaciones son sistemáticamente rechazadas por sistemas ATS (Applicant Tracking Systems) debido a que su currículum no utiliza las palabras clave específicas que estos algoritmos priorizan.</p>
        <p>Durante los últimos seis meses, ha enviado más de 40 postulaciones a posiciones para las cuales se considera plenamente calificada, recibiendo respuestas de menos del 10%. La frustración la lleva a investigar sobre los ATS y descubre que su CV carece del lenguaje algorítmico que estas herramientas buscan.</p>
    </InfoCard>

    <Accordion title="❓ Preguntas centrales del dilema">
        <ul className="space-y-2 text-slate-300">
            <li>¿Usar IAGen para modificar su CV es ético o equivale a "engañar al sistema"?</li>
            <li>¿Dónde está el límite entre optimización legítima y fabricación de información?</li>
        </ul>
    </Accordion>

    <Accordion title="🎭 El conflicto interior">
        <ul className="space-y-3 text-slate-300">
            <li><strong>Presión:</strong> Necesita empleo para sostener a su familia y está cansada de ser rechazada por sistemas automatizados.</li>
            <li><strong>Duda ética:</strong> Teme que usar IA para "embellecer" su experiencia constituya una forma de engaño profesional.</li>
            <li><strong>Identidad:</strong> Se pregunta si el documento resultante realmente la representa o si se convertirá en una versión artificialmente fabricada de sí misma.</li>
        </ul>
    </Accordion>

    <h2 id="sec-etica-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">I. La crisis de la "caja negra": interpretabilidad y sesgos algorítmicos</h2>
    <p>A medida que los modelos de IA se vuelven más profundos y paramétricamente densos, surge un problema fundamental: la pérdida de interpretabilidad. Operan como "cajas negras" donde incluso sus creadores no pueden rastrear exactamente cómo una entrada específica produjo una salida determinada.</p>

    <Accordion title="Interpretabilidad vs. explicabilidad">
        <div className="space-y-4">
            <InfoCard type="definicion" title="Interpretabilidad (el 'cómo')">
                <p>Es una propiedad intrínseca del modelo. Un modelo es interpretable si un humano puede comprender su mecánica interna (ej. un árbol de decisión simple). Las redes neuronales profundas tienen interpretabilidad casi nula.</p>
            </InfoCard>
            <InfoCard type="definicion" title="Explicabilidad (el 'por qué')">
                <p>Es una propiedad extrínseca. Implica crear herramientas o modelos secundarios que intentan justificar las decisiones de la caja negra en términos comprensibles para los humanos (ej. "El crédito fue denegado porque la variable 'ingresos' tuvo el mayor peso negativo").</p>
            </InfoCard>
        </div>
    </Accordion>

    <h2 id="sec-etica-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">II. Los sistemas ATS: ¿eficiencia o sesgo algorítmico?</h2>
    <p>Los Applicant Tracking Systems (ATS) son software que automatizan la gestión de procesos de contratación. Utilizan <GlossaryTerm term="Algoritmo">algoritmos</GlossaryTerm> de procesamiento de lenguaje natural (PLN) e inteligencia artificial para analizar currículos, identificar palabras clave relevantes y clasificar candidatos.</p>

    <Accordion title="¿Cómo funcionan los ATS?">
        <div className="space-y-4">
            <InfoCard type="definicion" title="1. Análisis inicial">
                <p>El sistema analiza el currículum mediante análisis léxico, identificando palabras clave, títulos de trabajo, nombres de empresas, duración de empleos y habilidades técnicas.</p>
            </InfoCard>
            <InfoCard type="definicion" title="2. Puntuación algorítmica">
                <p>Asigna una puntuación de compatibilidad basada en: coincidencia con palabras clave de la descripción del puesto, presencia de calificaciones requeridas, estructura cronológica del historial laboral y ausencia de "banderas rojas".</p>
            </InfoCard>
            <InfoCard type="definicion" title="3. Clasificación y filtrado">
                <p>Los candidatos son clasificados en categorías. Solo los perfiles con puntuaciones superiores a un umbral predeterminado llegan a revisión humana.</p>
            </InfoCard>
        </div>
    </Accordion>

    <InfoCard type="idea" title="El problema de los sesgos algorítmicos">
        <p>El caso de Amazon (2018) ilustra dramáticamente los riesgos del <GlossaryTerm term="Sesgos">sesgo algorítmico</GlossaryTerm> en contratación. La empresa desarrolló un sistema de IA para automatizar la revisión de currículos de ingenieros de software. Sin embargo, descubrieron que el sistema penalizaba sistemáticamente a candidatas mujeres porque fue entrenado con datos históricos dominados por hombres.</p>
    </InfoCard>

    <Accordion title="Tipos de sesgos documentados en ATS">
        <ul className="space-y-3 text-slate-300">
            <li><strong>Sesgo de género:</strong> Penalización de lagunas laborales (que afectan desproporcionadamente a mujeres), favorecimiento de lenguaje "asertivo" sobre "colaborativo".</li>
            <li><strong>Sesgo racial y étnico:</strong> Discriminación basada en nombres que suenan "étnicos" o códigos postales asociados con comunidades minoritarias.</li>
            <li><strong>Sesgo por edad:</strong> Discriminación contra candidatos mayores si los datos de entrenamiento favorecen contrataciones recientes de personas jóvenes.</li>
            <li><strong>Sesgo por discapacidad:</strong> Penalización de historiales laborales no tradicionales o rechazo de formatos de CV adaptados para tecnologías de asistencia.</li>
        </ul>
    </Accordion>

    <h2 id="sec-etica-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">III. El ecosistema de la IAGen para optimización de CV</h2>
    
    <Accordion title="Tipos de herramientas de IAGen disponibles">
        <div className="grid md:grid-cols-2 gap-6">
            <InfoCard type="practica" title="Reescritores de CV">
                <p>Reformulan descripciones de experiencia laboral usando lenguaje más "profesional" o "corporativo".</p>
            </InfoCard>
            <InfoCard type="practica" title="Optimizadores de palabras clave">
                <p>Analizan descripciones de trabajo y sugieren palabras clave específicas que el ATS probablemente busque.</p>
            </InfoCard>
            <InfoCard type="practica" title="Generadores de cartas de presentación">
                <p>Crean cartas de presentación completas basadas en el CV del candidato y la descripción del puesto.</p>
            </InfoCard>
            <InfoCard type="practica" title="Analizadores de compatibilidad ATS">
                <p>Puntúan el CV del candidato simulando el análisis que haría un ATS real.</p>
            </InfoCard>
        </div>
    </Accordion>

    <h3 className="text-xl font-bold mt-6 mb-4 text-indigo-300">El continuo ético: de la optimización legítima a la fabricación</h3>
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-800 text-slate-200">
                    <th className="p-3 border border-slate-700">Zona ética</th>
                    <th className="p-3 border border-slate-700">Descripción</th>
                    <th className="p-3 border border-slate-700">Ejemplos</th>
                </tr>
            </thead>
            <tbody className="text-slate-300">
                <tr>
                    <td className="p-3 border border-slate-700 text-emerald-400 font-bold">✅ Claramente aceptable</td>
                    <td className="p-3 border border-slate-700">Uso de IA para mejorar la presentación sin alterar hechos.</td>
                    <td className="p-3 border border-slate-700">Corrección gramatical, mejora de formato, traducción precisa de terminología técnica a lenguaje común.</td>
                </tr>
                <tr>
                    <td className="p-3 border border-slate-700 text-blue-400 font-bold">⚖️ Zona gris</td>
                    <td className="p-3 border border-slate-700">Reformulación de experiencias que exagera sutilmente el nivel de responsabilidad.</td>
                    <td className="p-3 border border-slate-700">"Coordiné envíos" → "Orquesté operaciones logísticas complejas"; verdadero en esencia pero amplificado en escala percibida.</td>
                </tr>
                <tr>
                    <td className="p-3 border border-slate-700 text-amber-400 font-bold">⚠️ Problemático</td>
                    <td className="p-3 border border-slate-700">Agregar habilidades o experiencias no completamente veraces.</td>
                    <td className="p-3 border border-slate-700">Listar "dominio avanzado de Python" cuando solo se completó un curso introductorio.</td>
                </tr>
                <tr>
                    <td className="p-3 border border-slate-700 text-red-400 font-bold">❌ Claramente inaceptable</td>
                    <td className="p-3 border border-slate-700">Fabricación de información falsa.</td>
                    <td className="p-3 border border-slate-700">Inventar títulos académicos, falsificar empleadores, crear proyectos inexistentes.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2 id="sec-etica-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">IV. Marco ético de la UNESCO para la inteligencia artificial</h2>
    <p className="mb-6">La <em>Recomendación sobre la ética de la inteligencia artificial</em>, adoptada por la UNESCO en 2021, constituye el primer instrumento normativo mundial sobre esta materia. Proporciona un marco universal de valores y principios para orientar el desarrollo de la IA de manera responsable.</p>

    <div className="space-y-4 mb-8">
        <Accordion title="💎 Valores fundamentales">
            <div className="grid md:grid-cols-2 gap-4 p-2">
                <InfoCard type="definicion" title="Derechos humanos y dignidad">
                    <p className="text-sm">Respeto, protección y promoción de los derechos humanos, las libertades fundamentales y la dignidad humana como base inalienable.</p>
                </InfoCard>
                <InfoCard type="definicion" title="Medio ambiente y ecosistemas">
                    <p className="text-sm">Reconocimiento de la necesidad existencial de proteger el medio ambiente y los ecosistemas para el disfrute de los beneficios de la IA.</p>
                </InfoCard>
                <InfoCard type="definicion" title="Diversidad e inclusión">
                    <p className="text-sm">Garantizar la participación activa de todas las personas y grupos, independientemente de su origen, género o condición.</p>
                </InfoCard>
                <InfoCard type="definicion" title="Sociedades pacíficas y justas">
                    <p className="text-sm">Propiciar un futuro interconectado en beneficio de todos, basado en la solidaridad y la convivencia armónica.</p>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="⚖️ Principios rectores">
            <div className="grid md:grid-cols-2 gap-4 p-2">
                <div className="space-y-3">
                    <li className="text-sm text-slate-300"><strong>Proporcionalidad e inocuidad:</strong> El uso de la IA debe ser proporcional al objetivo legítimo y no causar daño.</li>
                    <li className="text-sm text-slate-300"><strong>Seguridad y protección:</strong> Evitar daños no deseados y vulnerabilidades a ataques durante todo el ciclo de vida.</li>
                    <li className="text-sm text-slate-300"><strong>Equidad y no discriminación:</strong> Promover la justicia social y combatir sesgos que exacerben desigualdades.</li>
                    <li className="text-sm text-slate-300"><strong>Sostenibilidad:</strong> Evaluar impactos humanos, sociales, culturales, económicos y ambientales.</li>
                    <li className="text-sm text-slate-300"><strong>Privacidad y protección de datos:</strong> Garantizar el control de las personas sobre su información personal.</li>
                </div>
                <div className="space-y-3">
                    <li className="text-sm text-slate-300"><strong>Supervisión y decisión humanas:</strong> La responsabilidad ética y jurídica debe recaer siempre en seres humanos.</li>
                    <li className="text-sm text-slate-300"><strong>Transparencia y explicabilidad:</strong> Los resultados de la IA deben ser inteligibles y sus criterios comprensibles.</li>
                    <li className="text-sm text-slate-300"><strong>Responsabilidad y rendición de cuentas:</strong> Atribución clara de consecuencias por las decisiones basadas en IA.</li>
                    <li className="text-sm text-slate-300"><strong>Sensibilización y educación:</strong> Fomentar la alfabetización digital y la capacitación en ética de la IA.</li>
                    <li className="text-sm text-slate-300"><strong>Gobernanza colaborativa:</strong> Participación de múltiples partes interesadas y cooperación internacional.</li>
                </div>
            </div>
        </Accordion>

        <Accordion title="🌍 Ámbitos de actuación política">
            <p className="text-sm text-slate-400 mb-4 px-2">La UNESCO identifica 11 áreas críticas donde los gobiernos y organizaciones deben actuar para asegurar una IA ética:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 mb-6">
                {[
                    "Evaluación del impacto ético", "Gobernanza y administración", "Política de datos",
                    "Cooperación internacional", "Medio ambiente", "Igualdad de género",
                    "Cultura", "Educación e investigación", "Comunicación e información",
                    "Economía y trabajo", "Salud y bienestar social"
                ].map((area, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-700 p-3 rounded-xl text-xs text-indigo-300 font-medium flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400">{index + 1}</div>
                        {area}
                    </div>
                ))}
            </div>
            
            <div className="space-y-4 px-2">
                <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-4 rounded-r-xl">
                    <h4 className="text-sm font-bold text-indigo-300 mb-1">👩‍💻 Igualdad de género</h4>
                    <p className="text-xs text-slate-400">Evitar que la IA exacerbe las brechas salariales o la representación desigual. Se deben asignar fondos para planes con perspectiva de género en el desarrollo de IA.</p>
                </div>
                <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                    <h4 className="text-sm font-bold text-emerald-300 mb-1">🎓 Educación e investigación</h4>
                    <p className="text-xs text-slate-400">Promover la adquisición de "competencias previas" (alfabetización básica, aritmética, ética) para que la población pueda usar la IA de forma empoderada.</p>
                </div>
                <div className="bg-amber-500/5 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <h4 className="text-sm font-bold text-amber-300 mb-1">💼 Economía y trabajo</h4>
                    <p className="text-xs text-slate-400">Garantizar una transición equitativa para empleados en riesgo mediante programas de perfeccionamiento y reconversión profesional.</p>
                </div>
            </div>
        </Accordion>
    </div>

    <InfoCard type="idea" title="Aplicación al dilema de SofIA">
        <p>Siguiendo el marco de la UNESCO, SofIA tiene derecho a la <strong>explicabilidad</strong> (entender por qué un ATS la rechaza) y a la <strong>supervisión humana</strong> (que su perfil no sea descartado sin una revisión final por una persona). Al mismo tiempo, ella debe actuar con <strong>responsabilidad</strong>, asegurando que el uso de herramientas de IA para optimizar su CV no vulnere la veracidad de su información.</p>
    </InfoCard>

    <h2 id="sec-etica-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">Definiciones clave según la UNESCO</h2>
    <p className="mb-6">Para comprender el alcance de la ética, la UNESCO establece definiciones precisas que delimitan responsabilidades:</p>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
        <InfoCard type="definicion" title="Sistemas de IA">
            <p className="text-sm">Tecnologías de procesamiento de información que integran modelos y algoritmos que producen una capacidad para aprender y realizar tareas cognitivas, dando lugar a resultados como la predicción y la adopción de decisiones en entornos materiales y virtuales.</p>
        </InfoCard>
        <InfoCard type="definicion" title="Actores de la IA">
            <p className="text-sm">Cualquier persona física o jurídica que participe en al menos una etapa del ciclo de vida de los sistemas de IA (investigadores, programadores, empresas, usuarios finales, etc.).</p>
        </InfoCard>
    </div>

    <Accordion title="🔄 El ciclo de vida de la IA">
        <p className="text-sm text-slate-300 mb-4">La ética no se aplica solo al uso final, sino a todas las etapas:</p>
        <div className="flex flex-wrap gap-2">
            {[
                "Investigación", "Concepción", "Desarrollo", "Despliegue", "Utilización", 
                "Mantenimiento", "Funcionamiento", "Comercialización", "Financiación", 
                "Seguimiento", "Evaluación", "Validación", "Desmontaje"
            ].map((etapa, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400">
                    {etapa}
                </span>
            ))}
        </div>
    </Accordion>

    <h2 id="sec-etica-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">V. Análisis de casos prácticos</h2>
    
    <div className="space-y-6">
        <InfoCard type="conexion" title="1. El 'traductor' de currículos">
            <p><strong>Situación:</strong> SofIA utiliza IAGen para transformar sus descripciones. El sistema sugiere reemplazar "organicé envíos diarios" por "orquesté operaciones logísticas multifuncionales".</p>
            <p><strong>Enfoque ético recomendado:</strong> SofIA puede usar la sugerencia como inspiración, pero debe editarla para reflejar con precisión sus responsabilidades. Ejemplo: "Coordiné operaciones logísticas diarias, gestionando envíos y optimizando procesos".</p>
        </InfoCard>

        <InfoCard type="conexion" title="2. La laguna en el historial laboral">
            <p><strong>Situación:</strong> SofIA tomó dos años de licencia para cuidar a un familiar. La IAGen sugiere: "Período de desarrollo profesional independiente".</p>
            <p><strong>Enfoque ético recomendado:</strong> Optar por una formulación honesta pero profesional: "Período de responsabilidades familiares, durante el cual mantuve actualización profesional mediante cursos en línea". Esto es veraz y normaliza las responsabilidades de cuidado.</p>
        </InfoCard>

        <InfoCard type="conexion" title="3. La carta de presentación generada por IA">
            <p><strong>Situación:</strong> La IAGen escribe una carta impecable, pero SofIA siente que "no suena como ella".</p>
            <p><strong>Enfoque ético recomendado:</strong> Usar la IA como punto de partida, pero personalizar significativamente el contenido: incorporar ejemplos específicos, ajustar el tono y asegurar que la carta final sea una colaboración entre la estructura de la IA y la voz auténtica de SofIA.</p>
        </InfoCard>
    </div>

    <h2 id="sec-etica-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">VI. El problema del rey Midas: alineación de valores</h2>
    <p className="mb-4">"Si usamos... una agencia mecánica en cuya operación no podemos interferir eficazmente... será mejor que estemos muy seguros de que el propósito introducido en la máquina es el propósito que realmente deseamos". - Norbert Wiener, 1960.</p>
    
    <InfoCard type="reflexion" title="¿Qué es el problema del rey Midas?">
        <p>En IA, esto se conoce como el <strong>problema de alineación de valores</strong>. Consiste en obtener literalmente lo que se pide, no lo que se quiere, con consecuencias desastrosas. Un sistema superinteligente que persigue un objetivo imperfecto podría tener consecuencias negativas a gran escala.</p>
    </InfoCard>

    <Accordion title="🎯 La trampa de la utilidad y el riesgo de la automatización">
        <div className="space-y-4">
            <InfoCard type="conexion" title="Riesgo: pobreza de atención">
                <p>Optimizar 'Clicks' no es lo mismo que optimizar 'Bienestar Humano'. Herbert Simon señaló que la riqueza de información crea pobreza de atención.</p>
            </InfoCard>
            <InfoCard type="practica" title="Solución: Inverse Reinforcement Learning (IRL)">
                <p>En lugar de codificar recompensas fijas, el agente observa el comportamiento experto para inferir preferencias subyacentes. El objetivo no es crear agentes simplemente inteligentes, sino agentes <strong>demostrablemente beneficiosos</strong>.</p>
            </InfoCard>
        </div>
    </Accordion>

    <h2 id="sec-etica-9" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">VII. Reflexión final y síntesis</h2>
    <InfoCard type="idea" title="Lecciones fundamentales">
        <ul className="space-y-3">
            <li><strong>La ética no es un estado binario:</strong> Existe un espectro entre usos claramente aceptables y claramente inaceptables.</li>
            <li><strong>La autenticidad es negociable, la veracidad no:</strong> SofIA puede adaptar su tono y lenguaje, pero no puede fabricar experiencias inexistentes.</li>
            <li><strong>Los sistemas injustos no justifican respuestas igualmente problemáticas:</strong> Aunque los ATS contienen sesgos, esto no otorga carta blanca para el engaño.</li>
        </ul>
    </InfoCard>

    <h2 id="sec-etica-10" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">🤔 Preguntas de reflexión</h2>
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-300">
        <li>¿Dónde trazas tú la línea ética al usar IA para optimizar tu perfil profesional?</li>
        <li>¿Cómo puedes equilibrar la necesidad de ser competitivo ante un ATS con la honestidad sobre tus capacidades reales?</li>
        <li>¿Qué principios del marco de la UNESCO consideras más relevantes para proteger tu propia identidad digital?</li>
      </ul>
    </div>
  </div>
);
