import { Link } from "react-router";

export default function HeroSection() {
    return (
        <div
            className="bg-[url(/hero.png)] bg-cover bg-bottom h-[calc(100vh-60px)] relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[#0000008c] after:content-[''] after:absolute after:bottom-0 after:z-2 after:w-full after:h-[80%] after:bg-gradient-to-t after:from-[#000000bf] after:to-transparent"
            style={{
                backgroundImage: "url(image.jpg)",
            }}
        >
            <div className="container relative z-3 h-full flex flex-col justify-center max-md:items-center max-md:text-center">
                <h1 className="text-white text-5xl font-bold flex flex-col mb-2">
                    <span className="text-white"> Enter the Multiverse of</span>{" "}
                    <span className="text-(--purple-color)">
                        Anime Mastery.
                    </span>
                </h1>
                <p className="md:w-[50%] text-(--text-color) mb-4">
                    Discover, track, and experience the most legendary stories
                    in animation. From seasonal hits to timeless classics, your
                    cinematic journey begins here.
                </p>
                <div className="flex gap-5">
                    <Link
                        to="/anime"
                        className="btn bg-(--purple-color) block w-[150px] h-[45px] shadow-none flex justify-center items-center"
                    >
                        Explore Anime
                    </Link>
                    <button className="btn btn-outline border-(--blue-color) text-(--blue-color) block w-[150px] h-[45px] shadow-none hover:bg-transparent">
                        Watch Trailer
                    </button>
                </div>
            </div>
        </div>
    );
}
