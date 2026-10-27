import React from 'react';
import { 
  Cpu, Network, Brain, Sparkles, GitBranch, Compass, 
  Layers, Database, CheckCircle, AlertTriangle, Users, BookOpen, Shield
} from 'lucide-react';
import { GlossaryTerm, InfoCard, QuizComponent, AuthorNote } from '../components/Shared';
import { PEASInteractiveExplorer, CompetenceMappingCard } from '../components/InteractiveComponents';

export const Modulo1 = () => (
  <div className="space-y-8">
    <h2 id="sec-modulo1-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      Propósito y objetivos de aprendizaje
    </h2>

    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
        Hilo conductor · Caso de estudio transversal
      </div>
      <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mb-2">
        El viaje de SofIA: de la docencia tradicional al diseño de ecosistemas cognitivos
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
        A lo largo de esta guía acompañaremos a <strong>SofIA</strong>, profesora de ciencias en educación secundaria que lidera la transición hacia tecnologías educativas (<GlossaryTerm term="EdTech">EdTech</GlossaryTerm>) en su institución. Su desafío en el horizonte 2026 no es simplemente "usar un chatbot", sino diseñar flujos de trabajo rigurosos, éticos y verificables que combinen modelos de razonamiento, modelos ligeros en dispositivo (<GlossaryTerm term="SLM">SLMs</GlossaryTerm>) y protocolos agénticos bajo supervisión humana.
      </p>
    </div>

    <div className="p-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl">
      <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
        Resultados de aprendizaje verificables
      </div>
      <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 m-0 list-none p-0">
        <li className="flex items-start gap-2.5">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">01.</span>
          <span>Distinguir con precisión arquitectónica entre Inteligencia Artificial simbólica, <GlossaryTerm term="Machine Learning">Machine Learning</GlossaryTerm> predictivo, <GlossaryTerm term="Deep Learning">Deep Learning</GlossaryTerm>, IA Generativa y sistemas de razonamiento con <GlossaryTerm term="Test-Time Compute">Test-Time Compute</GlossaryTerm>.</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">02.</span>
          <span>Modelar cualquier sistema inteligente mediante el marco formal <strong>PEAS</strong> (Rendimiento, Entorno, Actuadores y Sensores) de Russell y Norvig.</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">03.</span>
          <span>Seleccionar el paradigma de aprendizaje (supervisado, no supervisado, por refuerzo o <GlossaryTerm term="RLHF">RLHF</GlossaryTerm> / RLVR) y la escala de modelo (Frontera en nube vs. <GlossaryTerm term="SLM">SLM</GlossaryTerm> local) según restricciones de privacidad y latencia.</span>
        </li>
      </ul>
    </div>

    <h2 id="sec-modulo1-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. ¿Qué es realmente la inteligencia artificial?
    </h2>
    <p>
      Lejos del antropomorfismo mediático, la <GlossaryTerm term="IA">Inteligencia Artificial</GlossaryTerm> es una disciplina de la ciencia de la computación y la matemática aplicada que diseña sistemas capaces de percibir su entorno, procesar representaciones de información y ejecutar decisiones que maximizan la probabilidad de alcanzar un objetivo definido.
    </p>
    <p>
      En la formulación canónica de Stuart Russell y Peter Norvig, el foco moderno no reside en imitar la conciencia biológica humana, sino en la <strong>racionalidad computacional</strong>: hacer lo correcto dados los datos percibidos y los límites de cómputo disponibles.
    </p>

    <PEASInteractiveExplorer />

    <h2 id="sec-modulo1-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. Evolución histórica: de la lógica simbólica a la era del razonamiento (1950–2026)
    </h2>
    <p>
      Comprender la genealogía de la IA evita caer en el solucionismo tecnológico. La historia del campo no es una línea recta, sino una alternancia entre paradigmas simbólicos (reglas explícitas) y conexionistas (redes neuronales estadísticas) que hoy convergen en arquitecturas neuro-simbólicas y de razonamiento en tiempo de inferencia:
    </p>

    <div className="my-6 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {[
          {
            era: '1950 – 1956 · Fundamentos y Dartmouth',
            title: 'Test de Turing y nacimiento formal del campo',
            desc: 'Alan Turing publica "Computing Machinery and Intelligence" (1950). En el verano de 1956, John McCarthy, Marvin Minsky, Claude Shannon y Nathaniel Rochester acuñan el término "Inteligencia Artificial" en el taller de Dartmouth.'
          },
          {
            era: '1970 – 1989 · Sistemas expertos e inviernos de la IA',
            title: 'Auge de la IA simbólica (GOFAI) y límites combinatorios',
            desc: 'Sistemas como MYCIN codifican reglas "SI-ENTONCES" creadas por expertos humanos. La incapacidad de manejar la incertidumbre del mundo real y el cuello de botella en la adquisición manual de conocimiento provocaron recortes de financiación ("inviernos de la IA").'
          },
          {
            era: '1997 – 2016 · Triunfo estadístico y Deep Learning',
            title: 'Del aprendizaje automático al aprendizaje profundo en GPUs',
            desc: 'Deep Blue vence a Kasparov (1997) por búsqueda heurística masiva. En 2012, AlexNet demuestra el poder de las redes convolucionales profundas entrenadas en GPUs, y en 2016 AlphaGo combina redes profundas con búsqueda de árbol Monte Carlo.'
          },
          {
            era: '2017 – 2023 · La revolución Transformer y los LLMs',
            title: 'Attention Is All You Need y emergencia de la IA generativa',
            desc: 'Investigadores de Google introducen la arquitectura Transformer (2017), permitiendo paralelizar el entrenamiento sobre corpus masivos. Nacen los modelos fundacionales (BERT, serie GPT, Gemini, Claude, Llama) capaces de procesar y generar lenguaje y código.'
          },
          {
            era: '2024 – 2026 · Razonamiento verificable, SLMs y ecosistemas agénticos',
            title: 'Test-Time Compute, multimodalidad nativa y protocolo MCP',
            desc: 'El escalado se desplaza del simple tamaño de pre-entrenamiento al cómputo en tiempo de prueba (Test-Time Compute) mediante aprendizaje por refuerzo con recompensas verificables (RLVR). Los modelos piensan paso a paso antes de responder, operan herramientas mediante el estándar abierto MCP y coexisten con modelos pequeños (SLMs) ejecutados localmente en dispositivos.'
          }
        ].map((item, idx) => (
          <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-6">
            <div className="sm:w-56 shrink-0">
              <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                {item.era}
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 mt-0">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <h2 id="sec-modulo1-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. Taxonomía por alcance y capacidad: ANI, AGI y ASI
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <InfoCard title="IA Estrecha o Especializada (ANI)" icon={Cpu} color="blue">
        <strong>Estado actual (2026):</strong> Sistemas diseñados y optimizados para dominios acotados o multimodales específicos. Aunque los modelos de frontera razonan sobre código, ciencia y lenguaje con nivel experto, carecen de intencionalidad propia, conciencia o adaptabilidad física universal fuera de su distribución de entrenamiento.
      </InfoCard>
      <InfoCard title="IA General (AGI)" icon={Brain} color="purple">
        <strong>Horizonte teórico en debate:</strong> Sistema hipotético con autonomía cognitiva transversal capaz de aprender cualquier habilidad intelectual o física que un ser humano pueda dominar, transfiriendo conocimiento entre dominios inéditos con muestras mínimas y modelado causal del mundo físico.
      </InfoCard>
      <InfoCard title="Superinteligencia (ASI)" icon={Sparkles} color="amber">
        <strong>Especulación filosófica:</strong> Intelecto sintético que superaría ampliamente la capacidad cognitiva combinada de la humanidad en creatividad científica, estrategia y diseño de ingeniería. Constituye el eje de los debates de alineación existencial a largo plazo.
      </InfoCard>
    </div>

    <h2 id="sec-modulo1-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      4. Anatomía en capas: IA, Machine Learning, Deep Learning e IA Generativa
    </h2>
    <p>
      Para que SofIA pueda evaluar proveedores tecnológicos sin dejarse confundir por el marketing, necesita visualizar la arquitectura de la IA como cuatro capas concéntricas de especialización matemática:
    </p>

    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">CAPA 01 · PARAGUAS DISCIPLINAR</div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1.5">Inteligencia Artificial (IA)</h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
          Incluye tanto sistemas basados en reglas lógicas explícitas (árboles de decisión deterministas, planificadores simbólicos) como sistemas estadísticos que aprenden de datos.
        </p>
      </div>
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono text-sky-600 dark:text-sky-400 mb-1">CAPA 02 · INFERENCIA ESTADÍSTICA</div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1.5"><GlossaryTerm term="Machine Learning">Machine Learning (ML)</GlossaryTerm></h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
          Algoritmos (regresión, Random Forests, XGBoost, SVM) que ajustan sus parámetros internos optimizando una función de pérdida sobre datos históricos para predecir o clasificar.
        </p>
      </div>
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">CAPA 03 · REPRESENTACIÓN PROFUNDA</div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1.5"><GlossaryTerm term="Deep Learning">Deep Learning (DL)</GlossaryTerm></h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
          Redes neuronales artificiales con múltiples capas ocultas que extraen automáticamente jerarquías de características complejas desde texto, audio, imagen o series temporales sin ingeniería manual de variables.
        </p>
      </div>
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">CAPA 04 · SÍNTESIS Y RAZONAMIENTO</div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0 mb-1.5"><GlossaryTerm term="IA Generativa">IA Generativa</GlossaryTerm> y Modelos Razonadores</h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
          Modelos basados en arquitecturas <GlossaryTerm term="Transformer">Transformer</GlossaryTerm> y difusión que modelan la distribución conjunta de probabilidad para sintetizar texto, código, audio o video inéditos y ejecutar cadenas de razonamiento.
        </p>
      </div>
    </div>

    <h2 id="sec-modulo1-5" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      5. Los cuatro paradigmas de entrenamiento
    </h2>
    <p>
      ¿Cómo adquiere conocimiento un modelo? En la práctica contemporánea, un sistema de frontera atraviesa varias etapas que combinan distintos paradigmas de aprendizaje:
    </p>

    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Paradigma</th>
            <th>Mecanismo matemático</th>
            <th>Rol en el ciclo de vida 2026</th>
            <th>Ejemplo aplicado (Caso SofIA)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Aprendizaje Supervisado</strong></td>
            <td>Minimiza el error entre la predicción y etiquetas explícitas provistas por humanos <span className="font-mono text-xs">(X → Y)</span>.</td>
            <td>Ajuste fino de instrucciones (SFT) y clasificadores predictivos de deserción o riesgo.</td>
            <td>Entrenar un detector de nivel lector usando 5,000 ensayos previamente calificados por docentes.</td>
          </tr>
          <tr>
            <td><strong>Auto-supervisado / No supervisado</strong></td>
            <td>Descubre estructura latente o predice partes ocultas del propio dato sin etiquetas externas.</td>
            <td>Fase base de pre-entrenamiento de <GlossaryTerm term="LLM">LLMs</GlossaryTerm> y agrupación (clustering) de perfiles.</td>
            <td>Agrupar automáticamente patrones de participación estudiantil para identificar estilos de estudio.</td>
          </tr>
          <tr>
            <td><strong>Aprendizaje por Refuerzo (RL / RLVR)</strong></td>
            <td>Un agente optimiza una política de decisión mediante recompensas y penalizaciones verificables.</td>
            <td>Alineación (<GlossaryTerm term="RLHF">RLHF</GlossaryTerm>) y entrenamiento de modelos razonadores en matemáticas y código (RLVR).</td>
            <td>Entrenar un modelo para que verifique sus propios cálculos físicos antes de mostrar la solución al alumno.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-modulo1-6" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      6. De las redes neuronales clásicas a la revolución de los modelos pequeños (SLMs)
    </h2>
    <p>
      Una tendencia definitoria de 2025–2026 es la ruptura del dogma "más grande siempre es mejor". Mientras que los modelos de frontera en la nube superan el billón de parámetros mediante arquitecturas <GlossaryTerm term="MoE">Mixture of Experts (MoE)</GlossaryTerm>, los <strong>Modelos de Lenguaje Pequeños (<GlossaryTerm term="SLM">SLMs</GlossaryTerm>)</strong> de entre 1,000 y 14,000 millones de parámetros (como las familias Gemma, Llama, Qwen o Phi) han alcanzado capacidades de razonamiento equivalentes a los modelos gigantes de hace dos años.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <InfoCard title="Modelos de Frontera en Nube" icon={Network} color="blue">
        Ideales para razonamiento multidisciplinar profundo, síntesis de repositorios completos (1M–2M tokens) y coordinación de sistemas multi-agente complejos. Requieren conexión y gobernanza de datos en tránsito.
      </InfoCard>
      <InfoCard title="SLMs y Edge AI (En dispositivo)" icon={Shield} color="emerald">
        Ejecutables directamente en la laptop del docente o en el servidor local de la escuela. Garantizan <strong>privacidad absoluta</strong> (ningún dato estudiantil sale del centro), latencia de milisegundos y funcionamiento sin conexión a internet.
      </InfoCard>
    </div>

    <h2 id="sec-modulo1-7" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      7. IA discriminativa (predictiva) frente a IA generativa
    </h2>
    <p>
      Un error frecuente en proyectos de transformación digital es usar un modelo generativo costoso cuando basta un modelo discriminativo clásico (o viceversa). SofIA aplica esta regla de decisión:
    </p>
    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Dimensión</th>
            <th>IA Discriminativa / Predictiva</th>
            <th>IA Generativa y Razonadora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Objetivo matemático</strong></td>
            <td>Estimar la probabilidad condicional <span className="font-mono text-xs">P(Y | X)</span> (trazar fronteras de decisión).</td>
            <td>Modelar la distribución de probabilidad para muestrear secuencias nuevas coherentes.</td>
          </tr>
          <tr>
            <td><strong>Salida típica</strong></td>
            <td>Una etiqueta, clase o valor numérico (ej. "Riesgo de abandono: 0.82").</td>
            <td>Un artefacto complejo: explicación socrática, código fuente, rúbrica o informe.</td>
          </tr>
          <tr>
            <td><strong>Determinismo y auditoría</strong></td>
            <td>Altamente determinista; métricas exactas de precisión, recall y F1-Score.</td>
            <td>Estocástico; requiere ingeniería de contexto, esquemas estructurados y evaluación con jueces/rúbricas.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-modulo1-8" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      8. Límites estructurales: alucinaciones, sesgo estadístico y opacidad
    </h2>
    <p>
      Todo modelo fundacional opera por compresión estadística y plausibilidad semántica, no por verificación ontológica nativa. Esto introduce tres vulnerabilidades que todo profesional debe gestionar:
    </p>
    <ul>
      <li><strong><GlossaryTerm term="Alucinación">Confabulación o alucinación</GlossaryTerm>:</strong> Cuando el modelo carece de anclaje documental (<GlossaryTerm term="RAG">RAG</GlossaryTerm>) o presupuesto de verificación, puede fabricar citas bibliográficas, artículos legales o datos históricos con una sintaxis impecable y tono de absoluta certeza.</li>
      <li><strong>Amplificación de sesgos históricos:</strong> Si los corpus de entrenamiento subrepresentan contextos locales o reproducen estereotipos de género y nivel socioeconómico, el modelo tenderá a perpetuarlos en sus ejemplos y evaluaciones.</li>
      <li><strong>Opacidad de caja negra:</strong> Con miles de millones de pesos sinápticos, explicar exactamente por qué se activó un token requiere técnicas de interpretabilidad mecanística o exigir trazas de pensamiento explícitas.</li>
    </ul>

    <h2 id="sec-modulo1-9" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      9. Marcos de competencias en IA: UNESCO y diagnóstico profesional
    </h2>
    <p>
      Los marcos globales de competencias de IA de la <strong>UNESCO</strong> para docentes y estudiantes establecen que la alfabetización en IA no consiste en memorizar comandos efímeros, sino en articular tres dimensiones: <strong>mentalidad centrada en el ser humano</strong>, <strong>comprensión técnica de datos y modelos</strong>, y <strong>ética aplicada a la toma de decisiones</strong>. Utiliza el siguiente evaluador interactivo para diagnosticar tu propio perfil o el de SofIA:
    </p>

    <CompetenceMappingCard />

    <h2 id="sec-modulo1-10" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      10. Síntesis del módulo y autoevaluación
    </h2>
    <AuthorNote>
      Antes de pasar al funcionamiento interno de los modelos de lenguaje, recuerda el principio rector que adoptó SofIA: <strong>la IA no reemplaza el criterio profesional del experto; amplifica tanto el rigor metodológico como la falta de él</strong>. Un buen diagnóstico de problema distingue cuándo necesitas una regresión estadística simple, cuándo un SLM local por privacidad y cuándo un modelo de razonamiento multimodal.
    </AuthorNote>

    <QuizComponent
      question="SofIA necesita implementar en una escuela rural sin conexión estable a internet un asistente que ayude a redactar retroalimentación formativa sin que los datos de los estudiantes salgan de las computadoras del colegio. ¿Qué arquitectura de 2026 es la más adecuada?"
      options={[
        {
          label: 'Un modelo de frontera masivo de 1.5 billones de parámetros consumido exclusivamente vía API en la nube pública.',
          isCorrect: false,
          explanation: 'Incorrecto: depende de conectividad constante y transmite datos fuera del entorno local.'
        },
        {
          label: 'Un Modelo de Lenguaje Pequeño (SLM) cuantizado de pesos abiertos (ej. 4B–8B parámetros) ejecutado en dispositivo (Edge AI) con plantillas estructuradas.',
          isCorrect: true,
          explanation: '¡Correcto! Los SLMs modernos ejecutados en dispositivo garantizan soberanía total de los datos estudiantiles y operan sin necesidad de conexión a internet.'
        },
        {
          label: 'Un sistema experto simbólico clásico programado manualmente con 20 reglas SI-ENTONCES fijas.',
          isCorrect: false,
          explanation: 'Incorrecto: carece de la flexibilidad lingüística necesaria para generar retroalimentación formativa adaptada a textos abiertos.'
        }
      ]}
    />
  </div>
);
