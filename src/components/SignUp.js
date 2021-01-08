function SignUp({onSignUpClick, onSignInClick}) {
    return (
        <section className="sign">
            <h2 className="sign__title">Регистрация</h2>
            <input type="email" id="email" class="sign__input" placeholder="e-mail"></input>
            <input type="password" id="password" class="sign__input" placeholder="password"></input>
            <button type="submit" className="sign__button" onClick={onSignUpClick}>Зарегистрироваться</button>
            <p className="sign__text" onClick={onSignInClick}>Уже зарегистрированы? Войти</p>
        </section>
    );
}

export default SignUp;