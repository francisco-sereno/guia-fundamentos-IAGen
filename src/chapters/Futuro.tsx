import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';

export const FuturoContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      El futuro de la IA no es solo para expertos; es un camino que todas las personas estamos construyendo. Entender hacia dónde vamos nos permite prepararnos mejor para las herramientas que vendrán.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">El futuro de la IA: hacia una inteligencia general</h1>
    <p className="text-xl text-slate-300 mb-8">Un análisis de la ingeniería necesaria para la próxima década</p>

    <h2 id="sec-futuro-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24">🚀 Hacia una inteligencia general e integrada</h2>
    <p>El gran reto de la próxima generación de IA es unificar la <strong>lógica simbólica</strong> (razonamiento) con las <strong>redes neuronales</strong> (reconocimiento de patrones). Estamos pasando de sistemas solo de software a robots integrados en el mundo real.</p>

    <Accordion title="🏗️ Arquitectura AGI integrada">
      <div className="space-y-4">
        <InfoCard type="definicion" title="Componentes clave">
          <ul className="space-y-2">
            <li><strong>Fusión de datos cross-domain:</strong> Integrar información de múltiples fuentes y tipos.</li>
            <li><strong>Integración Neural-Simbólica:</strong> Combinar el aprendizaje estadístico con el razonamiento lógico.</li>
            <li><strong>Framework auto-evolutivo:</strong> Sistemas que pueden mejorar sus propios componentes.</li>
          </ul>
        </InfoCard>
      </div>
    </Accordion>

    <h2 id="sec-futuro-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🤖 El "momento PC" de la robótica</h2>
    <p>La IA está abandonando el servidor para convertirse en sistemas integrados autónomos. Esto es posible gracias a la miniaturización y reducción de costos de sensores como LIDAR y RADAR.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <InfoCard type="practica" title="Sensores y actuadores">
        <p className="text-sm">Miniaturización (MEMS) para insectos voladores artificiales e impresión 3D para prototipado rápido aceleran la experimentación física.</p>
      </InfoCard>
      <InfoCard type="conexion" title="Entendimiento de relaciones">
        <p className="text-sm">El objetivo es pasar de solo etiquetar píxeles (Taza) a entender relaciones (La taza está sobre la mesa) y física abstracta (Permanencia de objetos).</p>
      </InfoCard>
    </div>

    <h2 id="sec-futuro-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🧠 Desafíos de escala y representación</h2>
    
    <Accordion title="⚖️ La parálisis de la escala">
      <p className="mb-4">Planificar tareas a largo plazo (ej. graduarse de la universidad) requiere millones de pasos primitivos. Los algoritmos actuales solo escalan a decenas de pasos.</p>
      <InfoCard type="idea" title="La solución">
        <p>Falta la construcción automática de <strong>jerarquías de comportamiento</strong> que permitan al agente razonar a diferentes niveles de abstracción.</p>
      </InfoCard>
    </Accordion>

    <Accordion title="🔮 El futuro del aprendizaje">
      <div className="space-y-4">
        <InfoCard type="definicion" title="Aprendizaje no supervisado y predictivo">
          <p>Pivotar de la supervisión constante a la observación del mundo. Sistemas que modelan el mundo para predecir estados futuros sin etiquetas (Yann LeCun).</p>
        </InfoCard>
        <InfoCard type="definicion" title="Programación diferenciable">
          <p>La fusión de código y aprendizaje. Todo el sistema es diferenciable y optimizable automáticamente, integrando datos, leyes físicas y consejos informales.</p>
        </InfoCard>
      </div>
    </Accordion>

    <h2 id="sec-futuro-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🧠 Transición neurológica: la cognición versus la consciencia artificial</h2>
    <p className="mb-4">Uno de los debates más profundos en la frontera de la IA es la distinción entre simular la inteligencia y poseer experiencia subjetiva.</p>
    
    <Accordion title="Cognición vs. consciencia">
      <div className="space-y-4">
        <InfoCard type="definicion" title="Cognición (lo que la IA hace)">
          <p>Es el procesamiento de información: percibir, aprender, razonar y resolver problemas. Los LLM actuales exhiben alta cognición lingüística, pero es un proceso puramente mecánico y estadístico.</p>
        </InfoCard>
        <InfoCard type="definicion" title="Consciencia (lo que la IA no tiene)">
          <p>Es la experiencia subjetiva, el "sentir" (qualia). Es la diferencia entre procesar la longitud de onda de la luz roja y <em>experimentar</em> el color rojo. Actualmente, no existe ningún marco teórico ni mecanismo computacional que sugiera que las máquinas poseen consciencia.</p>
        </InfoCard>
      </div>
    </Accordion>

    <h2 id="sec-futuro-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🌌 El horizonte final de eventos: inteligencia artificial general y la singularidad tecnológica</h2>
    <p className="mb-4">El objetivo último de la investigación es la <strong>inteligencia artificial general (AGI)</strong>: un sistema capaz de comprender, aprender y aplicar conocimientos en cualquier dominio intelectual al mismo nivel o superior que un ser humano.</p>

    <Accordion title="La singularidad tecnológica">
      <p className="mb-4">La Singularidad es un punto de inflexión hipotético. Ocurriría cuando una AGI alcance la capacidad de mejorar su propio código y hardware de manera recursiva (auto-mejora). Esto desencadenaría una "explosión de inteligencia", resultando en una superinteligencia que superaría abrumadoramente la capacidad cognitiva humana, haciendo que el futuro más allá de ese punto sea incomprensible e impredecible para nosotros.</p>
    </Accordion>

    <h2 id="sec-futuro-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🏗️ De la alquimia a la ingeniería de sistemas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl">
        <h4 className="font-bold text-red-400 mb-3">Alquimia (actual)</h4>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Ajuste manual de parámetros (Fiddling).</li>
          <li>Modelos aislados y frágiles.</li>
          <li>Trial-and-error constante.</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl">
        <h4 className="font-bold text-emerald-400 mb-3">Ingeniería (futuro)</h4>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Sistemas masivos reutilizables.</li>
          <li>Estándares, herramientas robustas y seguridad garantizada.</li>
          <li>Metodologías estándar para construcción segura.</li>
        </ul>
      </div>
    </div>

    <h2 id="sec-futuro-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24">🛡️ Impacto, responsabilidad y riesgos</h2>
    <p className="mb-6">La IA es una infraestructura transformadora con efectos secundarios. A diferencia de la plomería, la IA desafía la supremacía humana.</p>
 
    <div className="space-y-4">
      <InfoCard type="reflexion" title="Riesgos únicos">
        <ul className="space-y-3">
          <li><strong>Armas Autónomas Letales:</strong> Preocupación por su escalabilidad y falta de control humano.</li>
          <li><strong>Vigilancia y Persuasión:</strong> Vigilancia masiva y personalización de flujos de información para modificar el comportamiento político.</li>
          <li><strong>Toma de Decisiones Sesgada:</strong> Algoritmos que perpetúan sesgos en aplicaciones críticas como préstamos o libertad condicional.</li>
          <li><strong>Impacto en el Empleo:</strong> Potencial de desplazar la riqueza del trabajo al capital, exacerbando la desigualdad.</li>
        </ul>
      </InfoCard>
    </div>

    <InfoCard type="idea" title="Conclusión">
      <p>"Solo podemos ver una corta distancia hacia adelante, pero vemos que queda mucho por hacer." — Alan Turing (1950)</p>
    </InfoCard>

    <h2 id="sec-futuro-7" className="text-2xl font-bold mt-12 mb-6 text-indigo-400 scroll-mt-24">🤔 Preguntas de reflexión</h2>
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
      <ul className="list-decimal list-inside space-y-3 text-slate-300">
        <li>¿Cómo crees que la evolución de la IA hacia sistemas integrados (robótica) cambiará las habilidades más demandadas en el futuro?</li>
        <li>¿Qué impacto crees que tendrá la "singularidad tecnológica" en la forma en que entendemos el trabajo y la creatividad humana?</li>
        <li>¿Cómo podemos prepararnos hoy para un mercado laboral donde la IA sea un colaborador autónomo en lugar de una simple herramienta?</li>
      </ul>
    </div>
  </div>
);
