import { RiBookmarkFill, RiBookmarkLine } from "@remixicon/react";

export default function SideBar({ anime }) {
    return (
        <aside className="col-span-4">
            <div className="relative w-fit rounded-md overflow-hidden relative before:content-[''] before:inset-0 before:absolute before:w-full before:h-full before:bg-[#00000017]">
                <button
                    className="absolute top-[10px] right-[10px] w-[35px] h-[35px] p-2 bg-[#0B1326] border border-[#d0bcff30] flex justify-center items-center text-(--purple-color) px-1 rounded-[50%] cursor-pointer"
                    title="Add to Favorites"
                >
                    <RiBookmarkLine className="w-[20px]" />
                    {/* <RiBookmarkFill className="" /> */}
                </button>
                <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="h-[350px]"
                />
            </div>
        </aside>
    );
}
