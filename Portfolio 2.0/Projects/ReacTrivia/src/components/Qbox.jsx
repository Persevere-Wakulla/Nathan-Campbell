export default function Qbox({ q, pick }) {
    return (
        <section className="qBox">
            <h1 className="title">{q.q}</h1>
            <div className="answers">
                {q.options.map((btn, index) => (
                    <button className="answer" key={index} onClick={pick}>{btn}</button>
                ))}
            </div>
        </section>
    )
}