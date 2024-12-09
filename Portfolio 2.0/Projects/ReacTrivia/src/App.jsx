import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
}
    from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Intro from './pages/Intro'

import GameLayout, { questionsLoader } from './layouts/GameLayout'
import Game from './pages/Game'
import Commercial from './pages/Commercial'
import Finale, { finaleLoader } from './pages/Finale'
import Results from './pages/Results'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Intro />} />

            <Route path='/game' element={<GameLayout />} loader={questionsLoader} >
                <Route index element={<Game />} />
                <Route path='/game/commercial' element={<Commercial />} />
                <Route path='/game/finale' element={<Finale />} loader={finaleLoader} />
                <Route path='/game/results' element={<Results />} />
            </Route>

        </Route>
    )
)

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}