import Header from "./components/header/Header.tsx";
import Template from "./artworks/1_Template/Template.tsx";
import {useState} from "react";
import {EArtworkTags} from "./artworks/0_artworks-list/artworkTags.ts";

function App() {
    const [currentTag, setCurrentTag] = useState<EArtworkTags>();
    const [search, setSearch] = useState("");

    console.log(currentTag, search)

  return (
    <>
      <Header
          setCurrentTag={setCurrentTag}
          setSearch={setSearch}
          currentTag={currentTag}
          search={search}
      />
        <div className={"container"}>
            <Template />
        </div>
    </>
  )
}

export default App
