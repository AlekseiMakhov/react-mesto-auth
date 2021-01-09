import cn from 'classnames';

import { useContext, useEffect, useRef } from 'react';
import ValidationContext from '../contexts/ValidationContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  noClose,
  onInput,
}) {
  const validationContext = useContext(ValidationContext);

  const avatar = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    if (validationContext.isValid) {
      onUpdateAvatar({
        avatar: avatar.current.value,
      });
    }
  }

  useEffect((_) => {
    !isOpen && avatar.current.parentElement.reset();
  }, [isOpen]);

  return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            children={
                <>
                    <input onInput={onInput} name="avatar" ref={avatar} id="avatar0" type="url" className={cn('popup-form__text-input', { 'popup-form__text-input_type_error': !validationContext.validation[0] })} placeholder="Ссылка на картинку" required />
                    <span id="avatar-error" className={cn('popup-form__error-text', { 'popup-form__error-text_show': !validationContext.validation[0] })}>{validationContext.validationText[0]}</span>
                </>
            }
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            noClose={noClose}
        />
  );
}

export default EditAvatarPopup;
