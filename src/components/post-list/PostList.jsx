import React, { useState, useEffect } from 'react';
import PostService from '../../services/post.service';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const allPosts = await PostService.getAllPosts();
      setPosts(allPosts);
    })();
  }, []);

  function editPost(postId) {
    console.log(postId);
  }

  function deletePost(postId) {
    console.log(postId);
  }

  const postsToRender = posts.map((item) => (
    <div key={item.id.toString()}>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
      <button onClick={() => editPost(item.id)} type="button">Editar</button>
      <button onClick={() => deletePost(item.id)} type="button">Deletar</button>
    </div>
  ));


  if (posts.length === 0) {
    return <div>Carregando...</div>;
  }
  return <div>{postsToRender}</div>;
}
