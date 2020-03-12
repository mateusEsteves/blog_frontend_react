import React from 'react';
import usePostData from '../../hooks/post-data';
import { useParams } from 'react-router';

export default function PostDetail() {
    const { postId } = useParams();
    const [postData] = usePostData(postId);

    return (
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.text}</p>
        </div>
    );
}