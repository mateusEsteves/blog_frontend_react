import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import AuthService from '../../services/auth.service';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

    async function doLogin({ username, password }) {
      await AuthService.login(username, password);
      history.push('/posts');
    }

  return (
    <form action="#" onSubmit={handleSubmit(doLogin)}>
      <div>
        <label htmlFor="username">Usuário:</label>
        <input type="text" name="username" ref={register({ required: true })} />
        {errors.username && <span>Por favor informe o nome do usuário</span>}
      </div>

      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" ref={register({ required: true })} />
        {errors.password && <span>Por favor informe sua senha</span>}
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}
