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
        "Lideré el desarrollo de un servicio de alto trafico capaz de recibir una cantidad superior a 24 mil peticiones por dia.",
        "Implementé multiples refactors que mejoraron el funcionamiento de 10 servicios API REST.",
        "Trabajé mucho en equipo, siempre ayudando a comprender procesos y consultando los conceptos que yo no era capaz de comprender, todo desde una comunicación con base en el respeto y compañerismo."
    ]
}

const frelancerBackendBancoGalicia: workExperienceText = {
    job: frelancerBackendVen.job,
    duration: "Banco Galicia Argentina | May 2022-2026.",
    description: frelancerBackendVen.description
}

const cientificoDeDatosGeopulso: workExperienceText = {
    job: "Desarrollador de software y científico de datos",
    duration: "Geopulso | May 2021-Nov 2022",
    description: [
        "Desarrollé un software informático capaz de obtener el pronostico de operaciones financieras para la inversion en criptomonedas utilizando herramientas de ciencias de datos y machine learning.",
        "Analicé y procesé más de 3000 datos de diferentes fuentes.",
        "Obtuve información relevante y util para la toma de decisiones y el desarrollo de un modelo de machine learning.",
    ]
}

const activoDeSoporteTecnicoUnexpo: workExperienceText = {
    job: "Activo de soporte tecnico",
    duration: "Unexpo | Jul 2021-Oct 2021",
    description: [
        "Administré e inicialicé un sistema de soporte al usuario con la herramienta Jira Mangement Services para la plataforma de educación virtual de la UNEXPO con cero costos para la universidad aprovechando herramientas externas igualmente gratuitas."
    ]
}

export const AllWorkExperiences = {
    frelancerBackendVen,
    frelancerBackendBancoGalicia,
    cientificoDeDatosGeopulso,
    activoDeSoporteTecnicoUnexpo,
}