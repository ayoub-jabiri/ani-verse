import { RouterProvider } from "react-router";
import router from "./routes/router";
import AppLaout from "./components/layout/AppLayout";

function App() {
    return (
        <>
            <RouterProvider router={router}>
                <AppLaout />
            </RouterProvider>
        </>
    );
}

export default App;
