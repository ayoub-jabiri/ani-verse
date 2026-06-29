import { Link, useLocation } from "react-router";

export default function AppHeader() {
    const { pathname } = useLocation();

    const navLinks = [
        {
            id: 1,
            title: "home",
            path: "/",
            isActive: false,
        },
        {
            id: 2,
            title: "anime",
            path: "/anime",
            isActive: false,
        },
        {
            id: 3,
            title: "characters",
            path: "/characters",
            isActive: false,
        },
        {
            id: 4,
            title: "favorites",
            path: "/favorites",
            isActive: false,
        },
        {
            id: 5,
            title: "my library",
            path: "/my-library",
            isActive: false,
        },
        {
            id: 6,
            title: "dashboard",
            path: "/dashboard",
            isActive: false,
        },
    ];

    navLinks.forEach((link) => {
        if (link.path === pathname) {
            link.isActive = true;
        }
    });

    return (
        <header className="bg-(--bg-color) py-4">
            <div className="container flex justify-between items-center gap-5">
                <Link
                    to="/"
                    className="text-3xl text-(--purple-color) font-bold"
                >
                    AniVerse
                </Link>
                <ul className="flex-1 flex gap-3">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                link.isActive
                                    ? "text-(--purple-color) underline"
                                    : "text-(--text-color)"
                            }  capitalize main-transition hover:text-(--purple-color) hover:underline`}
                        >
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
            </div>
        </header>
    );
}
