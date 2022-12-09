import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Modal = ({ openModal, closeModal, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${openModal && 'modal-open'}`} onClick={closeModal}>
            <div className='modal_dialog' onClick={handleModalDialogClick}>
                <button onClick={closeModal} className="closeButtonModal">
                    <FontAwesomeIcon icon={faCircleXmark} className="iconCloseModal" />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal