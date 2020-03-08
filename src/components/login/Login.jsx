import React from 'react';
import AuthService from '../../services/auth.service';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register, handleSubmit, errors } = useForm();

    return (<form action="#" onSubmit={handleSubmit(_doLogin)}>
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
    </form>);
}

async function _doLogin({ username, password }) {
    try {
        let userData = await AuthService.login(username, password);
        console.log(userData);
    } catch (e) {
        throw e;
    }
}