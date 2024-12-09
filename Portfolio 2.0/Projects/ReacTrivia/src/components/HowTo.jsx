import { useState } from 'react'

export default function HowTo() {

    const [modal, setModal] = useState(false)

    return (
        <div className='how-to'>
            <button type='button' onClick={() => setModal(!modal)}>How To Play</button>
            {modal &&
            <article className='absolute'>
                <h1>How To Play</h1>
                <h3>Beginning</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae nostrum quae quo quidem esse quasi hic molestiae ut excepturi asperiores impedit fugiat dolorem repellendus in quia, voluptate error aut.</p>
                <h3>Finale</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis amet ratione exercitationem, et est dignissimos odio vel, numquam rem ullam quae dolorum repudiandae. Recusandae neque pariatur dolores consectetur beatae!</p>
                <h3>Tips</h3>
                <ol>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                </ol>
            </article>
            }
        </div>
    )
}