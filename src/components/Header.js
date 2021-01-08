import logo from '../images/logo.svg';

function Header({user, buttonText}) {
  return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Лого" />
            <p class="header__text">{user}</p>
            <p class="header__text">{buttonText}</p>
        </header>
  );
}

export default Header;
