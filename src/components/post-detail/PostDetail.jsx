import React from 'react';
import usePostData from '../../hooks/post-data';

export default function PostDetail({ postId }) {
    const [postData] = usePostData(postId);

    return (
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.text}</p>
        </div>
    );
}