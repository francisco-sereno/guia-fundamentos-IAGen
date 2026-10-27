import React from 'react';
import { 
  Sparkles, Cpu, Globe, Compass, Layers, Shield, Zap, Network
} from 'lucide-react';
import { GlossaryTerm, InfoCard, QuizComponent, AuthorNote } from '../components/Shared';

export const Futuro = () => (
  <div className="space-y-8">
    <h2 id="sec-futuro-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. Más allá del lenguaje: World Models, inteligencia espacial y robótica física
    </h2>
    <p>
      Los grandes modelos de lenguaje dominaron la primera mitad de la década gracias a su capacidad para comprimir y manipular texto simbólico. Sin embargo, como señalan investigadores como Yann LeCun o Fei-Fei Li, gran parte de la inteligencia humana y animal es <strong>espacial, física y causal</strong>: entendemos la gravedad, la permanencia de los objetos, la fricción y la tridimensionalidad antes de aprender a hablar.
    </p>
    <p>
      El horizonte inmediato de la investigación se centra en los <strong>Modelos de Mundo (World Models)</strong> y arquitecturas predictivas en espacio latente como <em>JEPA (Joint Embedding Predictive Architecture)</em>, que aprenden las leyes de la física observando video e interactuando con entornos tridimensionales para dotar de sentido común físico a la <strong>robótica corporizada (Embodied AI)</strong>.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <InfoCard title="Modelos de Mundo e Inteligencia Espacial" icon={Globe} color="blue">
        Permiten que un sistema simule mentalmente qué ocurrirá físicamente si ejecuta una acción en un entorno 3D (por ejemplo, en un laboratorio escolar virtual, cirugía asistida o logística industrial) antes de mover un actuador.
      </InfoCard>
      <InfoCard title="IA Neuro-simbólica y Verificación Formal" icon={Cpu} color="purple">
        La convergencia entre la intuición estadística de las redes neuronales y la certeza matemática de los verificadores formales (como el asistente de pruebas <em>Lean 4</em>). Permite descubrir demostraciones matemáticas y garantizar software crítico con cero errores lógicos.
      </InfoCard>
    </div>

    <h2 id="sec-futuro-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. Superando el "muro de datos": datos sintéticos verificados y auto-juego
    </h2>
    <p>
      Hacia 2025, la industria agotó gran parte del texto público de alta calidad disponible en la web abierta (el llamado <em>Data Wall</em>). La frontera actual supera este límite no raspando más páginas web ruidosas, sino generando <strong>currículos sintéticos verificados</strong>:
    </p>
    <ul>
      <li><strong>Evitar el colapso del modelo (Model Collapse):</strong> Entrenar un modelo indiscriminadamente con salidas crudas de otro modelo degrada la varianza y amplifica errores. En cambio, cuando las generaciones sintéticas son filtradas por un <strong>verificador determinista</strong> (un compilador, un simulador físico o un demostrador de teoremas), la calidad de los datos supera al promedio humano en internet.</li>
      <li><strong>Aprendizaje por auto-juego (Self-Play) en razonamiento:</strong> Siguiendo la estela de AlphaZero y los modelos razonadores con RLVR, los sistemas plantean problemas progresivamente más difíciles y aprenden de sus propias trayectorias exitosas de resolución.</li>
    </ul>

    <h2 id="sec-futuro-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. Soberanía cognitiva, Edge AI y descentralización
    </h2>
    <p>
      El futuro de la infraestructura de IA no será un monopolio exclusivo de megacentros de datos centralizados. La combinación de <strong>NPUs (Unidades de Procesamiento Neuronal)</strong> integradas en cada laptop y teléfono móvil con <GlossaryTerm term="SLM">Modelos de Lenguaje Pequeños (SLMs)</GlossaryTerm> altamente optimizados está consolidando una <strong>arquitectura híbrida</strong>:
    </p>
    <div className="my-6 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
      <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
        Paradigma de Computación Híbrida Personal (Edge + Cloud)
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
        El 80% de las tareas cotidianas de lectura, síntesis de notas personales, redacción y tutoría sensible ocurre localmente en el dispositivo del usuario con privacidad total y latencia cero; solo cuando un problema requiere capacidad enciclopédica masiva o búsqueda en tiempo real, el agente local delega fragmentos anonimizados a un modelo de frontera en la nube.
      </p>
    </div>

    <h2 id="sec-futuro-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      4. Transformación del trabajo, la educación y la ciencia (AI for Science)
    </h2>
    <p>
      Más allá de la automatización de tareas administrativas, el impacto más profundo y positivo de la IA contemporánea se registra en el aceleramiento del descubrimiento científico (<strong>AI for Science</strong>): desde la predicción de interacciones biomoleculares (AlphaFold 3) y el diseño de nuevos electrolitos para baterías de estado sólido hasta la modelización climática de alta resolución.
    </p>
    <p>
      En el ámbito educativo y profesional —el terreno de SofIA—, asistimos al desplazamiento desde la evaluación del <em>producto estático</em> (el ensayo o código final que cualquier modelo puede generar en segundos) hacia la valoración del <strong>proceso metacognitivo, la defensa oral, la verificación de fuentes y el juicio ético</strong>.
    </p>

    <h2 id="sec-futuro-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      5. Gobernanza deliberativa y bienes públicos digitales
    </h2>
    <p>
      Frente al riesgo de concentración tecnológica y brecha cognitiva entre regiones, organismos internacionales e iniciativas académicas impulsan la creación de <strong>bienes públicos digitales en IA</strong>: corpus lingüísticos abiertos que preserven la diversidad cultural de Iberoamérica y lenguas originarias, benchmarks de evaluación transparentes y procesos de <em>alineación deliberativa</em> donde comunidades docentes, científicas y ciudadanas participen en definir las reglas de comportamiento de los sistemas.
    </p>

    <h2 id="sec-futuro-5" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      6. Epílogo: la síntesis del viaje de SofIA
    </h2>
    <div className="p-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
        Cierre del caso de estudio · SofIA
      </div>
      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-2">
        Del desconcierto tecnológico al liderazgo con propósito humano
      </h4>
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
        Cuando SofIA comenzó este recorrido, veía a la inteligencia artificial como una caja mágica impredecible que amenazaba con vaciar de sentido las tareas escolares. Al comprender su base matemática (vectores, atención y probabilidad), dominar la <strong>Ingeniería de Contexto</strong>, aplicar los marcos éticos <strong>UNESCO, EU AI Act, PotencIA y DECIDE-IA</strong>, y orquestar agentes bajo el protocolo <strong>MCP</strong>, recuperó aquello que ninguna máquina puede automatizar: el tiempo de calidad humana para acompañar, escuchar y despertar la curiosidad científica de sus estudiantes.
      </p>
    </div>

    <h2 id="sec-futuro-6" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      7. Autoevaluación final de cierre
    </h2>
    <AuthorNote>
      El futuro de la inteligencia artificial no es un destino prefijado que debamos aceptar pasivamente, sino una arquitectura sociotécnica que construimos con cada decisión de diseño, cada estándar de privacidad exigido y cada habilidad crítica que cultivamos.
    </AuthorNote>

    <QuizComponent
      question="¿Por qué la combinación de generación sintética con verificadores formales deterministas (ej. compiladores, simuladores físicos o demostradores como Lean) es clave para superar el 'muro de datos' sin sufrir colapso del modelo?"
      options={[
        {
          label: 'Porque permite entrenar modelos con texto aleatorio sin verificar si las respuestas son ciertas o falsas.',
          isCorrect: false,
          explanation: 'Incorrecto: entrenar con datos sintéticos no verificados conduce rápidamente a la degradación o colapso del modelo.'
        },
        {
          label: 'Porque el verificador formal actúa como un filtro objetivo de verdad matemática o lógica, reteniendo únicamente las cadenas de razonamiento correctas de alta señal.',
          isCorrect: true,
          explanation: '¡Exacto! La verificación formal garantiza que los nuevos datos sintéticos eleven el techo de razonamiento del modelo sin contaminarlo con alucinaciones.'
        },
        {
          label: 'Porque elimina la necesidad de usar tarjetas gráficas o procesadores neuronales.',
          isCorrect: false,
          explanation: 'Incorrecto: el entrenamiento y la verificación siguen requiriendo infraestructura de cómputo.'
        }
      ]}
    />
  </div>
);
