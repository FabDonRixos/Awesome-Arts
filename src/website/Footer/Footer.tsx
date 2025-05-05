import { ReactElement } from "react";
import { envVariables } from "../environment-variable.ts";
import style from "./footer.module.scss";

export default function Footer(): ReactElement {
    return <footer className={style.footer}>{envVariables.VERSION}</footer>;
}
