import React, { useState, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ConnectorsModal from '../screen/ConnectorsModal';
import { ParagraphButton } from '../../shared/GeneralCard';

const OpenConnectorsModal = ({ text }) => {
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
        openerHeight: elmDOM.height,
      });
    }
  });
  console.log('ref properties', refProperties);

  return (
    <>
      <ParagraphButton
        type="button"
        buttonColor="#4C83D4"
        buttonFontWeight={900}
        buttonFontSize={24}
        ref={ref}
        onClick={() => setModalState(!modalState)}
      >
        {text}
      </ParagraphButton>

      {refProperties && <ConnectorsModal refProperties={refProperties} modalState={modalState} />}
    </>
  );
};

OpenConnectorsModal.propTypes = {
  text: PropTypes.string,
};

OpenConnectorsModal.defaultProps = {
  text: 'Sign up +',
};

export default OpenConnectorsModal;
