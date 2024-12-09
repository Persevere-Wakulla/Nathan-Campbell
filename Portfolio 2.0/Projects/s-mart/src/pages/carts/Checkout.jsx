import { useState } from "react"
import ShellGame from '../../components/ShellGame'

export default function Checkout() {

    const [game, setGame] = useState(true)
    const [paid, setPaid] = useState(false)

    function payment(e) {
        e.preventDefault()
        setPaid(true)
    }

    return (
        <>
            {game ? <ShellGame func={setGame} />
                : paid ? <h1> Thank you for Purchase! An email has been sent with tracking information.</h1>
                    :
                    <form type='submit' onSubmit={payment} className="row g-3">
                        <h3>Billing Information</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <input type="text" className="form-control" id="inputState" maxLength={2} />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <h3>Payment Information</h3>
                        <div className="col-12">
                            <label htmlFor="inputCardNumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="inputCardNumber" placeholder="Apartment, studio, or floor" />
                        </div>
                        <h5>Expiration</h5>
                        <div className="col-md-2">
                            <label htmlFor="inputMth" className="form-label">Month</label>
                            <input type="number" className="form-control" id="inputMth" min={1} max={12} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputYr" className="form-label">Year</label>
                            <input type="number" className="form-control" id="inputYr" min={25} max={30} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputCvv" className="form-label">CVV</label>
                            <input type="number" className="form-control" id="inputCvv" minLength={3} maxLength={3} />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agree to Terms and Conditions
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn blue-btn fs-3">CheckOut</button>
                        </div>
                    </form>
            }
        </>
    )
}