import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export default function AppLaout({ children }) {
    return (
        <>
            <AppHeader />
            <main className="min-h-[calc(100vh-60px)]">{children}</main>
            <AppFooter />
        </>
    );
}
