import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Preview from '../pages/Preview'

export default function ProjectsLayout() {

    const data = useLoaderData()
    const [index, setIndex] = useState(1)
    const [project, setProject] = useState(data[0])

    useEffect(() => {
        setProject(data.find(pro => pro.id === index))
    }, [index])

    return (
            <section className='projects-layout container-md p-2'>
                <h3 className="sub-head fw-bold under-line m-0">Projects</h3>
                <div className='partition d-flex gap-1'>
                    <aside className='d-flex flex-column gap-2 pt-2 pe-2'>
                        <button className='btn project-link' onClick={() => setIndex(1)}>Zen Garden</button>
                        <button className='btn project-link' onClick={() => setIndex(2)}>BlackJack</button>
                        <button className='btn project-link' onClick={() => setIndex(3)}>Jeopardy</button>
                        <button className='btn project-link' onClick={() => setIndex(4)}>DummyCookBook</button>
                        <button className='btn project-link' onClick={() => setIndex(5)}>RPSLS</button>
                        <button className='btn project-link' onClick={() => setIndex(6)}>S Mart</button>
                        <button className='btn project-link' onClick={() => setIndex(7)}>reacTrivia</button>
                    </aside>
                    <section className='content'>
                        <Preview context={project} />
                    </section>
                </div>
            </section>
    )
}

export const projectsLoader = async () => {
    const res = await fetch('/projects.json')
    return res.json()
}