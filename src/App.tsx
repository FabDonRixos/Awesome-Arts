import Header from "./components/header/Header.tsx";
import {CSSProperties, useState} from "react";
import {EArtworkTags} from "./artworks/0_artworks-list/artworkTags.ts";
import artworksList from "./artworks/0_artworks-list/artworksList.tsx";

function App() {
    const [currentTag, setCurrentTag] = useState<EArtworkTags>();
    const [search, setSearch] = useState("");

    const filteredArtworks = artworksList
        .filter(artwork => currentTag ? artwork.tags?.includes(currentTag) : true)
        .filter(artwork => search
            ? (
                artwork.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase())) ||
                artwork.titel.toLowerCase().includes(search.toLowerCase()) ||
                artwork.description.toLowerCase().includes(search.toLowerCase()) ||
                artwork.gitHubName.toLowerCase().includes(search.toLowerCase()) ||
                artwork.editedAt?.toLocaleDateString().toLowerCase().includes(search.toLowerCase())
            )
            : true
        );

    return (
        <>
            <Header
                setCurrentTag={setCurrentTag}
                setSearch={setSearch}
                currentTag={currentTag}
                search={search}
            />
            <div className={"container"}>
                <div className={"component-list"}>
                    {filteredArtworks.length > 0 ?
                        filteredArtworks.map(artwork => {
                            artwork.backgroundColor = artwork.backgroundColor ?? "#000"

                            return (
                                <div
                                    key={artworksList.indexOf(artwork)}
                                    className={"component"}
                                    style={
                                        artwork.backgroundColor.length <= 7
                                            ? {"--background-color": artwork.backgroundColor} as CSSProperties
                                            : {}
                                    }
                                >
                                    {artwork.component}
                                </div>
                            )
                        }) : (
                            <div className={"no-components-found"}>
                                <span>No Components where found corresponding to the current filter settings.</span>
                                <button onClick={() => {
                                    setCurrentTag(undefined);
                                    setSearch("");
                                }}>
                                    Reset Filters
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default App
