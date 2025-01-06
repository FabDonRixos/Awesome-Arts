import { ReactElement } from "react";
import classNames from "classnames";
import style from "./colorModel.module.scss";

export default function ColorModel(): ReactElement {
    return (
        <label className={style.colorModel}>
            <input type={"checkbox"} className={"default-hidden-checkbox"} />
            <div className={classNames(style.circle, style.redCircle)} />
            <div className={classNames(style.circle, style.greenCircle)} />
            <div className={classNames(style.circle, style.blueCircle)} />
        </label>
    );
}
