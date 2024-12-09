import { useState, useEffect } from "react";

export default function Home() {

    const [active, setActive] = useState(true)
    const [slide, setSlide] = useState(0)

    const show = [
        {
            title: 'Full-Stack Developer',
            pic: './custom/matrix_new.png',
            description: '2 years of training through Persevere bootcamp, both as a student and then as a tutor',
        },
        {
            title: 'Artist',
            pic: './custom/art_new.png',
            description: 'Musician, Painter, Graphic Artist, Web Designer',
        },
        {
            title: 'Mentor',
            pic: './custom/wireframe.png',
            description: 'Helping friends and colleagues grow in programming, and many other areas of life',
        },
        {
            title: 'Father',
            pic: './custom/cartoon.png',
            description: 'Raising 2 teenage daughters is a wonderful experience (headache)',
        },
    ]

    useEffect(() => {
        let interval
        if (active) {
            interval = setInterval(() => {
                if (slide === show.length - 1) {
                    setSlide(0)
                } else {
                    setSlide(curr => curr + 1)
                }
            }, 4000)
        }
        return () => {
            clearInterval(interval)
        }
    }, [slide])

    return (
        <section id="home container-md">
            <div className="slider container-fluid w-50">
                <div className="d-flex flex-column gap-5">
                <h3 className="title">{show[slide].title}</h3>
                    <img className="img-fluid" src={show[slide].pic} alt={show[slide].title} />
                    <p className="lead fst-italic">{show[slide].description}</p>
                    <span onClick={() => setActive(!active)} className="small">Pause/Play Slideshow</span>
                </div>
            </div>
        </section>
    )
}