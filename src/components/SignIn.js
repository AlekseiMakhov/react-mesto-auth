function SignIn({onSignInClick}) {
    return (
        <section className="sign">
            <h2 className="sign__title">Вход</h2>
            <input type="email" id="email" class="sign__input" placeholder="e-mail"></input>
            <input type="password" id="password" class="sign__input" placeholder="password"></input>
            <button type="submit" className="sign__button" onClick={onSignInClick}>Войти</button>
        </section>
    );
}

export default SignIn;