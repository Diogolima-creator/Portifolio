import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faInstagram,faGithub,faLinkedinIn,faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';;
import "aos/dist/aos.css";
import { useEffect } from 'react'

export const Contact = () => {

    useEffect(() => {
        Aos.init({ duration:2000 })
    },[]);

    return(
        <C.Container data-aos-once="true" data-aos="fade-up">
            <div className='header-contact'>
                <h1>Contato</h1>
                <p>Me envie um email</p>
                <hr></hr>
            </div>
            <div id='ContactMe' className='contact'>
                <div className='contact-left'>
                    <p className='contact-email'>Entrar em contato 📧</p>
                    <div className='contact-social'>
                        <a href='https://twitter.com/Diogo_NCSM' target='_blank'><FontAwesomeIcon className='icon' icon={faTwitter} /></a>
                        <a href='https://mail.google.com/mail/u/0/?fs=1&to=dbznetudo@gmail.com&tf=cm'target='_blank'><FontAwesomeIcon className='icon' icon={faGoogle} /></a>
                        <a href='https://www.instagram.com/diogo_lima1408/' target='_blank'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                        <a href='https://github.com/Diogolima-creator' target='_blank'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                        <a href='https://www.linkedin.com/in/diogo-lima1408/' target='_blank'><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a>
                    </div>
                    <p className='email'>Envie seu email aqui!</p>
                    <img src="https://www.colmmcgill.com/wp-content/uploads/2016/07/pos4.png" alt=""/>
                </div>
                <div className='contact-right'>
                    <div className='contact-right-form'>
                        <form action="https://formsubmit.co/dbznetudo@gmail.com" method="POST">
                            <p></p>
                            <label for="name">Nome</label>
                            <input type='text' name='text' required/>
                            <label for="email">Email</label>
                            <input type='email' name='email' required/>
                            <label for="message">Mensagem</label>
                            <input type="hidden" name="_next" value="https://portifolio-kappa-nine.vercel.app/"/>
                            <textarea type="text" name="message" required></textarea>
                            <button type='submit'>Enviar<FontAwesomeIcon className='icon' icon={faPaperPlane} /></button>
                        </form>
                    </div>
                </div>
            </div>
            
        </C.Container>   
    )
}