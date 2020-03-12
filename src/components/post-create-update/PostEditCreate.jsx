import React from 'react';
import usePostData from '../../hooks/post-data';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

export default function PostEditCreate() {
    const { postId } = useParams();
    const [postData, setPostData] = usePostData(postId);
    
    const { register, handleSubmit, errors } = useForm();

    function updatePostData(postData) {
        setPostData(postData);
        console.log('updated', postData);
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
                <textarea name="text" cols="30" rows="10" defaultValue={postData.text} ref={register({ required: true, maxLength: 240 })}></textarea>
                {errors.text && <span>Certifique-se que o texto tem no máximo 240 caracteres.</span>}
            </div>

            <button type="submit">{postId == null ? 'Postar' : 'Atualizar'}</button>
        </form>
    )
}