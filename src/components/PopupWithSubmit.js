// import cn from 'classnames';
import PopupWithForm from './PopupWithForm';

function PopupWithSubmit({
  isOpen,
  onClose,
  noClose,
  onDeleteCard,
  card,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
        <PopupWithForm
            name='submit'
            title='Вы уверены?'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            noClose={noClose}
        />
  );
}

export default PopupWithSubmit;
