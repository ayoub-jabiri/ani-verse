import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import { getTopAnimeData } from "../../store/slices/animeSlice";
import Loading from "../global/Loading";
import AnimeCard from "./AnimeCard";

export default function TrendingSection() {
    const {
        loading,
        animeData: { topAnimes },
        error,
    } = useSelector((state) => state.anime);
    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getTopAnimeData());
    }, []);

    // console.log("#####");
    // console.log("loading", loading);
    // console.log(topAnimes);
    // console.log("error", error);
    // console.log("#####");

    return (
        <section>
            <div className="container py-8">
                <SectionTitle
                    title="Trending Now"
                    description="What the Community is Watching"
                />
                {loading && <Loading />}

                {topAnimes.length && (
                    <div className="grid grid-cols-12 gap-5">
                        {topAnimes.map((anime) => (
                            <AnimeCard anime={anime} />
                        ))}
                    </div>
                )}
                {error && <div className="text-white">Error</div>}
            </div>
        </section>
    );
}
