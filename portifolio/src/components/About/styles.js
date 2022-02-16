import styled from "styled-components";

export const Container = styled.div`
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
    }

    @media screen and (max-width: 412px){
        width:100%;
        height:100%;
        margin-left:0px;

        .aboutme{
            flex-direction:column;
            width:100%;

            .aboutme-div{
                width:100%;
                
                img{
                    width:100%;
                }
            }

            .aboutme-desc{
                margin:0px;
                width:90%;
                margin-left:0px;
            }

            .buttons{
                display:flex;
                
            }
        }
    }
   
`;