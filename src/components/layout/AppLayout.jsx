import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export default function AppLaout({ children }) {
    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </>
    );
}
