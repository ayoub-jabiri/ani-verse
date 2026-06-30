export default function HeroSection() {
    return (
        <div className="bg-[url(/hero.png)] bg-cover bg-bottom h-[calc(100vh-60px)] relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[#0000008c]">
            <div className="container relative h-full flex flex-col justify-center">
                <h1 className="text-white text-5xl font-bold flex flex-col mb-2">
                    <span className="text-white"> Enter the Multiverse of</span>{" "}
                    <span className="text-(--purple-color)">
                        Anime Mastery.
                    </span>
                </h1>
                <p className="w-[50%] text-(--text-color) mb-4">
                    Discover, track, and experience the most legendary stories
                    in animation. From seasonal hits to timeless classics, your
                    cinematic journey begins here.
                </p>
                <div className="flex gap-5">
                    <button className="btn bg-(--purple-color) block w-[150px] h-[45px] shadow-none">
                        Explore Anime
                    </button>
                    <button className="btn btn-outline border-(--blue-color) text-(--blue-color) block w-[150px] h-[45px] shadow-none hover:bg-transparent">
                        Watch Trailer
                    </button>
                </div>
            </div>
        </div>
    );
}
