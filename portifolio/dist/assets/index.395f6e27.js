import{s as l,j as x,r as d,F as t,f as u,a as f,b,c as g,d as v,T as w,e as m,g as N,h as y,i as k,k as j,l as P,O as C,m as D,n as A,R as E,o as S}from"./vendor.dd6fa185.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};R();const z=l.div`

`,F=l.div`
    position:fixed;
    top:920px;
    left:1850px;
    display:flex;
    float:right;
    width:25px;
    height:2%;
    margin-right:50px;
    margin-bottom:30px;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    padding:5px;
    opacity: .8;
    
    transition:.4s;
    
    a{
        background-color: #336699;
        display:flex;
        align-items:center;
        justify-content:center;
        width:80%;
        height:80%;
        padding:5px;
        border-radius:5px;
    }

    .icon{
        padding:10px;
        color:white;
        width:100%;
        height:100%;
    }
`,M=l.div`
    background-color: #122a46;
    width:100%;
    height:670px;
    display:flex;
    align-items:center;
    justify-content:top;
    color:white;
    padding-top:15px;
    flex-direction:column;
    font-family: 'Poppins', sans-serif;

    h1{
        margin-right:250px;
        font-size:48px;
        
    }

    .home-header{
        display:flex;
        height:110px;
        width:100%;
        align-items:center;
        justify-content:center;
        
    }

    .menu-header{
        display:flex;
        justify-content:space-between;
        width:500px;
        font-weight:bold;
        font-size:16px;
        
        a{
            text-decoration:none;
            border-bottom:2px solid #122a46;
        }

        a:hover{
            border-bottom:2px solid #DAA520;
            cursor:pointer;
            font-size:16px;    
            color:#DAA520;       
        }

        a{
            color:white;
        }
    }
    
    .whoIam-header{
        margin-top:30px;
        display:flex;
        align-items:center;
             
        
        .div-header{
            text-align:center;
        }


        .social-header{
            
            a{
                opacity:.7;
                cursor:pointer;
                text-decoration:none;
                color:white;
            }

            a:hover{
                opacity:1;
            }
            .icon{
                padding-left:5px;
            }
            
        }

        h1{
            margin:0px;
            font-size:22px;
            span{
                color: #DAA520;
            }
    
        }

        .p-wraper{
            padding:0px;
            margin: 0px auto;
            margin-top:10px;
            font-size:32px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
        }

        p{
            font-size:18px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
        }


        button{
            width:158px;
            height:48px;
            padding:14px;
            border-radius:45px;
            cursor:pointer;
            border:none;
            font-weight:bold;
            margin: 0 20px;
            color:black;
            font-size:14px;
        }

        

        .btn-contact{
            padding: 14px 48px;
            border-radius:45px;
            cursor:pointer;
            border:none;
            font-weight:bold;
            margin: 0 20px;
            color:black;
            font-size:14px;
            background:transparent;
            color:white;  
            border:2px solid white;
            text-decoration:none;   
        }


        .btn-contact:hover{
            background-color:white;
            color:black;
        }

        .btn-getResume{
            background-color:#DAA520;
            color:white;
        }

        .btn-getResume:hover{
            background-color:white;
            color:#DAA520;
        }

        .profile-header{
            margin-left:160px;
            border:1px solid white;
            border-radius:200px;
            padding:5px;
            
            img{
                border-radius:200px;
                width:350px;
                height:350px;
            }

            img:hover{
                transform: scale(1.07);
                transition: 2s;
            }
        }

    }

    @media screen and (max-width: 968px){
        width:100%;

        h1{
            margin-left:100px;
        }

        .menu-header{
            display:none;
        }

        .whoIam-header{
            display:flex;
            flex-direction: column-reverse;
            justify-content:center;
            align-items:center;

            .profile-header{
                display:flex;
                align-items:center;
                justify-content:center;
                margin:0px;
                margin-bottom:10px;

                img{
                    width: 250px;
                    height: 250px;
                }
            }
        }
    }
