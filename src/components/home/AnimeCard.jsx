import { Link } from "react-router";

export default function AnimeCard({ anime }) {
    return (
        <Link
            key={anime.mal_id}
            to={`/anime/${anime.mal_id}`}
            className="col-span-12 md:col-span-6 lg:col-span-3 bg-(--bg-color) text-(--text-color) border border-[#d0bcff30] rounded-md overflow-hidden"
        >
            <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-[300px]"
            />
            <div className="p-4">
                <h3 className="font-bold" title={anime.title}>
                    {anime.title.length < 20
                        ? anime.title
                        : anime.title.slice(0, 20) + "..."}
                </h3>
                <p className="text-sm">Duration: {anime.duration}</p>
            </div>
        </Link>
    );
}
