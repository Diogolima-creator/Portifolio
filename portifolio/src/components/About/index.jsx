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
                    <img src='https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/aboutPic.jpg?raw=true' alt=''></img>
                </div>
                <div className='aboutme-desc'>
                    <p>Aos 11 anos despertei curiosidade pela programação quando me aventurei 
                        na criação de um servidor de Minecraft
                        ,apesar de não me jogar de cabeça nos estudos, ali surgia uma semente
                        que se afloraria. Aos meus 17 anos decidi começar a estudar C, então me apaixonei 
                        pela beleza que é construir algoritmos como ferramenta para facilitar a vida de outras pessoas.</p>
                    <p className='title-about'>Tecnologias que eu domino atualmente:</p>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>Full Stack Web</span>
                    </div>
                    <div className='highlight'>
                        <div className='circle-yellow'></div>
                        <span>REACT.JS e NODE.JS</span>
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