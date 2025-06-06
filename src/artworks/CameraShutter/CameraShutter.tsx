import { ReactElement } from "react";
import style from "./camera-shutter.module.scss";

export default function CameraShutter(): ReactElement {
    return (
        <label>
            <div className={style.lensWrapper}>
                <input type={"checkbox"} className={"default-hidden-checkbox"} />
                <div className={style.lens}></div>
                <div className={style.cameraShutterWrapper}>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                    <div className={style.cameraShutter}></div>
                </div>
            </div>
        </label>
    );
}
