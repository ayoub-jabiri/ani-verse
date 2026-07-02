import { createBrowserRouter } from "react-router";
import AppLaout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import AnimePage from "../pages/AnimePage";
import AnimeDetailsPage from "../pages/AnimeDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLaout>
                <HomePage />
            </AppLaout>
        ),
    },
    {
        path: "/anime",
        element: (
            <AppLaout>
                <AnimePage />
            </AppLaout>
        ),
    },
    {
        path: "/anime/:id",
        element: (
            <AppLaout>
                <AnimeDetailsPage />
            </AppLaout>
        ),
    },
]);

export default router;
