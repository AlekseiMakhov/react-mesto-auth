import cn from 'classnames';

function PopupWithAlert({ 
    isOpen,
    success, 
    messageText, 
    noClose, 
    onClose 
}) 

{
    return (
        <section className={cn('popup', { 'popup_opened': isOpen })} onClick={onClose}>
            <div className="popup-info" onClick={noClose}>
                <button type="button" name="Закрыть" className="popup-info__close-button" onClick={onClose}></button>
                <div className={cn('popup-info__icon', { 'popup-info__icon_type_abort': success })}></div>
                <p className="popup-info__message">{messageText}</p>
            </div>
        </section>
    );
}

export default PopupWithAlert;
