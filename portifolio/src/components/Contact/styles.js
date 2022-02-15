import styled from "styled-components";

export const Container = styled.div`
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
`;