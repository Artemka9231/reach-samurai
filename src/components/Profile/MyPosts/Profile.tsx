import React from "react";

import s from './Profile.module.css'
import {Post} from "./Posts/Post";


export const Profile = (pap: any) => {
    return (
        <div >
            <div className={s.bcg}>
                <img src="https://99px.ru/sstorage/53/2023/09/tmb_352260_183260.jpg" alt=""/>
            </div>

            <div>
                {pap.message}
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likeCount=' 5'/>
                    <Post message="It's my first post" likeCount=' 23'/>

                </div>
            </div>
        </div>
    )
}
