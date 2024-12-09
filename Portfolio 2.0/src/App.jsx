import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
// layouts
import RootLayout from './layouts/RootLayout'
import ProfileLayout from './layouts/ProfileLayout'
import ProjectsLayout, { projectsLoader } from './layouts/ProjectsLayout'
// pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import Preview from './pages/Preview'
// css
import './portfolio.css'

// router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />

            <Route path='profile' element={<ProfileLayout />}>
                <Route index element={<Profile />} />
            </Route>

            <Route path='projects' element={<ProjectsLayout />}
                loader={projectsLoader}>
                <Route index element={<Preview />} />
            </Route>
        </Route>
    ))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}