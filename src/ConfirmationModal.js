import React, { useImperativeHandle, useRef } from 'react';

const ConfirmationModal = (props, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => closeRef.current.focus(),
      focusConfirmBtn: () => confirmRef.current.focus(),
      focusDenyBtn: () => denyRef.current.focus(),
    };
  });
  if (!props.isOpen) return null;

  return (
    <>
      <div className="modal__container" ref={ref}>
        <button ref={closeRef} className="close__btn" onClick={props.onClose}>
          X
        </button>
        <h1 style={{ margin: '20px' }}> Title </h1>
        <div style={{ margin: '20px', fontSize: '20px' }}>Do you confirm?</div>
        <button ref={confirmRef} onClick={props.onClose} className="btn__yes">
          Yes
        </button>
        <button ref={denyRef} onClick={props.onClose} className="btn__no">
          No
        </button>
      </div>
    </>
  );
};

export default React.forwardRef(ConfirmationModal);
