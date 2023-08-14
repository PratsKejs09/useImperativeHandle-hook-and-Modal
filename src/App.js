import React, { useState, useRef } from 'react';
import './style.css';
import ConfirmationModal from './ConfirmationModal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={handleOpen}> Open </button>
      <button onClick={() => modalRef.current.focusCloseBtn()}>
        Focus Close
      </button>
      <button onClick={() => modalRef.current.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>
        Focus Deny
      </button>
      <ConfirmationModal
        isOpen={isOpen}
        ref={modalRef}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
