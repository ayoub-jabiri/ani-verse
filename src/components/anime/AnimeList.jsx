import { useSelector } from "react-redux";
import Loading from "../global/Loading";
import AnimeCard from "../home/AnimeCard";

export default function AnimeList() {
    const { loading, animes, error } = useSelector(
        (state) => state.anime.animeList
    );

    console.log(error);

    return (
        <section>
            {loading && <Loading />}

            {animes && (
                <>
                    <h1 className="text-(--text-color) flex items-center gap-2 mb-4">
                        <span className="text-xl">Discovery Results</span>{" "}
                        <span className="text-sm">
                            ({animes ? animes.pagination.items.count : "0"}{" "}
                            items)
                        </span>
                    </h1>
                    <div className="grid grid-cols-12 gap-5">
                        {animes.data.map((anime) => (
                            <AnimeCard anime={anime} key={anime.mal_id}>
                                <p className="text-sm mt-2">
                                    {anime.type ? anime.type : "-"} |{" "}
                                    {anime.episodes
                                        ? anime.episodes
                                        : "Unknown"}{" "}
                                    Eps | {anime.year ? anime.year : "Unknown"}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {anime.genres.map((genre) => (
                                        <span className="bg-[#ffffff1a] text-[11px] border border-[#fff3] p-1 rounded-md">
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </AnimeCard>
                        ))}
                    </div>
                </>
            )}
            {error && <div className="text-white">Error</div>}
        </section>
    );
}
