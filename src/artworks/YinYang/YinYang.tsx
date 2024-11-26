import { ReactElement } from "react";
import style from "./yinyang.module.scss";

export default function YinYang(): ReactElement {
    return (
        <label className={style.yinYangWrapper}>
            <input type="checkbox" className={"default-hidden-checkbox"} />
            <div className={style.yinYang}>
                <div className={style.yinBackground}>
                    <div className={style.dividerCircle}>
                        <div className={style.yang} />
                    </div>
                    <ul className={style.yangList}>
                        <li>YANG 阳</li>
                        <li>White</li>
                        <li>Positiv</li>
                        <li>Logical</li>
                    </ul>
                </div>
                <div className={style.yangBackground}>
                    <div className={style.dividerCircle}>
                        <div className={style.yin} />
                    </div>
                    <ul className={style.yinList}>
                        <li>YIN 阴</li>
                        <li>Black</li>
                        <li>Negativ</li>
                        <li>Intuitive</li>
                    </ul>
                </div>
            </div>
        </label>
    );
}
