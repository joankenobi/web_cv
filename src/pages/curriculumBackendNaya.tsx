import { Mail, Phone, MapPin, Linkedin, Album, ArchiveIcon, GitBranch } from 'lucide-react'
import { AllWorkExperiences } from '../constants/NayaCVContent/WorkExperiences'
import { Summaries } from '../constants/NayaCVContent/Summaries'
import {  DataContact } from '../constants/NayaCVContent/DataContact'
import {  Allskills } from '../constants/NayaCVContent/Skills'
import { AllPortfolios } from '../constants/NayaCVContent/Portfolios'
import { AllEducations } from '../constants/NayaCVContent/Education'
import { DataContactInterface} from '../constants/CVContent/DataContact'
import { WorkExperience} from '../constants/CVContent/WorkExperiences'
import { SkillInterface} from '../constants/CVContent/Skills'
import { PortfolioInterface } from '../constants/CVContent/Portfolios'
import { EducationInterface} from '../constants/CVContent/Education'


const encabezado = {
  name: 'Nayarith Jiménez',
  job: 'Backend Developer',
}

const dataContact: DataContactInterface = DataContact.NayaDataContactAll

const summary = {
  titulo: "Resumen",
  text: Summaries.ProgramadorBackendNayarith,
}

const workExperience: WorkExperience = {
  titulo: "Experiencias de trabajo",
  text: [
    AllWorkExperiences.NayarithCentriaGroup,
    AllWorkExperiences.NayarithFrelancerIgnacio,
    AllWorkExperiences.NayarithFrelancerFullStackGalicia,
    AllWorkExperiences.NayarithTopoGeofisica
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
    Allskills.Docker,
    Allskills.Git,
    Allskills.AgileScrum,
    Allskills.TypeORM,
    Allskills.ExpressJs,
    Allskills.Sequelize,
    Allskills.Inversify,
    Allskills.TailwindCSS,
    Allskills.Postman,
    Allskills.UnitTesting,
    Allskills.GraphQL,
    Allskills.E2ETesting,
    Allskills.Ingles,
  ],
}

const portfolio = {
  titulo: "Porfolios",
  text: [
    AllPortfolios.NayaPortfolios
  ]
}

const certificado = {
  titulo: "Certificados",
  text: [
    AllPortfolios.NayaCertificados
  ]
}

export function NayaCurriculumBackend() {
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
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href={"tel:" + dataContact.phone} className="hover:underline">{dataContact.phone}</a>
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
          
          {/* CERTIFICADOS */}
          <section>
            <div className='flex items-center justify-center border-b border-blue-500 mb-3 pb-2'>
              <ArchiveIcon className="w-5 h-5 mr-2" />
              <h3 className="text-2xl font-semibold">{certificado.titulo}</h3>
            </div>
            <ul className="list-disc columns-1">
              {certificado.text.map((item, index) => (
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