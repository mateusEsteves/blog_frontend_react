import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import AuthService from '../../services/auth.service';
import styles from './Login.module.css';
import StandardInput from '../shared/input/StandardInput';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  async function doLogin({ username, password }) {
    await AuthService.login(username, password);
    history.push('/posts');
  }

  return (
    <main className={styles.Container}>
      <form action="#" onSubmit={handleSubmit(doLogin)} className="LoginForm">
        <StandardInput
          ref={register({ required: true })}
          hasError={errors.username != null}
          name="username"
          label="Usuário"
          type="text"
          errorMsg="Por favor informe seu nome de usuário"
        />

        <StandardInput
          ref={register({ required: true })}
          name="password"
          type="password"
          hasError={errors.password != null}
          label="Senha:"
          errorMsg="Por favor informe sua senha"
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
