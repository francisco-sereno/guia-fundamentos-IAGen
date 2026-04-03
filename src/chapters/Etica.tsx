import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const EticaContent = () => (
  <div className="prose-custom">
    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Autenticidad y ética en la IA generativa</h1>
    <p className="text-xl text-slate-300 mb-8">navegando dilemas éticos en contratación algorítmica</p>

    <AuthorNote>
      Este capítulo es quizás el más importante. La tecnología avanza rápido, pero nuestra integridad profesional debe ser nuestra brújula. No permitas que la eficiencia de la IA nuble tu juicio sobre lo que es correcto.
    </AuthorNote>

    <h2 id="sec-3-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🎯 Introducción</h2>
    <p>En la era de la inteligencia artificial generativa, millones de profesionales enfrentan un dilema existencial y ético: ¿cómo utilizar estas poderosas herramientas tecnológicas sin comprometer la autenticidad personal y los principios éticos fundamentales? Este apunte examina críticamente las tensiones entre eficiencia tecnológica e integridad profesional.</p>

    <div className="grid md:grid-cols-3 gap-6 mt-8 mb-8">
        <InfoCard type="idea" title="Objetivo">
            <p className="text-sm">Desarrollar competencias críticas para el uso ético de IA generativa en contextos profesionales.</p>
        </InfoCard>
        <InfoCard type="conexion" title="Desafío">
            <p className="text-sm">Equilibrar la eficiencia tecnológica con la autenticidad y responsabilidad profesional.</p>
        </InfoCard>
        <InfoCard type="practica" title="Propuesta">
            <p className="text-sm">Un marco ético fundamentado en estándares internacionales y reflexión crítica.</p>
        </InfoCard>
    </div>

    <h2 id="sec-3-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">📖 Caso de estudio: El dilema de SofIA</h2>
    
    <InfoCard type="reflexion" title="Contexto del caso">
        <p className="mb-4">SofIA es una profesional en transición laboral, con amplia experiencia en gestión de proyectos. A pesar de su trayectoria comprobada, enfrenta un obstáculo recurrente en su proceso de reinserción: sus postulaciones son sistemáticamente rechazadas por sistemas ATS (Applicant Tracking Systems) debido a que su currículum no utiliza las palabras clave específicas que estos algoritmos priorizan.</p>
        <p>Durante los últimos seis meses, ha enviado más de 40 postulaciones a posiciones para las cuales se considera plenamente calificada, recibiendo respuestas de menos del 10%. La frustración la lleva a investigar sobre los ATS y descubre que su CV carece del lenguaje algorítmico que estas herramientas buscan.</p>
    </InfoCard>

    <Accordion title="❓ Preguntas centrales del dilema">
        <ul className="list-disc list-inside space-y-2 text-slate-300">
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

    <h2 id="sec-3-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">I. Los sistemas ATS: ¿Eficiencia o sesgo algorítmico?</h2>
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
        <ul className="list-disc list-inside space-y-3 text-slate-300">
            <li><strong>Sesgo de género:</strong> Penalización de lagunas laborales (que afectan desproporcionadamente a mujeres), favorecimiento de lenguaje "asertivo" sobre "colaborativo".</li>
            <li><strong>Sesgo racial y étnico:</strong> Discriminación basada en nombres que suenan "étnicos" o códigos postales asociados con comunidades minoritarias.</li>
            <li><strong>Sesgo por edad:</strong> Discriminación contra candidatos mayores si los datos de entrenamiento favorecen contrataciones recientes de profesionales jóvenes.</li>
            <li><strong>Sesgo por discapacidad:</strong> Penalización de historiales laborales no tradicionales o rechazo de formatos de CV adaptados para tecnologías de asistencia.</li>
        </ul>
    </Accordion>

    <h2 id="sec-3-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">II. El ecosistema de la IAGen para optimización de CVs</h2>
    
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

    <h3 className="text-xl font-bold mt-6 mb-4 text-indigo-300">El continuo ético: De la optimización legítima a la fabricación</h3>
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

    <h2 id="sec-3-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">III. Marco ético de la UNESCO para la inteligencia artificial</h2>
    <p>La Recomendación sobre la ética de la inteligencia artificial (UNESCO, 2021) proporciona principios rectores aplicables al dilema de SofIA.</p>

    <Accordion title="Principios éticos fundamentales aplicados">
        <ul className="list-disc list-inside space-y-3 text-slate-300">
            <li><strong>Proporcionalidad e inocuidad:</strong> Los sistemas de IA no deben causar daño y su uso debe ser proporcional al objetivo perseguido.</li>
            <li><strong>Equidad y no discriminación:</strong> Los sistemas de IA deben ser inclusivos y accesibles para todos, sin crear o reforzar sesgos injustos.</li>
            <li><strong>Derecho a la intimidad:</strong> La privacidad debe protegerse. SofIA debe tener derecho a saber qué datos personales recopila la herramienta de IAGen.</li>
            <li><strong>Supervisión y decisión humanas:</strong> Las decisiones finales en asuntos que afectan vidas (como la contratación) deben ser tomadas por humanos.</li>
            <li><strong>Transparencia y explicabilidad:</strong> Si un ATS rechaza a SofIA, ella debería tener derecho a una explicación comprensible sobre los criterios utilizados.</li>
        </ul>
    </Accordion>

    <h2 id="sec-3-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">IV. Análisis de casos prácticos</h2>
    
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

    <h2 id="sec-3-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">V. Reflexión final y síntesis</h2>
    <InfoCard type="idea" title="Lecciones fundamentales">
        <ul className="list-disc list-inside space-y-3">
            <li><strong>La ética no es un estado binario:</strong> Existe un espectro entre usos claramente aceptables y claramente inaceptables.</li>
            <li><strong>La autenticidad es negociable, la veracidad no:</strong> SofIA puede adaptar su tono y lenguaje, pero no puede fabricar experiencias inexistentes.</li>
            <li><strong>Los sistemas injustos no justifican respuestas igualmente problemáticas:</strong> Aunque los ATS contienen sesgos, esto no otorga carta blanca para el engaño.</li>
        </ul>
    </InfoCard>
  </div>
);
