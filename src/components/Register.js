function Register({onSignUpClick, onSignInClick, }) {
    return (
        <>
            <form name="register" className="sign">
                <h2 className="sign__title">Регистрация</h2>
                <input type="email" id="email" class="sign__input" placeholder="e-mail"></input>
                <input type="password" id="password" class="sign__input" placeholder="Пароль"></input>
                <button type="button" className="sign__button" onClick={onSignUpClick}>Зарегистрироваться</button>
                <p className="sign__text" onClick={onSignInClick}>Уже зарегистрированы? Войти</p>
            </form>

            <PopupWithAlert
                success={loggedIn}
                isOpen={isShowAlertOpen}
                onClose={onClose}
                messageText={messageText}
                noClose={noClose}
            />
        </>
    );
}

export default Register;