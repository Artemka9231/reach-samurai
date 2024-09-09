import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;

    return (<div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (<div className={s.dialog}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>

                    <DialogItem name='Dimych' id='1'/>
                    <DialogItem name='Andrey' id='2'/>
                    <DialogItem name='Sveta' id='3'/>
                    <DialogItem name='Sasha' id='4'/>
                    <DialogItem name='Victor' id='5'/>
                    <DialogItem name='Valera' id='6'/>

                </div>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you? It-kamasutra"/>
                <Message message="Yo"/>

            </div>
        </div>
    )
}