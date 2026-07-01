import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";
import { getAnimeData } from "../../store/slices/animeSlice";

export default function TrendingSection() {
    const { animeData } = useSelector((state) => state.anime);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnimeData());
    }, []);

    console.log(animeData);

    return (
        <section>
            <div className="container py-8">
                <SectionTitle
                    title="Trending Now"
                    description="What the Community is Watching"
                />
                <h1>Trending section</h1>
            </div>
        </section>
    );
}
