import { ReactElement } from "react";
import style from "./cube.module.scss";

export default function Cube(): ReactElement {
    return (
        <label className={style.cubeLabel}>
            <input type={"checkbox"} className={"default-hidden-checkbox"} />
            <div className={style.cubeWrapper}>
                <div className={style.site} />
                <div className={style.site} />
                <div className={style.site} />
                <div className={style.site} />
                <div className={style.site} />
                <div className={style.site} />

                <div className={style.shadow} />
            </div>
        </label>
    );
}
