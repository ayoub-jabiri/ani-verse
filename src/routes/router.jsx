import { createBrowserRouter } from "react-router";
import AppLaout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import AnimePage from "../pages/AnimePage";

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
]);

export default router;
