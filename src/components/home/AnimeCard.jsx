import { RiStarFill } from "@remixicon/react";
import { Link } from "react-router";

export default function AnimeCard({ anime, children }) {
    return (
        <Link
            to={`/anime/${anime.mal_id}`}
            className="col-span-6 md:col-span-3 lg:col-span-2"
        >
            <Link
                to={`/anime/${anime.mal_id}`}
                className="relative block w-[168px] bg-(--bg-color) text-(--text-color) border border-[#d0bcff30] rounded-md overflow-hidden"
            >
                <div className="absolute top-[10px] right-[10px] bg-[#0B1326] flex items-center gap-1 text-(--purple-color) px-1 rounded-md">
                    <RiStarFill className="w-[13px]" />
                    <span className="text-[13px]">{anime.score}</span>
                </div>
                <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="w-full h-[250px]"
                />
                <div className="p-4">
                    <h3 className="font-bold" title={anime.title}>
                        {anime.title.length < 15
                            ? anime.title
                            : anime.title.slice(0, 15) + "..."}
                    </h3>
                    {children}
                </div>
            </Link>
        </Link>
    );
}
