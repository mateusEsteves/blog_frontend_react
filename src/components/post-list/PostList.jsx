import React, { useState, useEffect } from 'react';
import Header from '../shared/header/Header';
// import { useHistory } from 'react-router';
import PostService from '../../services/post.service';
// import AuthService from '../../services/auth.service';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    (async () => {
      const allPosts = await PostService.getAllPosts();
      setPosts(allPosts);
    })();
  }, []);

  // function editPost(postId) {
  //   history.push(`/post/editar/${postId}`);
  // }

  // async function deletePost(postId) {
  //   await PostService.deletePost(postId);
  // }

  // {AuthService.user != null && AuthService.user.id === item.authorId ?
  //   <>
  //     <button onClick={() => editPost(item.id)} type="button">Editar</button>
  //     <button onClick={() => deletePost(item.id)} type="button">Deletar</button>
  //   </> :
  //   <></>}

  const postsToRender = posts.map((item) => (
    <div key={item.id.toString()}>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
    </div>
  ));

  if (posts.length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Header />
      <main>
        {postsToRender}
      </main>
    </>

  );
}
