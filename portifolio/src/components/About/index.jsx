import * as C from './styles';
import Aos from 'aos';;
import "aos/dist/aos.css";
import { useEffect } from 'react'


export const About = () => {

    
    useEffect(() => {
        Aos.init({ duration:2000 })
    },[]);

    return(
        <C.Container data-aos="fade-up" data-aos-once="true" >
            <div id='Aboutme' className='header-about'>
                <h1>Sobre mim</h1>
                <p>Porque me escolher?</p>
                <hr></hr>
            </div>
            <div className='aboutme'>
                <div className='aboutme-div'>
                    <img src='../../images/about1.png' alt=''></img>
                </div>
                <div className='aboutme-desc'>
                    <p>Quando tinha 11 anos, fiquei curioso sobre programação e criei um servidor de Minecraft. 
                        Embora não tenha me dedicado totalmente aos estudos naquela época, essa experiência me despertou o 
                        interesse pela programação. Aos 17 anos, comecei a estudar C e me apaixonei por construir algoritmos que 
                        ajudam as pessoas em suas vidas.</p>
                    <p className='title-about'>Tecnologias que eu domino atualmente:</p>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>TypeScript</span>
                    </div>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>ReactJS e NodeJS</span>
                    </div>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>Redux/Context</span>
                    </div>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>Construir uma REST API</span>
                    </div>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>MongoDB/MySQL (CRUD)</span>
                    </div>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>Styled-Components</span>
                    </div>   
                        
                    <div className='buttons'>
                        <a href='#ContactMe'className='btn-contact'>Contato</a>
                        <button className='btn-getResume'>Currículo</button>
                    </div>    
                </div>
            </div>
        </C.Container>
    )
}