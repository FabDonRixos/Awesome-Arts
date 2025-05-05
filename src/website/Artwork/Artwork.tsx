import { CSSProperties, ReactElement, Suspense, useEffect, useState } from "react";
import classNames from "classnames";
import style from "./artwork.module.scss";
import { IArtworkItem } from "../../artworks/0_ArtworksList/ArtworksList.tsx";

export default function Artwork({ artwork }: { artwork: IArtworkItem }): ReactElement {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        let timeout: number;
        if (!open) {
            timeout = setTimeout(() => {
                setOpen(true);
            }, 1000 * 30);
        }

        return (): void => {
            clearTimeout(timeout);
        };
    }, [open]);

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
                <div className={classNames(style.contribution, !open && style.closed)}>
                    <div className={style.contributionHiding} onClick={() => setOpen(!open)} />
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
                    {artwork.createdAt && (
                        <span className={style.component_date}>{artwork.createdAt.toLocaleDateString()}</span>
                    )}
                </div>
            </div>
        </Suspense>
    );
}
