import style from "./AnalogClock.module.scss";

export default function AnalogClock() {
  return (
    <div className={style.clock}>
      <div className={style.center}></div>
      <div className={style.hour}></div>
      <div className={style.minute}></div>
      <div className={style.second}></div>
      <div className={style.three}></div>
      <div className={style.nine}></div>
    </div>
  );
}
