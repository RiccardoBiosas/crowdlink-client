import React from 'react'
import { useTransition, animated } from 'react-spring';
import ConnectorsInstance from './connectorsInstance'


const ConnectorsModal = ({coordX, coordY, openerWidth, openerHeight, modalState}) => {
  console.log('coordx coordy ', coordX, coordY)



  const transition = useTransition(modalState, null, {
    // from: { opacitiy: 0, transform: 'scale(0)', transformOrigin: `${coords.coordY} ${coords.coordX}`, position: 'absolute' },
    // from: { opacitiy: 0, transform: 'scale(0)', transformOrigin: `${coordY}px ${coordX}px`, position: 'absolute' },
    from: { transform: 'scale(0)', right: `${coordX}px`,  top: `${coordY}px`, position: 'absolute', opacity: 0, width: openerWidth, height: openerHeight },
    enter: { opacity: 1, transform: 'scale(1.1)', zIndex: '200', top: `${coordY - 400}px`,  right: `${coordX}px` },
    leave: { transform: 'scale(0)', right: `${coordX}px`,  top: `${coordY}px`  },
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
