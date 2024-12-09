import { Outlet } from 'react-router-dom'

export default function ProfileLayout(){
    return (
        <section className='profile-layout p-2'>
                <h3 className="sub-head fw-bold under-line mb-3">Personal Profile</h3>
            <section className='content'>
                <Outlet />
            </section>
        </section>
    )
}