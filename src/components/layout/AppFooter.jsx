import { Link } from "react-router";

export default function AppFooter() {
    const navLinks = [
        {
            id: 1,
            title: "Privacy Policy",
            path: "/",
        },
        {
            id: 2,
            title: "Terms of Service",
            path: "/",
        },
        {
            id: 3,
            title: "API Support",
            path: "/",
        },
        {
            id: 5,
            title: "Community Guidelines",
            path: "/",
        },
    ];

    return (
        <footer className="bg-(--bg-color) py-4">
            <div className="container flex justify-between items-center max-md:flex-col max-md:gap-y-3 max-md:text-center">
                <div>
                    <Link
                        to="/"
                        className="block text-2xl text-(--purple-color) font-bold mb-1"
                    >
                        AniVerse
                    </Link>
                    <p className="text-[#3C475A] text-sm">
                        &copy; {new Date().getFullYear()} AniVerse. Cinematic
                        Discovery Experience.
                    </p>
                </div>
                <ul className="flex max-md:flex-col md:gap-3">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className="text-[#3C475A] text-sm main-transition hover:text-(--purple-color)"
                        >
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