`,e=x.exports.jsx,i=x.exports.jsxs,I=()=>{function a(){var s=document.getElementById("p-wraper");new w(s,{strings:["Desenvolvedor Full-Stack \u{1F4BB}","Trabalho com React.js/Node.js \u{1F310}","Apaixonado por tecnologia \u{1F60E}"],autoStart:!0,loop:!0,delay:45,pauseFor:2e3})}return d.exports.useEffect(()=>{a()},[]),i(M,{children:[i("div",{className:"home-header",children:[e("h1",{children:"DIOGOLIMA"}),i("div",{className:"menu-header",children:[e("a",{href:"#",children:e("p",{children:"Home"})}),e("a",{href:"#Aboutme",children:e("p",{children:"AboutMe"})}),e("a",{href:"#Resume",children:e("p",{children:"Resume"})}),e("a",{href:"#Projects",children:e("p",{children:"Projects"})}),e("a",{href:"#ContactMe",children:e("p",{children:"ContactMe"})})]})]}),i("div",{className:"whoIam-header",children:[i("div",{className:"div-header",children:[i("div",{className:"social-header",children:[e("a",{href:"https://twitter.com/Diogo_NCSM",target:"_blank",children:e(t,{className:"icon",icon:u})}),e("a",{href:"https://mail.google.com/mail/u/0/?fs=1&to=dbznetudo@gmail.com&tf=cm",target:"_blank",children:e(t,{className:"icon",icon:f})}),e("a",{href:"https://www.instagram.com/diogo_lima1408/",target:"_blank",children:e(t,{className:"icon",icon:b})}),e("a",{href:"https://github.com/Diogolima-creator",target:"_blank",children:e(t,{className:"icon",icon:g})}),e("a",{href:"https://www.linkedin.com/in/diogo-lima1408/",target:"_blank",children:e(t,{className:"icon",icon:v})})]}),i("h1",{children:["Ol\xE1, Eu sou o ",e("span",{children:"Diogo"})," "]}),e("p",{className:"p-wraper",id:"p-wraper",children:e("span",{children:"Desenvolvedor Full-Stack"})}),e("p",{children:"Desenvolvedor Full Stack usando as tecnologias React.js e Node.js"}),e("a",{href:"#ContactMe",className:"btn-contact",children:"Contato"}),e("button",{className:"btn-getResume",children:"Curr\xEDculo"})]}),e("div",{className:"profile-header",children:e("img",{src:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/profilePic.jpg?raw=true",alt:""})})]})]})},_=l.div`
    background-color: white;
    width:100%;
    height:874px;
    font-family: 'Poppins', sans-serif;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0px;
    margin:0px;
    
    img{
        margin:0px;
        padding:0px;
        height:100%;
        width:500px;
    }

    .header-about{
        text-align:center;
        color:#122a46;
        margin-top:50px;    

        hr{
            width:18%;
            margin-bottom:40px;
        }

        h1{
            margin:0px;
            padding:0px;
        }

        p{
            margin:0px;
            padding:0px;
            font-family: 'Roboto', sans-serif;
        }
    }

    .aboutme{
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow: 0 0 20px -2px #1f2235;
        width:1000px;
        
        .aboutme-desc{
            width: 500px;
            height: 100%;

            p{
                margin:30px;
                margin-top:50px;
                font-family: 'Roboto', sans-serif;
                padding: 0px 10px;
                font-size:14px;
                letter-spacing: .1em;
            }

            .title-about{
                margin-bottom:20px;
                font-weight:bold;
                margin-top:150px;
                font-size:16px;
            }

            .highlight{
                display:Flex;
                align-items:center;
                font-weight:normal;
                font-family: 'Roboto', sans-serif;
                margin-top:7px;
                font-size:14px;
            }
            .circle-yellow{
                width:12px;
                height:12px;
                background-color:#DAA520;
                border-radius:45px;
                margin-left:40px;
                margin-right:5px;
            }

        }

    }

    .aboutme-div{
        padding:0px;
        margin:0px;
        height:666px;
    }

    button{
        width:158px;
        height:48px;
        padding:14px;
        border-radius:45px;
        cursor:pointer;
        border:none;
        font-weight:bold;
        margin: 40px 20px;
        color:black;
        font-size:14px;
    }

    .btn-contact{
        background:transparent;
        border:2px solid black;
        color:black;
        margin-left:40px;
        padding:14px 42px;
        border-radius:45px;
        cursor:pointer;
        font-weight:bold;
        margin: 40px 20px;
        color:black;
        font-size:14px;
        text-decoration:none;
    }

    .btn-contact:hover{
        background-color:#122a46;
        color:white;
    }

    .btn-getResume{
        background-color:#DAA520;
        color:white;
    }

    .btn-getResume:hover{
        color:black;
    }

    @media screen and (max-width: 768px){
        width:100%;
        height:70%;

        .aboutme{
            flex-direction:column;
            width:100%;

            .aboutme-div{
                width:90%;

                img{
                    width:100%;
                }
            }
            .aboutme-desc{
                margin-left:25px;
            }
        }
    }
