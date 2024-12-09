import { useContext, useEffect, useState } from "react"
import { CartContext, UserContext } from "./RootLayout"
import { Outlet, useLoaderData, useOutletContext } from "react-router-dom"

export default function CartLayout() {

    const user = useContext(UserContext)
    const { newCart, setNewCart } = useContext(CartContext)
    const data = useLoaderData()
    const { setAddToCart } = useOutletContext()


    useEffect(() => {
        const findCart = () => {
            const oldCart = data.carts.find(me => me.userId === user.id)
            if (oldCart) {
                console.dir(oldCart)
                setNewCart([...newCart, ...oldCart.products])
            }
        }
        if (user.firstName) {
            findCart()
            if (newCart.length > 0) {
                setNewCart([...newCart,])
            }
        }
    }, [user])


    return (
        <section className="shopping-cart container-sm rounded mt-5 p-3 d-flex gap-2 justify-content-between position-relative">
            <Outlet context={{ newCart, setNewCart, setAddToCart }} />
        </section>
    )
}

export const cartsLoader = async () => {
    const res = await fetch('https://dummyjson.com/carts?limit=0')
    return res.json()
}