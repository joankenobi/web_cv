import { Mail, Phone, MapPin, Linkedin, Album, ArchiveIcon, GitBranch, Printer } from 'lucide-react'
import { WorkExperience, AllWorkExperiences, } from '../constants/CVContent/WorkExperiences'
import { Summaries } from '../constants/CVContent/Summaries'
import { DataContact, DataContactInterface } from '../constants/CVContent/DataContact'
import { SkillInterface, Allskills } from '../constants/CVContent/Skills'
import { PortfolioInterface, AllPortfolios } from '../constants/CVContent/Portfolios'
import { EducationInterface, AllEducations } from '../constants/CVContent/Education'


const encabezado = {
  name: 'Joan Blanco',
  job: 'Java/Nest Backend Developer',
}

const dataContact: DataContactInterface = DataContact.dataContactAll

const summary = {
  titulo: "Resumen",
  text: Summaries.ProgramadorBackendJava,
}

const workExperience: WorkExperience = {
  titulo: "Experiencias de trabajo",
  text: [
    AllWorkExperiences.frelancerBackendBancoGalicia,
    AllWorkExperiences.cientificoDeDatosGeopulso,
    AllWorkExperiences.activoDeSoporteTecnicoUnexpo
  ],
}

const education = {
  titulo: "Educación",
  text: [
    AllEducations.UniIngenieriaMecatronica
  ],
}

const skills = {
  titulo: "Habilidades y conocimientos",
  text: [
    Allskills.JavaScript,
    Allskills.TypeScript,
    Allskills.React,
    Allskills.Python,
    Allskills.Java,
    Allskills.SQLNoSQLdatabases,
    Allskills.RESTfulAPIs,
    Allskills.Django,
    Allskills.Docker,
    Allskills.Git,
    Allskills.AgileScrum,
    Allskills.NestJs,
    Allskills.AWS,
  ],
}

const portfolio = {
  titulo: "Porfolios",
  text: [
    AllPortfolios.PortfolioCarrd
  ]
}

export function CurriculumBackendGaliciaNextJava() {
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
            <a href={"mailto:" + dataContact.mail} target="_blank" rel="noopener noreferrer" className="hover:underline">{dataContact.mail}</a>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href={"tel:" + dataContact.phone} target="_blank" rel="noopener noreferrer" className="hover:underline">{dataContact.phone}</a>
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
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
        title="Imprimir PDF"
      >
        <Printer className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Imprimir PDF
        </span>
      </button>
    </div>
  )
}