`;const L=()=>(d.exports.useEffect(()=>{m.init({duration:2e3})},[]),i(_,{"data-aos":"fade-up","data-aos-once":"true",children:[i("div",{id:"Aboutme",className:"header-about",children:[e("h1",{children:"Sobre mim"}),e("p",{children:"Porque me escolher?"}),e("hr",{})]}),i("div",{className:"aboutme",children:[e("div",{className:"aboutme-div",children:e("img",{src:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/aboutPic.jpg?raw=true",alt:""})}),i("div",{className:"aboutme-desc",children:[e("p",{children:"Aos 11 anos despertei curiosidade pela programa\xE7\xE3o quando me aventurei na cria\xE7\xE3o de um servidor de Minecraft ,apesar de n\xE3o me jogar de cabe\xE7a nos estudos, ali surgia uma semente que se afloraria. Aos meus 17 anos decidi come\xE7ar a estudar C, ent\xE3o me apaixonei pela beleza que \xE9 construir algoritmos como ferramenta para facilitar a vida de outras pessoas."}),e("p",{className:"title-about",children:"Tecnologias que eu domino atualmente:"}),i("div",{className:"highlight",children:[e("div",{className:"circle-yellow"}),e("span",{children:"Full Stack Web"})]}),i("div",{className:"highlight",children:[e("div",{className:"circle-yellow"}),e("span",{children:"REACT.JS e NODE.JS"})]}),i("div",{className:"highlight",children:[e("div",{className:"circle-yellow"}),e("span",{children:"Redux/Context"})]}),i("div",{className:"highlight",children:[e("div",{className:"circle-yellow"}),e("span",{children:"Construir uma REST API"})]}),i("div",{className:"highlight",children:[e("div",{className:"circle-yellow"}),e("span",{children:"MongoDB/MySQL (CRUD)"})]}),i("div",{className:"highlight",children:[e("div",{className:"circle-yellow"}),e("span",{children:"Styled-Components"})]}),e("a",{href:"#ContactMe",className:"btn-contact",children:"Contato"}),e("button",{className:"btn-getResume",children:"Curr\xEDculo"})]})]})]})),H=l.div`
    width:100%;
    height:602px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .header-resume{
        text-align:center;
        color:#122a46;
        margin-top:50px;    

        hr{
            width:100%;
            margin-bottom:40px;
        }

        h1{
            margin:0px;
            padding:0px;
        }

        p{
            margin:0px;
            padding:0px;
        }
    }

    .resume{
        display:flex;
        width:1000px;
        height:350px;
        
    }

    .resume-left{
        display:flex;

        .resume-menu{
            width:320px;
            height:360px;
            display:flex;
            flex-direction:column;
            align-items:start;
            box-shadow: 15px 0 9px -15px #1f2235;
            

            .resume-menu-list{
                display:Flex;
                flex-direction:row;
                align-items:center; 
                width:100%;
                height:42px;
                padding-top:10px;
                padding-bottom:10px;

                .resume-bullet{
                    display:Flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    height:150%;
                    width:34px;
                    margin-top:40px;
                    padding-top:20px;
                    padding-bottom:20px;
                    background-color:#122a46;
                    
                }

                p{
                    margin-top:53px;
                    margin-left:20px;
                    font-family: 'Poppins', sans-serif;
                    color:#122a46;
                    font-size:14px;
                    cursor:pointer;
                    
                }

                .selected{
                    margin-left:0px;
                    display: Flex;
                    background-color:#122a46;
                    color:white;
                    border-radius: 0px 90px 90px 0px;
                    height:40px;
                    width:225px;
                    text-align:center;
                    align-items:center;
                    padding-left:20px;
                    white-space: nowrap;
                    animation: open 1s;

                    @keyframes open {
                        from {
                            
                            width:0px;
                        } to {
                            
                            width:225px;
                        }
                    }

                    
                }

               
            }

        
            .icon{
                height:18px;
                color:white;
                cursor:pointer;
            }
        }


    .resume-right{
        width:680px;
        border:1px solid black;
    }
        
    }

    @media screen and (max-width: 768px){
        display:flex;
        height:100%;
        width:100%;

        .resume{
            margin-bottom:30px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:Center;
            height:50%;
        }
    }
