import React from 'react';
import { 
  Bot, Cpu, Network, ShieldCheck, Terminal, Layers, RefreshCw, Zap, Lock
} from 'lucide-react';
import { GlossaryTerm, InfoCard, QuizComponent, CodeBlock, AuthorNote } from '../components/Shared';
import { MultiAgentDiagram } from '../components/MultiAgentDiagram';
import { AgentWorkflowSimulator } from '../components/InteractiveComponents';

export const Agentes = () => (
  <div className="space-y-8">
    <h2 id="sec-agentes-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      Propósito y el paso de los chatbots a los sistemas agénticos
    </h2>
    <p>
      Si el periodo 2022–2024 estuvo dominado por interfaces conversacionales pasivas que esperaban una pregunta para devolver texto, el ciclo 2025–2026 marca la consolidación de los <strong><GlossaryTerm term="Agente de IA">Agentes de IA</GlossaryTerm></strong>: sistemas que combinan un modelo de razonamiento con memoria persistente, planificación iterativa y capacidad de ejecutar acciones verificadas sobre herramientas externas.
    </p>

    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
      <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
        Evolución en el caso de estudio · SofIA
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
        SofIA ya no copia y pega manualmente tablas de calificaciones en una ventana de chat. Ahora coordina un flujo agéntico donde un asistente conectado mediante el <strong><GlossaryTerm term="Model Context Protocol">Model Context Protocol (MCP)</GlossaryTerm></strong> consulta las métricas anonimizadas del aula virtual, cruza los objetivos curriculares pendientes y deja preparado en borrador el material personalizado de refuerzo esperando su aprobación docente.
      </p>
    </div>

    <h2 id="sec-agentes-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. Diferencia estructural: LLM pasivo frente a Agente autónomo
    </h2>
    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Atributo arquitectónico</th>
            <th>LLM Conversacional Pasivo</th>
            <th>Sistema Agéntico (Arquitectura 2026)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Flujo de control</strong></td>
            <td>Lineal de un solo turno (<span className="font-mono text-xs">Entrada → Salida</span>) dirigido íntegramente por el usuario.</td>
            <td>Bucle autónomo (<span className="font-mono text-xs">Pensar → Actuar → Observar → Replanificar</span>) hasta cumplir la meta.</td>
          </tr>
          <tr>
            <td><strong>Conexión con el entorno</strong></td>
            <td>Aislado a su ventana de contexto inmediata.</td>
            <td>Conectado a bases de datos, APIs, navegadores e intérpretes de código vía <strong>MCP</strong>.</td>
          </tr>
          <tr>
            <td><strong>Manejo de errores</strong></td>
            <td>Si la salida falla, el humano debe detectar el error y reformular el prompt.</td>
            <td>Inspecciona el mensaje de error de la herramienta o compilador y autocorrige su estrategia.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-agentes-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. Los cuatro pilares de la arquitectura agéntica
    </h2>
    <p>
      En la literatura de ingeniería de sistemas cognitivos (Lilian Weng, Andrew Ng, Google DeepMind, Anthropic), todo agente funcional se sostiene sobre cuatro subsistemas acoplados:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <InfoCard title="1. Motor de Planificación y Reflexión" icon={Cpu} color="blue">
        Descompone metas complejas en sub-objetivos manejables mediante patrones como <strong><GlossaryTerm term="ReAct">ReAct (Reason + Act)</GlossaryTerm></strong>, <em>Plan-and-Solve</em> o <em>Reflexion</em>, evaluando si cada paso acerca o aleja al sistema del criterio de éxito.
      </InfoCard>
      <InfoCard title="2. Arquitectura de Memoria Multicapa" icon={Layers} color="purple">
        Combina <strong>memoria de corto plazo</strong> (estado de trabajo en la ventana de contexto actual) con <strong>memoria de largo plazo episódica y semántica</strong> (bases vectoriales y grafos de conocimiento persistentes entre sesiones).
      </InfoCard>
      <InfoCard title="3. Uso de Herramientas (Tool Use / Function Calling)" icon={Terminal} color="emerald">
        Capacidad nativa del modelo para decidir cuándo detener la generación de texto y emitir una llamada estructurada a una función externa (calculadora científica, motor SQL, API climática o sandbox de Python).
      </InfoCard>
      <InfoCard title="4. Gobernanza y Guardarraíles Operativos" icon={ShieldCheck} color="amber">
        Límites deterministas de seguridad: listas blancas de herramientas permitidas, presupuestos máximos de iteración para evitar bucles infinitos y puntos de aprobación humana (<GlossaryTerm term="Human-in-the-Loop">Human-in-the-Loop</GlossaryTerm>).
      </InfoCard>
    </div>

    <h2 id="sec-agentes-3" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. El bucle operativo ReAct (Reason + Act) en detalle
    </h2>
    <p>
      El patrón <strong><GlossaryTerm term="ReAct">ReAct</GlossaryTerm></strong> (Yao et al.) constituye la columna vertebral de los agentes modernos. En lugar de actuar a ciegas o razonar en el vacío sin datos reales, el agente alterna explícitamente tres fases en cada ciclo:
    </p>
    <ol>
      <li><strong>Thought (Pensamiento):</strong> El modelo razona sobre qué información le falta y qué herramienta es la idónea para obtenerla.</li>
      <li><strong>Action (Acción):</strong> Emite un objeto JSON tipado invocando la herramienta con los argumentos exactos.</li>
      <li><strong>Observation (Observación):</strong> El entorno ejecuta la función real, devuelve el resultado al contexto del agente, y éste actualiza su plan con base en la evidencia empírica recibida.</li>
    </ol>

    <h2 id="sec-agentes-4" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      4. Estándares abiertos de interoperabilidad 2026: MCP y Protocolo A2A
    </h2>
    <p>
      Hasta finales de 2024, conectar un modelo de IA con diez fuentes de datos distintas exigía escribir diez integraciones propietarias a medida (el problema <span className="font-mono text-xs">M × N</span>). En 2025–2026, la industria convergió en dos protocolos abiertos fundamentales bajo el paraguas de la Linux Foundation y los principales laboratorios:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
          Conexión Agente ↔ Datos y Herramientas
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-2">
          <GlossaryTerm term="Model Context Protocol">Model Context Protocol (MCP)</GlossaryTerm>
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
          Actúa como el "puerto USB-C universal" para la IA. Un <strong>Servidor MCP</strong> expone de forma estandarizada tres primitivas: <strong>Resources</strong> (datos de lectura como archivos o esquemas SQL), <strong>Tools</strong> (funciones ejecutables con validación de esquema) y <strong>Prompts</strong> (plantillas preconfiguradas). Cualquier <strong>Cliente MCP</strong> compatible puede descubrir e invocar estas capacidades bajo autorización OAuth 2.1.
        </p>
      </div>

      <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
          Conexión Agente ↔ Agente
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0 mb-2">
          <GlossaryTerm term="Protocolo A2A">Protocolo Agent-to-Agent (A2A)</GlossaryTerm>
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-0">
          Mientras MCP conecta a un agente con herramientas deterministas, el protocolo <strong>A2A</strong> permite que agentes autónomos construidos en distintos frameworks (ej. LangGraph, Google ADK, AutoGen, CrewAI) publiquen su tarjeta de capacidades (<em>Agent Card</em>), negocien subtareas asíncronas e intercambien artefactos verificados.
        </p>
      </div>
    </div>

    <AgentWorkflowSimulator />

    <h2 id="sec-agentes-5" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      5. Implementación de Function Calling y herramientas con el SDK moderno
    </h2>
    <p>
      Observa cómo se declara y conecta una herramienta verificada utilizando el SDK oficial <code className="font-mono text-xs">@google/genai</code> en TypeScript para el ecosistema de SofIA:
    </p>

    <CodeBlock
      language="typescript"
      code={`import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';

const ai = new GoogleGenAI();

// 1. Declaración determinista de la herramienta (compatible con esquemas MCP)
const consultarMetricasCursoDeclaration: FunctionDeclaration = {
  name: 'consultarMetricasCurso',
  description: 'Obtiene el porcentaje de logro promedio por unidad curricular de un curso sin exponer datos personales.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      cursoId: {
        type: Type.STRING,
        description: 'Identificador del curso, por ejemplo "2B-SECUNDARIA"'
      },
      unidad: {
        type: Type.STRING,
        description: 'Nombre de la unidad curricular a consultar'
      }
    },
    required: ['cursoId', 'unidad']
  }
};

// 2. El modelo decide autónomamente si necesita invocar la herramienta
const response = await ai.models.generateContent({
  model: 'gemini-3.8-flash',
  contents: 'Analiza el avance del curso 2B-SECUNDARIA en la unidad de Termodinámica y sugiere una actividad de refuerzo.',
  config: {
    tools: [{ functionDeclarations: [consultarMetricasCursoDeclaration] }]
  }
});`}
    />

    <h2 id="sec-agentes-6" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      6. Sistemas Multi-Agente y patrones de orquestación
    </h2>
    <p>
      Cuando un problema abarca múltiples especialidades, un único agente con decenas de herramientas en su contexto sufre degradación de atención. La solución arquitectónica consiste en dividir la responsabilidad en un <strong>Sistema Multi-Agente</strong>:
    </p>

    <MultiAgentDiagram />

    <h2 id="sec-agentes-7" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      7. Topologías de coordinación: Jerárquica, Secuencial y Debate
    </h2>
    <ul>
      <li><strong>Orquestación Secuencial (Pipeline):</strong> El Agente A extrae datos limpios, pasa el artefacto al Agente B que diseña la secuencia didáctica, y el Agente C valida la accesibilidad. Altamente predecible y fácil de depurar.</li>
      <li><strong>Orquestación Jerárquica (Supervisor / Workers):</strong> Un agente orquestador central recibe la petición, delega subtareas en paralelo a agentes especialistas y consolida el informe final.</li>
      <li><strong>Patrón Evaluador-Optimizador (Debate / Crítica):</strong> Un agente generador produce una propuesta y un agente auditor independiente (configurado con una rúbrica estricta) la rechaza o solicita mejoras específicas hasta alcanzar el umbral de calidad.</li>
    </ul>

    <h2 id="sec-agentes-8" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      8. Frameworks de desarrollo agéntico en producción
    </h2>
    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>Framework / Estándar</th>
            <th>Paradigma de diseño</th>
            <th>Caso de uso ideal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>LangGraph</strong></td>
            <td>Máquinas de estados basadas en grafos cíclicos con persistencia y control fino de transición.</td>
            <td>Aplicaciones de producción que requieren control estricto de bucles, memoria y pausas Human-in-the-Loop.</td>
          </tr>
          <tr>
            <td><strong>Google Agent Development Kit (ADK) / Interactions API</strong></td>
            <td>Orquestación nativa multimodal con soporte para agentes de investigación profunda y protocolo A2A.</td>
            <td>Flujos que integran búsqueda verificada, procesamiento de audio/video y ejecución de código en servidor.</td>
          </tr>
          <tr>
            <td><strong>Servidores MCP (Model Context Protocol)</strong></td>
            <td>Capa universal de conectores desacoplados del modelo base.</td>
            <td>Exponer bases de datos institucionales, repositorios o LMS una sola vez para cualquier agente autorizado.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-agentes-9" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      9. Seguridad agéntica: privilegios mínimos y aislamiento (Sandboxing)
    </h2>
    <p>
      Dar a un modelo de lenguaje la capacidad de ejecutar acciones en sistemas reales multiplica la superficie de riesgo. Las tres reglas de oro de la seguridad agéntica en 2026 son:
    </p>
    <ol>
      <li><strong>Principio de mínimo privilegio:</strong> Si un agente solo necesita consultar calificaciones agregadas para generar un informe, sus credenciales MCP deben ser de <em>solo lectura (SELECT)</em> sobre vistas anonimizadas, jamás permisos de escritura o borrado de tablas.</li>
      <li><strong>Ejecución de código en contenedores efímeros (Sandboxes):</strong> Cuando un agente escribe y ejecuta código Python para analizar datos, dicho código debe correr en un entorno aislado (microVM o WebAssembly) sin acceso a la red interna.</li>
      <li><strong>Confirmación obligatoria para acciones irreversibles:</strong> Enviar correos masivos, modificar registros oficiales o realizar transacciones requiere siempre un freno determinista que solicite confirmación explícita del usuario humano.</li>
    </ol>

    <h2 id="sec-agentes-10" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      10. Caso aplicado: arquitectura del ecosistema agéntico de SofIA
    </h2>
    <p>
      Integrando todo lo aprendido, SofIA estructuró su asistente departamental con tres límites claros: (1) lectura exclusiva de documentos curriculares vía servidor MCP local, (2) generación de actividades mediante un bucle Generador-Crítico alineado con el Marco PotencIA, y (3) exportación en borrador editable para que cada profesor mantenga el 100% de la decisión pedagógica.
    </p>

    <h2 id="sec-agentes-11" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      11. Observabilidad, trazas y control de costos en bucles autónomos
    </h2>
    <p>
      Un riesgo operativo frecuente en sistemas multi-agente es que dos agentes entren en un bucle de cortesía o corrección infinita consumiendo miles de tokens. Toda arquitectura en producción debe implementar un parámetro duro de <code className="font-mono text-xs">max_iterations</code> (típicamente entre 3 y 8 pasos), un presupuesto máximo de tokens por tarea y registro completo de trazas (<em>OpenTelemetry para IA</em>) para auditar cada llamada a herramienta.
    </p>

    <h2 id="sec-agentes-12" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      12. Cuándo NO usar un agente autónomo
    </h2>
    <p>
      La ingeniería madura evita la sobre-ingeniería: si un flujo de trabajo tiene pasos fijos y conocidos de antemano (por ejemplo: transcribir un audio, resumirlo en 5 puntos y guardarlo en una tabla), una <strong>cadena determinista (Workflow / Pipeline)</strong> es más rápida, económica, predecible y fácil de auditar que un agente autónomo abierto. Reserva los agentes para problemas donde la ruta de solución depende dinámicamente de lo que se descubra en cada paso.
    </p>

    <h2 id="sec-agentes-13" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      13. Síntesis y autoevaluación sobre sistemas agénticos
    </h2>
    <AuthorNote>
      La estandarización en torno al <strong>Model Context Protocol (MCP)</strong> y el protocolo <strong>A2A</strong> ha transformado a los agentes de experimentos frágiles en componentes modulares de software. Sin embargo, cuanta mayor autonomía técnica posee un sistema, más riguroso debe ser el diseño de sus puntos de control humano.
    </AuthorNote>

    <QuizComponent
      question="¿Qué función cumple el estándar abierto Model Context Protocol (MCP) en la arquitectura de agentes de IA de 2026?"
      options={[
        {
          label: 'Reemplaza a los modelos Transformer por hojas de cálculo estáticas sin necesidad de GPUs.',
          isCorrect: false,
          explanation: 'Incorrecto: MCP no reemplaza al modelo, sino que estandariza su conexión con fuentes de contexto y herramientas.'
        },
        {
          label: 'Proporciona un protocolo universal cliente-servidor (JSON-RPC) para conectar de forma segura y estandarizada a los modelos y agentes con fuentes de datos (Resources), herramientas (Tools) y plantillas (Prompts).',
          isCorrect: true,
          explanation: '¡Exacto! MCP resuelve la fragmentación de integraciones actuando como un conector estándar y auditable entre agentes y sistemas externos.'
        },
        {
          label: 'Elimina la necesidad de autenticación OAuth y permite que cualquier agente borre bases de datos sin supervisión.',
          isCorrect: false,
          explanation: 'Incorrecto: MCP enfatiza el control de permisos, OAuth 2.1 y la confirmación humana para operaciones sensibles.'
        }
      ]}
    />
  </div>
);
