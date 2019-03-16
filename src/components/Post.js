import React from 'react';

const Post = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.body}</p>               
            </div>
        </div>
    )
}

export default Post;