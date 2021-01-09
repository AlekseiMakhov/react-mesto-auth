import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.svg';
import { logout } from '../utils/auth';

function Header({ email, loggedIn, signInScreen }) {

    const [buttonText, setButtonText] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (loggedIn) setButtonText('Выйти');
        else if (signInScreen) setButtonText('Зарегистрироваться');
        else setButtonText('Войти');

    }, [loggedIn, signInScreen]);

    const handleLogout = () => {
        logout();
        history.push('/signin')
    }

    const handleSignUp = () => {
        history.push('/signup')
    }
  
    const handleSignIn = () => {
        history.push('/signin')
    }

    const handleClick = _ => {
        if (loggedIn) handleLogout();
        if (signInScreen) handleSignUp();
        handleSignIn();
    }
    
    return (
          <header className="header">
              <img className="header__logo" src={logo} alt="Лого" />
              <p class="header__text">{email}</p>
              <p class="header__text" onClick={handleClick}>{buttonText}</p>
          </header>
    );
}

export default Header;
