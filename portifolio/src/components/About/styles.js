import styled from "styled-components";

export const Container = styled.div`
    background: transparent;
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
        height:512px;
        width:512px; 
    }

    .header-about{
        text-align:center;
        color:white;
        margin-top:0px;    

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
        width:1000px;
        background: transparent;
        

        .aboutme-desc{
            width: 500px;
            height: 100%;
            color:white;
            font-weight:bold;

            p{
                margin:30px;
                margin-top:20px;
                font-family: 'Roboto', sans-serif;
                padding: 0px 10px;
                font-size:16px;
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
                font-family: 'Roboto', sans-serif;
                margin-top:5px;
                font-size:16px;
                font-weight:bold;

                
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
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
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
        background:white;
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
        background-color:#DAA520;
        color:white;
    }

    .btn-getResume{
        background-color:white;
        color:black;
    }

    .btn-getResume:hover{
        background-color:#DAA520;
        color:white;
    }

    @media screen and (max-width: 768px){
        width:100%;
        height:100%;
        margin-left:0px;

        .aboutme{
            flex-direction:column;
            width:100%;

            .aboutme-div{
                width:60%;

                img{
                    width:100%;
                }
            }

            .aboutme-desc{
                margin:0px;
                width:90%;
                margin-left:0px;
            }
        }

        .buttons{
            display:flex;
            
        }
    }

    
   
`;