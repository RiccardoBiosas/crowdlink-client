import React, { useState } from 'react';

const withHover = (ComposedComponent) => {
  return (props) => {
    const [hoverState, setHoverState] = useState(false);
    // console.log('with hover rest ', rest);
    console.log('props withhover hoc ', props);
    const { onHoverText } = props;

    const mouseOver = () => {
      setHoverState(true);
    };
    const mouseOut = () => {
      setHoverState(false);
    };
    // console.log('CURRENT HOVER STATE ', hoverState);

    return (
      <div onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ position: 'relative' }}>
        <ComposedComponent {...props} />
        {hoverState && (
          <p style={{ position: 'absolute', color: 'white', top: '40px' }}>{onHoverText || ''}</p>
        )}
      </div>
    );
  };
};

export default withHover;
