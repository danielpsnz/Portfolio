import { useContext } from 'react'
import './App.css'
import Particle from './components/Particle'
import { ThemeContext } from './theme/Theme'
import Navbar from './components/Navbar/Navbar'
import { Container } from "react-bootstrap";

function App() {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
      <Container fluid className="main" id="main">
      <Particle />
      <Container className="main-content">
      <Navbar />
      </Container>
      </Container>
    </div>
  )
}

export default App
