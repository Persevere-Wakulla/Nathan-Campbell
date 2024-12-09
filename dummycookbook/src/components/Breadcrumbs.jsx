import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''

    const check = (e) => {
        console.log(e.target.innerText);
    }

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div className="hover crumb" key={crumb} onClick={check}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })


    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}