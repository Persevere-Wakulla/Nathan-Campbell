export default function Profile() {

    const info = [
        {
            title:'HTML, CSS & JS',
            img: './logos/html-css-js.png'
        },
        {
            title: 'JSON',
            img: './logos/json.png',
        },
        {
            title: 'Bootstrap',
            img: './logos/bootstrap.png',
        },
        {
            title: 'React',
            img: './logos/react.png',
        },
        {
            title: 'GitHub',
            img: './logos/github.png',
        },
        {
            title: 'node.js',
            img: './logos/node-js.png',
        },
        {
            title: 'Express.js',
            img: './logos/express.png',
        },
        {
            title: 'mongoDB',
            img: './logos/mongo.png',
        },
    ]


    return (
        <section id='profile' className="text-center">
            <h4 className="title fw-bold">General:</h4>
            <p className="lead mb-4 w-75 m-auto">I'm a multi-faceted individual, with hobbies that include the arts, collecting comic books and manga, and gaming (video as well as table-top). As a professional cook for over 15 years I thrive under pressure and will not sacrifice quality for quantity. A strong team player and self-driven, I "lead from the trenches"; meaning I do my share of the work while providing direction for the team to achieve our common goal.</p>
            <h4 className="title fw-bold">Proficient Languages:</h4>
            <div className="slideShow d-flex align-items-center gap-2 overflow-auto w-100">
                {info.map((set) => (
                        <img src={set.img} key={set.title} alt={set.title} style={{height: 150}} />
                ))}
            </div>
            <div className="d-flex justify-content-evenly mt-4">
                <div>
                    <h4 className="title fw-bold">Experience:</h4>
                    <ul className="list-unstyled">
                        <li className="fs-6 list-item">Teaching Aid</li>
                        <li className="fs-6 list-item">Mentor</li>
                        <li className="fs-6 list-item">Restaurant Manager</li>
                        <li className="fs-6 list-item">Sous Chef</li>
                        <li className="fs-6 list-item">Volleyball Coach</li>
                    </ul>
                </div>
                <div>
                    <h4 className="title fw-bold">Side Quests:</h4>
                    <ul className="list-unstyled">
                        <li className="fs-6 list-item">Blogger</li>
                        <li className="fs-6 list-item">Community Member</li>
                        <li className="fs-6 list-item">Volunteer</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}