import React from "react";
import  style from './Navbar.module.css'

let s = {
    'nav': 'Navbar_nav_30u9@',
    'item': 'Navbar_item_3qaF3'
}

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>

                <a >Profile</a>
            </div >
            <div className={style.item}>
                <a>Message</a>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Setting</a>
            </div>
        </nav>
    )
}
