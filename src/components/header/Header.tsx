import style from "./header.module.scss";

export default function Header() {

    return (
        <header className={style.header}>
            <div className={style.left}>
                <div className={style.logo}>
                    
                </div>
            </div>
            <div className={style.right}>
                <div className={style.search}>

                </div>
                <div className={style.filters}>

                </div>
                <div className={style.links}>
                    <a href="https://github.com/FabDonRixos/awesome-arts">Github</a>
                </div>
            </div>
        </header>
    );
}