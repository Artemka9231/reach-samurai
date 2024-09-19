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

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you? It-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "YO"},

    ]

    let messagesElements = messagesData.map( m => <Message message={m.message} />  )

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/> );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>

                    {dialogsElements}

                    {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                    {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                    {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                    {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}


                </div>

            </div>
            <div className={s.messages}>
                {messagesElements}

                {/*<Message message={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Message message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<Message message={messagesData[2].message} id={messagesData[2].id}/>*/}
                {/*<Message message={messagesData[3].message} id={messagesData[3].id}/>*/}

            </div>
        </div>
    )
}