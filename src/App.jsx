import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <div className='container'>
      <section className='#home'>
        <Hero />
      </section>
      <section className='#about'>
        <About />
      </section>
      <section className='#work'>
        <Work />
      </section>
      <section className='#services'>
        <Services />
      </section>
      <section className='#portfolio'>
        <Portfolio />
      </section>
      <section className='#contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App