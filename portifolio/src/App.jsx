import * as C from './App.styles'
import { Header } from './components/Header'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const App = () => {


  return(
    <C.Container>
      <Header id='#' />
      <About/>
      <Resume />
      <Projects />
      <Contact />
      <C.Footer>
        <a href="#"><FontAwesomeIcon icon={faArrowUp} className="icon"/></a>
      </C.Footer>
    </C.Container>
  )
}
