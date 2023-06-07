import React from 'react'
import Typewriter from "typewriter-effect";
import "./Main.css"
import myGif from "../assets/Home GIF.gif"
import RoundedBlack from "../assets/Rounded-Text-Black.png"

const Main = () => {
    return (
        <>
        <div className='main__container'>
            <div className='main__content'>
                <h1 className='main__heading'>Discover A New Era Of Cool</h1>
                <Typewriter
                    options={{
                        autoStart:true,
                        loop:true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`<span class='main__collect__1'>COLLECTIBLES l</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        typewriter.typeString(`<span class='main__collect__2'>APE KILLER</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        typewriter.typeString(`<span class='main__collect__3'>NFTs.</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                    }}
                />
                <h2 className='main__bored'>Bored Of Apes? Try Something New</h2>
                <button className='explore__btn'>
                    Explore
                </button>
            </div>
            <div>
                <img
                    src={myGif}
                    alt='Big Heads--logo'
                    className='gif__logo'
                />
            </div>
        </div>
        <div>
            <span className='down__arrow'>&#x2193;</span>
            <img 
                src={RoundedBlack}
                alt='round-black--logo'
                className='home__logo'
            />
        </div>
    </>
    )
}

export default Main