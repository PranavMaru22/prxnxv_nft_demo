import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react";
import imgdefault from "../assets/Nfts/bighead.svg"
import img1 from "../assets/Nfts/bighead-1.svg"
import img2 from "../assets/Nfts/bighead-2.svg"
import img3 from "../assets/Nfts/bighead-3.svg"
import img4 from "../assets/Nfts/bighead-4.svg"
import img5 from "../assets/Nfts/bighead-5.svg"
import img6 from "../assets/Nfts/bighead-6.svg"
import img7 from "../assets/Nfts/bighead-7.svg"
import img8 from "../assets/Nfts/bighead-8.svg"
import img9 from "../assets/Nfts/bighead-9.svg"
import img10 from "../assets/Nfts/bighead-10.svg"
import {EffectCards,Navigation,Pagination,Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "./About.css"


const About = () => {
  return (
    <div className='about__container'>
        <div className='swiper__container'>
            <Swiper
                // pagination={{
                //   type:"fraction",
                // }}
                scrollbar={{
                  draggable:true
                }}
                autoplay={{
                  delay:2000,
                  disableOnInteraction:false
                }}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards,Pagination,Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={imgdefault} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img1} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img2} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img3} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img4} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img5} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img6} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img7} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img8} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img9} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
                <SwiperSlide><img src={img10} className='image--car' alt='The Weirdos--logos' /></SwiperSlide>
            </Swiper>
        </div>
        <div className='about__text'>
          <div>
            <h1>Welcome To The Weirdos Club</h1>
          </div>
          <div>
            <h3>The WEIRDOS CLUB is a private collection of NFTs--unique digital collectibles.The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</h3>
          </div>
          <div>
            <p>With more than 200+ hand drawn traits,each NFT is unique and comes with a membership to an exclusive group of successful investors.Join an ambitious ever-growing community with multiple benefits and utilities.</p>
          </div>
          <div>
            <button type='button' >JOIN OUR DISCORD</button>
          </div>
        </div>
    </div>
  )
}

export default About