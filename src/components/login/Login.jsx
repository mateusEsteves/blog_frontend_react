import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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
      <form action="#" onSubmit={handleSubmit(doLogin)} className={styles.LoginForm}>
        <p className={styles.LoginForm__title}>Welcome to The Blog</p>
        <StandardInput
          ref={register({ required: true })}
          hasError={errors.username != null}
          name="username"
          label="Username"
          type="text"
          errorMsg="Please inform a valid username."
          inputContainerClass={styles.LoginForm__inputContainer}
        />

        <StandardInput
          ref={register({ required: true })}
          name="password"
          type="password"
          hasError={errors.password != null}
          label="Password"
          errorMsg="Please inform a valid password"
          inputContainerClass={styles.LoginForm__inputContainer}
        />

        <div className={styles.LoginForm__ctaContainer}>
          <button
            type="submit"
            className={classNames(styles.Button_primary, styles.Button, styles.LoginForm__button)}
          >
            Login
          </button>

          <span className={styles.LoginForm__createAccount}><Link to="/">or create an account</Link></span>
        </div>
      </form>
    </main>
  );
}
