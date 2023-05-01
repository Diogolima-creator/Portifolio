import * as C from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import { Resumeright } from '../ResumeRight';
import Aos from 'aos';;
import "aos/dist/aos.css";


export const Resume = () => {

    const[select,setSelect] = useState('3');

    const toggleSelect = (number) => {

        console.log(number)
        const x = document.getElementById(select);
        x.classList.remove('selected')
        const y = document.getElementById(number)
        y.classList.add('selected')
        setSelect(number)
    }

    useEffect(() => {
        Aos.init({ duration:2000 })
    },[]);


    return(
        <C.Container data-aos="fade-up" data-aos-once="true" id='Resume'>
            <div className='header-resume'>
                <h1>Currículo</h1>
                <p>Informaçoes pessoais</p>
                <hr></hr>
            </div>
            <div className='resume'>
                <div className='resume-left'>
                    <div className='resume-menu'>
                        <div className='resume-menu-list'>
                            <div className='resume-bullet'>
                                <FontAwesomeIcon className='icon' icon={faUserGraduate} />
                            </div>
                            <p id='0' className='' onClick={() => toggleSelect('0')}>Academia</p>
                        </div>
                        <div className='resume-menu-list'>
                            <div className='resume-bullet'>
                                <FontAwesomeIcon className='icon' icon={faClockRotateLeft} />
                            </div>
                            <p id='1' className='' onClick={() => toggleSelect('1')}>Historico de serviços</p>
                            
                        </div>
                        <div className='resume-menu-list'>
                            <div className='resume-bullet'>
                                <FontAwesomeIcon className='icon' icon={faLaptopCode} />
                           </div> 
                           <p id='2' className='' onClick={() => toggleSelect('2')}>Habilidades de Programação</p>
                            
                        </div>
                        <div className='resume-menu-list'>
                            <div className='resume-bullet'>
                                <FontAwesomeIcon className='icon' icon={faChartColumn} />
                            </div>
                            <p id='3' className='selected' onClick={() => toggleSelect('3')}>Projetos</p>
                            
                        </div>
                        <div className='resume-menu-list'>
                            <div className='resume-bullet'>
                                <FontAwesomeIcon className='icon' icon={faPalette} />
                            </div>
                            <p id='4' className='' onClick={() => toggleSelect('4')}>Lazer</p>
                            
                        </div>
                    </div>

                </div>
                <div className='resume-right'>
                        {
                            select === '0' && <Resumeright index={'0'} />
                        }
                        {
                            select === '1' && <Resumeright index={'1'} />
                        }
                        {
                            select === '2' && <Resumeright index={'2'} />
                        }
                        {
                            select === '3' && <Resumeright index={'3'} />
                        }
                        {
                            select === '4' && <Resumeright index={'4'} />
                        }
                </div>
            </div>
        </C.Container>
    )
}