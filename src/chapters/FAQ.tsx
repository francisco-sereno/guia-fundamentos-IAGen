import React from 'react';
import { Accordion, AuthorNote } from '../components/Shared';

export const FAQ = () => (
  <div className="space-y-8">
    <h2 id="sec-faq-0" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      1. Preguntas frecuentes sobre fundamentos, modelos y razonamiento (2026)
    </h2>
    <p>
      A continuación respondemos con rigor técnico y claridad práctica las dudas más habituales que surgen al implementar sistemas de IA generativa, modelos razonadores y flujos agénticos en entornos educativos y profesionales:
    </p>

    <Accordion
      items={[
        {
          title: '¿Cuándo debo usar un modelo de razonamiento (Test-Time Compute) en lugar de un modelo conversacional estándar?',
          content: (
            <p className="m-0">
              Utiliza un <strong>modelo conversacional estándar</strong> (o nivel de pensamiento bajo) cuando necesites baja latencia y costo mínimo en tareas directas: resumir un documento claro, traducir, formatear JSON o redactar comunicaciones. Reserva los <strong>modelos de razonamiento</strong> (con presupuesto alto de <em>Test-Time Compute</em>) para problemas donde la respuesta no es obvia y requiere planificación multicapa: demostrar teoremas, depurar arquitecturas complejas de código, resolver restricciones de horarios o auditar contradicciones normativas.
            </p>
          )
        },
        {
          title: 'Si un modelo tiene una ventana de contexto de 1 o 2 millones de tokens, ¿sigue siendo necesario implementar RAG?',
          content: (
            <p className="m-0">
              Sí, para la mayoría de los sistemas en producción. Aunque puedes cargar varios libros completos directamente en la ventana de contexto (especialmente útil combinado con <em>Context Caching</em>), cuando tu organización maneja decenas de miles de documentos que cambian a diario, reenviar millones de tokens en cada pregunta resulta lento y costoso. La arquitectura óptima en 2026 combina <strong>RAG Híbrido / GraphRAG</strong> para recuperar con precisión los fragmentos relevantes y un modelo de amplio contexto para sintetizarlos con trazabilidad.
            </p>
          )
        },
        {
          title: '¿Un modelo de lenguaje "comprende" realmente lo que dice o sólo repite texto memorizado?',
          content: (
            <p className="m-0">
              Ninguno de los dos extremos describe bien la realidad técnica. Un LLM no tiene conciencia subjetiva ni intencionalidad biológica (no "sabe" qué es el dolor o el sabor del café), pero tampoco es un simple diccionario de copiar y pegar: durante el entrenamiento construye <strong>representaciones geométricas internas y modelos funcionales</strong> de relaciones sintácticas, lógicas y causales que le permiten generalizar y resolver problemas inéditos fuera de sus datos exactos de entrenamiento.
            </p>
          )
        }
      ]}
    />

    <h2 id="sec-faq-1" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      2. Preguntas sobre Ingeniería de Contexto, MCP y Agentes
    </h2>

    <Accordion
      items={[
        {
          title: '¿Cuál es la diferencia práctica entre Ingeniería de Prompts e Ingeniería de Contexto?',
          content: (
            <p className="m-0">
              La <strong>Ingeniería de Prompts</strong> tradicional se enfocaba en cómo redactar la pregunta del usuario en una caja de chat. La <strong>Ingeniería de Contexto (Context Engineering)</strong> abarca la arquitectura completa que rodea al modelo en producción: instrucciones de sistema jerárquicas, delimitadores XML, inyección dinámica de memoria y documentos verificados (RAG), declaración de herramientas vía <strong>MCP</strong>, presupuesto de pensamiento y validación estricta del esquema de salida (<code className="font-mono text-xs">responseSchema</code>).
            </p>
          )
        },
        {
          title: '¿Qué es exactamente el Model Context Protocol (MCP) y por qué se volvió un estándar?',
          content: (
            <p className="m-0">
              <strong>MCP</strong> es un protocolo abierto (alojado bajo la Linux Foundation) que estandariza cómo las aplicaciones de IA se conectan con fuentes de datos y herramientas externas. En lugar de programar conectores distintos para cada modelo del mercado, una institución crea un único servidor MCP seguro (por ejemplo, para su sistema académico o su base de datos SQL) y cualquier cliente o agente compatible puede interactuar con él respetando los permisos del usuario.
            </p>
          )
        },
        {
          title: '¿Por qué a veces un modelo razonador empeora si le doy un prompt con demasiados pasos detallados (Chain-of-Thought manual)?',
          content: (
            <p className="m-0">
              Los modelos entrenados mediante <em>Reinforcement Learning with Verifiable Rewards (RLVR)</em> ya desarrollan internamente estrategias avanzadas de exploración y verificación de hipótesis. Si en el prompt les impones un camino rígido paso a paso diseñado por ti, puedes restringir su espacio de búsqueda interno. Con estos modelos es mejor especificar con nitidez <strong>qué objetivo se busca, qué datos son válidos y qué restricciones debe cumplir la entrega final</strong>.
            </p>
          )
        }
      ]}
    />

    <h2 id="sec-faq-2" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
      3. Preguntas sobre ética, privacidad y docencia
    </h2>

    <Accordion
      items={[
        {
          title: '¿Son confiables los "detectores de texto generado por IA" para sancionar a un estudiante?',
          content: (
            <p className="m-0">
              <strong>No.</strong> La evidencia empírica y las guías de la UNESCO coinciden en que los detectores estadísticos de texto sufren tasas inaceptables de falsos positivos (acusando injustamente a estudiantes que escriben con estructura formal o hablantes no nativos) y son fácilmente evadibles mediante paráfrasis. La respuesta pedagógica rigurosa no es la vigilancia punitiva por software, sino rediseñar la evaluación hacia procesos trazables, defensas orales, análisis de casos locales y trabajo en aula.
            </p>
          )
        },
        {
          title: '¿Cómo puedo usar IA con datos sensibles de estudiantes o pacientes sin violar leyes de protección de datos?',
          content: (
            <p className="m-0">
              Tienes dos rutas seguras: (1) Aplicar <strong>anonimización irreversible</strong> previa y utilizar entornos empresariales/institucionales cuyos contratos garanticen explícitamente <em>Zero Data Retention</em> (no entrenamiento con tus datos) y cumplimiento GDPR / normativas locales; o (2) Ejecutar <strong>Modelos de Lenguaje Pequeños (SLMs)</strong> localmente en tu propio hardware (<em>Edge AI</em>) para que ningún byte abandone la red interna de tu institución.
            </p>
          )
        }
      ]}
    />

    <AuthorNote>
      ¿Tienes una pregunta adicional o detectaste un caso de uso que te gustaría ver documentado en la guía? Puedes abrir un <em>issue</em> o enviar una contribución directamente en el repositorio abierto de GitHub enlazado en la cabecera.
    </AuthorNote>
  </div>
);
