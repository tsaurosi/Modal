import React, { useState } from 'react';
import { Modal } from './Modal';

function DisplayModal() {

  const [reveal, setReveal] = useState(false);

  const closeModalHandler = () => setReveal(false);


  return (
    <div>
      {reveal ? <div onClick={closeModalHandler} className='back-drop'></div> : null}
      <button onClick={() => setReveal(true)} className='btn-openModal stretch-link'>
        View Profiles
      </button>
      <Modal  reveal={reveal} close={closeModalHandler} />
    </div>
  );
}

export default DisplayModal;
