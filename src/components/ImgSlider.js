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
            <img src ="images/slider-scale.jpg" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEsSjfV8WpqUj3DZoQ5KmkCiDgSl1ZGcQqfTCn96BZDKEwZsHaU0hU-LD9Mo6L_CTlqi5-QH4GcQPpRK91h78Q8_jGfAHDTixbUr7XaDoShTCEyLdXg_sOdMW-INg.jpg?r=8f0" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABREtmp5ikQ5lOIq1XrEtA_8e-6hwep-jljHSTwKb248geEi0pacAAaEURc944HBwIq5Na6OIW5Ra3kNsKR3OoJUGfDpZ.jpg?r=148" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="images/slider-badag.jpg" alt='Image'/>
        </Wrap>
        <Wrap>
            <img src ="images/slider-scales.jpg" alt='Image'/>
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


