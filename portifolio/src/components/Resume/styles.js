import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:602px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background: transparent;
    background-size: 100% 100%;
    

    .header-resume{
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

    .resume{
        display:flex;
        width:1000px;
        height:350px;
        background-color:transparent;
    }

    .resume-left{
        display:flex;
        background-color:transparent;

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
                    background-color:#DAA520;
                    
                }

                p{
                    margin-top:53px;
                    margin-left:20px;
                    font-family: 'Poppins', sans-serif;
                    color:#DAA520;
                    font-size:14px;
                    cursor:pointer;
                    
                }

                .selected{
                    margin-left:0px;
                    display: Flex;
                    background-color:#DAA520;
                    color:#122a46;
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
                color:#122a46;
                cursor:pointer;
            }
        }


    .resume-right{
        width:900px;
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
`;