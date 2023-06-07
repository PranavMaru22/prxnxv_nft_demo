import React, { useRef } from 'react';
import ETHEREUM from "../assets/Ethereum.svg";
import nft1 from "../assets/Nfts/bighead-1.svg";
import nft2 from "../assets/Nfts/bighead-2.svg";
import nft3 from "../assets/Nfts/bighead-3.svg";
import nft4 from "../assets/Nfts/bighead-4.svg";
import nft5 from "../assets/Nfts/bighead-5.svg";
import nft6 from "../assets/Nfts/bighead-6.svg";
import nft7 from "../assets/Nfts/bighead-7.svg";
import nft8 from "../assets/Nfts/bighead-8.svg";
import nft9 from "../assets/Nfts/bighead-9.svg";
import nft10 from "../assets/Nfts/bighead-10.svg";
import nft11 from "../assets/Nfts/bighead.svg";
import "./Showcase.css";

const Showcase = () => {

    const row1Ref = useRef(null)
    const row2Ref = useRef(null)

    return (
        <div className='showcase__container'>
            <div className='group__one' ref={row1Ref}>
                <Card src={nft1} nft_price={1.11} serial_no={2223} passRef= {row1Ref}  />
                <Card src={nft2} nft_price={2.42} serial_no={3212} passRef= {row1Ref} />
                <Card src={nft3} nft_price={3.81} serial_no={9854} passRef= {row1Ref} />
                <Card src={nft4} nft_price={2.47} serial_no={7777} passRef= {row1Ref} />
                <Card src={nft5} nft_price={3.54} serial_no={1000} passRef= {row1Ref} />
            </div>
            <div className='group__two' ref={row2Ref}>
                <Card src={nft11} nft_price={1.07} serial_no={4882} passRef= {row2Ref} />
                <Card src={nft10} nft_price={0.94} serial_no={2671} passRef= {row2Ref} />
                <Card src={nft9} nft_price={0.82} serial_no={5435} passRef= {row2Ref} />
                <Card src={nft8} nft_price={3.09} serial_no={7865} passRef= {row2Ref} />
                <Card src={nft7} nft_price={4.01} serial_no={3164} passRef= {row2Ref} />
                <Card src={nft6} nft_price={2.27} serial_no={9012} passRef= {row2Ref} />
            </div>
        </div>
    )
}

const Card = ({src,serial_no,nft_price,passRef}) => {

    const play = (e) => {
        passRef.current.style.animationPlayState = 'running';
    }
    const pause = (e) => {
        passRef.current.style.animationPlayState = 'paused';
    }

    return (
        <div className='card__container' onMouseOver={(e)=> pause(e)} onMouseOut={(e)=> play(e)}>
            <div className='card__image'>
                <img src={src ? src:null} alt='nft--logo'className='card__img'/>
            </div>
            <div className='card__content'>
                <div className='card__one'>
                    <h3>Weirdos</h3>
                    <p>#{serial_no}</p>
                </div>
                <div className='card__two'>
                    <h3>Price</h3>
                    <div className='price__div'>
                        <img src={ETHEREUM} alt='ethereum--logo' className='eth__logo' />
                        <p>{nft_price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase