import { IArtworkItem } from "../../artworks/0_artworks-list/artworksList.tsx";
import { CSSProperties } from "react";
import style from "./artwork.module.scss";

interface ArtWrapperProps {
    artwork: IArtworkItem;
}

export default function Artwork({ artwork }: ArtWrapperProps) {
    return (
        <div
            className={`${style.component} ${artwork.full ? `${style.full}` : undefined}`}
            style={
                artwork.backgroundColor && artwork.backgroundColor.length <= 7
                    ? ({ "--background-color": artwork.backgroundColor } as CSSProperties)
                    : ({ "--background-color": "#000000" } as CSSProperties)
            }
        >
            <div className={style.content}>{artwork.component}</div>
            <div className={style.contribution}>
                <div className={style.component_creator}>
                    <a href={`https://github.com/${artwork.gitHubName}/`} target={"_blank"}>
                        <span>© {artwork.gitHubName}</span>
                    </a>

                    {artwork.oneLink && (
                        <a href={artwork.oneLink.href} target={"_blank"}>
                            {artwork.oneLink.name}
                        </a>
                    )}
                </div>
                <h1>{artwork.titel}</h1>
                {artwork.editedAt && <span>{artwork.editedAt.toLocaleDateString()}</span>}
            </div>
        </div>
    );
}
