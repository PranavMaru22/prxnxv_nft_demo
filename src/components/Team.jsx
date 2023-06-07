import React from 'react'
import nft1 from "../assets/Nfts/bighead-1.svg";
import nft2 from "../assets/Nfts/bighead-2.svg";
import nft3 from "../assets/Nfts/bighead-3.svg";
import nft4 from "../assets/Nfts/bighead-4.svg";
import nft5 from "../assets/Nfts/bighead-5.svg";
import nft7 from "../assets/Nfts/bighead-7.svg";
import nft8 from "../assets/Nfts/bighead-8.svg";
import nft9 from "../assets/Nfts/bighead-9.svg";
import nft11 from "../assets/Nfts/bighead.svg";
import ConfettiComponent from './Confetti.js';
import "./Team.css"


const Team = () => {
    return (
        <div className="team__container">
            <ConfettiComponent />
                <h1 className='team__heading'>
                    Team
                </h1>
                <div className='profiles__container'>
                    <Profile 
                        img_src={nft1}
                        name={"SKYBLAZE"}
                        role={"Founder"}
                    />
                    <Profile 
                        img_src={nft2}
                        name={"MEGNUM"}
                        role={"Co-Founder"}
                    />
                    <Profile 
                        img_src={nft4}
                        name={"MONKEY KING"}
                        role={"Director"}
                    />
                    <Profile 
                        img_src={nft5}
                        name={"BLACK PANTHER"}
                        role={"Manager"}
                    />
                    <Profile 
                        img_src={nft3}
                        name={"DEATHSTROKE"}
                        role={"Artist"}
                    />
                    <Profile 
                        img_src={nft8}
                        name={"LAZY KONG"}
                        role={"Social Media Manager"}
                    />
                    <Profile 
                        img_src={nft11}
                        name={"CYBER PUNK"}
                        role={"Blockchain Specialist"}
                    />
                    <Profile 
                        img_src={nft7}
                        name={"MONK"}
                        role={"Web3 Developer"}
                    />
                    <Profile 
                        img_src={nft9}
                        name={"BANANA"}
                        role={"Graphic Designer"}
                    />
                </div>
        </div>
    )
}

const Profile = ({img_src,role,name}) => {

    return (
        <div className='profile__container'>
            <div className='profile__img'>
                <img src={img_src} alt='profile--logo.png' />
            </div>
            <div className='profile__info'>
                <h1>{name}</h1>
                <h3>{role}</h3>
            </div>
        </div>
    )
}

export default Team