import React from "react";

import s from './Post.module.css'


export const Post = (props:any) => {

    return (

                    <div className={s.item}>
                        <img src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_jakesully_16x9_1098_02_b13c4171.jpeg?region=340%2C0%2C1081%2C1081" alt=""/>
                        {props.message}
                        <div>
                            <span>like</span>{props.likeCount}
                        </div>
                    </div>


    )
}
