import { RiFilter3Line } from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAnimeList,
    setGenre,
    setSearch,
} from "../../store/slices/animeSlice";

export default function FilterSection() {
    const genres = [
        {
            id: 1,
            title: "action",
        },
        {
            id: 2,
            title: "adventure",
        },
        {
            id: 3,
            title: "comedy",
        },
        {
            id: 4,
            title: "drama",
        },
        {
            id: 5,
            title: "fantasy",
        },
        {
            id: 6,
            title: "horror",
        },
        {
            id: 7,
            title: "sci-fi",
        },
    ];

    const { search, genre } = useSelector((state) => state.anime.animeList);

    const dispatch = useDispatch();
    function handleChange(e) {
        switch (e.target.name) {
            case "search":
                dispatch(setSearch(e.target.value));
                break;
            case "genre":
                dispatch(setGenre(e.target.value));
                break;
            default:
                throw new Error("Unknown filter");
        }
    }

    function fetchAnimeList() {
        dispatch(getAnimeList({ search, genre }));
    }

    return (
        <section className="text-(--text-color) flex items-end gap-3 mb-6">
            <div>
                <h2 className="mb-1">Search</h2>
                <label className="input bg-[#222A3D]">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        placeholder="Anime name..."
                        className="w-[200px] text-(--text-color) placeholder:text-(--text-color)"
                        name="search"
                        value={search}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <h2 className="mb-1">Genre</h2>
                <select
                    className="select bg-[#222A3D] w-[200px]"
                    name="genre"
                    value={genre}
                    onChange={handleChange}
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option value={genre.title} key={genre.id}>
                            {genre.title}
                        </option>
                    ))}
                </select>
            </div>
            <button
                className="btn bg-(--purple-color) w-[150px] shadow-none flex justify-center items-center"
                onClick={fetchAnimeList}
            >
                <RiFilter3Line />
                <span>Apply</span>
            </button>
        </section>
    );
}
