import { Form, useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
import Listing from "../pages/Searching/Listing"

export default function SearchLayout() {

    const tags = useLoaderData()

    const [search, setSearch] = useState('')
    const [filterArray, setFilterArray] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        async function filtering(param) {
            const res = await fetch('https://dummyjson.com/recipes?limit=0')
            const data = await res.json()
            const filtered = data.recipes.filter(it => it.tags.includes(param))
            setFilterArray(filtered)
        }
        if (filter !== '') {
            filtering(filter)
        }
    }, [filter])

    useEffect(() => {
        async function filtering(param) {
            const res = await fetch('https://dummyjson.com/recipes?limit=0')
            const data = await res.json()
            const filtered = data.recipes.filter((it) => {
                const values = Object.values(it).flat().map((thing) => {
                    if (typeof thing === 'string') {
                        const split = thing.split(' ').flat()
                        return split.map(word => word.toLowerCase())
                    } else {
                        return thing
                    }
                }).flat()
                if (values.includes(param)) {
                    return it
                }
            })
            setFilterArray(filtered)
        }
        if (search !== '') {
            filtering(search.toLowerCase())
        }
    }, [search])

    async function getRequest(e) {
        e.preventDefault()
        const input = document.getElementById('q').value
        setSearch(input)
    }

    return (
        <>
            <nav class="navbar navbar-expand-xl bg-body-tertiary">
                <div class="container-fluid">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            FilterResults
                        </button>
                        <ul class="dropdown-menu">
                            {tags.map((tag, index) => (<li onClick={(e) => setFilter(e.target.innerText)} className=" text-body-secondary nav-item" key={index}>{tag}</li>))}
                        </ul>
                    </div>
                    <div className="container-fluid w-75 m-0 flex-grow-1">
                        <Form method="post" onSubmit={getRequest} className="d-flex">
                            <input className="form-control me-2" placeholder="Search" id="q" name="q" />
                            <button type="submit" className="btn btn-outline-success">Search</button>
                        </Form>
                    </div>
                </div>
            </nav >
            <section className='container p-2 mt-4 mb-4'>
                <Listing props={filterArray} />
            </section>
        </>
    )
}




export const tagLoader = async () => {
    const res = await fetch('https://dummyjson.com/recipes/tags')
    return res.json()
}