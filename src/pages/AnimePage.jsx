import AnimeList from "../components/anime/AnimeList";
import FilterSection from "../components/anime/FilterSection";

export default function AnimePage() {
    return (
        <div className="py-8">
            <div className="container">
                <FilterSection />
                <AnimeList />
            </div>
        </div>
    );
}
