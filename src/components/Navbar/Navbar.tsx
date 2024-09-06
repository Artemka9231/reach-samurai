import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink  to='profile' className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='dialogs' className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='news' className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music' className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='setting' className={({ isActive }) => isActive ? `${s.activeLink} ${s.item}` : s.item}>Setting</NavLink>
            </div>
        </nav>
    )
}
