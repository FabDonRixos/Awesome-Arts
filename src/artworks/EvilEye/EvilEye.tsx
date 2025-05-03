import { ReactElement } from "react";
import style from "./evileye.module.scss";

export default function EvilEye(): ReactElement {
    return (
        <label className={style.evilEyeWrapper}>
            <div className={style.navy}>
                <div className={style.highlight} />
                <div className={style.navyShape} />
            </div>
            <div className={style.white}>
                <div className={style.whiteShape} />
            </div>
            <div className={style.blue}>
                <div className={style.blueShape} />
            </div>
            <div className={style.black}>
                <div className={style.blackShape} />
            </div>
        </label>
    );
}
