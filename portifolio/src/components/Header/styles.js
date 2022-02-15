import styled from "styled-components";

export const Container = styled.div`
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
`;

