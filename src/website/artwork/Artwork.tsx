import { CSSProperties, ReactElement, Suspense } from "react";
import style from "./artwork.module.scss";
import { IArtworkItem } from "../../artworks/0_artworks-list/artworksList.tsx";

export default function Artwork({ artwork }: { artwork: IArtworkItem }): ReactElement {
    return (
        <Suspense fallback={<div className={style.component}>Loading...</div>}>
            <div
                className={`${style.component} ${artwork.full ? `${style.full}` : undefined}`}
                style={
                    {
                        "--background-color":
                            artwork.backgroundColor && artwork.backgroundColor.length <= 7
                                ? artwork.backgroundColor
                                : "#000000",
                        "--text-color":
                            artwork.textColor && artwork.textColor.length <= 7 ? artwork.textColor : "#ffffff",
                    } as CSSProperties
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
                    <h1>{artwork.title}</h1>
                    {artwork.editedAt && (
                        <span className={style.component_date}>{artwork.editedAt.toLocaleDateString()}</span>
                    )}
                </div>
            </div>
        </Suspense>
    );
}
