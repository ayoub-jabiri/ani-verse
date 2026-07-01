import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import Loading from "../global/Loading";
import SeasonalAnimeCard from "./SeasonalAnimeCard";

export default function SeasonalSection() {
    const {
        loading,
        animeData: { seasonalAnime },
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
                    title="Seasonal Hits"
                    description="Summer 2026 Collection"
                />
                {loading && <Loading />}

                {seasonalAnime.length && (
                    <div className="grid grid-cols-12 gap-5">
                        {seasonalAnime.map((anime) => (
                            <SeasonalAnimeCard anime={anime} />
                        ))}
                    </div>
                )}
                {error && <div className="text-white">Error</div>}
            </div>
        </section>
    );
}
