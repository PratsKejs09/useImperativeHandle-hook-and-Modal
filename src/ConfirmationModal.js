import React from 'react';

const ConfirmationModal = (props) => {
  if (!props.isOpen) return null;

  return (
    <>
      <div className="modal__container">
        <button className="close__btn" onClick={props.onClose}>
          X
        </button>
        <h1 style={{ margin: '20px' }}> Title </h1>
        <div style={{ margin: '20px', fontSize: '20px' }}>Do you confirm?</div>
        <button className="btn__yes"> Yes </button>
        <button className="btn__no"> No </button>
      </div>
    </>
  );
};

export default ConfirmationModal;
