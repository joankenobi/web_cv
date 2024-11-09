export interface WorkExperience {
  titulo: string;
  text: workExperienceText[];
}

interface workExperienceText {
  job: string;
  duration: string;
  description: string[];
}
    
const frelancerBackendVen: workExperienceText = {
    job: "FREELANCER semi senior Backend",
    duration: "Miranda Venezuela | May 2022-actual.",
    description: [
        "Desarrollé un servicio de alto trafico capaz de recibir una cantidad superior a 24 mil peticiones por dia.",
        "Implementé multiples refactors que mejoraron el funcionamiento de 10 servicios API REST.",
        "Trabajé en equipo, siempre ayudando a comprender procesos y consultando los conceptos que yo no era capaz de comprender, todo desde una comunicación con base en el respeto y compañerismo."
    ]
}

const frelancerBackendBancoGalicia: workExperienceText = {
    job: frelancerBackendVen.job,
    duration: "Banco Galicia Argentina | May 2022-actual.",
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

const NayarithCentriaGroup: workExperienceText = {    
    job: "Backend Developer",
    duration: "Centria Group | 2023-Ago - actual",
    description: [
        "Me desempeñe en tareas de crear, refactorizar, mantener y testear el código de los proyectos para su óptimo desempeño, planificar y ejecutar planes de creación de nuevas features que abarcaron un total de 108 pr desarrollados para los repositorios del equipo de desarrollo.",
    ]
}

const NayarithFrelancerIgnacio: workExperienceText = {    
    job: "Backend Developer",
    duration: "Freelancer | 2024-Jun - 2024-Ago",
    description: [
        "Participé en la construcción de la parte básica de una api para un servicio de chats interactivos dentro de una penqueña empresa. Implementé la base de datos del proyecto y los principales servicios del mismo aplicando competencias en TypeScript, Express, Inversify, Sequelize, PostgreSQL, Docker y Postman.",
    ]
}

const NayarithFrelancerFullStackGalicia: workExperienceText = {    
    job: "Full Stack Developer",
    duration: "Freelancer | 2022-Dic - 2023-Sep",
    description: [
        "Realicé el mantenimiento de la interfaz gráfica, uso de librerías de la empresa y el consumo de Api Rest. Implementé nuevas funcionalidades en la aplicación web de la empresa, como la creación de nuevos módulos y la mejora de los ya existentes. Usé competencias de React.js, Next.js, JavaScript, TypeScript, HTML, CSS, Scrum, Postman, API Rest, NestJS y Java.",
    ]
}

const NayarithTopoGeofisica: workExperienceText = {    
    job: "Software Developer",
    duration: "Empresa Servicios Topogeofísica 2025 C.A. | 2022-Mar - 2022-Nov",
    description: [
        "Diseñé, desarrollé e implementé un software para la gestión empresarial y el cálculo de la depreciación de equipos dandole a la empresa un aceleramiento de 12 horas en el calculo y facturacion de servicios topogeograficos aplicando competencias en MySQL, Python, Tkinter, Linux.",
    ]
}

const NayarithCapri: workExperienceText = {    
    job: "Software Developer",
    duration: "Junta de Condominio Conjunto Residencial Capri. | 2022-Ene - 2022-Nov",
    description: [
        "Desarrollo de una aplicación de escritorio que facilita los procesos contables y administrativos.",
    ]
}

export const AllWorkExperiences = {
    frelancerBackendVen,
frelancerBackendBancoGalicia,
cientificoDeDatosGeopulso,
activoDeSoporteTecnicoUnexpo,
NayarithCentriaGroup,
NayarithFrelancerIgnacio,
NayarithFrelancerFullStackGalicia,
NayarithTopoGeofisica,
NayarithCapri,
}