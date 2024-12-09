import { Form, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../layouts/RootLayout"

export default function NewAccount() {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const createAccount = (e) => {
        e.preventDefault()
        let person = {}
        person.firstName = firstName.value
        person.lastName = lastName.value
        person.email = inputEmail.value
        person.password = inputPassword.value
        person.address = {
            address: `${inputAddress1.value} ${inputAddress2.value}`,
            city: inputCity.value,
            postalCode: inputZip.value,
            state: inputState.value
        }
        setUser(person)
        navigate('/')
    }

    return (
        <section className='new-account container-md rounded p-3 mt-5'>
            <Form onSubmit={createAccount} className="row g-3">
                <div className="row g-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='firstName' required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id='lastName' required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id='inputState' required />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" htmlFor="gridCheck">
                            I agree to Terms of Service
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn blue-btn">Create Account</button>
                </div>
            </Form>
        </section>
    )
}