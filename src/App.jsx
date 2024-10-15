import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Realisation from "./components/Realisation"
import Team from "./components/Team"
import Temoignage from "./components/Temoignage"
import Workflow from "./components/Workflow"


function App() {


  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    
    <Hero/>
    <Realisation/>
    <Workflow/>
    <Team/>
    <Temoignage/>

    <Footer/>
    </div>




    </>
  )
}

export default App
