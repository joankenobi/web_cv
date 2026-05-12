import { CurriculumBackendGaliciaNextJava } from './pages/curriculumBackendGaliciaNextJava.tsx'
import { CurriculumDataScientisGaliciaScalaC } from './pages/curriculumDataScientisGaliciaScalaC.tsx'
import { CurriculumFullStackGaliciaNextJava } from './pages/curriculumFullStackGaliciaNextJava.tsx'
import { CurriculumFullStackGaliciaNextJavaAts } from './pages/curriculumFullStackGaliciaNextJavaAts.tsx'
import { CurriculumBackendGaliciaNextJavaAts } from './pages/curriculumBackendGaliciaNextJavaAts.tsx'
import { NayaCurriculumBackend } from './pages/curriculumBackendNaya.tsx'
import { QASelenium } from './pages/QASelenium.tsx'
import { CurriculumBackendGaliciaPythonFastapi } from './pages/curriculumBackendGaliciaPythonFastapi.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/backend' element={<CurriculumBackendGaliciaNextJava />} />
          <Route path='/backendAts' element={<CurriculumBackendGaliciaNextJavaAts />} />
          <Route path='/fullstack' element={<CurriculumFullStackGaliciaNextJava />} />
          <Route path='/fullstackAts' element={<CurriculumFullStackGaliciaNextJavaAts />} />
          <Route path='/QA' element={<QASelenium />} />
          <Route path='/datascience' element={<CurriculumDataScientisGaliciaScalaC />} />
          <Route path='/backend-naya' element={<NayaCurriculumBackend />} />
          <Route path='/backend-python-fastapi' element={<CurriculumBackendGaliciaPythonFastapi />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
