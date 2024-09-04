import React from "react";
import s from './Navbar.module.css'



export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='../Profile/MyPosts/Profile.tsx'>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href='../Dialogs/Dialogs.tsx'>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Setting</a>
            </div>
        </nav>
    )
}
