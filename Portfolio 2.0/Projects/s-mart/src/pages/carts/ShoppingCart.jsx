import { useNavigate, useOutletContext } from "react-router"
import CartItem from '../../components/CartItem'
import { useContext, useEffect } from "react"
import { UserContext } from "../../layouts/RootLayout"
import { Link } from "react-router-dom"

export default function ShoppingCart() {

    const user = useContext(UserContext)
    const navigate = useNavigate()
    const { newCart, setNewCart } = useOutletContext()
    const { setAddToCart } = useOutletContext()

    const removeItem = (number) => {
        setAddToCart(add => add - 1)
        setNewCart(newCart.filter((_, index) => index !== number))
    }

    const checkout = () => {
        if (user.firstName) {
            navigate('/shopping-cart/checkout')
        } else {
            navigate('/new-account')
        }
    }

    const addQty = (item) => {
        const qtyInput = document.getElementById(`qty-${item.id}`)
        setAddToCart(add => add + 1)
        if (!Object.hasOwn(item, 'quantity')) {
            item.quantity = parseInt(qtyInput.value)
        } else {
            item.quantity += parseInt(qtyInput.value)
        }
    }

    const total = () => {
        const number = newCart.map(it => {
            if (Object.hasOwn(it, 'quantity')) {
                return it.price * it.quantity
            } else {
                return it.price
            }
        }).reduce((total, current) =>
            total + current
            , 0)
        return number.toFixed(2)
    }

    return (
        <>
            {newCart.length > 0 ? (
                <>
                    <div className="w-50">
                        {newCart.map((it, index) => (
                            <CartItem key={index} item={it} index={index} del={removeItem} add={addQty} />
                        ))}
                    </div>
                    <div className="total-container text-center">
                        <h1>Your Total:
                            <br />$ {total()}
                        </h1>
                        <button className="btn blue-btn fs-4 p-2 mt-3" onClick={checkout}>CheckOut</button>
                    </div>
                </>
            ) : (
                <div className="text-center m-auto">
                    <h1 className=" p-3">No items in Cart</h1>
                    <p className='fs-5'>continue <Link to='/products'>Shopping</Link></p>
                </div>
            )
            }
        </>
    )
}
