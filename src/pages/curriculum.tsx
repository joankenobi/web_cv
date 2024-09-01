import { Mail, Phone, MapPin, Linkedin, Album, ArchiveIcon, GitBranch } from 'lucide-react'

const encabezado = {
  name: 'Joan Blanco',
  job: 'Backend Developer',
}

const dataContact = {
  mail: "joan1233blanco@gmail.com",
  phone: "+58 412 2129362",
  location: "Venezuela, Caracas",
  linkedin: {
    text:"linkedin.com/in/joan-blanco",
    url: "https://www.linkedin.com/in/joan-blanco/",
  },
  github: {
    text: "github.com/joankenobi",
    url: "https://www.github.com/joankenobi",
  }
}

const summary = {
  titulo: "Summary",
  text: "Soy un dedicado practicante de Data Science, entusiasta de la programación con Python y la inteligencia artificial. Me interesa automatizar procesos, realizar análisis de datos y dominar tecnologías emergentes.",
}

const workExperience = {
  titulo: "Work Experience",
  text: [
    {
      job: "FREELANCER semi senior Backend",
      duration: "Miranda Venezuela | May 2022-actual.",
      description: [
        "Desarrollé un servicio de alto trafico capaz de recibir una cantidad superior a 24 mil peticiones por dia.",
        "Implementé multiples refactors que mejoraron el funcionamiento de 10 servicios API REST.",
        "Trabajé en equipo siempre explicando conceptos que no entienden mis compañeros y consultando los conceptos que yo no era capaz de comprender, todo desde una comunicación con base en el respeto y compañerismo."
      ]
    },
    {
      job: "Desarrollador de software y científico de datos",
      duration: "Geopulso | May 2021-Nov 2022",
      description: [
        "Desarrollé un software informatico capaz de obtener el pronostico de operaciones financieras para la inversion en criptomonedas utilizando herramientas de ciencias de datos y machine learning."
      ]
    },
    {
      job: "Activo de soporte tecnico",
      duration: "Unexpo | Jul 2021-Oct 2021",
      description: [
        "Administré e inicialicé un sistema de soporte al usuario con la herramienta Jira Magnament Services para la plataforma de educación virtual de la UNEXPO."
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
    { name: "JavaScript & TypeScript", level: "Semi senior ◉◉○○○" },
    { name:"React",},
    { name:"Node.js",},
    { name:"Python",},
    { name:"SQL & NoSQL databases",},
    { name:"RESTful APIs",},
    { name:"Django",},
    { name:"Docker",},
    { name:"AWS",},
    { name:"Git",},
    { name:"Agile/Scrum",},
    { name:"CI/CD",},
  ],
}

const portfolio = {
  titulo: "Porfolios",
  text: [
    {
      name: "portfoliojb.carrd.co",
      url: "https://portfoliojb.carrd.co/",
    },
  ]
}

export function CurriculumPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{encabezado.job}</h1>
        <h2 className="text-2xl text-gray-600 mb-4">{encabezado.name}</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <a href={"mailto:"+dataContact.mail} className="hover:underline">{dataContact.mail}</a>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href={"tel:"+dataContact.phone} className="hover:underline">{dataContact.phone}</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{dataContact.location}</span>
          </div>
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

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{summary.titulo}</h3>
        <p>{summary.text}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{workExperience.titulo}</h3>
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

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{education.titulo}</h3>
        {education.text.map((item, index) => (
          <div key={index}>
            <h4 className='text-xl font-medium'> {item.title}</h4>
            <p className='text-gray-600'> {item.institution}</p>
            <p className='text-gray-600 text-xs'> {item.duration}</p>
          </div>
        ))}
      </section>

      <section className='mb-8'>
        <h3 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">{skills.titulo}</h3>
        <ul className="list-disc list-inside columns-2 sm:columns-3">
          {skills.text.map((item, index) => (
            <li key={index} >
              {item.name}
              <p className='text-xs text-center text-gray-500'>
                {item.level}
              </p>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <div className='flex items-center justify-center border-b border-blue-500 mb-4 pb-2'>
          <ArchiveIcon className="w-5 h-5 mr-2"/>
          <h3 className="text-2xl font-semibold">{portfolio.titulo}</h3>
        </div>
        <ul className="list-disc list-inside columns-2 sm:columns-3">
          {portfolio.text.map((item, index) => (
            <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{item.name}</a>
            </li>))
          }
        </ul>
      </section>
    </div>
  )
}