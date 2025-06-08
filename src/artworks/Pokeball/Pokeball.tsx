import { ReactElement } from "react";
import style from "./pokeball.module.scss";

export default function Pokeball(): ReactElement {
    return (
        <label>
            <div className={style.pokeball}>
                <input type={"checkbox"} className={"default-hidden-checkbox"} />
                <div className={style.gs}>GS</div>
            </div>
        </label>
    );
}
