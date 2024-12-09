import { useState } from 'react'

export default function Rules() {

    const [show, setShow] = useState(false)

    return (
        <>
            {show &&
                <div id="rules">
                    <img className="rules" src="images/image-rules-bonus.svg" alt="rules" />
                </div>
            }
            <button id="rulesBtn" onClick={() => {
             console.log('clicked');
             setShow(prev => !prev)
            }}>Rules</button>
        </>
    )
}