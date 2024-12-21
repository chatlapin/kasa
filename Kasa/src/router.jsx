import {
    createBrowserRouter
} from "react-router-dom";

//import Page404 from './pages/404.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Logement from './pages/Logement';
import NotFound from './composants/NotFound/notfound.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/logement/:id",
                element: <Logement />,
            }, {
                path: "*",
                //element: <Page404 />
                element: <NotFound />
            }

        ]
    }
]);

export default router;