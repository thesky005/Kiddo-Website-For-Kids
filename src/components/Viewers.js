import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='images/viewers-disney.png'/>
      </Wrap>
      <Wrap>
        <img src='images/viewers-marvel.png'/>
      </Wrap>
      <Wrap>
        <img src='images/viewers-national.png'/>
      </Wrap>
      <Wrap>
        <img src='images/viewers-pixar.png'/>
      </Wrap>
      <Wrap>
        <img src='images/viewers-starwars.png'/>
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    padding: 30px 0 26px;
    
    /* display : grid;
    grid-template-columns: ; */
`
const Wrap = styled.div`

    margin-left: 12.5px;
    margin-right: 12.5px;
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow:  0 26px 30px -10px black;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    //&:hover ;-> wrap : hover
    &:hover {
        box-shadow:  0 30px 39px -10px black;;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`
