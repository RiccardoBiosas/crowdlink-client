import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import ConnectorsInstance from './ConnectorsInstance';
import WalletCardLayout from '../styles/WalletCardLayout';

const ConnectorsModal = ({ refProperties, modalState }) => {
  const { coordX, coordY, openerWidth, openerHeight } = refProperties;
  const modalCoordX = coordX - openerWidth;
  const modalCoordY = coordY - openerHeight;

  const transition = useTransition(modalState, null, {
    from: {
      transform: 'scale(0)',
      right: `${modalCoordX}px`,
      top: `${modalCoordY}px`,
      position: 'absolute',
      width: openerWidth,
      height: openerHeight,
    },
    enter: {
      transform: 'scale(1.1)',
      zIndex: '200',
      top: `${modalCoordY - 400}px`,
      right: `${modalCoordX}px`,
    },
    leave: { transform: 'scale(0)', right: `${modalCoordX}px`, top: `${modalCoordY}px` },
    config: {
      duration: 400,
    },
  });

  return (
    <>
      {transition.map(({ item, key, props }) => {
        console.log('transition key modal', key);
        console.log('item modal', item);
        return (
          <>
            {item && (
              <animated.div style={props} key={`modal-transition-${key}`}>
                <WalletCardLayout>
                  <div className="choose-wallet">
                    <p>use account from</p>
                  </div>
                  <div className="wallets">
                    <ConnectorsInstance />
                  </div>
                </WalletCardLayout>
              </animated.div>
            )}
          </>
        );
      })}
    </>
  );
};

ConnectorsModal.propTypes = {
  refProperties: PropTypes.shape({
    coordX: PropTypes.number,
    coordY: PropTypes.number.isRequired,
    openerWidth: PropTypes.number,
    openerHeight: PropTypes.number,
  }).isRequired,
  modalState: PropTypes.bool.isRequired,
};

export default ConnectorsModal;
