import { RiMenuLine } from "@remixicon/react";
import { Link, useLocation } from "react-router";
import MobileNav from "./MobileNav";
import { useState } from "react";

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

    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <header className="bg-(--bg-color) py-4 border-b border-[#ffffff0d]">
            <div className="container flex justify-between items-center gap-5">
                <Link
                    to="/"
                    className="text-3xl text-(--purple-color) font-bold"
                >
                    AniVerse
                </Link>
                <ul className="flex-1 max-md:hidden md:flex md:justify-end gap-3">
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
                <div className="md:hidden flex-1 flex justify-end">
                    <button
                        className="text-(--text-color) cursor-pointer"
                        onClick={() => setShowMobileNav(true)}
                    >
                        <RiMenuLine />
                    </button>
                </div>
                {showMobileNav && (
                    <MobileNav
                        navLinks={navLinks}
                        setShowMobileNav={setShowMobileNav}
                    />
                )}
            </div>
        </header>
    );
}
