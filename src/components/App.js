import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import PopupWithImage from './PopupWithImage';
import PopupWithSubmit from './PopupWithSubmit';
import CurrentUserContext from '../contexts/CurrentUserContext';
import ValidationContext from '../contexts/ValidationContext';
import LoadingState from '../contexts/LoadingState';
import api from '../utils/Api';
import SignIn from './SignUp';
import PopupWithAlert from './PopupWithAlert';
import SignUp from './SignUp';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPopupWithSubmitOpen, setIsPopupWithSubmitOpen] = useState(false);
  const [isShowAlertOpen, setIsShowAlertOpen] = useState(false);
  const [signInState, setSignInState] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [card, setCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [validationContext, setvalidationContext] = useState({ validation: [], validationText: [], isValid: false });

  // Обработка ввода (установка глобального стейта валидации) подходит для любого числа элементов
  // Элементам, которые требуется валидировать, нужно выставить уникальные id, положительные целые числа, начиная с 0
  function handleInput(e) {
    const validArr = validationContext.validation;
    const textArr = validationContext.validationText;
    const index = Number(e.target.id);
    let resValid = 0;

    validArr[index] = e.target.validity.valid;
    textArr[index] = e.target.validationMessage;

    for (let i = 0; i < validArr.length; i++) {
      resValid += Number(validArr[i]);
    }

    setvalidationContext({ validation: validArr, validationText: textArr, isValid: (resValid === validArr.length) });
  }
  // Закрытие модальных окон по Escape
  function handleEscButton(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }
  // Открытие формы редактирования аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setLoadingText('Изменить');
    // Устанавливаем параметры контекста для валидации текущей формы
    // validation - массив содержит число элементов = числу валидируемых элементов формы, принимает значение validity.valid
    // validationText - массив содержит число элементов = числу валидируемых элементов формы, принимает значение validationMessage
    // isValid - булева величина, содержит результат валидации всех полей, true - если все поля валидны
    setvalidationContext({ validation: [true], validationText: [''], isValid: false });
    document.addEventListener('keydown', handleEscButton);
  }
  // Открытие формы редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setLoadingText('Сохранить');
    // Устанавливаем параметры контекста для валидации текущей формы
    setvalidationContext({ validation: [true, true], validationText: ['', ''], isValid: true });
    document.addEventListener('keydown', handleEscButton);
  }

  // Открытие формы добавления карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setLoadingText('Создать');
    // Устанавливаем параметры контекста для валидации текущей формы
    setvalidationContext({ validation: [true, true], validationText: ['', ''], isValid: false });
    document.addEventListener('keydown', handleEscButton);
  }
  
  function handleSignInClick() {
    setIsShowAlertOpen(true);
    setSignInState(true);
    document.addEventListener('keydown', handleEscButton);
  }
  
  // Отмена всплытия для закрытия по клику по оверлею
  function noClose(e) {
    e.stopPropagation();
  }
  // Клик по картинке, открытие увеличенной картинки
  function handleCardClick(card) {
    setSelectedCard(true);
    setCard(card);
    document.addEventListener('keydown', handleEscButton);
  }
  // Нажатие на кнопку удаления, открытие окна с подтверждением
  function handleDeleteCardClick(card) {
    setIsPopupWithSubmitOpen(true);
    setLoadingText('Да');
    setvalidationContext({ validation: [], validationText: [], isValid: true });
    setCard(card);
    document.addEventListener('keydown', handleEscButton);
  }
  // Чтение с сервера инфо пользователя, данных карточки
  useEffect(() => {
    Promise.all([
      api.getProfileInfo(),
      api.getInitialCards(),
    ])
      .then((values) => {
        const [profileInfo, cardList] = values;
        setCurrentUser(profileInfo);
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Убрать/поставить лайк карточке
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Удаление карточки
  function handleDeleteCard(card) {
    setLoadingText('Удаление...');
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Смена инфо пользователя
  function handleUpdateUser(userInfo) {
    setLoadingText('Сохранение...');
    api.editProfileInfo(userInfo)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Смена аватара
  function handleUpdateAvatar(user) {
    setLoadingText('Сохранение...');
    api.editAvatar(user.avatar)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Добавление карточки
  function handleAddPlace(newCard) {
    setLoadingText('Загрузка...');
    api.createNewCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Закрытие модальных окон, снятие слушателя Escape
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupWithSubmitOpen(false);
    setSelectedCard(false);
    setIsShowAlertOpen(false);
    document.removeEventListener('keydown', handleEscButton);
    setvalidationContext({ validation: [], validationText: [], isValid: false });
    setCard({});
  }

  return (
  // Оборачиваем в контекст текущего пользователя
        <CurrentUserContext.Provider value={currentUser}>
            <Header user="aleksey.makhov@gmail.com" buttonText="Выйти"/>
            
            {!currentUser 
              ? <Main
                  onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onDeleteCard={handleDeleteCardClick}
                  cards={cards}
              /> 
              : <SignIn onSignInClick={handleSignInClick} />
            }

            <Footer />

            {/* Оборачиваем в контекст стейта валидации */}
            <ValidationContext.Provider value={validationContext}>
                <LoadingState.Provider value={loadingText}>
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        noClose={noClose}
                        onInput={handleInput}
                    />

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        noClose={noClose}
                        onInput={handleInput}
                    />

                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlace}
                        noClose={noClose}
                        onInput={handleInput}
                    />

                    <PopupWithSubmit
                        isOpen={isPopupWithSubmitOpen}
                        onClose={closeAllPopups}
                        noClose={noClose}
                        onDeleteCard={handleDeleteCard}
                        card={card}
                    />
                </LoadingState.Provider>
            </ValidationContext.Provider>

            <PopupWithImage
                isOpen={selectedCard}
                onClose={closeAllPopups}
                card={card}
                noClose={noClose}
            />
            <PopupWithAlert
                success={signInState}
                isOpen={isShowAlertOpen}
                onClose={closeAllPopups}
                messageText={'Хуйня какая-то!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'}
                noClose={noClose}
            />
        </CurrentUserContext.Provider>
  );
}

export default App;
