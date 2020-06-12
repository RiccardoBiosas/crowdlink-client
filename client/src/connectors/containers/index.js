import React, { useState, useLayoutEffect, useRef } from 'react';
import ConnectorsModal from '../screen/ConnectorsModal';


const OpenConnectorsModal = ({text}) => {
  const [modalState, setModalState] = useState(false);
  const [refProperties, setRefProperties] = useState();
  const ref = useRef();

  useLayoutEffect(() => {
    if (ref && !refProperties) {
      const elmDOM = ref.current.getBoundingClientRect();

      setRefProperties({
        ...refProperties,
        coordX: elmDOM.right,
        coordY: elmDOM.top,
        openerWidth: elmDOM.width,
        openerHeight: elmDOM.height
      });
    }
  });
  console.log('ref properties', refProperties)

  return (
    <>
      <button ref={ref} style={{ width: '200px', backgroundColor: 'red' }} onClick={() => setModalState(!modalState)}>
        {text}
      </button>

      {refProperties && <ConnectorsModal refProperties={refProperties} modalState={modalState} />}
    </>
  );
};

OpenConnectorsModal.defaultProps = {
  text: 'sign up'
}

export default OpenConnectorsModal;