`,q=l.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:680px;
    animation: modal .5s;  
    
    @keyframes modal {
        from {
            opacity: 0;
            transform: translate3d(0,80px,0);
        } to {
            opacity: 1;
            transform: tranlate3d(0,0,0);
        }
    }

    .resumeright-education{
        display:flex;
        flex-direction:column;
        margin-top:20px;
        width:100%;
        
    }

    .resumeright-education-list{
        display:flex;
        justify-content:space-between;
        width:100%;
        
        p{
            margin-left:60px;
            font-weight:bold;
            
        }
    }

    .resumeright-education-p{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:20px;
        
        p{
            font-size:16px;
            margin-left:5px;
            font-weight:bold;
            color:#DAA520;
        }
    }
    
    .resumeright-education-date{
        display:flex;
        align-items:center;
        margin-right:40px;

        .date{
            display:flex;
            width:90px;
            height:32px;
            background-color:#DAA520;
            align-items:center;
            text-align:center;
            border-radius:45px;
            
            p{
                margin:0px;
                padding:0px;
                padding-left:10px;
                text-align:center;
                font-size:14px;
            }
        }
    }
    .circle-yellow{
        width:14px;
        height:14px;
        background-color:#DAA520;
        border-radius:45px;
        margin-left:40px;
        margin-right:5px;
    }

    @media screen and (max-width: 768px){
        display:flex;
        height:100%;
        width:100%;
        
    }
`,J=l.div`
    display:flex;
    flex-direction:column;

    .work{
        margin-top:50px;
        
        p{
            font-size:14px;
            margin:0px;
            margin-left:40px;
            margin-top:8px;
        }
    }

    .work-flex{
        display:Flex;
        align-items:center;

        p{
            margin:0px;
            font-family: 'Poppins', sans-serif;
            color:#DAA520;
            font-size:14px;
        }
    }

    @media screen and (max-width: 768px){
        display:flex;
        height:50%;
        width:50%;

    }
`,T=l.div`
    display:flex;

    .skills{
        width:300px;
        height:100%;
        margin-top:15px;
        p{  
            margin:0px 5px;
            padding:0px;
            font-family: 'Poppins', sans-serif;
            font-size:16px;
           
        }

        .bars{
            margin:0px;
            padding:0px;
            margin-top:0px;
            margin-bottom:25px;
            margin-left:40px;
            display:flex;
        }

        .bar-blue{
                height:15px;
                width:180px;
                background-color:#122a46;
            }

        .bar-yellow{
            height:15px;
            width:20px;
            background-color:#DAA520;
        }

        #bar2-blue{
            width:170px;
        }

        #bar2-yellow{   
            width:30px;
        }

        #bar4-blue,#bar5-blue,#bar7-blue{
            width:130px;
        }

        #bar4-yellow,#bar5-yellow,#bar7-yellow{   
            width:70px;
        }

        #bar8-blue,#bar9-blue{
            width:150px;
        }

        #bar8-yellow,#bar9-yellow{
            width:50px;
        }
    }

    .skill-block{
        display:flex;
        align-items:center;
        }
   
    }

    @media screen and (max-width: 768px){
        display:flex;
        height:50%;
        width:100%;
        margin-left:45px;
        .skills{
            margin-top:25px;
            width:40%;  
        }
    }
`,B=l.div`
    display:flex;
    flex-direction:column;
    margin:0px;
    padding:0px;
    
    a{
        text-decoration:none;  
        color:black;
    }
    .projects{
        margin:0px;
        padding:0px;
        margin-top:15px;
        margin-bottom:20px; 
    }

    .projects-block{
        display:flex;
        align-items:center;
        font-family: 'Poppins', sans-serif;
        color:#DAA520;

        p{
            font-size:14px;
        }
        
    }

    .projects-tech{
        font-weight:bold;
        margin:0px;
        padding:0px;
    }
            
    p{
        margin:5px;
        padding:0px;
        margin-left:0px;
        font-size:14px;
    }

    .projects-block-text{
        margin:0px;
        padding:0px;
        margin-left:40px;
    }

    .circle-yellow{
        width:14px;
        height:14px;
        background-color:#DAA520;
        border-radius:45px;
        margin-left:40px;
        margin-right:5px;
    }

    .project-flex-space{
        display:flex
    }

    .project-flex{
        width:90%;
    }

    .project-flex-block{
        display:flex;  
        width:110px;
        align-items:center;
        justify-content:center;
    }

    .project-flex-block-text{
        display:flex;
        align-items:center;
        justify-content:center;
        height:35px;
        width:100%;
        background-color:#DAA520;
        border-radius:45px;
        font-size:12px;
        font-family: 'Poppins', sans-serif;
        cursor:pointer;
    }

    .project-flex-block-text:hover{
        opacity:.8;
        a{
             color:white;
        }
       
    }

    @media screen and (max-width: 768px){
        display:flex;
        height:50%;
        width:50%;

    }
`,G=l.div`
    display:flex;
    flex-direction:column;
    margin:0px;
    padding:0px;

    .interests{
        margin:0px;
        padding:0px;
        margin-top:15px;

    }

    .interests-flex-space{
        display:flex;
    }

    .interests-flex{
        width:100%;
    }

    .interests-block{
        display:flex;
        align-items:center;
        font-family: 'Poppins', sans-serif;
        color:#DAA520;
        margin-top:15px;
        
        p{
            margin:0px;
            padding:0px;
            font-size:14px;
        }
        
    }

    .circle-yellow{
        width:14px;
        height:14px;
        background-color:#DAA520;
        border-radius:45px;
        margin:0px;
        margin-left:40px;
        margin-right:5px;
    }

    .interests-block-text{
        display:flex;
        width:100%;
        border-radius:45px;
        font-size:14px;
        margin-left:40px;
    }

    @media screen and (max-width: 768px){
        display:flex;
        height:50%;
        width:30%;

    }
`,p=({index:a})=>i(q,{children:[a==="0"&&i("div",{className:"resumeright-education",children:[i("div",{className:"resumeright-education-list",children:[i("div",{children:[i("div",{className:"resumeright-education-p",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Ensino Medio"})]}),e("p",{children:"Col\xE9gio Raul Sans de Matos"})]}),e("div",{className:"resumeright-education-date",children:e("div",{className:"date",children:e("p",{children:"2009-2019"})})})]}),i("div",{className:"resumeright-education-list",children:[i("div",{children:[i("div",{className:"resumeright-education-p",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Universidade Federal do Mato Grosso do Sul"})]}),e("p",{children:"Bacherelado em Engenharia da Computa\xE7\xE3o"})]}),e("div",{className:"resumeright-education-date",children:e("div",{className:"date",children:e("p",{children:"2020-2024"})})})]})]}),a==="1"&&e(J,{children:i("div",{className:"work",children:[i("div",{className:"work-flex",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Em Andamento"})]}),e("p",{children:"Sem experiencia profissional na \xE1rea, mas com muita vontade de trabalhar,aprender e evoluir. Sou fascinado em desenvolvimento WEB e APP adoraria ter uma chance de acrescentar em uma empresa e de somar conhecimento e experiencia ao meu curriculo. "})]})}),a==="2"&&i(T,{children:[i("div",{className:"skills",children:[i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"JavaScript"})]}),i("div",{className:"bars",children:[e("div",{className:"bar-blue"}),e("div",{className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"React JS"})]}),i("div",{className:"bars",children:[e("div",{id:"bar2-blue",className:"bar-blue"}),e("div",{id:"bar2-yellow",className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"CSS"})]}),i("div",{className:"bars",children:[e("div",{id:"#bar3-blue",className:"bar-blue"}),e("div",{id:"#bar3-yellow",className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Node JS"})]}),i("div",{className:"bars",children:[e("div",{id:"bar4-blue",className:"bar-blue"}),e("div",{id:"bar4-yellow",className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Mongo DB"})]}),i("div",{className:"bars",children:[e("div",{id:"bar5-blue",className:"bar-blue"}),e("div",{id:"bar5-yellow",className:"bar-yellow"})]})]})]}),i("div",{className:"skills",children:[i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"HTML"})]}),i("div",{className:"bars",children:[e("div",{id:"#bar6-blue",className:"bar-blue"}),e("div",{id:"#bar6-yellow",className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Python"})]}),i("div",{className:"bars",children:[e("div",{id:"bar7-blue",className:"bar-blue"}),e("div",{id:"bar7-yellow",className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"MySQL"})]}),i("div",{className:"bars",children:[e("div",{id:"bar8-blue",className:"bar-blue"}),e("div",{id:"bar8-yellow",className:"bar-yellow"})]})]}),i("div",{children:[i("div",{className:"skill-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Express JS"})]}),i("div",{className:"bars",children:[e("div",{id:"bar9-blue",className:"bar-blue"}),e("div",{id:"bar9-yellow",className:"bar-yellow"})]})]})]})]}),a==="3"&&i(B,{children:[e("div",{className:"projects",children:i("div",{className:"project-flex-space",children:[i("div",{className:"project-flex",children:[i("div",{className:"projects-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:" Portf\xF3lio Pessoal Website"})]}),i("div",{className:"projects-block-text",children:[e("p",{className:"projects-tech",children:"Tecnologias usadas:React JS,Styled-Components"}),e("p",{children:"Portifolio que fiz para mostrar todos os detalhes sobre mim e meus projetos."})]})]}),e("div",{className:"project-flex-block",children:e("div",{className:"project-flex-block-text",children:e("a",{children:"Ir para Projeto"})})})]})}),e("div",{className:"projects",children:i("div",{className:"project-flex-space",children:[i("div",{className:"project-flex",children:[i("div",{className:"projects-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Ecommerce Website"})]}),i("div",{className:"projects-block-text",children:[e("p",{className:"projects-tech",children:"Tecnologias usadas:React JS,Styled-Components,Node JS,Redux,Express JS,Firebase/Storage, MongoDB"}),e("p",{children:"Site sobre uma loja de roupas esportivas,com sistema de carrinho de compras e cadastro de usuarios"})]})]}),e("div",{className:"project-flex-block",children:e("div",{className:"project-flex-block-text",children:e("a",{href:"https://loja-virtual-bice.vercel.app/",target:"_blank",children:"Ir para Projeto"})})})]})}),e("div",{className:"projects",children:i("div",{className:"project-flex-space",children:[i("div",{className:"project-flex",children:[i("div",{className:"projects-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Clones WebSite"})]}),i("div",{className:"projects-block-text",children:[e("p",{className:"projects-tech",children:"Tecnologias Usadas:React JS,Styled-Components,Firebase/Storage/DataBase"}),e("p",{children:"Clone de Sites famosos com intuito de aprendizado baseado em videos do youtube."})]})]}),e("div",{className:"project-flex-block",children:e("div",{className:"project-flex-block-text",children:e("a",{href:"https://clone-netflix-sigma.vercel.app/",target:"_blank",children:"Ir para Projeto"})})})]})})]}),a==="4"&&i(G,{children:[e("div",{className:"interests",children:e("div",{className:"interests-flex-space",children:i("div",{className:"interests-flex",children:[i("div",{className:"interests-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Sport"})]}),e("div",{className:"interests-block-text",children:e("p",{children:"Outra paix\xE3o minha \xE9 o sport, amo seguir uma metodologia de treino,dieta ter a minha rotina fora do PC, considero o momento que eu me desconecto do mundo e apenas me divirto."})})]})})}),e("div",{className:"interests",children:e("div",{className:"interests-flex-space",children:i("div",{className:"interests-flex",children:[i("div",{className:"interests-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Jogos Competitivos"})]}),e("div",{className:"interests-block-text",children:e("p",{children:"Sou extremamente competitivo, sempre que eu entro em algo \xE9 para ser bom naquilo n\xE3o necessariamente o melhor porque exige muito tempo, mas n\xE3o s\xF3 nos jogos no geral da vida eu gosto sempre de tentar superar minha antiga vers\xE3o."})})]})})}),e("div",{className:"interests",children:e("div",{className:"interests-flex-space",children:i("div",{className:"interests-flex",children:[i("div",{className:"interests-block",children:[e("div",{className:"circle-yellow"}),e("p",{children:"Sair com amigos"})]}),e("div",{className:"interests-block-text",children:e("p",{children:"Sou bastante extrovertido e se reunir com os amigos \xE9 o momento que tiro para relaxar"})})]})})})]})]}),O=()=>{const[a,s]=d.exports.useState("0"),r=c=>{console.log(c),document.getElementById(a).classList.remove("selected"),document.getElementById(c).classList.add("selected"),s(c)};return d.exports.useEffect(()=>{m.init({duration:2e3})},[]),i(H,{"data-aos":"fade-up","data-aos-once":"true",id:"Resume",children:[i("div",{className:"header-resume",children:[e("h1",{children:"Curr\xEDculo"}),e("p",{children:"Informa\xE7oes pessoais"}),e("hr",{})]}),i("div",{className:"resume",children:[e("div",{className:"resume-left",children:i("div",{className:"resume-menu",children:[i("div",{className:"resume-menu-list",children:[e("div",{className:"resume-bullet",children:e(t,{className:"icon",icon:N})}),e("p",{id:"0",className:"selected",onClick:()=>r("0"),children:"Academia"})]}),i("div",{className:"resume-menu-list",children:[e("div",{className:"resume-bullet",children:e(t,{className:"icon",icon:y})}),e("p",{id:"1",className:"",onClick:()=>r("1"),children:"Historico de servi\xE7os"})]}),i("div",{className:"resume-menu-list",children:[e("div",{className:"resume-bullet",children:e(t,{className:"icon",icon:k})}),e("p",{id:"2",className:"",onClick:()=>r("2"),children:"Habilidades de Programa\xE7\xE3o"})]}),i("div",{className:"resume-menu-list",children:[e("div",{className:"resume-bullet",children:e(t,{className:"icon",icon:j})}),e("p",{id:"3",className:"",onClick:()=>r("3"),children:"Projetos"})]}),i("div",{className:"resume-menu-list",children:[e("div",{className:"resume-bullet",children:e(t,{className:"icon",icon:P})}),e("p",{id:"4",className:"",onClick:()=>r("4"),children:"Lazer"})]})]})}),i("div",{className:"resume-right",children:[a==="0"&&e(p,{index:"0"}),a==="1"&&e(p,{index:"1"}),a==="2"&&e(p,{index:"2"}),a==="3"&&e(p,{index:"3"}),a==="4"&&e(p,{index:"4"})]})]})]})},$=l.div`
    width:100%;
    height:652px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin:0px;
    padding:0px;
    
    .header-projects{
        text-align:center;
        color:#122a46;
        margin-top:50px;
         
        hr{
            width:100%;
            margin-bottom:40px;
        }

        h1{
            margin:0px;
            padding:0px;
        }

        p{
            margin:0px;
            padding:0px;
        }
    }

    .project-all{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        background-color:#122a46;
        height:100%;
        padding-bottom:50px;
    }

    .projects{
        width:80%;
        height:100%;
        background-color:#122a46;
        display:Flex;
        align-items:center;
        justify-content:center;
    }

    .project-carousel{
        width:90%;
        
    }

    @media screen and (max-width: 768px){
        width:100%;
        height:100%;

        .projects{
            width:100%;
        }

        .projects-carousel{
            width:100%;
        }
    }
`,W=l.div`
    display:flex;
    border:3px solid white;
    width: 380px;
    height:100%;
    flex-direction:column;
    align-items:Center;
    justify-content:center;
    margin-top:90px;
    margin-bottom:50px;
    padding:5px;
    border-radius: 10px 10px 10px 0px;
    background-color:White;
    transition:1s;

    &:hover{
        transform:scale(1.03);
    }

    img{
        width:380px;
        height:300px;
        
    }

    

    p{
        margin:5px 0px;
        margin-top:8px;
        width:100%;
        text-align:center;
        color:#122a46;
        font-family: 'Poppins', sans-serif;
        margin-bottom:10px;
    }

    a{
        border:1px solid #122a46;
        background-color:#122a46;
        color:white;
        text-decoration:none;
        padding:10px;
        border-radius:10px;
        margin:5px;
        font-family: 'Poppins', sans-serif;
        transition: .5s;
    }

    a:hover{
        background-color:white;
        color:black;
        transform: scale(1.05);
    }

    .btn{
        padding:10px;
    }

    .btn-Github{
        border:1px solid #122a46;
        background-color:white;
        color:#122a46;
        
    }

    .btn-Github:hover{
        color:#DAA520;
        border-color:#DAA520;
    }

    @media screen and (max-width: 768px){
        width:100%;
        height:100%;
    }
`,U=({url:a,name:s,urlGithub:r,urlPageProject:c})=>i(W,{children:[e("img",{src:a,alt:""}),e("p",{children:s}),i("div",{className:"btn",children:[i("a",{className:"btn-Github",href:r,target:"_blank",children:["Github ",e(t,{className:"icon",icon:g})]}),e("a",{href:c,target:"_blank",children:"Ir para Projeto"})]})]});const V=()=>{const a=[{name:"RPG Game",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/RPG.png?raw=true",gitHub:"https://github.com/Diogolima-creator/Jogo-De-Rpg",pageProject:"https://diogolima-creator.github.io/Jogo-De-Rpg/"},{name:"Loja Virtual",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/LojaVirtual.png?raw=true",gitHub:"https://github.com/Diogolima-creator/LojaVirtual",pageProject:"https://loja-virtual-bice.vercel.app/"},{name:"Clone-Instagram",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Clone.png?raw=true",gitHub:"https://github.com/Diogolima-creator/Clone-Instagram",pageProject:"https://clone-instagram-liart.vercel.app/"},{name:"Podcast",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Podcast.png?raw=true",gitHub:"https://github.com/Diogolima-creator/Podcast",pageProject:"https://podcast-mu.vercel.app/"},{name:"Clone-Netflix",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/CloneNetflix.png?raw=true",gitHub:"https://github.com/Diogolima-creator/Clone-netflix",pageProject:"https://clone-netflix-sigma.vercel.app/"},{name:"Sistema Financeiro",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/SistemaFinanceiro.png?raw=true",gitHub:"https://github.com/Diogolima-creator/Sistema-Financeiro",pageProject:"https://diogolima-creator.github.io/Sistema-Financeiro/"},{name:"Formulario",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Formulario.png?raw=true",gitHub:"https://github.com/Diogolima-creator/FormularioReact"},{name:"Clone-Spotify",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/CloneSpotify.png?raw=true",gitHub:"https://github.com/Diogolima-creator/Clone-spotify",pageProject:"https://clone-spotify-nu.vercel.app/"},{name:"Portifolio",url:"https://github.com/Diogolima-creator/Portifolio/blob/main/portifolio/images/Portifolio.png?raw=true",gitHub:"https://github.com/Diogolima-creator"}],s={nav:!1,pagination:!1,rewind:!0,autoplay:!0,loop:!0,dots:!1,stagePadding:0,autoplayHoverPause:!0,autoplayTimeout:5e3,slideBy:2,responsive:{0:{items:1},900:{items:2},1600:{items:3}}};return d.exports.useEffect(()=>{m.init({duration:2e3})},[]),i($,{"data-aos-once":"true","data-aos":"fade-up",children:[i("div",{id:"Projects",className:"header-projects",children:[e("h1",{children:"Projetos"}),e("p",{children:"Todos os meus projetos"}),e("hr",{})]}),e("div",{className:"project-all",children:e("div",{className:"projects",children:e("div",{className:"project-carousel",children:e(C,{options:s,children:a.map(r=>e(U,{url:r.url,name:r.name,urlGithub:r.gitHub,urlPageProject:r.pageProject}))})})})})]})},Q=l.div`
        background-color: white;
        width:100%;
        height:774px;
        font-family: 'Poppins', sans-serif;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:0px;
        margin:0px;
        margin-top:40px;

        .header-contact{
            text-align:center;
            color:#122a46;
            margin-top:50px;    

            hr{
                width:100%;
                margin-bottom:40px;
            }

            h1{
                margin:0px;
                padding:0px;
            }

            p{
                margin:0px;
                padding:0px;
                font-family: 'Roboto', sans-serif;
            }
        }

        .contact{
            display:flex;
            background-image: linear-gradient(#122a46, #1f2235);
            width:1100px;
            height: 500px;
            border-radius:15px;
            box-shadow: 0 0 20px -2px #122a46;
        }

        .contact-left, .contact-right{
            width:50%;
            height:100%;
            color:White;

            .contact-email{
                margin-top:10px;
                font-size:28px;
                margin-left:30px;
            }
        }

        .contact-social{
            margin-left:30px;

            a{
               text-decoration:none;
                color:white; 
            }
            
            .icon{ 
                width:16px;
                height:16px;
                padding:5px;
                cursor:pointer;
            }

            .icon:hover{
                opacity:.6;
            }
        }

        .contact-right-form{
            background-color: #fff;
            border-radius:15px;
            opacity:.9;
            width:98%;
            height:80%;
            margin-top:85px;
        }

        form{
            padding:10px;
            margin-left:5px;
        }
        
        form input, textarea{
            width: 90%;
            border: 2px solid transparent;
            outline: none;
            background-color: hsla(0,0%,90.2%,.6);
            padding: 0.5rem 1rem;
            font-size: 1.1rem;
            margin-bottom: 22px;
            transition: .3s;
            border-radius: 10px;
        }

        textarea{
            max-width:90%;
            margin-bottom:0px;
            min-height:70px;
            max-height:80px;
        }

        form label{
            margin-bottom: 5px;
            color: #111;
            letter-spacing: .2rem;
            font-family: 'Roboto', sans-serif;
        }

        img{
            padding:0 10px;
            width:530px;
            background-size: 300px 100px;
            opacity:.5;
        }

        button{
            margin-top: 0px;
            padding: 10px;
            outline: none;
            width: 900px;
            color: #e6e3e3;
            border: 2px solid #ff5823;
            font-size: 12px;
            border-radius: 19px;
            background-color: #122a46;
            font-size: 18px;
            width: 160px;
            align-items: center;
            justify-content: center;
            margin-left:15px;
            cursor:pointer;
            transform: border 2s;
        }

        button:hover{
            border: 2px solid #122a46;
            
        }

        .email{
            padding:0px;
            margin:0px;
            margin-top:55px;
            margin-left:0px;
            opacity:.5;
            margin-left:10px;
            font-size:18px;
            letter-spacing: .2rem;
            margin-bottom:5px;
        }

        @media screen and (max-width: 768px){
            width:100%;
            height:100%;

            .contact{
                width:90%;
                height:100%;

                
                img{
                    display:none;
                }
            }

            form input, textarea{
                width:80%;
            }
        }        
`,K=()=>(d.exports.useEffect(()=>{m.init({duration:2e3})},[]),i(Q,{"data-aos-once":"true","data-aos":"fade-up",children:[i("div",{className:"header-contact",children:[e("h1",{children:"Contato"}),e("p",{children:"Me envie um email"}),e("hr",{})]}),i("div",{id:"ContactMe",className:"contact",children:[i("div",{className:"contact-left",children:[e("p",{className:"contact-email",children:"Entrar em contato \u{1F4E7}"}),i("div",{className:"contact-social",children:[e("a",{href:"https://twitter.com/Diogo_NCSM",target:"_blank",children:e(t,{className:"icon",icon:u})}),e("a",{href:"https://mail.google.com/mail/u/0/?fs=1&to=dbznetudo@gmail.com&tf=cm",target:"_blank",children:e(t,{className:"icon",icon:f})}),e("a",{href:"https://www.instagram.com/diogo_lima1408/",target:"_blank",children:e(t,{className:"icon",icon:b})}),e("a",{href:"https://github.com/Diogolima-creator",target:"_blank",children:e(t,{className:"icon",icon:g})}),e("a",{href:"https://www.linkedin.com/in/diogo-lima1408/",target:"_blank",children:e(t,{className:"icon",icon:v})})]}),e("p",{className:"email",children:"Envie seu email aqui!"}),e("img",{src:"https://www.colmmcgill.com/wp-content/uploads/2016/07/pos4.png",alt:""})]}),e("div",{className:"contact-right",children:e("div",{className:"contact-right-form",children:i("form",{action:"https://formsubmit.co/dbznetudo@gmail.com",method:"POST",children:[e("p",{}),e("label",{for:"name",children:"Nome"}),e("input",{type:"text",name:"text",required:!0}),e("label",{for:"email",children:"Email"}),e("input",{type:"email",name:"email",required:!0}),e("label",{for:"message",children:"Mensagem"}),e("input",{type:"hidden",name:"_next",value:"http://localhost:3000/"}),e("textarea",{type:"text",name:"message",required:!0}),i("button",{type:"submit",children:["Enviar",e(t,{className:"icon",icon:D})]})]})})})]})]}));const X=()=>i(z,{children:[e(I,{id:"#"}),e(L,{}),e(O,{}),e(V,{}),e(K,{}),e(F,{children:e("a",{href:"#",children:e(t,{icon:A,className:"icon"})})})]});E.render(e(S.StrictMode,{children:e(X,{})}),document.getElementById("root"));
