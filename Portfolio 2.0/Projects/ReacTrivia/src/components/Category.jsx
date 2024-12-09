export default function Category({ options, pick }) {

    return (
        <section className="categories">{options.map(opt => (
            <div className="cat-btn" key={opt.id} id={opt.id} onClick={() => pick(opt)}>{opt.category}</div>
        ))}</section>
    )
}