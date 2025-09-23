import About from "./components/about"
import Contact from "./components/contact"
import Feature from "./components/feature"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import Partners from "./components/partners"
import Service from "./components/service"

function App() {
  return (
    <>
      <Header/> 
      <Hero/>
      <About/>
      <Service/>
      <Feature/>
      <Partners/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App