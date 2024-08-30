import React from "react";

import s from './MyPosts.module.css'
import {Post} from "./Post";


export const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgTx688aeWkqKFT1Nq5gte1kqm71zBxjOLw&s"
                     alt=""/>
            </div>

            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}
