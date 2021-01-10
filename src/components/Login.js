import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authorize } from '../utils/auth';

function Login({ setOpen, onLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEmailInput = (e) => setEmail(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        authorize(email, password)
            .then((data) => {
                if (data.token) {
                    setEmail('');
                    setPassword('');
                    onLogin();
                    history.push('/cards');
                } else {
                    setOpen(false);
                    console.log(data.error);
                }  
            })
            .catch(err => {console.log(err); 
                setOpen(false);
            });
    } 

    return (
        <form name="login" className="sign" onSubmit={handleSubmit}>
            <h2 className="sign__title">Вход</h2>
            <input name="email" id="email" type="email" value={email} onChange={handleEmailInput} className='sign__input' placeholder="Email" required />
            <input name="password" id="password" type="password" minLength="6" value={password} onChange={handlePasswordInput} className='sign__input' placeholder="Пароль" required />
            <button type='submit' className='sign__button'>Войти</button>
        </form>
    );
}

export default Login;