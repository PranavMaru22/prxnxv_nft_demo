import React from 'react'
import nft1 from "../assets/Nfts/bighead-1.svg"
import nft2 from "../assets/Nfts/bighead-3.svg"
import nft3 from "../assets/Nfts/bighead-5.svg"
import nft4 from "../assets/Nfts/bighead-7.svg"
import nft5 from "../assets/Nfts/bighead-9.svg"
import FACEBOOK from "../assets/icons8-facebook.svg"
import INSTAGRAM from "../assets/icons8-instagram.svg"
import LINKEDIN from "../assets/icons8-linkedin.svg"
import TWITTER from "../assets/icons8-twitter.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__bg'>
                <div className='footer__bg__inner'>
                    <img 
                        src={nft1}
                        alt='bg--images'
                    />
                    <img 
                        src={nft2}
                        alt='bg--images'
                    />
                    <img 
                        src={nft3}
                        alt='bg--images'
                    />
                    <img 
                        src={nft4}
                        alt='bg--images'
                    />
                    <img 
                        src={nft5}
                        alt='bg--images'
                    />
                </div>
                <div className='footer__bg__text'>
                    <div className='footer__heading'>
                        <h1>Join The Weirdos Club</h1>
                    </div>
                    <div>
                        <button type='button' className='footer__btn'>Join Now</button>
                    </div>
                </div>
            </div>
            <div className='footer__info'>
                <div className='footer__main'>
                    <div className='footer__main__inner'>
                        <h1>W.</h1>
                        <div className='footer__icons'>
                            <img
                                src={FACEBOOK}
                                alt='icon'
                                className='footer__icon'
                            />
                            <img
                                src={INSTAGRAM}
                                alt='icon'
                                className='footer__icon'
                            />
                            <img
                                src={TWITTER}
                                alt='icon'
                                className='footer__icon'
                            />
                            <img
                                src={LINKEDIN}
                                alt='icon'
                                className='footer__icon'
                            />
                        </div>
                    </div>
                    <div className='footer__grid'>
                        <p>Home</p>
                        <p>Roadmap</p>
                        <p>Team</p>
                        <p>About</p>
                        <p>Showcase</p>
                        <p>Faq</p>
                    </div>
                </div>
                <div className='footer__label'>
                    <p>© 2023 Weirdos Club. All rights reserved.</p>
                    <p>Made with ❤ by Pranav Maru</p>
                </div>
            </div>
        </div>
    )
}

export default Footer