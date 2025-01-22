import { ReactElement, useMemo, useState } from "react";
import Header from "./website/header/Header.tsx";
import Artwork from "./website/artwork/Artwork.tsx";
import { EArtworkTags } from "./artworks/0_artworks-list/artworkTags.ts";
import artworksList, { IArtworkItem } from "./artworks/0_artworks-list/artworksList.tsx";

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
    const [currentlyLoadedArtworks, setCurrentlyLoadedArtworks] = useState(12);
    const [search, setSearch] = useState("");

    const shuffledArtworks = useMemo(() => {
        return shuffle(artworksList);
    }, []);

    const filteredArtworks = shuffledArtworks
        .filter((artwork) => (currentTag ? artwork.tags?.includes(currentTag) : true))
        .filter((artwork) =>
            search
                ? artwork.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())) ||
                  artwork.titel.toLowerCase().includes(search.toLowerCase()) ||
                  artwork.description.toLowerCase().includes(search.toLowerCase()) ||
                  artwork.gitHubName.toLowerCase().includes(search.toLowerCase()) ||
                  artwork.editedAt?.toLocaleDateString().toLowerCase().includes(search.toLowerCase())
                : true,
        );

    const loadMoreArtworks = (): void => {
        setCurrentlyLoadedArtworks(currentlyLoadedArtworks + 6);
    };

    return (
        <>
            <Header setCurrentTag={setCurrentTag} setSearch={setSearch} currentTag={currentTag} search={search} />
            <div className={"container"}>
                <div className={"component-list"}>
                    {filteredArtworks.length > 0 ? (
                        filteredArtworks
                            .slice(0, currentlyLoadedArtworks)
                            .map((artwork) => <Artwork key={shuffledArtworks.indexOf(artwork)} artwork={artwork} />)
                    ) : (
                        <div className={"no-components-found"}>
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
                    <div className={"load-more"}>
                        <button onClick={loadMoreArtworks}>Load More</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
