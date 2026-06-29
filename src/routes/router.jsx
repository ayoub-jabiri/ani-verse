import { createBrowserRouter } from "react-router";
import AppLaout from "../components/layout/AppLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLaout>
                <h1>This is the home page</h1>
            </AppLaout>
        ),
    },
]);

export default router;
