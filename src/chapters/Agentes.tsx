import React from 'react';
import { InfoCard, GlossaryTerm, Accordion, AuthorNote } from '../components/Shared';
import { Bot, Network, BrainCircuit, ShieldCheck, Zap, Layers, Target, LineChart, GraduationCap, Briefcase, TerminalSquare, Database } from 'lucide-react';
import { MultiAgentDiagram } from '../components/MultiAgentDiagram';

export const AgentesContent = () => (
  <div className="prose-custom">
    <AuthorNote>
      Esta sección explora la nueva frontera de la inteligencia artificial: los agentes autónomos. Pasaremos de entender a la IA como un simple "oráculo" que responde preguntas, a verla como un "colaborador digital" capaz de razonar, planificar y ejecutar flujos de trabajo complejos.
    </AuthorNote>

    <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Agentes de IA y workflows agénticos</h1>
    <p className="text-xl text-slate-300 mb-8">Qué son, cómo funcionan y por qué importan en la automatización moderna.</p>

    <h2 id="sec-agentes-0" className="text-2xl font-bold mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Bot size={24} /> ¿Qué es exactamente un agente de IA?
    </h2>
    <p>
      En términos simples, un <strong>agente de inteligencia artificial</strong> es un sistema autónomo que recibe datos de su entorno, toma decisiones racionales y actúa sobre dicho entorno para lograr objetivos específicos. 
    </p>
    <p>
      A diferencia de los chatbots tradicionales (que son reactivos y esperan una instrucción para dar una respuesta), los agentes de IA son proactivos. Pueden mantener el contexto a lo largo del tiempo, dividir grandes tareas en pasos más pequeños, utilizar herramientas externas y trabajar hacia un objetivo a largo plazo sin guía humana constante.
    </p>

    <div className="my-8 grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
        <h4 className="text-lg font-bold text-slate-200 mb-3">Chatbot básico</h4>
        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-4">
          <li>Responde a consultas basándose en sus datos de entrenamiento.</li>
          <li>Esencialmente reactivo (pregunta &rarr; respuesta).</li>
          <li>No planifica con anticipación ni ejecuta acciones en sistemas externos.</li>
        </ul>
      </div>
      <div className="bg-indigo-900/20 p-6 rounded-2xl border border-indigo-500/30">
        <h4 className="text-lg font-bold text-indigo-300 mb-3">Agente de IA</h4>
        <ul className="space-y-2 text-sm text-slate-300 list-disc pl-4">
          <li>Usa memoria para recordar el contexto de interacciones pasadas.</li>
          <li>Llama a <strong>herramientas o APIs</strong> para obtener información o realizar acciones.</li>
          <li>Persigue un objetivo en varios pasos (razona, planifica, ejecuta y corrige).</li>
        </ul>
      </div>
    </div>

    <h2 id="sec-agentes-1" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <BrainCircuit size={24} /> Modelos vs. agentes
    </h2>
    <p>
      Para comprender la distinción entre agentes y modelos, considera la siguiente tabla comparativa (basada en la arquitectura de Google Cloud):
    </p>
    <div className="overflow-x-auto my-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-800/50 border-b border-slate-700">
            <th className="p-4 font-bold text-indigo-300">Modelos</th>
            <th className="p-4 font-bold text-emerald-300">Agentes</th>
          </tr>
        </thead>
        <tbody className="text-sm text-slate-300">
          <tr className="border-b border-slate-800/50">
            <td className="p-4">El conocimiento se limita a lo que está disponible en sus datos de entrenamiento.</td>
            <td className="p-4">El conocimiento se amplía mediante la conexión con sistemas externos a través de herramientas.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4">Inferencia/predicción única basada en la consulta del usuario. Sin gestión de historial de sesión (a menos que se implemente explícitamente).</td>
            <td className="p-4">Historial de sesión gestionado para permitir inferencias de múltiples turnos basadas en consultas y decisiones tomadas en la capa de orquestación.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4">Sin implementación nativa de herramientas.</td>
            <td className="p-4">Las herramientas se implementan de forma nativa en la arquitectura del agente.</td>
          </tr>
          <tr>
            <td className="p-4">Sin capa lógica nativa. Los usuarios deben formar prompts complejos (CoT, ReAct) manualmente.</td>
            <td className="p-4">Arquitectura cognitiva nativa que utiliza marcos de razonamiento (como ReAct) o frameworks preconstruidos (como LangChain).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-agentes-2" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <BrainCircuit size={24} /> La anatomía de un agente
    </h2>
    <p>
      Para entender cómo funciona un agente, es útil imaginarlo con tres componentes principales, adaptados de la teoría clásica de la IA:
    </p>
    
    <div className="space-y-4 my-6">
      <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/5">
        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1"><Zap size={20} /></div>
        <div>
          <h4 className="font-bold text-slate-200">1. Sensores (percepción)</h4>
          <p className="text-sm text-slate-400">Formas de percibir su entorno. Para los agentes de software, los "sensores" suelen ser los datos de entrada (texto del usuario, respuestas de una API, lectura de documentos).</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/5">
        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1"><BrainCircuit size={20} /></div>
        <div>
          <h4 className="font-bold text-slate-200">2. Motor de razonamiento (cerebro)</h4>
          <p className="text-sm text-slate-400">La inteligencia interna que procesa las entradas y decide las acciones. En los agentes modernos, suele ser un <GlossaryTerm term="LLM">LLM</GlossaryTerm> (Gran Modelo de Lenguaje) que actúa como el motor central de lógica y planificación.</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/5">
        <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 mt-1"><Layers size={20} /></div>
        <div>
          <h4 className="font-bold text-slate-200">3. Actuadores (herramientas)</h4>
          <p className="text-sm text-slate-400">Formas de actuar sobre el entorno. En lugar de mover partes físicas, un agente de software utiliza herramientas: enviar un correo, hacer una consulta SQL, buscar en la web o actualizar un CRM.</p>
        </div>
      </div>
    </div>

    <h2 id="sec-agentes-3" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Network size={24} /> Tipos de agentes de IA
    </h2>
    <p>
      La teoría de la IA clasifica a los agentes en cinco tipos principales, desde los más básicos hasta los más avanzados:
    </p>

    <Accordion title="1. Agentes de reflejo simple">
      <p>Funcionan puramente con reglas predefinidas (condicionales <em>if-then</em>). No tienen memoria de eventos pasados; simplemente reaccionan a lo que perciben en el momento. Son rápidos pero inflexibles (ej. un termostato básico o un bot que envía una alerta si una palabra clave aparece).</p>
    </Accordion>
    <Accordion title="2. Agentes reflexivos basados en modelos">
      <p>Mantienen un estado interno o "modelo" del mundo basado en lo que han percibido. Utilizan la memoria para rastrear aspectos del entorno que no son inmediatamente visibles, aunque siguen operando con reglas fijas (ej. un robot aspirador que recuerda qué áreas ya limpió).</p>
    </Accordion>
    <Accordion title="3. Agentes basados en objetivos">
      <p>Introducen el concepto de <strong>objetivos</strong>. Consideran escenarios hipotéticos y planifican una secuencia de acciones para lograr un resultado específico. Son mucho más flexibles porque deliberan antes de actuar (ej. un sistema de navegación GPS que recalcula la ruta si hay tráfico).</p>
    </Accordion>
    <Accordion title="4. Agentes basados en la utilidad">
      <p>Son agentes basados en objetivos que añaden una noción de <em>preferencia</em>. Intentan encontrar la solución <strong>óptima</strong> maximizando una "función de utilidad" (ej. un GPS que no solo busca llegar al destino, sino que busca el mejor equilibrio entre tiempo, distancia y consumo de combustible).</p>
    </Accordion>
    <Accordion title="5. Agentes de aprendizaje">
      <p>El tipo más avanzado. Pueden mejorar su rendimiento con el tiempo a medida que adquieren experiencia. Tienen un "crítico" que evalúa su desempeño y un "generador de problemas" que sugiere acciones exploratorias para aprender cosas nuevas (ej. algoritmos de recomendación que se adaptan a tus gustos cambiantes).</p>
    </Accordion>

    <h2 id="sec-agentes-4" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Zap size={24} /> Las llaves al mundo exterior: herramientas
    </h2>
    <p>
      Según la arquitectura propuesta por Google Cloud y OpenAI, los modelos fundacionales están limitados por su incapacidad para interactuar directamente con el mundo real. Las <strong>herramientas</strong> cierran esta brecha, permitiendo que el modelo pase de ser un sistema de "solo lectura" a uno de "lectura y escritura". Existen tres tipos principales:
    </p>
    
    <div className="space-y-6 my-8">
      <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Network size={24} /></div>
          <h4 className="text-xl font-bold text-indigo-300">1. Extensiones (APIs externas)</h4>
        </div>
        <p className="text-slate-300 mb-4">
          Permiten al agente ejecutar llamadas directas a servicios de terceros para obtener información en tiempo real o realizar transacciones. El agente actúa como un "puente" entre el usuario y la web.
        </p>
        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo práctico: agente de viajes</p>
          <p className="text-sm text-slate-400 italic">
            "Busca vuelos de Madrid a Tokio para el 15 de mayo y reserva el más económico que no tenga escalas."
          </p>
          <p className="text-xs text-indigo-400 mt-2">
            &rarr; El agente llama a la API de Skyscanner para consultar precios y luego a la API de la aerolínea para procesar la reserva.
          </p>
        </div>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><TerminalSquare size={24} /></div>
          <h4 className="text-xl font-bold text-emerald-300">2. Funciones (function calling)</h4>
        </div>
        <p className="text-slate-300 mb-4">
          El modelo no ejecuta la acción directamente, sino que genera una estructura de datos (generalmente JSON) con los argumentos necesarios para que tu propia aplicación ejecute una función local. Esto ofrece el máximo control de seguridad y privacidad.
        </p>
        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo práctico: gestión de inventario</p>
          <p className="text-sm text-slate-400 italic">
            "Actualiza el stock de 'Camisetas Azules' restando 5 unidades y genera una alerta si quedan menos de 10."
          </p>
          <p className="text-xs text-emerald-400 mt-2">
            &rarr; El modelo devuelve: <code>{`{ "function": "update_stock", "args": { "item": "Camisetas Azules", "quantity": -5, "alert_threshold": 10 } }`}</code>. Tu servidor recibe esto y actualiza la base de datos SQL.
          </p>
        </div>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><Database size={24} /></div>
          <h4 className="text-xl font-bold text-amber-300">3. Almacenes de datos (RAG)</h4>
        </div>
        <p className="text-slate-300 mb-4">
          Conectan al agente con bases de datos de conocimiento específicas (documentos internos, manuales técnicos, políticas de empresa). El agente busca la información relevante antes de generar la respuesta para evitar alucinaciones.
        </p>
        <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ejemplo práctico: Soporte técnico interno</p>
          <p className="text-sm text-slate-400 italic">
            "¿Cuál es el procedimiento para configurar la VPN en un MacBook Pro M3 según nuestra guía de IT de 2024?"
          </p>
          <p className="text-xs text-amber-400 mt-2">
            &rarr; El agente busca en el PDF de la guía de IT, extrae los pasos exactos y los resume para el empleado, citando la página del documento.
          </p>
        </div>
      </div>
    </div>

    <h2 id="sec-agentes-5" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Target size={24} /> ¿Cuándo necesitas realmente un agente?
    </h2>
    <p>
      Construir agentes requiere repensar cómo los sistemas toman decisiones. A diferencia de la automatización convencional (basada en reglas estrictas), los agentes son ideales para flujos de trabajo donde los enfoques deterministas fallan. Considera construir un agente si tu caso de uso cumple con estos criterios:
    </p>
    <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-300">
      <li><strong>Toma de decisiones compleja:</strong> Flujos que involucran juicio matizado, excepciones o decisiones sensibles al contexto (ej. aprobar un reembolso basado en el historial del cliente).</li>
      <li><strong>Reglas difíciles de mantener:</strong> Sistemas que se han vuelto inmanejables debido a conjuntos de reglas extensos y complejos.</li>
      <li><strong>Alta dependencia de datos no estructurados:</strong> Escenarios que implican interpretar lenguaje natural, extraer significado de documentos o interactuar conversacionalmente.</li>
    </ul>

    <h2 id="sec-agentes-6" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Layers size={24} /> Los 5 niveles de autonomía agéntica
    </h2>
    <p>
      La autonomía de los sistemas agénticos no es binaria. Inspirados en los niveles de conducción autónoma, podemos clasificar a los agentes impulsados por IA generativa en cinco niveles:
    </p>
    
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border-collapse bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700">
        <thead>
          <tr className="bg-slate-800 text-indigo-300">
            <th className="p-4 font-bold border-b border-slate-700">Nivel</th>
            <th className="p-4 font-bold border-b border-slate-700">Características principales</th>
            <th className="p-4 font-bold border-b border-slate-700">Ejemplo concreto</th>
          </tr>
        </thead>
        <tbody className="text-sm text-slate-300">
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Nivel 1: automatización sin IA</td>
            <td className="p-4">Sistemas rígidos basados en reglas fijas (if-then). Sin aprendizaje ni adaptación.</td>
            <td className="p-4">Chatbots de opciones predefinidas ("Presione 1 para ventas").</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Nivel 2: automatización con IA generativa</td>
            <td className="p-4">Incorpora IA pero requiere intervención activa del usuario para cada paso.</td>
            <td className="p-4">Usar ChatGPT o Copilot para redactar un correo basado en viñetas.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Nivel 3: workflow agéntico de baja autonomía</td>
            <td className="p-4">Ejecuta tareas de manera autónoma dentro de parámetros estrictos y revisión humana obligatoria.</td>
            <td className="p-4">Un GPT especializado que elabora borradores legales para revisión.</td>
          </tr>
          <tr className="border-b border-slate-800/50">
            <td className="p-4 font-bold text-slate-200">Nivel 4: workflow agéntico de autonomía moderada</td>,TargetContent:
            <td className="p-4">Impulsa la ejecución de tareas mediante rutas predefinidas y uso de herramientas.</td>
            <td className="p-4">Un flujo en n8n que clasifica correos, extrae datos y consulta una API.</td>
          </tr>
          <tr>
            <td className="p-4 font-bold text-slate-200">Nivel 5: workflow agéntico de elevada autonomía</td>
            <td className="p-4">Gestiona flujos completos de manera autónoma, adaptativa y dinámica.</td>
            <td className="p-4">Un agente que organiza un viaje complejo y ajusta el itinerario ante cancelaciones.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="sec-agentes-7" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Network size={24} /> Arquitecturas multiagente y frameworks
    </h2>
    <p>
      Cuando un solo agente no es suficiente, los <strong>sistemas multiagente</strong> distribuyen el trabajo. Estas arquitecturas modulares permiten que agentes especializados colaboren:
    </p>

    <MultiAgentDiagram />

    <ul className="list-disc pl-5 space-y-2 mt-4 mb-6 text-slate-300">
      <li><strong>Sistema de tarea secuencial:</strong> Los agentes trabajan en cadena, construyendo sobre los resultados del anterior.</li>
      <li><strong>Red de múltiples agentes:</strong> Comunicación flexible entre especialistas, aunque presenta desafíos de escalabilidad.</li>
      <li><strong>Agente supervisor (Orquestador):</strong> Un agente central (Manager) recibe la tarea, la divide y la asigna a agentes especializados (ej. Investigador, Analista, Escritor).</li>
      <li><strong>Equipos jerárquicos:</strong> Niveles de supervisión para garantizar control y eficiencia en decisiones muy sofisticadas.</li>
    </ul>

    <InfoCard type="idea" title="El ecosistema de herramientas">
      <p>Hoy en día, no necesitas programar desde cero para crear agentes. Existen dos enfoques principales:</p>
      <ul className="mt-2 space-y-1">
        <li><strong>No-Code / Low-Code:</strong> Plataformas visuales como <strong>n8n</strong>, <strong>Taskade</strong> o <strong>Langflow</strong> permiten conectar nodos (Triggers, LLMs, Memoria, Herramientas) arrastrando y soltando.</li>
        <li><strong>Code-First:</strong> Frameworks como <strong>CrewAI</strong>, <strong>AutoGPT</strong> o <strong>LangGraph</strong> ofrecen control total mediante código (Python/JS) para definir flujos dinámicos complejos con ciclos y persistencia.</li>
      </ul>
    </InfoCard>

    <h2 id="sec-agentes-8" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <TerminalSquare size={24} /> Del concepto al código: construyendo un agente
    </h2>
    <p>
      Para ver cómo se materializa la teoría, aquí tienes un ejemplo de cómo se construye un agente <strong>ReAct</strong> (Reason + Act) utilizando Python, el framework LangChain y un modelo de lenguaje. Este agente tiene acceso a una herramienta de búsqueda en la web (SerpAPI) para responder preguntas que requieren información actualizada, como se describe en la guía de ingeniería de prompts de Google.
    </p>

    <div className="my-6 bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
      <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between items-center">
        <span>agente_react.py</span>
        <span>Python</span>
      </div>
      <pre className="p-4 text-sm overflow-x-auto text-slate-300 font-mono">
        <code>
{`from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.agents import AgentType
from langchain.llms import VertexAI

# 1. Definimos el objetivo (Prompt)
prompt = "¿Cuántos hijos tienen los miembros de la banda Metallica?"

# 2. Inicializamos el "Cerebro" (Motor de Razonamiento)
# Usamos una temperatura baja (0.1) para respuestas más deterministas
llm = VertexAI(temperature=0.1)

# 3. Proporcionamos los "Actuadores" (Herramientas)
# Le damos acceso a 'serpapi' para buscar en Google
tools = load_tools(["serpapi"], llm=llm)

# 4. Ensamblamos el Agente
agent = initialize_agent(
    tools, 
    llm, 
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, 
    verbose=True # Para ver su proceso de pensamiento
)

# 5. Ejecutamos el agente
agent.run(prompt)`}
        </code>
      </pre>
    </div>
    
    <p className="text-sm text-slate-400 mt-2 mb-8">
      Al ejecutar este código, el agente no adivina la respuesta. Primero <strong>razona</strong> que necesita buscar a los miembros de Metallica, luego <strong>actúa</strong> usando la herramienta de búsqueda para encontrar a cada miembro, <strong>observa</strong> los resultados (cuántos hijos tiene cada uno), y finalmente calcula la suma total antes de dar la respuesta final.
    </p>

    <h2 id="sec-agentes-9" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Target size={24} /> Casos de uso reales
    </h2>
    <p>Los agentes de IA ya están transformando múltiples industrias. Aquí algunos ejemplos prácticos:</p>

    <div className="grid sm:grid-cols-2 gap-4 my-6">
      <div className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/50">
        <GraduationCap className="text-indigo-400 mb-3" size={24} />
        <h4 className="font-bold text-slate-200 mb-2">Educación: tutores inteligentes</h4>
        <p className="text-sm text-slate-400">Agentes como "Khanmigo" de Khan Academy actúan como tutores socráticos. No dan la respuesta directa, sino que guían al estudiante paso a paso, adaptándose a su nivel y manteniendo el contexto de la lección.</p>
      </div>
      <div className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/50">
        <Briefcase className="text-emerald-400 mb-3" size={24} />
        <h4 className="font-bold text-slate-200 mb-2">Atención al cliente autónoma</h4>
        <p className="text-sm text-slate-400">Agentes que no solo responden FAQs, sino que pueden procesar devoluciones, verificar el estado de un pedido en la base de datos y emitir reembolsos, escalando a un humano solo en casos complejos.</p>
      </div>
      <div className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/50">
        <LineChart className="text-amber-400 mb-3" size={24} />
        <h4 className="font-bold text-slate-200 mb-2">Análisis de datos</h4>
        <p className="text-sm text-slate-400">Un agente al que le preguntas en lenguaje natural: "¿Cuáles fueron las ventas del Q3?". El agente traduce esto a una consulta SQL, extrae los datos de la base de datos, y genera un resumen ejecutivo con gráficos.</p>
      </div>
      <div className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/50">
        <Layers className="text-pink-400 mb-3" size={24} />
        <h4 className="font-bold text-slate-200 mb-2">Curaduría e investigación</h4>
        <p className="text-sm text-slate-400">Agentes que monitorean constantemente la web o redes sociales en busca de temas específicos, filtran el spam, resumen los hallazgos relevantes y envían un reporte diario automatizado.</p>
      </div>
    </div>

    <h2 id="sec-agentes-10" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <ShieldCheck size={24} /> Seguridad y "guardrails" (barandales)
    </h2>
    <p>
      A medida que los agentes ganan autonomía (capacidad de ejecutar acciones en el mundo real), la seguridad se vuelve primordial. No queremos que un agente envíe un correo inapropiado a un cliente o borre una base de datos por error.
    </p>

    <Accordion title="Implementación de guardrails">
      <p>Los <em>guardrails</em> son mecanismos de defensa en capas que aseguran que el agente opere de manera predecible y segura:</p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li><strong>Clasificadores de relevancia:</strong> Aseguran que el agente no se desvíe del tema (ej. si es un agente de soporte técnico, no debe responder preguntas sobre política).</li>
        <li><strong>Filtros de PII:</strong> Previenen la exposición innecesaria de Información de Identificación Personal.</li>
        <li><strong>Salvaguardas de herramientas:</strong> Asignar niveles de riesgo a las herramientas. Una herramienta de "lectura" (buscar en la web) es de bajo riesgo. Una herramienta de "escritura" (emitir un reembolso) es de alto riesgo y puede requerir aprobación humana.</li>
      </ul>
    </Accordion>

    <h2 id="sec-agentes-11" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Bot size={24} /> El factor humano: centauros y cyborgs
    </h2>
    <p>
      La llegada de los agentes no elimina al humano, sino que redefine su rol. El paradigma de <strong>Human-in-the-Loop (HITL)</strong> es esencial para validar, refinar o anular respuestas generadas por la IA.
    </p>
    <p className="mt-4">
      El profesor Ethan Mollick describe dos modelos de colaboración emergentes:
    </p>
    <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-300">
      <li><strong>El modelo Centauro:</strong> Humanos e IA dividen tareas claramente definidas. El humano hace la estrategia, la IA ejecuta el procesamiento masivo.</li>
      <li><strong>El modelo Cyborg:</strong> Una integración más profunda donde la línea entre el trabajo humano y el de la IA se difumina, trabajando en tándem continuo.</li>
    </ul>

    <AuthorNote>
      En lugar de pensar en humanos asistidos por IA, el nuevo paradigma sugiere "Agentes aumentados por humanos". El agente ejecuta el flujo de trabajo, pero el humano establece los límites, aprueba acciones de alto riesgo (como realizar pagos) y aporta el juicio ético y estratégico que la máquina no posee.
    </AuthorNote>

    <h2 id="sec-agentes-12" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <GraduationCap size={24} /> Preparando a tu equipo para la IA agéntica
    </h2>
    <p>
      La implementación exitosa de agentes requiere nuevas competencias en los equipos de trabajo. No se trata solo de saber usar herramientas, sino de cambiar la forma en que pensamos sobre los procesos:
    </p>
    <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-300">
      <li><strong>Pensamiento Sistémico:</strong> La habilidad de dividir problemas complejos en pasos simples, identificar qué información necesita el agente y planear verificaciones de calidad.</li>
      <li><strong>Ingeniería de Prompts (Avanzada):</strong> Pasar de dar órdenes simples ("Haz un reporte") a proporcionar contexto, objetivos, restricciones y formatos precisos.</li>
      <li><strong>Gestión de Agentes:</strong> Aprender a supervisar, auditar y optimizar sistemas autónomos, entendiendo cuándo confiar en la IA y cuándo escalar a un humano.</li>
    </ul>

    <h2 id="sec-agentes-13" className="text-2xl font-bold mt-12 mb-4 text-indigo-400 scroll-mt-24 flex items-center gap-2">
      <Briefcase size={24} /> Caso práctico: el workflow agéntico de SofIA
    </h2>
    <p>
      Para entender cómo todas estas piezas encajan, veamos cómo SofIA podría utilizar un sistema multiagente para automatizar su búsqueda de empleo, desde el análisis de su CV hasta la propuesta de ofertas laborales.
    </p>

    <div className="my-8 relative">
      {/* Línea conectora */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-indigo-500/30 hidden md:block"></div>

      <div className="space-y-8">
        {/* Paso 1 */}
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 z-10 shrink-0">
            <Layers size={24} />
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex-1">
            <h4 className="text-lg font-bold text-indigo-300 mb-2">Paso 1: ingesta de datos (Data Store / RAG)</h4>
            <p className="text-sm text-slate-300 mb-3">
              SofIA sube su CV en PDF y un documento de texto con sus preferencias (salario esperado, trabajo remoto, industrias de interés).
            </p>
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
              <strong className="text-emerald-400">Agente "Analista de Perfil":</strong> Utiliza un <em>Data Store</em> para convertir los documentos en embeddings vectoriales. Extrae sus habilidades clave (ej. gestión de proyectos, análisis de datos) y sus restricciones.
            </div>
          </div>
        </div>

        {/* Paso 2 */}
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 z-10 shrink-0">
            <Zap size={24} />
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex-1">
            <h4 className="text-lg font-bold text-indigo-300 mb-2">Paso 2: búsqueda activa (extensiones / APIs)</h4>
            <p className="text-sm text-slate-300 mb-3">
              El sistema necesita encontrar ofertas de trabajo reales y actualizadas que coincidan con el perfil extraído.
            </p>
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
              <strong className="text-emerald-400">Agente "Buscador de Oportunidades":</strong> Recibe el perfil de SofIA y utiliza <em>Extensiones</em> (como la API de LinkedIn o SerpAPI para Google Jobs) para buscar vacantes abiertas en las últimas 24 horas.
            </div>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 z-10 shrink-0">
            <BrainCircuit size={24} />
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex-1">
            <h4 className="text-lg font-bold text-indigo-300 mb-2">Paso 3: razonamiento y filtrado (orquestador)</h4>
            <p className="text-sm text-slate-300 mb-3">
              Se han encontrado 50 posibles ofertas, pero no todas son ideales. El sistema debe evaluar cada una.
            </p>
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
              <strong className="text-emerald-400">Agente "Orquestador":</strong> Utiliza un marco de razonamiento (como ReAct) para comparar las 50 ofertas con el perfil de SofIA. Descarta las que requieren presencialidad (si SofIA pidió remoto) y selecciona el "Top 3" con mayor porcentaje de coincidencia.
            </div>
          </div>
        </div>

        {/* Paso 4 */}
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 z-10 shrink-0">
            <Target size={24} />
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex-1">
            <h4 className="text-lg font-bold text-indigo-300 mb-2">Paso 4: acción y formateo (function calling)</h4>
            <p className="text-sm text-slate-300 mb-3">
              El sistema debe presentar los resultados a SofIA y preparar borradores de cartas de presentación.
            </p>
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
              <strong className="text-emerald-400">Agente "Estratega de Postulación":</strong> Redacta cartas personalizadas para el Top 3. Luego, utiliza <em>Function Calling</em> para estructurar toda esta información en un formato JSON estricto, permitiendo que la interfaz web (UI) muestre las ofertas en tarjetas interactivas.
            </div>
          </div>
        </div>

        {/* Paso 5 */}
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 z-10 shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex-1">
            <h4 className="text-lg font-bold text-indigo-300 mb-2">Paso 5: Human-in-the-Loop (HITL)</h4>
            <p className="text-sm text-slate-300 mb-3">
              Antes de enviar cualquier postulación real, el sistema se detiene.
            </p>
            <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-sm">
              <strong className="text-emerald-400">SofIA (El Humano):</strong> Revisa las 3 ofertas propuestas y los borradores de las cartas en su panel de control. Modifica un párrafo de una carta y hace clic en "Aprobar y Enviar" solo para 2 de las ofertas. El agente entonces ejecuta la acción final de envío.
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);
