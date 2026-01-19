export interface WorkExperience {
    titulo: string;
    text: workExperienceText[];
}

export interface workExperienceText {
    job: string;
    duration: string;
    description: string[];
}

const frelancerBackendVen: workExperienceText = {
    job: "Desarrollador Backend Java",
    duration: "Miranda Venezuela | May 2022-actual.",
    description: [
        "Lideré el desarrollo de un servicio de alto tráfico, capaz de procesar más de 24.000 solicitudes diarias, garantizando estabilidad y rendimiento.",
        "Implementé refactorizaciones estratégicas que optimizaron el funcionamiento y la mantenibilidad de más de 10 servicios API REST.",
        "Trabajé mucho en equipo, siempre ayudando a comprender procesos y consultando los conceptos que yo no era capaz de comprender, todo desde una comunicación con base en el respeto y compañerismo."
    ]
}

const resumen = "Resumido: Lideré el desarrollo de un servicio de alto tráfico y refactoricé múltiples servicios API REST. Fomenté un ambiente de respeto y compañerismo en el equipo."
const resumen2 = "Resumido: Desarrollé software para pronóstico de operaciones financieras en criptomonedas usando ciencia de datos y machine learning. Analicé más de 3000 datos y obtuve información útil para el desarrollo de modelos."
const resumen3 = "Resumido: Administré e inicialicé un sistema de soporte al usuario con Jira Management Services para la plataforma de educación virtual."

const QAProgramadorBackendJava: workExperienceText = {
    job: frelancerBackendVen.job,
    duration: "Banco Galicia Argentina | May 2022-2026.",
    description: [
        frelancerBackendVen.description[0], 
    frelancerBackendVen.description[1],
"Colaboré activamente con el equipo de QA, entregando guías, explicaciones funcionales y atajos de prueba, fortaleciendo los procesos de validación y calidad.",
        "Adquirí una sólida comprensión del aseguramiento de calidad de software, integrando buenas prácticas de QA al ciclo de desarrollo para reducir errores y mejorar la experiencia final."
]
}

const frelancerBackendBancoGalicia: workExperienceText = {
    job: frelancerBackendVen.job,
    duration: "Banco Galicia Argentina | May 2022-2026.",
    description: frelancerBackendVen.description
}

const fullStackBancoGalicia: workExperienceText = {
    job: "Desarrollador FullStack",
    duration: "Banco Galicia Argentina | May 2022-2026.",
    description: frelancerBackendVen.description
}

const cientificoDeDatosGeopulso: workExperienceText = {
    job: "Desarrollador de software y científico de datos",
    duration: "Geopulso | May 2021-Nov 2022",
    description: [
        "Desarrollé un software informático capaz de obtener el pronóstico de operaciones financieras para la inversión en criptomonedas utilizando herramientas de ciencias de datos y machine learning.",
        "Analicé y procesé más de 3000 datos de diferentes fuentes.",
        "Obtuve información relevante y útil usando web scraping y análisis de datos para la toma de decisiones y el desarrollo de un modelo de machine learning.",
    ]
}

const activoDeSoporteTecnicoUnexpo: workExperienceText = {
    job: "Activo de soporte técnico",
    duration: "Unexpo | Jul 2021-Oct 2021",
    description: [
        "Administré e inicialicé un sistema de soporte al usuario con la herramienta Jira Mangement Services para la plataforma de educación virtual de la UNEXPO con cero costos para la universidad aprovechando herramientas externas igualmente gratuitas."
    ]
}

export const AllWorkExperiences = {
    frelancerBackendVen,
    QAProgramadorBackendJava,
    frelancerBackendBancoGalicia,
    fullStackBancoGalicia,
    cientificoDeDatosGeopulso,
    activoDeSoporteTecnicoUnexpo,
}