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
    status: PROJECT_STATUS.PLANNED,
    summary: {
      en: "A self-directed lab to practice turning a rough SaaS feature idea into a structured, trackable delivery plan.",
      es: "Un laboratorio autodirigido para practicar cómo convertir una idea de funcionalidad SaaS en un plan de entrega estructurado y trazable.",
    },
    problem: {
      en: "SaaS teams often lose delivery predictability when technical scope isn't broken down early enough for engineering, product and leadership to plan around it.",
      es: "Los equipos SaaS suelen perder previsibilidad de entrega cuando el alcance técnico no se desglosa lo bastante pronto para que ingeniería, producto y dirección puedan planificar en torno a él.",
    },
    context: {
      en: "A personal lab project (not tied to any employer) used to practice the delivery-management side of a Technical Project Manager role: backlog breakdown, estimation, dependency mapping and milestone tracking, applied to a small SaaS feature set.",
      es: "Un proyecto personal de laboratorio (sin vínculo con ningún empleador) para practicar la parte de gestión de entrega de un rol de Technical Project Manager: desglose de backlog, estimación, mapeo de dependencias y seguimiento de hitos, aplicado a un conjunto reducido de funcionalidades SaaS.",
    },
    objectives: {
      en: [
        "Turn a rough product idea into a structured backlog with estimated, dependency-aware tickets in Jira.",
        "Maintain a visible delivery plan with milestones that non-technical stakeholders can follow.",
        "Keep a running technical-decisions log explaining trade-offs in plain language.",
      ],
      es: [
        "Convertir una idea de producto poco definida en un backlog estructurado con tickets estimados y con dependencias en Jira.",
        "Mantener un plan de entrega visible con hitos que stakeholders no técnicos puedan seguir.",
        "Mantener un registro de decisiones técnicas explicando los trade-offs en lenguaje sencillo.",
      ],
    },
    myRole: {
      en: "Technical Project Manager and delivery lead (self-directed lab).",
      es: "Technical Project Manager y responsable de entrega (laboratorio autodirigido).",
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
        "Scope and backlog breakdown",
        "Architecture decision log",
        "MVP delivery",
        "Retrospective",
      ],
      es: [
        "Desglose de alcance y backlog",
        "Registro de decisiones de arquitectura",
        "Entrega del MVP",
        "Retrospectiva",
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
      en: "Pending — will follow an incremental, milestone-based delivery approach.",
      es: "Pendiente — seguirá un enfoque de entrega incremental basado en hitos.",
    },
    metrics: null,
    lessonsLearned: null,
    repositoryUrl: null,
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
