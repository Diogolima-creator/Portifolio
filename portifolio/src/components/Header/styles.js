import styled from "styled-components";

export const Container = styled.div`
    
    width:100%;
    height:100vh;
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
        height:65%;     
        
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
            font-size:32px;
            span{
                color: #DAA520;
            }
    
        }

        .p-wraper{
            padding:0px;
            margin: 0px auto;
            margin-top:10px;
            font-size:38px;
            font-weight: normal;
            font-family: 'Roboto', sans-serif;
        }

        p{
            font-size:20px;
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
            border:2px solid #122a46;
            border-radius:200px;
            padding:10px;
            

            img{
                border-radius:200px;
                width:350px;
                height:350px;
                cursor:pointer;
                transition: 1.5s;
            }

            img:hover{
                transform: scale(1.03);
                animation: change 1s;
                content: url(../../images/about.png);
            }
    
            @keyframes change{
                0%{
                    cursor:pointer;
                    opacity:0;
                }
                100%{
                    opacity:1s;
                }
            }
        }

    }

    @media screen and (max-width: 768px){
        width:100%;

        h1{
            margin-left:100px;
        }

        .menu-header{
            display:none;
        }

        .div-header{

            .p-wraper{
                font-size:26px;
            }

            p{
                font-size:14px;
            }
            
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

    @media screen and (max-width: 412px){
        width:100%;

        h1{
            font-size:42px;
            margin-left:140px;
        }
    }
`;

