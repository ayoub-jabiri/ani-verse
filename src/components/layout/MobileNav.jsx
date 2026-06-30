import { RiCloseLine } from "@remixicon/react";
import { Link } from "react-router";

export default function MobileNav({ navLinks, setShowMobileNav }) {
    return (
        <nav className="fixed inset-0 z-10 w-screen h-screen bg-black py-4">
            <div className="container">
                <div className="flex justify-between">
                    <Link
                        to="/"
                        className="text-3xl text-(--purple-color) font-bold"
                    >
                        AniVerse
                    </Link>
                    <button
                        className="text-(--text-color) cursor-pointer"
                        onClick={() => setShowMobileNav(false)}
                    >
                        <RiCloseLine />
                    </button>
                </div>
                <div>
                    <ul className="flex flex-col gap-3 my-6">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    link.isActive
                                        ? "bg-(--text-color) text-black"
                                        : "text-(--text-color)"
                                }  capitalize main-transition hover:bg-(--text-color) hover:text-black`}
                            >
                                <Link
                                    to={link.path}
                                    className="block px-4 py-2"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
