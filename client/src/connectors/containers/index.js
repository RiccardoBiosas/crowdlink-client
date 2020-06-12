import React, {useState, useLayoutEffect, forwardRef} from 'react'
import ConnectorsModal from '../screen/ConnectorsModal'

const ConnectorsModalContainer = ({openerRef, modalState}) => {
  console.log('opener ref ', openerRef)
  const [coords, setCoords] = useState()
  const [size, setSize]=useState()
  // const output = openerRef.current ? openerRef.current.getBoundingClientRect() : {x: '50%', y: '50%'}

  useLayoutEffect(() => {
    if(openerRef && !coords) {
      const output = openerRef.current.getBoundingClientRect()
      console.log(output)
      console.log(output)
      setCoords({...coords, coordX: output.right, coordY: output.top})

      setSize({width: output.width, height: output.height})

    }

  }, [coords])


  if(coords) {
    return(

      <ConnectorsModal coordX={coords.coordX - size.width} coordY={coords.coordY} openerWidth={size.width} openerHeight={size.height} modalState={modalState} />
    )
  } else {
    return <></>
  }
}

export default ConnectorsModalContainer
