import React from 'react';
import { 
  Shield, Scale, AlertTriangle, CheckCircle, Users, Lock, Eye, Globe, Leaf
} from 'lucide-react';
import { GlossaryTerm, InfoCard, QuizComponent, AuthorNote } from '../components/Shared';
import { EticaSpectrumMatrix } from '../components/InteractiveComponents';

export const Etica = () => (
  <div className="space-y-8">
    <h2 id="sec-etica-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      Propósito y urgencia de la gobernanza en IA (2025–2026)
    </h2>
    <p>
      A medida que los sistemas de IA pasan de generar borradores de texto a tomar decisiones que afectan la admisión escolar, la contratación laboral, el diagnóstico clínico y el consumo de recursos hídricos y energéticos, la ética deja de ser un apéndice filosófico opcional para convertirse en un requisito de ingeniería y cumplimiento legal.
    </p>

    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
        Dilema ético en el caso de estudio · SofIA
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
        Un proveedor comercial ofrece al colegio de SofIA un software gratuito que promete "detectar automáticamente el nivel de atención de los estudiantes mediante las cámaras del aula y predecir quién reprobará el año". Gracias a su formación en el <strong>Marco UNESCO</strong> y el <strong><GlossaryTerm term="EU AI Act">Reglamento Europeo de IA (EU AI Act)</GlossaryTerm></strong>, SofIA identifica de inmediato que el reconocimiento emocional biométrico en educación está catalogado como <strong>riesgo inaceptable (prohibido)</strong> y que la predicción académica constituye un sistema de <strong>alto riesgo</strong>.
      </p>
    </div>

    <h2 id="sec-etica-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. Sesgos algorítmicos, opacidad y desinformación sintética
    </h2>
    <p>
      Los modelos fundacionales no son espejos neutrales de la realidad; reflejan las asimetrías históricas, lingüísticas y socioeconómicas de los corpus con los que fueron entrenados:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <InfoCard title="Sesgo de representación y asignación" icon={Scale} color="amber">
        Cuando un sistema de selección de personal (ATS) o de evaluación educativa penaliza dialectos regionales, trayectorias no lineales o grupos subrepresentados en los datos históricos de entrenamiento.
      </InfoCard>
      <InfoCard title="Sesgo de automatización y complacencia" icon={Eye} color="rose">
        La tendencia psicológica humana a confiar acríticamente en el dictamen de un sistema automatizado (o a ser seducido por la <em>adulación / sycophancy</em> del chatbot), atrofiando el juicio profesional propio.
      </InfoCard>
      <InfoCard title="Integridad de la información y C2PA" icon={Shield} color="blue">
        La facilidad para clonar voces y generar video sintético hiperrealista exige estándares criptográficos de procedencia de contenido como <strong>C2PA (Coalition for Content Provenance and Authenticity)</strong> y marcas de agua imperceptibles como <em>SynthID</em>.
      </InfoCard>
    </div>

    <h2 id="sec-etica-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. Regulación vinculante: el EU AI Act y los marcos UNESCO (2025–2026)
    </h2>
    <p>
      El hito regulatorio global más importante de 2025–2026 es la entrada en vigor progresiva del <strong><GlossaryTerm term="EU AI Act">Reglamento de Inteligencia Artificial de la Unión Europea (EU AI Act)</GlossaryTerm></strong>, cuyo estándar (al igual que ocurrió con el GDPR) impacta a desarrolladores y organizaciones en América Latina y todo el mundo. Su arquitectura clasifica los sistemas no por su tecnología interna, sino por el <strong>nivel de riesgo para la seguridad, la salud y los derechos fundamentales</strong>:
    </p>

    <EticaSpectrumMatrix />

    <p>
      En paralelo, los <strong>Marcos de Competencias en IA de la UNESCO para Docentes y Estudiantes</strong> establecen directrices pedagógicas claras: proteger la agencia cognitiva humana, evitar la delegación de la evaluación sumativa a cajas negras, establecer criterios de madurez y edad para el uso autónomo en el aula, e integrar la sostenibilidad ambiental.
    </p>

    <h2 id="sec-etica-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. Privacidad, soberanía de datos y seguridad (Prompt Injection)
    </h2>
    <p>
      Cuando una institución educativa, hospital o empresa conecta modelos de lenguaje a sus flujos de trabajo, debe blindar dos frentes críticos de seguridad de la información:
    </p>
    <ul>
      <li><strong>Protección de Datos Personales Identificables (PII):</strong> Nunca ingresar nombres completos, números de identificación nacional, diagnósticos psicopedagógicos o historiales clínicos en versiones gratuitas de consumo cuyos términos de servicio utilicen las conversaciones para reentrenar modelos públicos. Se debe exigir contratos institucionales con garantía de <em>Zero Data Retention</em> o utilizar <GlossaryTerm term="SLM">SLMs</GlossaryTerm> en infraestructura local.</li>
      <li><strong>Defensa contra <GlossaryTerm term="Prompt Injection">Prompt Injection</GlossaryTerm> directa e indirecta:</strong> Un atacante (o un documento externo malicioso leído por un agente) puede insertar instrucciones ocultas para exfiltrar información privada o alterar el comportamiento del sistema. La defensa requiere separación estricta de privilegios, validación de esquemas y confirmación humana para acciones sensibles.</li>
    </ul>

    <h2 id="sec-etica-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      4. Huella ecológica y sostenibilidad computacional
    </h2>
    <p>
      La inteligencia artificial no es etérea; tiene una materialidad física intensa en centros de datos, consumo eléctrico, refrigeración hídrica y minerales críticos para GPUs/TPUs. Una consulta a un modelo gigante con alto presupuesto de razonamiento puede consumir entre 10 y 30 veces más energía que una búsqueda web tradicional.
    </p>
    <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 my-4">
      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-1.5">
        <Leaf className="w-4 h-4 shrink-0" />
        <span>Principio de Proporcionalidad Computacional (Green AI)</span>
      </div>
      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
        Practicar una IA sostenible implica aplicar la <strong>sobriedad algorítmica</strong>: no invocar un modelo multimodal de frontera para tareas que resuelve una expresión regular, una consulta SQL, un clasificador ligero o un modelo pequeño cuantizado (SLM).
      </p>
    </div>

    <h2 id="sec-etica-5" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      5. Metodología RAM (Evaluación de preparación) y gobernanza institucional
    </h2>
    <p>
      La <strong>Metodología de Evaluación del Estadio de Preparación (RAM - Readiness Assessment Methodology)</strong> de la UNESCO permite a países e instituciones auditar cinco pilares antes de desplegar IA a gran escala: (1) Marco legal y regulatorio, (2) Inclusión social y diversidad cultural, (3) Capacidad científica y educativa, (4) Económica y laboral, y (5) Infraestructura técnica y de datos.
    </p>

    <h2 id="sec-etica-6" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      6. Marcos prácticos de acción responsable: PotencIA y DECIDE-IA
    </h2>
    <p>
      Para traducir los grandes tratados internacionales en decisiones cotidianas dentro del aula o la oficina, utilizamos dos marcos operativos complementarios:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
          Marco pedagógico · PotencIA
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-2">
          Ampliación de capacidades sin atrofia cognitiva
        </h4>
        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 m-0 pl-4">
          <li><strong>Preservar el esfuerzo deseable:</strong> La IA no debe eliminar la fricción cognitiva necesaria para consolidar el aprendizaje en la memoria a largo plazo.</li>
          <li><strong>Transparencia de autoría:</strong> Declarar explícitamente qué partes de un documento o código fueron co-diseñadas con asistencia generativa.</li>
          <li><strong>Inclusión universal (DUA):</strong> Utilizar la multimodalidad para adaptar materiales a estudiantes con necesidades educativas diversas.</li>
        </ul>
      </div>

      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
          Marco de auditoría · DECIDE-IA
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-2">
          Protocolo de 6 pasos antes de automatizar una decisión
        </h4>
        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 m-0 list-none p-0">
          <li><strong className="font-mono text-emerald-600 dark:text-emerald-400">D</strong>efinir si el problema requiere realmente IA generativa.</li>
          <li><strong className="font-mono text-emerald-600 dark:text-emerald-400">E</strong>valuar la privacidad y anonimización de los datos de entrada.</li>
          <li><strong className="font-mono text-emerald-600 dark:text-emerald-400">C</strong>ontrastar las salidas frente a fuentes primarias verificadas.</li>
          <li><strong className="font-mono text-emerald-600 dark:text-emerald-400">I</strong>dentificar posibles sesgos contra grupos vulnerables.</li>
          <li><strong className="font-mono text-emerald-600 dark:text-emerald-400">D</strong>ocumentar la trazabilidad y el prompt utilizado.</li>
          <li><strong className="font-mono text-emerald-600 dark:text-emerald-400">E</strong>jercer supervisión humana final (<GlossaryTerm term="Human-in-the-Loop">Human-in-the-Loop</GlossaryTerm>).</li>
        </ul>
      </div>
    </div>

    <h2 id="sec-etica-7" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      7. Síntesis y autoevaluación ética
    </h2>
    <AuthorNote>
      La responsabilidad moral y legal de una decisión nunca puede delegarse a una matriz de pesos estadísticos. En palabras de los marcos internacionales vigentes: <strong>la IA puede asesorar, estructurar y simular, pero la firma, la empatía y la rendición de cuentas pertenecen siempre a la persona</strong>.
    </AuthorNote>

    <QuizComponent
      question="De acuerdo con el Reglamento Europeo de IA (EU AI Act) y las directrices de la UNESCO, ¿cómo se clasifican los sistemas de IA que evalúan resultados de aprendizaje para determinar el acceso o admisión de personas a instituciones educativas?"
      options={[
        {
          label: 'Sistemas de riesgo mínimo exentos de cualquier obligación de transparencia o auditoría.',
          isCorrect: false,
          explanation: 'Incorrecto: al afectar directamente el derecho a la educación y el futuro académico de las personas, no pueden considerarse de riesgo mínimo.'
        },
        {
          label: 'Sistemas de Alto Riesgo (Anexo III), sujetos a obligaciones estrictas de auditoría de sesgos, trazabilidad documental, calidad de datos y supervisión humana efectiva.',
          isCorrect: true,
          explanation: '¡Correcto! La admisión educativa, la evaluación certificativa y la selección laboral están catalogadas explícitamente como casos de Alto Riesgo.'
        },
        {
          label: 'Sistemas de uso obligatorio sin intervención docente para ahorrar costos administrativos.',
          isCorrect: false,
          explanation: 'Incorrecto: la normativa prohíbe delegar decisiones de alto impacto sin supervisión humana efectiva (Human-in-the-Loop).'
        }
      ]}
    />
  </div>
);
