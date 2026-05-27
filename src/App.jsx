import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import "./index.css"
import Footer from "./Components/Footer"
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
function App() {

  useEffect(() => {


    aos.init({
      duration: 1000,
      once: false
    })

  },[])






  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Footer/>

    </>    
  )
}

export default App