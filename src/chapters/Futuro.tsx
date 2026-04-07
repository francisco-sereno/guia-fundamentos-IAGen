import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const FuturoContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      El futuro de la IA no es solo para expertos; es un camino que todas las personas estamos construyendo. Entender hacia dónde vamos nos permite prepararnos mejor para las herramientas que vendrán.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">El futuro de la IA: hacia la inteligencia general y la robótica integrada</h1>
    <p className="text-xl text-slate-300 mb-8">Explorando las fronteras de la inteligencia artificial y su impacto en la humanidad.</p>

    <h2 id="sec-futuro-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">1. Hacia una inteligencia general e integrada</h2>
    <p>El gran reto de la próxima generación de IA es unificar la <strong>lógica simbólica</strong> (razonamiento) con las <strong>redes neuronales</strong> (reconocimiento de patrones). Estamos pasando de sistemas solo de software a robots integrados en el mundo real.</p>

    <Accordion title="Arquitectura AGI integrada">
      <div className="space-y-4">
        <InfoCard type="definicion" title="Componentes clave">
          <ul className="space-y-2">
            <li><strong>Fusión de datos cross-domain:</strong> Integrar información de múltiples fuentes y tipos.</li>
            <li><strong>Integración neural-simbólica:</strong> Combinar el aprendizaje estadístico con el razonamiento lógico.</li>
            <li><strong>Framework auto-evolutivo:</strong> Sistemas que pueden mejorar sus propios componentes.</li>
          </ul>
        </InfoCard>
      </div>
    </Accordion>

    <h2 id="sec-futuro-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">2. Desafíos en el escalado de la IA</h2>
    <p>A pesar del progreso asombroso, el escalado de los modelos actuales enfrenta límites físicos y económicos. La eficiencia energética y la disponibilidad de datos de alta calidad son los nuevos cuellos de botella.</p>
    
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <InfoCard type="idea" title="Límites del hardware">
          <p className="text-sm text-slate-300">La ley de Moore se ralentiza mientras que la demanda de cómputo para IA crece exponencialmente. El futuro depende de chips especializados y, posiblemente, computación cuántica.</p>
      </InfoCard>
      <InfoCard type="idea" title="Escasez de datos">
          <p className="text-sm text-slate-300">Estamos agotando los datos públicos de alta calidad en internet. La IA del futuro deberá aprender de datos sintéticos o mediante métodos más eficientes.</p>
      </InfoCard>
    </div>

    <h2 id="sec-futuro-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">3. El futuro del aprendizaje: de lo supervisado a lo predictivo</h2>
    <p>Estamos pasando de modelos que necesitan ser "guiados" por humanos (aprendizaje supervisado) a modelos que aprenden observando el mundo y prediciendo lo que sucederá a continuación (aprendizaje autosupervisado o predictivo).</p>

    <Accordion title="Nuevos paradigmas de aprendizaje">
      <div className="space-y-4">
        <InfoCard type="definicion" title="Aprendizaje no supervisado y predictivo">
          <p>Pivotar de la supervisión constante a la observación del mundo. Sistemas que modelan el mundo para predecir estados futuros sin etiquetas.</p>
        </InfoCard>
        <InfoCard type="definicion" title="Programación diferenciable">
          <p>La fusión de código y aprendizaje. Todo el sistema es diferenciable y optimizable automáticamente, integrando datos, leyes físicas y consejos informales.</p>
        </InfoCard>
      </div>
    </Accordion>

    <h2 id="sec-futuro-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">4. Cognición vs. conciencia: el debate filosófico</h2>
    <p>Es vital distinguir entre <strong>cognición</strong> (la capacidad de procesar información y resolver problemas) y <strong>conciencia</strong> (la experiencia subjetiva de existir). Una IA puede ser increíblemente inteligente sin sentir nada.</p>
    
    <Accordion title="Cognición vs. conciencia">
      <div className="space-y-4">
        <InfoCard type="definicion" title="Cognición (lo que la IA hace)">
          <p>Es el procesamiento de información: percibir, aprender, razonar y resolver problemas. Los LLM actuales exhiben alta cognición lingüística, pero es un proceso puramente mecánico y estadístico.</p>
        </InfoCard>
        <InfoCard type="definicion" title="Conciencia (lo que la IA no tiene)">
          <p>Es la experiencia subjetiva, el "sentir" (qualia). Actualmente, no existe ningún marco teórico ni mecanismo computacional que sugiera que las máquinas poseen conciencia.</p>
        </InfoCard>
      </div>
    </Accordion>

    <h2 id="sec-futuro-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">5. Impactos y riesgos: la singularidad tecnológica</h2>
    <p>La <strong>singularidad tecnológica</strong> es el punto hipotético en el que el crecimiento tecnológico se vuelve incontrolable e irreversible, resultando en cambios insondables para la civilización humana, a menudo asociados con la creación de una superinteligencia.</p>

    <Accordion title="La singularidad tecnológica">
      <p className="mb-4">Ocurriría cuando una AGI alcance la capacidad de mejorar su propio código y hardware de manera recursiva (auto-mejora). Esto desencadenaría una "explosión de inteligencia", resultando en una superinteligencia que superaría abrumadoramente la capacidad cognitiva humana.</p>
    </Accordion>

    <h2 id="sec-futuro-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">6. Impacto, responsabilidad y riesgos</h2>
    <p className="mb-6">La IA es una infraestructura transformadora con efectos secundarios. A diferencia de otras tecnologías, la IA desafía la supremacía humana.</p>
 
    <div className="space-y-4">
      <InfoCard type="reflexion" title="Riesgos únicos">
        <ul className="space-y-3">
          <li><strong>Armas autónomas letales:</strong> Preocupación por su escalabilidad y falta de control humano.</li>
          <li><strong>Vigilancia y persuasión:</strong> Vigilancia masiva y personalización de flujos de información para modificar el comportamiento político.</li>
          <li><strong>Toma de decisiones sesgada:</strong> Algoritmos que perpetúan sesgos en aplicaciones críticas como préstamos o libertad condicional.</li>
          <li><strong>Impacto en el empleo:</strong> Potencial de desplazar la riqueza del trabajo al capital, exacerbando la desigualdad.</li>
        </ul>
      </InfoCard>
    </div>

    <AuthorNote>
      El futuro no es algo que nos sucede, es algo que construimos. La ingeniería de prompts es hoy nuestra herramienta para dialogar con ese futuro.
    </AuthorNote>

    <h2 id="sec-futuro-6" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">🤔 Preguntas de reflexión</h2>
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-300">
        <li>¿Cómo crees que la evolución de la IA hacia sistemas integrados (robótica) cambiará las habilidades más demandadas en el futuro?</li>
        <li>¿Qué impacto crees que tendrá la "singularidad tecnológica" en la forma en que entendemos el trabajo y la creatividad humana?</li>
        <li>¿Cómo podemos prepararnos hoy para un mercado laboral donde la IA sea un colaborador autónomo en lugar de una simple herramienta?</li>
      </ul>
    </div>
  </div>
);
