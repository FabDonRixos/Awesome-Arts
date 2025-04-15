import { ReactElement } from "react";
import style from "./atom_model.module.scss";

export default function AtomModel(): ReactElement {
    return (
        <>
            <div className={style.atom}>
                <div className={style.core}>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.proton}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                    <div className={style.neutron}></div>
                </div>
                <div className={style.ring1}>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                </div>
                <div className={style.ring2}>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                </div>
                <div className={style.ring3}>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                    <div className={style.elektron}></div>
                </div>
            </div>
            <div className={style.legend}>
                <ul>
                    <li>
                        <div className={style.legendProton} />
                        <span>14 Protons</span>
                    </li>
                    <li>
                        <div className={style.legendNeutron} />
                        <span>14 Neutrons</span>
                    </li>
                    <li>
                        <div className={style.legendElektron} />
                        <span>14 Elektrons</span>
                    </li>
                </ul>
            </div>
        </>
    );
}
