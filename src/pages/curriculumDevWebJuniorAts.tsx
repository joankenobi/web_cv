import { Printer } from 'lucide-react'
import { WorkExperience, AllWorkExperiences } from '../constants/CVContent/WorkExperiences'
import { Summaries } from '../constants/CVContent/Summaries'
import { DataContact, DataContactInterface } from '../constants/CVContent/DataContact'
import { Allskills } from '../constants/CVContent/Skills'
import { AllPortfolios } from '../constants/CVContent/Portfolios'
import { AllEducations } from '../constants/CVContent/Education'


const encabezado = {
  name: 'Joan Blanco',
  job: 'Desarrollador Web Junior',
}

const dataContact: DataContactInterface = DataContact.dataContactAll

const summary = {
  titulo: "Resumen Profesional",
  text: Summaries.DesarrolladorWebJunior,
}

const workExperience: WorkExperience = {
  titulo: "Experiencia Laboral",
  text: [
    AllWorkExperiences.frelancerBackendBancoGalicia,
    AllWorkExperiences.cientificoDeDatosGeopulso,
    AllWorkExperiences.activoDeSoporteTecnicoUnexpo,
  ],
}

const education = {
  titulo: "Educación",
  text: [
    AllEducations.UniIngenieriaMecatronica,
  ],
}

// Skills categorizados para mejor parseo ATS — alineados al perfil del puesto
const skillCategories = [
  {
    category: "Lenguajes de Programación",
    items: [Allskills.JavaScript.name, Allskills.Python.name, Allskills.TypeScript.name]
  },
  {
    category: "Desarrollo Web",
    items: ["HTML/CSS", Allskills.React.name, Allskills.RESTfulAPIs.name]
  },
  {
    category: "Bases de Datos",
    items: [Allskills.SQL.name, Allskills.NoSQL.name, "PostgreSQL", "MySQL"]
  },
  {
    category: "Herramientas y Control de Versiones",
    items: [Allskills.Git.name, "Postman", Allskills.Docker.name, "VS Code"]
  },
  {
    category: "Metodologías",
    items: [Allskills.AgileScrum.name]
  },
]

const portfolio = {
  titulo: "Portfolio",
  text: [
    AllPortfolios.PortfolioCarrd,
  ]
}

const idiomas = {
  titulo: "Idiomas",
  text: [
    Allskills.Ingles,
    Allskills.Español,
  ]
}

export function CurriculumDevWebJuniorAts() {
  return (
    <article className="ats-cv max-w-[800px] mx-auto py-6 px-10 bg-white text-black font-sans text-[11pt] leading-relaxed">

      {/* ===== HEADER: Nombre + Título + Contacto ===== */}
      <header className="mb-4 text-center border-b-2 border-black pb-3">
        <h1 className="text-[22pt] font-bold tracking-tight mb-0.5">{encabezado.name}</h1>
        <h2 className="text-[12pt] font-normal text-gray-700 mb-2">{encabezado.job}</h2>
        <p className="text-[9.5pt] text-gray-800">
          Email: {dataContact.mail}
          {dataContact.phone && <> &nbsp;|&nbsp; Teléfono: {dataContact.phone}</>}
          {dataContact.location && <> &nbsp;|&nbsp; Ubicación: {dataContact.location}</>}
        </p>
        <p className="text-[9.5pt] text-gray-800">
          LinkedIn: {dataContact.linkedin.url}
          &nbsp;|&nbsp; GitHub: {dataContact.github.url}
        </p>
      </header>

      {/* ===== RESUMEN PROFESIONAL ===== */}
      <section className="mb-4">
        <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">{summary.titulo}</h2>
        <p className="text-[10.5pt] text-justify">{summary.text}</p>
      </section>

      {/* ===== EXPERIENCIA LABORAL ===== */}
      <section className="mb-4">
        <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">{workExperience.titulo}</h2>
        {workExperience.text.map((item, index) => {
          const parts = item.duration.split('|')
          const empresa = parts[0]?.trim() || ''
          const fechas = parts[1]?.trim() || item.duration

          return (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[11pt] font-bold">{item.job}</h3>
                <span className="text-[9.5pt] text-gray-600 whitespace-nowrap ml-4">{fechas}</span>
              </div>
              <p className="text-[10pt] text-gray-700 italic">{empresa}</p>
              <ul className="list-disc ml-5 mt-1">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-[10pt] mb-0.5">{desc}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>

      {/* ===== HABILIDADES TÉCNICAS (Categorizadas) ===== */}
      <section className="mb-4">
        <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">Habilidades Técnicas</h2>
        {skillCategories.map((cat, index) => (
          <p key={index} className="text-[10pt] mb-0.5">
            <span className="font-semibold">{cat.category}:</span>{' '}
            {cat.items.join(', ')}
          </p>
        ))}
      </section>

      {/* ===== EDUCACIÓN ===== */}
      <section className="mb-4">
        <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">{education.titulo}</h2>
        {education.text.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[11pt] font-bold">{item.title}</h3>
              <span className="text-[9.5pt] text-gray-600 whitespace-nowrap ml-4">{item.duration}</span>
            </div>
            <p className="text-[10pt] text-gray-700">{item.institution}</p>
          </div>
        ))}
      </section>

      {/* ===== IDIOMAS ===== */}
      <section className="mb-4">
        <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">{idiomas.titulo}</h2>
        <ul className="list-disc ml-5">
          {idiomas.text.map((item, index) => (
            <li key={index} className="text-[10pt]">
              {item.name} — {item.level}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== PORTFOLIO / ENLACES ===== */}
      <section className="mb-4">
        <h2 className="text-[12pt] font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">Enlaces y {portfolio.titulo}</h2>
        <ul className="list-disc ml-5">
          {portfolio.text.map((item, index) => (
            <li key={index} className="text-[10pt]">
              {item.name}: {item.url}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== BOTÓN IMPRIMIR (oculto en print) ===== */}
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-8 right-8 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
        title="Imprimir PDF"
      >
        <Printer className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Imprimir PDF
        </span>
      </button>
    </article>
  )
}
