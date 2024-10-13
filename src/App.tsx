import { CurriculumBackendGaliciaNextJava } from './pages/curriculumBackendGaliciaNextJava.tsx'
import { CurriculumDataScientisGaliciaScalaC } from './pages/curriculumDataScientisGaliciaScalaC.tsx'
import { BrowserRouter, Routes, Route, Navigator} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/backend' element= {<CurriculumBackendGaliciaNextJava/>}/>
      <Route path='/datascience' element= {<CurriculumDataScientisGaliciaScalaC/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
