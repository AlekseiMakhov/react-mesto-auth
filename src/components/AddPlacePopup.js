import { useContext, useEffect, useRef } from 'react';
import cn from 'classnames';
import PopupWithForm from './PopupWithForm';
import ValidationContext from '../contexts/ValidationContext';

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  noClose,
  onInput,
}) {
  const validationContext = useContext(ValidationContext);

  const link = useRef('');
  const name = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    if (validationContext.isValid) {
      onAddPlace({
        link: link.current.value,
        name: name.current.value,
      });
    }
  }

  useEffect(_ => {
    !isOpen && link.current.parentElement.reset();
  }, [isOpen]);

  return (
        <PopupWithForm
            name='place'
            title='Новое место'
            children={
                <>
                    <input onInput={onInput} ref={name} name="name" id="0" type="text" minLength="1" maxLength="40" className={cn('popup-form__text-input', { 'popup-form__text-input_type_error': !validationContext.validation[0] })} placeholder="Название" required />
                    <span id="image-input-error" className={cn('popup-form__error-text', { 'popup-form__error-text_show': !validationContext.validation[0] })}>{validationContext.validationText[0]}</span>
                    <input onInput={onInput} ref={link} name="link" id="1" type="url" className={cn('popup-form__text-input', { 'popup-form__text-input_type_error': !validationContext.validation[1] })} placeholder="Ссылка на картинку" required />
                    <span id="link-input-error" className={cn('popup-form__error-text', { 'popup-form__error-text_show': !validationContext.validation[1] })}>{validationContext.validationText[1]}</span>
                </>
            }
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            noClose={noClose}
        />
  );
}

export default AddPlacePopup;
