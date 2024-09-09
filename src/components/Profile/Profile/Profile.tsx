import React from "react";

import s from './Profile.module.css'
import {Post} from "./Posts/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    )
}
