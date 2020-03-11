import React, { useState, useEffect } from 'react';
import PostService from '../../services/post.service';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const posts = await PostService.getAllPosts();
            setPosts(posts);
        })();
    }, []);

    const postsToRender = posts.map((item) => {
        return (
            <div key={item.id.toString()}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <button onClick={() => editPost(item.id)}>Editar</button>
                <button onClick={() => deletePost(item.id)}>Deletar</button>
            </div>
        );
    });

    function editPost(postId) {
        console.log(postId)
    }

    function deletePost(postId) {
        console.log(postId)
    }

    if(posts.length === 0) {
        return <div>Carregando...</div>
    } else {
        return <div>{postsToRender}</div>
    }
}