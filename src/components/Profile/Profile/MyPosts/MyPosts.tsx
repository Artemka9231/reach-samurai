import React from "react";

import s from './MyPosts.module.css'
import {Post} from "../Posts/Post";


export const MyPosts = (props: any) => {


    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: ' 12'},
        {id: 2, message: "It's my first post", likesCount:' 11' },

    ]

    let postsElements = posts.map(p=> <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div>
            <div className={s.postsBlock}>
               <h3> My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} likeCount={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} likeCount={postsData[1].likesCount}/>*/}


            </div>

        </div>
    )
}
