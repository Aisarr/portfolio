import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {


  return (
    <>
    <div className="block">
     <div className="mt-14 ml-14 p-4 block">
       <div>
         <p className="font-neue text-white text-5xl bg-inherit">Aisar Rauda</p>
         <p className="font-neue text-blue-300 text-2xl">Developer</p>
       </div>
     </div>
     <div className="ml-14 mt-5 p-4 grid grid-flow-col justify-stretch">
       <div className="block space-y-2">
        <div>
         <NavLink to="/" className="text-white hover:text-gray-300 active:text-blue-300">Home</NavLink >
        </div>
        <div>
         <NavLink to="/projects" className="text-white hover:text-gray-300 active:text-blue-300">Projects</NavLink >
        </div>
        <div>
         <NavLink to="/contact" className="text-white hover:text-gray-300 active:text-blue-300">Contact</NavLink >
        </div>
       </div>
       <div className='block mx-64'>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/contact' element={<Contact/>}/>
        </Routes>
       </div>
     </div>
    </div>
    </>
  )
}

export default App
