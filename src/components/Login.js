import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      
        <Cta>
            <Cta1>
                <img src="images/cta-logo-one.svg" alt=""/>
            </Cta1>
            <SignUp>
                GET ALL THIS
            </SignUp>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque dolor iure. Maiores, reiciendis! Placeat deleniti voluptas maiores fuga veniam dolore pariatur. Reprehenderit ullam sapiente architecto facilis dolor. Quod, ut repellat dolor dolorum repellendus quis amet. Earum nostrum ratione quisquam nihil qui quidem id saepe.
            </Desc>
            <Cta2>
                <img src="images/cta-logo-two.png" alt=""/>
            </Cta2>
        </Cta>
      
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items: center;
    justify-content: center;

    &:before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left : 0;
        right: 0;
        background-position: top;
        background-size: cover;
        background-repeat: none;
        background-image: url("images/login-background.jpg") ;
        z-index: -1;
    }
`
const Cta = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display : flex;
    flex-direction: column;
    
`
const Cta1 = styled.div`

`
const SignUp = styled.a`
    width : 100%;
    background-color:#0063e5 ;
    font-weight: bold;
    padding: 19px 0;
    color : #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    transition: all 250;
    letter-spacing: 1.8px;
    margin-top: 10px;
    margin-bottom : 15px;

    &:hover{
        background: #0483ee;
    }
`
const Desc = styled.p`
    font-size: 12px;
    color:  #f9f9f9;
    text-align: center;
`
const Cta2 = styled.div`
    padding : 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`