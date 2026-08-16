export const PROJECT_STATUS = {
  PLANNED: "planned",
  IN_PROGRESS: "in_progress",
  AVAILABLE: "available",
};

export const projects = [
  {
    slug: "saas-platform-delivery-lab",
    title: {
      en: "SaaS Platform Delivery Lab",
      es: "SaaS Platform Delivery Lab",
    },
    status: PROJECT_STATUS.IN_PROGRESS,
    summary: {
      en: "A self-directed lab to practice turning a rough SaaS feature idea into a structured, trackable delivery plan.",
      es: "Un laboratorio autodirigido para practicar cómo convertir una idea de funcionalidad SaaS en un plan de entrega estructurado y trazable.",
    },
    problem: {
      en: "SaaS teams often lose delivery predictability when technical scope — especially architecture decisions with security implications, like tenant isolation — isn't broken down and documented early enough for engineering, product and leadership to plan and audit around it.",
      es: "Los equipos SaaS suelen perder previsibilidad de entrega cuando el alcance técnico —especialmente decisiones de arquitectura con implicaciones de seguridad, como el aislamiento entre clientes— no se desglosa ni se documenta lo bastante pronto para que ingeniería, producto y dirección puedan planificar y auditar en torno a él.",
    },
    context: {
      en: "A personal lab project (not tied to any employer) used to practice, end to end, both the technical implementation and the delivery management of a real multi-tenant SaaS platform: architecture, security, observability and management documentation, built together rather than separately.",
      es: "Un proyecto personal de laboratorio (sin vínculo con ningún empleador) para practicar, de extremo a extremo, tanto la implementación técnica como la gestión de entrega de una plataforma SaaS multi-tenant real: arquitectura, seguridad, observabilidad y documentación de gestión, construidas juntas en vez de por separado.",
    },
    objectives: {
      en: [
        "Build a working multi-tenant SaaS platform (Laravel + Vue + MySQL + RabbitMQ, in Docker) with cross-organization isolation proven by adversarial tests, not just documented as intent.",
        "Keep a traceable delivery plan directly in the repository (docs/: scope, milestones, dependencies, risks), without depending on an external management tool.",
        "Keep a running technical-decisions log (ADR) explaining the trade-offs evaluated, including the real bugs that came up and how they were fixed.",
      ],
      es: [
        "Construir una plataforma SaaS multi-tenant funcional (Laravel + Vue + MySQL + RabbitMQ, en Docker) con aislamiento entre organizaciones probado con tests adversariales, no solo documentado como intención.",
        "Mantener un plan de entrega trazable directamente en el repositorio (docs/: alcance, hitos, dependencias, riesgos), sin depender de una herramienta externa de gestión.",
        "Mantener un registro de decisiones técnicas (ADR) explicando los trade-offs evaluados, incluyendo los bugs reales que aparecieron y cómo se corrigieron.",
      ],
    },
    myRole: {
      en: "Software Architect, Platform Engineer and Technical Project Manager (self-directed lab, one person covering all three roles).",
      es: "Software Architect, Platform Engineer y Technical Project Manager (laboratorio autodirigido, un único rol ejerciendo los tres).",
    },
    stakeholders: {
      en: [
        "Personal lab project — no real external stakeholders. Five simulated stakeholders and a RACI matrix are documented (docs/stakeholder-map.md) to practice how responsibilities would be split on a real team.",
      ],
      es: [
        "Proyecto personal de laboratorio — sin stakeholders externos reales. Se documentan 5 stakeholders simulados y una matriz RACI (docs/stakeholder-map.md) para practicar cómo se repartirían las responsabilidades en un equipo real.",
      ],
    },
    architecture: {
      en: "Decoupled backend (Laravel 12 API) and frontend (Vue 3 + TypeScript SPA), session-based authentication with Laravel Sanctum. MySQL as a shared database with row-level multi-tenant isolation (automatic Global Scope, verified by tests). RabbitMQ for real asynchronous notifications, consumed by an independent worker. Nginx + PHP-FPM, all running in Docker Compose. Full detail and diagrams in docs/architecture.md and docs/adr/.",
      es: "Backend (Laravel 12 API) y frontend (Vue 3 + TypeScript SPA) desacoplados, autenticación por sesión con Laravel Sanctum. MySQL como base de datos compartida con aislamiento multi-tenant por fila (Global Scope automático + tests que lo verifican). RabbitMQ para notificaciones asíncronas reales, consumidas por un worker independiente. Nginx + PHP-FPM, todo en Docker Compose. Detalle completo y diagramas en docs/architecture.md y docs/adr/.",
    },
    milestones: {
      en: [
        "Architecture and structure",
        "First functional vertical flow (domain, auth, API + SPA, real asynchronous notification)",
        "Security and error cases (adversarial tests, feature flags, health checks, dashboard)",
        "Delivery management documentation",
        "Tests and final presentation (in progress)",
      ],
      es: [
        "Arquitectura y estructura",
        "Primer flujo vertical funcional (dominio, auth, API + SPA, notificación asíncrona real)",
        "Seguridad y casos de error (tests adversariales, feature flags, health checks, dashboard)",
        "Documentación de gestión de entrega",
        "Tests y presentación final (en curso)",
      ],
    },
    dependencies: {
      en: [
        "Technical: Laravel/PHP, Vue/Vite, MySQL, RabbitMQ, Docker. Sequential: each milestone depends on the previous one — writing security tests against a flow that doesn't exist yet, or documenting delivery management before there are real decisions to log, wouldn't make sense. Detail in docs/dependencies.md.",
      ],
      es: [
        "Técnicas: Laravel/PHP, Vue/Vite, MySQL, RabbitMQ, Docker. De secuencia: cada hito depende del anterior (no tiene sentido escribir tests de seguridad sobre un flujo que aún no existe, ni documentar la gestión antes de tener decisiones reales que registrar). Detalle en docs/dependencies.md.",
      ],
    },
    risks: {
      en: [
        "Logged with probability, impact, mitigation and owner in docs/risk-register.md — including three that actually materialized during the build and are documented as such, not just as hypotheticals: an infinite recursion on authentication (architecture bug), a dev-environment network lockout that blocked visual verification, and a RabbitMQ misconfiguration that silently dropped messages. All three were diagnosed and fixed.",
      ],
      es: [
        "Registrados con probabilidad, impacto, mitigación y propietario en docs/risk-register.md — incluyendo tres que se materializaron de verdad durante la construcción y quedaron documentados como tal, no solo como hipótesis: una recursión infinita al autenticar (bug de arquitectura), un bloqueo de red del entorno de desarrollo que impedía verificar visualmente, y una configuración incorrecta de RabbitMQ que perdía mensajes en silencio. Los tres se diagnosticaron y corrigieron.",
      ],
    },
    technicalDecisions: {
      en: [
        "4 ADRs on record: stack selection based on the available environment, decoupled API and SPA (with stateful SPA Sanctum), row-isolation multi-tenancy strategy (amended to document the recursion bug and its fix), and Nginx + PHP-FPM instead of PHP's built-in development server. See docs/adr/.",
      ],
      es: [
        "4 ADR registrados: selección de stack según el entorno disponible, API y SPA desacopladas (con Sanctum SPA-stateful), estrategia de multi-tenancy por aislamiento de fila (con una enmienda documentando el bug de recursión y su corrección), y Nginx+PHP-FPM en lugar del servidor de desarrollo integrado de PHP. Ver docs/adr/.",
      ],
    },
    deliveryStrategy: {
      en: "Delivery by vertical milestones: each one leaves the system runnable and verified end to end (never half-done), with tests, lint and build green before closing it out. Deploying to a free-tier provider (Render + CloudAMQP + Clever Cloud) was evaluated and consciously ruled out — the decision is documented as a judgment exercise (docs/deployment-runbook.md, docs/rollback-plan.md), not executed, because for a portfolio piece a repo that's reproducible in 2 minutes with Docker is more reliable than a free deployment that falls asleep.",
      es: "Entrega por hitos verticales: cada uno deja el sistema arrancable y verificado de extremo a extremo (nunca a medias), con tests, lint y build en verde antes de cerrarlo. Se evaluó desplegar a un proveedor gratuito (Render + CloudAMQP + Clever Cloud) y se decidió conscientemente no hacerlo — la estrategia queda documentada como ejercicio de criterio (docs/deployment-runbook.md, docs/rollback-plan.md), no ejecutada, porque para una pieza de portfolio un repo reproducible en 2 minutos con Docker es más fiable que un despliegue gratuito que se duerme.",
    },
    metrics: null,
    lessonsLearned: null,
    repositoryUrl: "https://github.com/alopez1981/Sass-Platform-Delivery-Lab",
    demoUrl: null,
  },
  {
    slug: "identity-lifecycle-orchestrator",
    title: {
      en: "Identity Lifecycle Orchestrator",
      es: "Identity Lifecycle Orchestrator",
    },
    status: PROJECT_STATUS.PLANNED,
    summary: {
      en: "A lab project modeling a clear, auditable identity lifecycle (joiner, mover, leaver) across everyday IAM tools.",
      es: "Un proyecto de laboratorio que modela un ciclo de vida de identidad claro y auditable (alta, cambio, baja) sobre herramientas IAM habituales.",
    },
    problem: {
      en: "Manual identity lifecycle processes — onboarding, permission changes, offboarding — are slow and error-prone when they span multiple tools without a shared model.",
      es: "Los procesos manuales de ciclo de vida de identidad (alta, cambios de permisos, baja) son lentos y propensos a errores cuando abarcan varias herramientas sin un modelo compartido.",
    },
    context: {
      en: "A personal lab project informed by real IAM administration experience (Google Workspace, JumpCloud, 1Password) — built from scratch with no confidential company data, to design and prototype a lifecycle model rather than a specific employer's tooling.",
      es: "Un proyecto personal de laboratorio, informado por experiencia real de administración IAM (Google Workspace, JumpCloud, 1Password), construido desde cero sin datos confidenciales de ninguna empresa, para diseñar y prototipar un modelo de ciclo de vida en lugar de las herramientas concretas de un empleador.",
    },
    objectives: {
      en: [
        "Define a joiner/mover/leaver state machine with clear, auditable transitions.",
        "Specify MFA and permission rules that travel with each state.",
        "Explore where provisioning and de-provisioning steps can be safely automated.",
      ],
      es: [
        "Definir una máquina de estados de alta/cambio/baja con transiciones claras y auditables.",
        "Especificar reglas de MFA y permisos asociadas a cada estado.",
        "Explorar qué pasos de aprovisionamiento y baja pueden automatizarse de forma segura.",
      ],
    },
    myRole: {
      en: "Process designer and technical lead (self-directed lab).",
      es: "Diseñador de procesos y responsable técnico (laboratorio autodirigido).",
    },
    stakeholders: {
      en: ["Personal lab project — no external stakeholders yet."],
      es: [
        "Proyecto personal de laboratorio — todavía sin stakeholders externos.",
      ],
    },
    architecture: {
      en: "Pending — will be documented once implementation starts.",
      es: "Pendiente — se documentará cuando comience la implementación.",
    },
    milestones: {
      en: [
        "Lifecycle state-machine design",
        "Audit log model",
        "Automation proof of concept",
        "Documentation",
      ],
      es: [
        "Diseño de la máquina de estados del ciclo de vida",
        "Modelo de registro de auditoría",
        "Prueba de concepto de automatización",
        "Documentación",
      ],
    },
    dependencies: {
      en: ["Pending — to be defined during scoping."],
      es: ["Pendiente — se definirá durante el dimensionamiento."],
    },
    risks: {
      en: ["Pending — to be defined during scoping."],
      es: ["Pendiente — se definirá durante el dimensionamiento."],
    },
    technicalDecisions: {
      en: ["Pending — will be logged as decisions are made."],
      es: ["Pendiente — se registrará a medida que se tomen decisiones."],
    },
    deliveryStrategy: {
      en: "Pending — will start with the state-machine model before any automation work.",
      es: "Pendiente — comenzará por el modelo de máquina de estados antes de cualquier automatización.",
    },
    metrics: null,
    lessonsLearned: null,
    repositoryUrl: null,
    demoUrl: null,
  },
  {
    slug: "reliability-incident-management-simulator",
    title: {
      en: "Reliability & Incident Management Simulator",
      es: "Reliability & Incident Management Simulator",
    },
    status: PROJECT_STATUS.PLANNED,
    summary: {
      en: "A lab project simulating incident coordination end to end: detection, coordination, documentation and follow-up.",
      es: "Un proyecto de laboratorio que simula la coordinación de incidentes de extremo a extremo: detección, coordinación, documentación y seguimiento.",
    },
    problem: {
      en: "Incident response quality depends heavily on how clearly technical issues are coordinated and documented across teams, not just on how fast they're fixed.",
      es: "La calidad de la respuesta a incidentes depende en gran medida de cómo se coordinan y documentan los problemas técnicos entre equipos, no solo de la velocidad de la solución.",
    },
    context: {
      en: "A personal lab project informed by real incident-coordination experience, rebuilt as a generic simulation with no confidential company data, to practice defining severity levels, coordination flow and postmortem structure.",
      es: "Un proyecto personal de laboratorio, informado por experiencia real de coordinación de incidentes, reconstruido como una simulación genérica sin datos confidenciales de ninguna empresa, para practicar la definición de niveles de severidad, el flujo de coordinación y la estructura de postmortems.",
    },
    objectives: {
      en: [
        "Define an incident severity model with clear escalation criteria.",
        "Design a coordination flow that keeps technical and non-technical stakeholders aligned during an incident.",
        "Produce a reusable postmortem template focused on lessons learned, not blame.",
      ],
      es: [
        "Definir un modelo de severidad de incidentes con criterios claros de escalado.",
        "Diseñar un flujo de coordinación que mantenga alineados a stakeholders técnicos y no técnicos durante un incidente.",
        "Producir una plantilla de postmortem reutilizable centrada en lecciones aprendidas, no en culpas.",
      ],
    },
    myRole: {
      en: "Incident coordinator and process designer (self-directed lab).",
      es: "Coordinador de incidentes y diseñador de procesos (laboratorio autodirigido).",
    },
    stakeholders: {
      en: ["Personal lab project — no external stakeholders yet."],
      es: [
        "Proyecto personal de laboratorio — todavía sin stakeholders externos.",
      ],
    },
    architecture: {
      en: "Pending — will be documented once implementation starts.",
      es: "Pendiente — se documentará cuando comience la implementación.",
    },
    milestones: {
      en: [
        "Severity model",
        "Coordination flow",
        "Postmortem template",
        "Simulated incident walkthrough",
      ],
      es: [
        "Modelo de severidad",
        "Flujo de coordinación",
        "Plantilla de postmortem",
        "Simulación de incidente",
      ],
    },
    dependencies: {
      en: ["Pending — to be defined during scoping."],
      es: ["Pendiente — se definirá durante el dimensionamiento."],
    },
    risks: {
      en: ["Pending — to be defined during scoping."],
      es: ["Pendiente — se definirá durante el dimensionamiento."],
    },
    technicalDecisions: {
      en: ["Pending — will be logged as decisions are made."],
      es: ["Pendiente — se registrará a medida que se tomen decisiones."],
    },
    deliveryStrategy: {
      en: "Pending — will start with the severity model and coordination flow before tooling.",
      es: "Pendiente — comenzará por el modelo de severidad y el flujo de coordinación antes de cualquier herramienta.",
    },
    metrics: null,
    lessonsLearned: null,
    repositoryUrl: null,
    demoUrl: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}
