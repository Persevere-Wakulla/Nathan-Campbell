import Card from "../../components/Card";

export default function Listing({ props }) {

    return (
        <>
        <div className="container-fluid d-flex flex-wrap justify-content-center gap-2">
            {props.map(r => (
                    <Card item={r}/>
            ))}
        </div>
        </>
    )
}