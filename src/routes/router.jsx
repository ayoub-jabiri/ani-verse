import { createBrowserRouter } from "react-router";
import AppLaout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLaout>
                <HomePage />
            </AppLaout>
        ),
    },
]);

export default router;
