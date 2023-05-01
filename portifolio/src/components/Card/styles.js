import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    border:3px solid transparent;
    width: 580px;
    height:90%;
    flex-direction:column;
    align-items:Center;
    justify-content:center;
    margin-top:90px;
    margin-bottom:50px;
    padding: 10px 15px;
    border-radius: 10px 10px 10px 0px;
    background: transparent;
    background-size: cover;
    transition:.5s;

    &:hover{
        transform:scale(1.01);
        img{   
            transform:scale(1.02);
        }
    }

    img{
        width:95%;
        height:450px;
        transition:1.5s;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    }

    

    p{
        margin:5px 0px;
        margin-top:8px;
        width:100%;
        text-align:center;
        color:white;
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

    @media screen and (max-width: 768px) {
        width:100%;
        height:100%;
    }
`;