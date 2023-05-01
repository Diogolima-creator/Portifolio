import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:652px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin:0px;
    padding:0px;
    background: transparent;

    .header-projects{
        text-align:center;
        color:white;
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
        height:100%;
        padding-bottom:50px;
    }

    .projects{
        width:100%;
        height:100%;
        background-color:transparent;
        display:Flex;
        align-items:center;
        justify-content:center;
    }

    .project-carousel{
        width:100%;
    }

    @media screen and (max-width: 768px) {
        width:100%;
        height:100%;

        .projects{
            width:80%;
        }

        .projects-carousel{
            width:80%;
        }
    }
`;