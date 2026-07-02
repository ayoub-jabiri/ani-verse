import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/anime/details/SideBar";
import { useEffect } from "react";
import { getAnimeDetails } from "../store/slices/animeSlice";
import { useParams } from "react-router";
import Loading from "../components/global/Loading";
import AnimeInfoScrion from "../components/anime/details/AnimeInfoScrion";

export default function AnimeDetailsPage() {
    const { id } = useParams();
    const { loading, anime, error } = useSelector(
        (state) => state.anime.animeDetails
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnimeDetails(id));
    }, []);

    console.log(loading);
    console.log(anime);
    console.log(error);

    return (
        <div className="container py-8">
            {loading && <Loading />}
            {anime && (
                <div className="grid grid-cols-12 gap-5">
                    <SideBar anime={anime} />
                    <div className="col-span-8">
                        <AnimeInfoScrion anime={anime} />
                    </div>
                </div>
            )}
        </div>
    );
}
