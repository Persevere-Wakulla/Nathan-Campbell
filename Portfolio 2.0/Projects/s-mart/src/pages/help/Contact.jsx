import { Form } from "react-router-dom"

export default function Contact() {

    const addPost = (e) =>{
        e.preventDefault()
    }

    return (
        <article className="contact-page">
            <Form action='/contact' onSubmit={addPost} className="mt-5 mb-3 container-md p-3">
                <div className="input-group mb-3">
                    <input type="text" className="form-control text-end" placeholder="Email" aria-label="Username" />
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="example.com" aria-label="Server" />
                </div>

                <div className="input-group">
                    <span className="input-group-text">Your comment</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type='button' className="btn blue-btn d-block m-auto mt-4">Submit</button>
            </Form>
        </article>
    )
}
