import { IconLogo, IconFabian, IconGithub, IconLinkedin } from "../../assets/iconLibrary.ts";
import { EArtworkTags } from "../../artworks/0_artworks-list/artworkTags.ts";
import style from "./header.module.scss";

interface InputsProps {
    setCurrentTag: (currentTag: EArtworkTags) => void;
    setSearch: (search: string) => void;
    currentTag?: EArtworkTags;
    search: string;
}

export default function Header(props: InputsProps) {
    return (
        <header className={style.header}>
            <div className={style.top}>
                <div className={style.left}>
                    <IconLogo className={style.logo} />
                    <h1>Awesome Arts</h1>
                </div>
                <div className={style.right}>
                    <Inputs {...props} />
                    <div className={style.links}>
                        <a href="https://github.com/FabDonRixos/awesome-arts" target={"_blank"}>
                            <IconGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/fabian-mathys-42a595332/" target={"_blank"}>
                            <IconLinkedin />
                        </a>
                        <a href="https://fabian.li" target={"_blank"}>
                            <IconFabian />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <Inputs {...props} />
            </div>
        </header>
    );
}

function Inputs({ setCurrentTag, setSearch, currentTag, search }: InputsProps) {
    return (
        <>
            <input
                className={style.search}
                type="text"
                placeholder={"Search"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                className={style.filters}
                name={"tagSelection"}
                defaultValue={""}
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value as EArtworkTags)}
            >
                <option value={""}>Select a Tag</option>
                {Object.entries(EArtworkTags).map(([key, value]) => (
                    <option key={key} label={key} value={value} />
                ))}
            </select>
        </>
    );
}
