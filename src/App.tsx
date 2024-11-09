import { CurriculumBackendGaliciaNextJava } from './pages/curriculumBackendGaliciaNextJava.tsx'
import { CurriculumDataScientisGaliciaScalaC } from './pages/curriculumDataScientisGaliciaScalaC.tsx'
import { NayaCurriculumBackend } from './pages/curriculumBackendNaya.tsx'
import { BrowserRouter, Routes, Route, Navigator} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/backend' element= {<CurriculumBackendGaliciaNextJava/>}/>
      <Route path='/datascience' element= {<CurriculumDataScientisGaliciaScalaC/>}/>
      <Route path='/backend-naya' element= {<NayaCurriculumBackend/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
