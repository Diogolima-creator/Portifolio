import * as C from './styles'
import { Card } from '../Card'
import OwlCarousel from 'react-owl-carousel2/';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export const Projects = () => {

    const projects = [
        {
            name: 'RPG Game',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/RPG.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/Jogo-De-Rpg',
            pageProject: 'https://diogolima-creator.github.io/Jogo-De-Rpg/'
        },
        {
            name: 'Loja Virtual',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/LojaVirtual.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/LojaVirtual',
            pageProject: 'https://loja-virtual-bice.vercel.app/'
        },
        {
            name: 'Clone-Instagram',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Clone.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/Clone-Instagram',
            pageProject: 'https://clone-instagram-liart.vercel.app/'
        },
        {
            name: 'Podcast',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Podcast.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/Podcast',
            pageProject: 'https://podcast-mu.vercel.app/'
        },
        {
            name: 'Clone-Netflix',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/CloneNetflix.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/Clone-netflix',
            pageProject: 'https://clone-netflix-sigma.vercel.app/'
        },
        {
            name: 'Sistema Financeiro',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/SistemaFinanceiro.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/Sistema-Financeiro',
            pageProject: 'https://diogolima-creator.github.io/Sistema-Financeiro/'
        },
        {
            name: 'Formulario',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Formulario.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/FormularioReact'
        },
        {
            name: 'Clone-Spotify',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/CloneSpotify.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/Clone-spotify',
            pageProject: 'https://clone-spotify-nu.vercel.app/'
        },
        {
            name: 'Portifolio',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Portifolio.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator'
        }
    ]

    const options = {
        nav:false,
        pagination:false,
        rewind:true,
        autoplay:true,
        loop:true,
        dots:false,
        stagePadding:0,
        autoplayHoverPause:true,
        autoplayTimeout:5000,
        slideBy:2,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            1600:{
                items:3
            }
        }
    }

    useEffect(() => {
        Aos.init({ duration:2000 })
    },[]);

    return(

        <C.Container data-aos-once="true" data-aos="fade-up">
            <div id='Projects' className='header-projects'>
                <h1>Projetos</h1>
                <p>Todos os meus projetos</p>
                <hr></hr>
            </div>
            <div className='project-all'>
                <div className='projects'>
                        <div className='project-carousel'>
                            
                        </div>
                    </div>
            </div>
        </C.Container>
    )
}
