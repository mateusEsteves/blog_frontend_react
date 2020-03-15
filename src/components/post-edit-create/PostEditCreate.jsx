import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import usePostData from '../../hooks/post-data';
import PostService from '../../services/post.service';
import AuthService from '../../services/auth.service';

export default function PostEditCreate() {
  const { postId } = useParams();
  const [postData] = usePostData(postId);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (postData.authorId != null && postData.authorId !== AuthService.user.id) {
      console.log(AuthService.user.id);
    }
  }, [postData.authorId]);

  async function updatePostData(post) {
    if (postId !== null) {
      const newPost = { ...postData, ...post };
      await PostService.updatePost(newPost);
    }
  }

  return (
    <form action="#" onSubmit={handleSubmit(updatePostData)}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" defaultValue={postData.title} ref={register({ required: true })} />
        {errors.title && <span>O titulo deve ser informado</span>}
      </div>
      <div>
        <label htmlFor="text">Texto</label>
        <textarea name="text" cols="30" rows="10" defaultValue={postData.text} ref={register({ required: true, maxLength: 240 })} />
        {errors.text && <span>Certifique-se que o texto tem no máximo 240 caracteres.</span>}
      </div>

      <button type="submit">{postId == null ? 'Postar' : 'Atualizar'}</button>
    </form>
  );
}
