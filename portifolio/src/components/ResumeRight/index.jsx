import * as C from './styles'

export const Resumeright = ( {index} ) => {
    return(
        <C.Container>
            {index === '0' && 
            <div className='resumeright-education'>

                <div className='resumeright-education-list'>
                    <div>
                        <div className='resumeright-education-p'>
                            <div className='circle-yellow'></div><p>Ensino Medio</p>
                        </div>
                        <p>Colégio Raul Sans de Matos</p>
                    </div>
                    <div className='resumeright-education-date'>
                        <div className='date'><p>2009-2019</p></div>
                    </div>
                </div>

                <div className='resumeright-education-list'>
                    <div>
                        <div className='resumeright-education-p'>
                            <div className="circle-yellow"></div>
                            <p>Universidade Federal do Mato Grosso do Sul</p>
                        </div>
                        <p>Bacherelado em Engenharia da Computação</p>
                    </div>
                    <div className='resumeright-education-date'>
                        <div className='date'><p>2020-2024</p></div>
                    </div>    
                </div>
                
            </div>}
            {index === '1' && 
            <C.WorkHistory>
                <div className='work'>
                    <div className='work-flex'>
                        <div className="circle-yellow"></div>
                        <p>Em Andamento</p>
                    </div>
                    <p>Sem experiencia profissional na área, mas com muita vontade de trabalhar,aprender e evoluir. 
                        Sou fascinado em desenvolvimento WEB e APP adoraria ter uma chance de acrescentar em uma empresa e de somar 
                        conhecimento e experiencia ao meu curriculo. </p>
                </div>
            </C.WorkHistory>
            }
            {index === '2' && 
            <C.Skills>
                <div className='skills'>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>TypeScript</p>
                        </div>
                        <div className='bars'>
                            <div className='bar-blue'></div><div className='bar-yellow'></div>
                        </div>
                    </div> 
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>React JS</p>
                        </div>
                        <div className='bars'>
                            <div id='bar2-blue' className='bar-blue'></div><div id='bar2-yellow' className='bar-yellow'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>CSS</p>
                        </div>
                        <div className='bars'>
                            <div id='#bar3-blue' className='bar-blue'></div><div id='#bar3-yellow' className='bar-yellow'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>Node JS</p>
                        </div>
                        <div className='bars'>
                            <div id='bar4-blue' className='bar-blue'></div><div id='bar4-yellow' className='bar-yellow'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>Mongo DB</p>
                        </div>
                        <div className='bars'>
                            <div id='bar5-blue' className='bar-blue'></div><div id='bar5-yellow' className='bar-yellow'></div>
                        </div>
                    </div> 
                </div>
                <div className='skills'>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>HTML</p>
                        </div>
                        <div className='bars'>
                            <div id='#bar6-blue' className='bar-blue'></div><div id='#bar6-yellow' className='bar-yellow'></div>
                        </div>
                    </div> 
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>Python</p>
                        </div>
                        <div className='bars'>
                            <div id='bar7-blue' className='bar-blue'></div><div id='bar7-yellow' className='bar-yellow'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>MySQL</p>
                        </div>
                        <div className='bars'>
                            <div id='bar8-blue' className='bar-blue'></div><div id='bar8-yellow' className='bar-yellow'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-block'>
                            <div className="circle-yellow"></div>
                            <p>Express JS</p>
                        </div>
                        <div className='bars'>
                            <div id='bar9-blue' className='bar-blue'></div><div id='bar9-yellow' className='bar-yellow'></div>
                        </div>
                    </div>
                </div>
            </C.Skills>}
            {index === '3' && 
            <C.Projects>
                <div className='projects'>
                    <div className='project-flex-space'>
                        <div className='project-flex'>
                            <div className='projects-block'>
                                <div className="circle-yellow"></div><p> Portfólio Pessoal Website</p>
                            </div>
                            <div className='projects-block-text'>
                                <p className='projects-tech'>Tecnologias usadas:React JS,Styled-Components</p>
                                <p>Portifolio que fiz para mostrar todos os detalhes sobre mim e meus projetos.</p>
                            </div>
                        </div>
                        <div className='project-flex-block'>
                            <div className='project-flex-block-text'><a >Ir para Projeto</a></div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className='project-flex-space'>
                        <div className='project-flex'>
                            <div className='projects-block'>
                                <div className="circle-yellow"></div><p>Ecommerce Website</p>
                            </div>
                            <div className='projects-block-text'>
                                <p className='projects-tech'>Tecnologias usadas:React JS,Styled-Components,Node JS,Redux,Express JS,Firebase/Storage,
                                MongoDB</p>
                                <p>Site sobre uma loja de roupas esportivas,com sistema de carrinho de compras e 
                                cadastro de usuarios</p>
                                
                            </div>
                        </div>
                        <div className='project-flex-block'>
                            <div className='project-flex-block-text'><a href='https://loja-virtual-bice.vercel.app/' target="_blank">Ir para Projeto</a></div>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                    <div className='project-flex-space'>
                        <div className='project-flex'>
                            <div className='projects-block'>
                                <div className="circle-yellow"></div><p>Finanças</p>
                            </div>
                            <div className='projects-block-text'>
                                <p className='projects-tech'>Tecnologias Usadas:TypeScript,Styled-Components,Firebase/Storage, MongoDB</p>
                                <p>Projeto feito com o intuito de ser um app para organização financeira seja familiar ou empresarial.
                                </p>
                            </div>
                        </div>
                        <div className='project-flex-block'>
                            <div className='project-flex-block-text'><a href='https://peaceful-begonia-e4e088.netlify.app' target="_blank">Ir para Projeto</a></div>
                        </div>
                    </div>
                </div>
            </C.Projects>}
            {index === '4' && 
            <C.Interests> 
                <div className='interests'>
                    <div className='interests-flex-space'>
                        <div className='interests-flex'>
                            <div className='interests-block'>
                                <div className="circle-yellow"></div><p>Sport</p>
                            </div>
                            <div className='interests-block-text'>
                                <p>Outra paixão minha é o sport, amo seguir uma metodologia de treino,dieta ter a minha 
rotina fora do PC, considero o momento que eu me desconecto do mundo e apenas me divirto.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='interests'>
                    <div className='interests-flex-space'>
                        <div className='interests-flex'>
                            <div className='interests-block'>
                                <div className="circle-yellow"></div><p>Jogos Competitivos</p>
                            </div>
                            <div className='interests-block-text'>
                                <p>Sou extremamente competitivo, sempre que eu entro em algo é para ser bom naquilo não
necessariamente o melhor porque exige muito tempo, mas não só nos jogos no geral da vida
eu gosto sempre de tentar superar minha antiga versão.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='interests'>
                    <div className='interests-flex-space'>
                        <div className='interests-flex'>
                            <div className='interests-block'>
                                <div className="circle-yellow"></div><p>Sair com amigos</p>
                            </div>
                            <div className='interests-block-text'>
                                <p>Sou bastante extrovertido e se reunir com os amigos é o momento que tiro para relaxar</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </C.Interests>}
        </C.Container>
    )
}