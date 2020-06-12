import React from 'react'
import { useTransition, animated } from 'react-spring';
import ConnectorsInstance from './connectorsInstance'


const ConnectorsModal = ({refProperties, modalState}) => {
  const {coordX, coordY, openerWidth, openerHeight} = refProperties
  const modalCoordX = coordX - openerWidth
  const modalCoordY = coordY - openerHeight



  const transition = useTransition(modalState, null, {
    // from: { opacitiy: 0, transform: 'scale(0)', transformOrigin: `${coords.modalCoordY} ${coords.modalCoordX}`, position: 'absolute' },
    // from: { opacitiy: 0, transform: 'scale(0)', transformOrigin: `${modalCoordY}px ${modalCoordX}px`, position: 'absolute' },
    from: { transform: 'scale(0)', right: `${modalCoordX}px`,  top: `${modalCoordY}px`, position: 'absolute', opacity: 0, width: openerWidth, height: openerHeight },
    enter: { opacity: 1, transform: 'scale(1.1)', zIndex: '200', top: `${modalCoordY - 400}px`,  right: `${modalCoordX}px` },
    leave: { transform: 'scale(0)', right: `${modalCoordX}px`,  top: `${modalCoordY}px`  },
    config: {
      duration: 400,
    },
  });



  return(
    <>
{transition.map(({ item, key, props }) => {
    return (
      <>
        {item && (
            <animated.div style={props} key={key}>
              <div style={{display: 'flex',  width: '340px', height: '160px', backgroundColor: '#ffff'}}>
              <ConnectorsInstance />

              </div>

          </animated.div>
        )}
      </>
    );
  })}
    </>
  )
}



export default ConnectorsModal
