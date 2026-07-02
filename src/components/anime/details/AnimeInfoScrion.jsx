import { RiStarFill } from "@remixicon/react";

export default function AnimeInfoScrion({ anime }) {
    return (
        <section>
            <div className="flex flex-wrap gap-3 mb-2">
                {anime.genres.map((genre) => (
                    <span className="bg-[#2d344966] text-(--blue-color) text-sm border border-[#4cd7f633] px-4 py-1 rounded-lg">
                        {genre.name}
                    </span>
                ))}
            </div>
            <h1 className="text-4xl text-(--text-color) font-bold mb-4">
                {anime.title}
            </h1>
            <div className="flex justify-between items-center p-4 border border-[#d0bcff30] rounded-md mb-4">
                <div>
                    <h2 className="text-(--text-color)">Score</h2>
                    <div className="flex items-center gap-2 text-(--purple-color)">
                        <RiStarFill className="w-[16px]" />
                        <span>{anime.score}</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-(--text-color)">Release</h2>
                    <span className="text-(--text-color) font-bold">
                        {anime.year}
                    </span>
                </div>
                <div>
                    <h2 className="text-(--text-color)">Studio</h2>
                    <span className="text-(--text-color) font-bold">
                        {anime.studios[0].name}
                    </span>
                </div>
                <div>
                    <h2 className="text-(--text-color)">Episodes</h2>
                    <span className="text-(--text-color) font-bold">
                        {anime.episodes}
                    </span>
                </div>
            </div>
            <div className="p-4 border border-[#d0bcff30] rounded-md">
                <h2 className="text-(--purple-color) text-xl mb-2">Synopsis</h2>
                <p className="text-(--text-color)">
                    {anime.synopsis.length < 360
                        ? anime.synopsis
                        : anime.synopsis.slice(0, 357)}
                    {anime.synopsis.length > 360 && (
                        <span className="tooltip" data-tip={anime.synopsis}>
                            ...
                        </span>
                    )}
                </p>
            </div>
        </section>
    );
}
