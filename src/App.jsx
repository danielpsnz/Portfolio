import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './theme/Theme'

function App() {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
    </div>
  )
}

export default App
