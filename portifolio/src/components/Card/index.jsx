import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const Card = ({url,name,urlGithub,urlPageProject}) => {
    return(
        <C.Container>
            <img src={url} alt="" />
            <p>{name}</p>
            <div className='btn'>
                <a className='btn-Github' href={urlGithub} target="_blank">Github <FontAwesomeIcon className='icon' icon={faGithub} /></a>
                <a href={urlPageProject} target="_blank">Ir para Projeto</a>
            
            </div>
            
        </C.Container>
    )
}