import {IconLogo, IconFabian, IconGithub, IconLinkedin} from "../../assets/iconLibrary.ts";
import style from "./header.module.scss";

export default function Header() {

    return (
        <header className={style.header}>
            <div className={style.left}>
                <IconLogo className={style.logo}/>
                <h1>Awesome Arts</h1>
            </div>
            <div className={style.right}>
                <div className={style.search}>

                </div>
                <div className={style.filters}>

                </div>
                <div className={style.links}>
                    <a href="https://github.com/FabDonRixos/awesome-arts" target={"_blank"}>
                        <IconGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/fabian-mathys-42a595332/" target={"_blank"}>
                        <IconLinkedin/>
                    </a>
                    <a href="https://fabian.li" target={"_blank"}>
                        <IconFabian/>
                    </a>
                </div>
            </div>
        </header>
    );
}