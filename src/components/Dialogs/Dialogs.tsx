import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialogitem/Dialogitem";
import {Message} from "./Message/Message";





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
        {id: 5, message: "AYE"},

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

                {/*<Message Message={messagesData[0].Message} id={messagesData[0].id}/>*/}
                {/*<Message Message={messagesData[1].Message} id={messagesData[1].id}/>*/}
                {/*<Message Message={messagesData[2].Message} id={messagesData[2].id}/>*/}
                {/*<Message Message={messagesData[3].Message} id={messagesData[3].id}/>*/}

            </div>
        </div>
    )
}