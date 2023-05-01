import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram,faGithub,faLinkedinIn,faGoogle } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';


export const Header = () => {

    function typeWriter() {
        var app = document.getElementById('p-wraper')

            var typewriter = new Typewriter(app,{
                strings: ['Desenvolvedor Junior 💻', 'Trabalho com React.js/Node.js 🌐','Apaixonado por tecnologia 😎'],
                autoStart: true,
                loop: true,
                delay: 45,
                pauseFor: 2000
        });

    }
    
    useEffect(() => {
        typeWriter()
    },[])

    return(
        <C.Container>
            <div className='home-header'>
                <h1>DIOGOLIMA</h1>
                <div className='menu-header'>
                    <a href="#"><p>Home</p></a>
                    <a href='#Aboutme'><p>AboutMe</p></a>
                    <a href='#Resume'><p>Resume</p></a>
                    <a href='#Projects'><p>Projects</p></a>
                    <a href='#ContactMe'><p>ContactMe</p></a>
                </div>
           </div>
            <div className='whoIam-header'>
                <div className='div-header'>
                    <div className='social-header'>
                        <a href='https://mail.google.com/mail/u/0/?fs=1&to=dbznetudo@gmail.com&tf=cm'target='_blank'><FontAwesomeIcon className='icon' icon={faGoogle} /></a>
                        <a href='https://www.instagram.com/diogo_lima1408/' target='_blank'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                        <a href='https://github.com/Diogolima-creator' target='_blank'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                        <a href='https://www.linkedin.com/in/diogo-lima1408/' target='_blank'><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a>
                    </div>
                    <h1>Olá, Eu sou o <span>Diogo</span> </h1>
                    <p className='p-wraper' id='p-wraper'><span>Desenvolvedor Junior</span></p>
                    <p>Desenvolvedor Junior usando as tecnologias React.js e Node.js</p>
                    <a href='#ContactMe' className='btn-contact'>Contato</a>
                    <button className='btn-getResume'>Currículo</button> 
                </div>
                <div className='profile-header'>
                    <img src="https://user-images.githubusercontent.com/62246037/235383695-7eadb9a1-74f8-4df4-b52e-53e1267d359c.png" alt=""></img>
                </div>
            </div>
        </C.Container>
    )
}