import { ReactElement, useMemo, useState } from "react";
import { EArtworkTags } from "./artworks/0_ArtworksList/artworkTags.ts";
import artworksList, { IArtworkItem } from "./artworks/0_ArtworksList/ArtworksList.tsx";
import Header from "./website/Header/Header.tsx";
import Footer from "./website/Footer/Footer.tsx";
import Artwork from "./website/Artwork/Artwork.tsx";
import style from "./container.module.scss";

const shuffle = (array: IArtworkItem[]): IArtworkItem[] => {
    const newArray = [...array];
    let currentIndex = newArray.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
};

function App(): ReactElement {
    const [currentTag, setCurrentTag] = useState<EArtworkTags>();
    const [currentlyLoadedArtworks, setCurrentlyLoadedArtworks] = useState(9);
    const [search, setSearch] = useState("");

    const shuffledArtworks = useMemo(() => {
        return shuffle(artworksList);
    }, []);

    const filteredArtworks = shuffledArtworks
        .filter((artwork) => (currentTag ? artwork.tags?.includes(currentTag) : true))
        /*
        Only display your Artwork your currently working on.
        .filter((artwork) => artwork.title === "Template")
        */
        .filter((artwork) =>
            search
                ? artwork.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())) ||
                  artwork.title.toLowerCase().includes(search.toLowerCase()) ||
                  artwork.description.toLowerCase().includes(search.toLowerCase()) ||
                  artwork.gitHubName.toLowerCase().includes(search.toLowerCase()) ||
                  artwork.createdAt?.toLocaleDateString().toLowerCase().includes(search.toLowerCase())
                : true,
        );

    const loadMoreArtworks = (): void => {
        setCurrentlyLoadedArtworks(currentlyLoadedArtworks + 6);
    };

    return (
        <>
            <Header setCurrentTag={setCurrentTag} setSearch={setSearch} currentTag={currentTag} search={search} />
            <div className={style.container}>
                <div className={style.componentList}>
                    {filteredArtworks.length > 0 ? (
                        filteredArtworks
                            .slice(0, currentlyLoadedArtworks)
                            .map((artwork) => <Artwork key={shuffledArtworks.indexOf(artwork)} artwork={artwork} />)
                    ) : (
                        <div className={style.noComponentsFound}>
                            <span>No Components where found corresponding to the current filter settings.</span>
                            <button
                                onClick={() => {
                                    setCurrentTag(undefined);
                                    setSearch("");
                                }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
                {filteredArtworks.length > 0 && filteredArtworks.length > currentlyLoadedArtworks && (
                    <div className={style.loadMore}>
                        <button onClick={loadMoreArtworks}>Load More</button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default App;
