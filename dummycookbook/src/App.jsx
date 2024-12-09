import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'
import RecipesLayout from './layouts/RecipesLayout'
import SearchLayout, { tagLoader } from './layouts/SearchLayout'
// root pages
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Contact from './pages/Contact'
// recipe pages
import AllRecipes, { recipesLoader } from './pages/Recipe/AllRecipes'
import Details, { detailsLoader } from './pages/Recipe/Details'
import RecipeError from './pages/Recipe/RecipeError'
import Listing from './pages/Searching/Listing'

// stylesheet
import './cookbook.css'


// router creation
const recipeRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>

            <Route index element={<Home />} />

            <Route path='about' element={<About />} />

            <Route path='contact' element={<Contact />} />

            <Route path='recipes'
                element={<RecipesLayout />}
                errorElement={<RecipeError />} 
                >
                <Route index
                    element={<AllRecipes />}
                    loader={recipesLoader} />
                <Route path=':id'
                    element={<Details />}
                    loader={detailsLoader} />
                <Route path='search'
                    element={<SearchLayout />}
                    loader={tagLoader}>
                </Route>
            </Route>

            <Route path='*' element={<Error />} />

        </Route>
    )
)

// App handles routing
export default function App() {
    return (
        <RouterProvider router={recipeRouter} />
    )
}