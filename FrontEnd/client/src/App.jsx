import './style.css'
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import MoodCompanion from './Components/MoodCompanion'
import Footer from './Components/Footer'
import Services from './Components/Services'

function App() {
  return (
    <>
    <Header />
    <main>
      <About />
      <Services />
      <MoodCompanion />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
