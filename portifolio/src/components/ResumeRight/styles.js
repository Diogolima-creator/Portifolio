import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
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
            color:white;
        }
    }

    .resumeright-education-p{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:20px;
        color:white;
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
        width:80%;
        margin-left:60px;
    }
`;

export const WorkHistory = styled.div`
    display:flex;
    flex-direction:column;

    .work{
        margin-top:50px;
        
        p{
            font-size:14px;
            margin:0px;
            margin-left:40px;
            margin-top:8px;
            color:white;
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
        width:40%;

    }
`;

export const Skills = styled.div`
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
        
        p{
            color:white;
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

    
`;

export const Projects = styled.div`
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

        p{
            color:white;
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

    
`;

export const Interests = styled.div`
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

        p{  
            width:90%;
            height:100%;
            color:White;
        }
    }

    @media screen and (max-width: 768px) and (min-width:412px) {
        display:flex;
        height:50%;
        width:40%;
        
    }

    @media screen and (max-width: 412px) {
        display:flex;
        height:100%;
        margin:0px;
        width:40%;
        
        .interests-block-text{
            width:80%;
        }
    }
`;