import * as C from './styles'
import { Card } from '../Card'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
            name: 'Finanças',
            url: 'https://user-images.githubusercontent.com/62246037/235319285-0e0d503f-9241-4256-95e0-674012e65614.jpeg',
            github: 'https://github.com/Diogolima-creator',
            pageProject: 'https://peaceful-begonia-e4e088.netlify.app/'
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
            name: 'Food-Menu',
            url: 'https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/menuFood.png?raw=true',
            gitHub: 'https://github.com/Diogolima-creator/FoodMenu',
            pageProject: 'https://food-menu-delta.vercel.app/'
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
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1200:{
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
                            <OwlCarousel {...options}
                            > 
                                {
                                    projects.map((project) => 
                                    <Card url={project.url} name={project.name} urlGithub={project.gitHub} urlPageProject={project.pageProject}/>)
                                }
                            </OwlCarousel>
                        </div>
                    </div>
            </div>
        </C.Container>
    )
}
