import React, { useState } from 'react'
import "./Faq.css"

const Question = ({question,answer}) => {
    
    const [show,setShow] = useState(false);

    return (
        <div className='question__container'>
            <div className='faq__question' onClick={()=> setShow(!show)} >
                <h3>{question}</h3>
                <button type='button'>{show ? "-":"+"}</button>
            </div>
            <div className={`faq__answer ${show && "visible"}`}>
                <p className={`${show && "visible"}`}>{answer}</p>
            </div>
        </div>
    )
}

const Faq = () => {

    return (
        <div className='faq__container'>
            <div className='faq__heading'>
                <h1>FAQ</h1>
            </div>
            <div className='faq__questions'>
                <Question 
                    question={"WHERE CAN I VIEW MY NFTS?"} 
                    answer={"Once minted or bought simply connect to your OpenSea account to view your NFTs."}
                />
                <Question 
                    question={"WHAT IS THE METAVERSE?"}
                    answer={"A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets."}
                />
                <Question 
                    question={"WHY DO WE NEED ROYALTIES?"}
                    answer={"The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests."}
                />
                <Question 
                    question={"HOW CAN I USE MY NFT?"}
                    answer={"You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs."}
                />
                <Question 
                    question={"WHAT ARE THE WEIRDOS?"}
                    answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in."}
                />
                <Question 
                    question={"WHAT IS THE FUSION PROCESS?"}
                    answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia."}
                />
            </div>
        </div>
    )
}


export default Faq