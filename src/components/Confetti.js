import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const ConfettiComponent = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <Confetti
                numberOfPieces={190}
                gravity={0.1}
                width={width}
                height={height*2}
            />
        </div>
    )
}

export default ConfettiComponent