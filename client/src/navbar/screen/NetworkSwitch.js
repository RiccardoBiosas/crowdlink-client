import React from 'react';
import withHover from '../../hocs/withHover';

const NetworkSwitch = ({ active }) => {
  return (
    <div
      style={{
        marginLeft: '18px',
        borderRadius: '50%',
        backgroundColor: active ? 'green' : 'grey',
        width: '20px',
        height: '20px',
      }}
    />
  );
};

export default withHover(NetworkSwitch);
