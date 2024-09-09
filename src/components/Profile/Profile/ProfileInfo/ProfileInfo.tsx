import React from "react";

import s from './ProfileInfo.module.css'


export const ProfileInfo = (props:any) => {
    return (
        <div >

            <div className={s.bcg}>
                <img src="https://99px.ru/sstorage/53/2023/09/tmb_352260_183260.jpg" alt=""/>
            </div>

            <div className={s.discriptionBlock}>
            ava + description
            </div>

        </div>
    )
}
