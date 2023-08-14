import React, { useState, useRef } from 'react';
import './style.css';
import ConfirmationModal from './ConfirmationModal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef('');
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={handleOpen}> Open </button>
      <button> Focus Close</button>
      <button> Focus Confirm </button>
      <button> Focus Deny </button>
      <ConfirmationModal
        isOpen={isOpen}
        modalRef={modalRef}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
