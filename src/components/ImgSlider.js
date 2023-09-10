import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    // Visite the react slick for refrence  
    let setting ={
        dots : true,
        infinite : true,
        speed:500,
        slidesToShow:1,
        slidesToSchroll:1,
        autoplay : true
    }
    
  return (
    <Carousel {...setting}>
        <Wrap>
            {/* <video src ="videos/33b277f6-db0b-45ee-8bc7-9be0de581f5b.mp4"/> */}
            <img src ="https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRyD4sKSlYoMWpQEB-DHMfRXsMXz9vMn6NNUpAjspbT6mkxgfkcw2IisHkVHP3kinzV5TzPxCbprfTqkEsS-yS4m43yb.jpg?r=cf9" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="\images\dino-transformed.jpeg" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="\images\dinoi-transformed.jpeg" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYgc913hXtu2Co_5CTGGdiqSC57UkVJnvR7fDc6HBfj3NFGknMTk9EhrI4WnjXQ9ab4VOLWLv5SRev25n2Eq1DOcjzhp.jpg?r=7fc" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdl6-PzX95nbPL5HWathe6A8kttbSAsIzL8jdnj7PGGm2sNSrtgugVevCote0Kr5qhLoiOfOe1JpCPXk7AciSh_758xI.jpg?r=269" alt='Image'/>

        </Wrap>
        </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`

    margin-top: 20px;

    ul li button{
        &before{
           font-size: 10px;
           color: white;
        }
    }
    //inbult in react slick go to that white dot and inscept u see they created 3 buttons
    li.slick-active button::before{
        color:white
    }
    .slick-list{
        overflow:visible; //allows div to overflow on each other sklick list is inbult in slick module
    }

    button{
        z-index: 1; //-1 means at last layer & 1 means At TOp
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 3px solid transparent;
        max-height:390px;
        width : 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow:  0 26px 30px -10px black;
        //rgb(0 0 0 / 69%) 0px 26px 30px -10px rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: 300ms;

        &:hover{
            border: 3px solid rgba(249,249,249,0.8)
        }

    }
`


