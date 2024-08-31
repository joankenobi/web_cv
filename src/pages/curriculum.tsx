import { Mail, Phone, MapPin, Linkedin, Album, ArchiveIcon, GitBranch } from 'lucide-react'

export function CurriculumPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Joan Blanco</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Backend Developer</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:joan1233blanco@gmail.com" className="hover:underline">joan1233blanco@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href="tel:+584122129362" className="hover:underline">+58 412 2129362</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Venezuela, Caracas</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-5 h-5 mr-2" />
            <a href="https://www.linkedin.com/in/joan-blanco/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/joan-blanco</a>
          </div>
          <div className="flex items-center">
            <GitBranch className="w-5 h-5 mr-2" />
            <a href="https://www.github.com/joankenobi" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/joankenobi</a>
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Summary</h3>
        <p>
        Soy un dedicado practicante de Data Science, entusiasta de la programación con Python y la inteligencia artificial. Me interesa automatizar procesos, realizar análisis de datos y dominar tecnologías emergentes.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Work Experience</h3>
        <div className="mb-6">
          <h4 className="text-xl font-medium">FREELANCER semi senior Backend</h4>
          <p className="text-gray-600">Miranda Venezuela | May 2022-actual.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Desarrollé un servicio de alto trafico capaz de recibir una cantidad superior a 24 mil peticiones por dia. </li>
            <li>Implementé multiples refactors que mejoraron el funcionamiento de 10 servicios API REST. </li>
            <li>Trabajé en equipo siempre explicando conceptos que no entienden mis compañeros y consultando los conceptos que yo no era capaz de comprender, todo desde una comunicación con base en el respeto y compañerismo.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium">Desarrollador de software y científico de datos</h4>
          <p className="text-gray-600">Geopulso | May 2021-Nov 2022</p>
          <ul className="list-disc list-inside mt-2">
            <li>Desarrollé un software informatico capaz de obtener el pronostico de operaciones financieras para la inversion en criptomonedas utilizando herramientas de ciencias de datos y machine learning.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium">Activo de soporte tecnico</h4>
          <p className="text-gray-600">Unexpo | Jul 2021-Oct 2021</p>
          <ul className="list-disc list-inside mt-2">
            <li>Administré e inicialicé un sistema de soporte al usuario con la herramienta Jira Magnament Services para la plataforma de educación virtual de la UNEXPO.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h3>
        <div>
          <h4 className="text-xl font-medium">Ingeniería Mecatrónica</h4>
          <p className="text-gray-600">Universidad Nacional Experimental Politécnica Antonio José de Sucre (UNEXPO) | Graduado: Nov 2022</p>
        </div>
      </section>

      <section className='mb-8'>
        <h3 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">Skills</h3>
        <ul className="list-disc list-inside columns-2 sm:columns-3">
          <li>
              JavaScript & TypeScrip
            <div className='bg-white h-7 rounded-3xl mb-1' style={{
        position: "relative",
        overflow: "hidden"
    }}>
              <div className='bg-blue-500 h-7 absolute top-0 left-0 text-center z-0' style={{width: '10%', fontSize: '10px', zIndex: -0}}>
              </div>
              <p style={{zIndex: 1}}>
                Semi senior
              </p>
            </div>
            </li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>SQL & NoSQL databases</li>
          <li>RESTful APIs</li>
          <li>Django</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Git</li>
          <li>Agile/Scrum</li>
          <li>CI/CD</li>
        </ul>
      </section>
      
      <section>
        <div className='flex items-center justify-center border-b border-blue-500 mb-4 pb-2'>
          <ArchiveIcon className="w-5 h-5 mr-2"/>
          <h3 className="text-2xl font-semibold">Portfolio</h3>
        </div>
        <ul className="list-disc list-inside columns-2 sm:columns-3">
          <li><a href="https://portfoliojb.carrd.co/" target="_blank" rel="noopener noreferrer" className="hover:underline">portfoliojb.carrd.co</a></li>
        </ul>
      </section>
    </div>
  )
}