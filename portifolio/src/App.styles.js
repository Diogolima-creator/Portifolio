import styled from "styled-components";

export const Container = styled.div`
    
    background: url(../../images/header3.jpg) no-repeat;
    background-size: 100% 110%;
    
    @media screen and (max-width: 412px){
        width:100%;
    }

    @media screen and (max-width: 320px){
        width:100%;
    }
    
`;

export const Footer=styled.div`
    position:fixed;
    top:96%;
    left:98%;
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

    @media screen and (max-width: 768px){
        display:none;
    }
`;