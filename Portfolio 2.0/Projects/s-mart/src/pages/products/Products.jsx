import { useLoaderData, useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react"
import Card from '../../components/Card'

export default function Products() {

    const data = useLoaderData()
    const {filter, setAddToCart} = useOutletContext()
    const [display, setDisplay] = useState([])
    const [title, setTitle] = useState('')

    const dailyDeal = () => {
        const today = new Date().getDate()
        const deals = data.products.filter(it => {
            if (it.id % today === 0 && it.price < 100) {
                return it
            }
        })
        return deals
    }

    useEffect(() => {
        if (filter !== '') {
            setDisplay(data.products.filter(it => it.category === filter.slug))
            setTitle(filter.name)
        } else {
            setDisplay(dailyDeal())
            setTitle("Today's Deals")
        }
    }, [filter])

    return (
        <div className="product-page">
            <h1 className="display-2 fw-semibold under-line text-center mb-4 mt-2">{title}</h1>
            <div className="vh-100 d-flex flex-wrap gap-2 justify-content-center overflow-y-scroll">
                {display.map(prod => (
                    <Card key={prod.id} item={prod} cartFunc={setAddToCart}/>
                ))}
            </div>
        </div>
    )
}

export const productsLoader = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=0')
    return res.json()
}