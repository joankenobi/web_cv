import { Mail, Phone, MapPin, Linkedin, Album, ArchiveIcon, GitBranch } from 'lucide-react'

const encabezado = {
  name: 'Joan Blanco',
  job: 'Data Engineer',
}

const dataContact = {
  mail: "joan1233blanco@gmail.com",
  phone: "",
  location: "",
  linkedin: {
    text: "linkedin.com/in/joan-blanco",
    url: "https://www.linkedin.com/in/joan-blanco/",
  },
  github: {
    text: "github.com/joankenobi",
    url: "https://www.github.com/joankenobi",
  }
}

const summary = {
  titulo: "Summary",
  text: "Ingeniero de datos con experiencia en el desarrollo de pipelines y análisis de datos. Me apasiona la programación y la resolución de problemas, siempre buscando la eficiencia y la calidad en el manejo de los datos para aportar información importante. Me gusta trabajar en equipo y aprender de mis compañeros, siempre dispuesto a compartir mis conocimientos y ayudar a los demás.",
}

const workExperience = {
  titulo: "Work Experience",
  text: [
    {
      job: "FREELANCER semi senior Backend",
      duration: "Banco Galicia Argentina | May 2022-actual.",
      description: [
        "Desarrollé un servicio de alto trafico capaz de recibir una cantidad superior a 24 mil peticiones por dia.",
        "Implementé multiples refactors que mejoraron el funcionamiento de 10 servicios API REST.",
        "Trabajé en equipo, siempre ayudando a comprender procesos y consultando los conceptos que yo no era capaz de comprender, todo desde una comunicación con base en el respeto y compañerismo."
      ]
    },
    {
      job: "Desarrollador de software y científico de datos",
      duration: "Geopulso | May 2021-Nov 2022",
      description: [
        "Desarrollé un software informático capaz de obtener el pronostico de operaciones financieras para la inversion en criptomonedas utilizando herramientas de ciencias de datos y machine learning.",
        "Analicé y procesé más de 3000 datos de diferentes fuentes de para obtener información relevante para la toma de decisiones y el desarrollo de un modelo de machine learning.",
        "Agilicé un 90% la obtención de datos de diferentes fuentes y su procesamiento para el análisis de datos con un pipeline automatizado que guardaba documentos en MongoDB.",
      ]
    },
    {
      job: "Activo de soporte técnico",
      duration: "Unexpo | Jul 2021-Oct 2021",
      description: [
        "Administré e inicialicé un sistema de soporte al usuario con la herramienta Jira Mangement Services para la plataforma de educación virtual de la UNEXPO con cero costos para la universidad aprovechando herramientas externas igualmente gratuitas."
      ]
    }
  ],
}

const education = {
  titulo: "Education",
  text: [
    {
      title: "Ingeniería Mecatrónica",
      institution: "Universidad Nacional Experimental Politécnica Antonio José de Sucre (UNEXPO)",
      duration: "Graduado: Nov 2022",
    }
  ],
}

const skills = {
  titulo: "Skills",
  text: [
    // { name: "JavaScript & TypeScript", level: "Semi senior ◉◉○○○" },
    { name: "Pandas", level: "3 años" },
    { name: "NestJs", level: "2 años" },
    { name: "React", level: "2 años" },
    { name: "Scala", level: "6 meses" },
    { name: "Python", level: "3 años" },
    { name: "SQL & NoSQL", level: "3 años" },
    { name: "RESTful APIs", level: "3 años" },
    { name: "Django", level: "2 años" },
    { name: "Azure",  level: "1 año" },
    { name: "Java", level: "1 año" },
    { name: "C#", level: "1 año" },
    { name: "Git", level: "3 años" },
    { name: "Agile/Scrum", level: "3 años" },
    { name: "Ingles", level: "Comprensión lectora" },
  ],
}

const portfolio = {
  titulo: "Porfolios",
  text: [
    {
      name: "portfoliojb.carrd.co",
      url: "https://portfoliojb.carrd.co/",
    },
    {
      name: "Analisis de datos venta de vehiculos",
      url: "https://colab.research.google.com/drive/18biLYucfkfZFw3Qg2Ghv_JxpQyE3hHzf?usp=sharing",
    },
    {
      name: "Analisis de datos Instagram de Ronaldinho",
      url: "https://colab.research.google.com/drive/1KCvNCFrS8NShEVN_b7O2eK0s6wzkckwY?usp=sharing",
    }
  ]
}

export function CurriculumDataScientisGaliciaScalaC() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <header className="mb-8">
        {/* ENCABEZADO */}
        <h1 className="text-4xl font-bold mb-2">{encabezado.job}</h1>
        <h2 className="text-2xl text-gray-600 mb-3">{encabezado.name}</h2>
        {/* DATOS DE CONTACTO */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <a href={"mailto:" + dataContact.mail} className="hover:underline">{dataContact.mail}</a>
          </div>
          {dataContact.phone?
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href={"tel:" + dataContact.phone} className="hover:underline">{dataContact.phone}</a>
          </div>
          : null}
          
          {dataContact.location?
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{dataContact.location}</span>
            </div>
          : null}

          <div className="flex items-center">
            <Linkedin className="w-5 h-5 mr-2" />
            <a href={dataContact.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{dataContact.linkedin.text}</a>
          </div>
          <div className="flex items-center">
            <GitBranch className="w-5 h-5 mr-2" />
            <a href={dataContact.github.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{dataContact.github.text}</a>
          </div>
        </div>
      </header>

    <div className="flex">
      <div className='mr-10'>
        {/* SKILLS */}
        <section className='mb-2'>
          <h3 className="text-2xl font-semibold mb-3 border-b border-blue-500 pb-2">{skills.titulo}</h3>
          <ul className="list-disc columns-1">
            {skills.text.map((item, index) => (
              <li key={index} className='text-2sm' >
                {item.name}
                <p className='text-xs text-left text-gray-500'>
                  {item.level}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* PORFOLIO */}
        <section>
          <div className='flex items-center justify-center border-b border-blue-500 mb-3 pb-2'>
            <ArchiveIcon className="w-5 h-5 mr-2" />
            <h3 className="text-2xl font-semibold">{portfolio.titulo}</h3>
          </div>
          <ul className="list-disc columns-1">
            {portfolio.text.map((item, index) => (
              <li key={index} className='text-sm'>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{item.name}</a>
              </li>))
            }
          </ul>
        </section>
      </div>
      <div className="">
        {/* RESUMEN */}
        <section className="mb-2">
          <h3 className="text-2xl font-semibold mb-3 border-b pb-2">{summary.titulo}</h3>
          <p>{summary.text}</p>
        </section>

        {/* EXPERIENCIA DE TRABAJO */}
        <section className="mb-2">
          <h3 className="text-2xl font-semibold mb-3 border-b pb-2">{workExperience.titulo}</h3>
          {workExperience.text.map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-medium">{item.job}</h4>
              <p className="text-gray-600">{item.duration}</p>
              <ul className="list-disc list-inside mt-2">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* EDUCACIÓN */}
        <section className="mb-2">
          <h3 className="text-2xl font-semibold mb-3 border-b pb-2">{education.titulo}</h3>
          {education.text.map((item, index) => (
            <div key={index}>
              <h4 className='text-xl font-medium'> {item.title}</h4>
              <p className='text-gray-600'> {item.institution}</p>
              <p className='text-gray-600 text-xs'> {item.duration}</p>
            </div>
          ))}
        </section>
      </div>
      </div>
    </div>
  )
}