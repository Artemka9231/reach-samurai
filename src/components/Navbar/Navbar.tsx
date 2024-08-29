import React from "react";
import  s from './Navbar.module.css'

// let s = {
//     'nav': 'Navbar_nav_30u9@',
//     'item': 'Navbar_item_3qaF3'
// }

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a >Profile</a>
            </div >
            <div className={`${s.item} ${s.active}`}>
                <a>Message</a>
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
