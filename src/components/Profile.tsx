import React from "react";
import './Profile.css'
export const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgTx688aeWkqKFT1Nq5gte1kqm71zBxjOLw&s"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className="posts">
                    <div className="item">
                        post1
                    </div>
                    <div className="item">
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
