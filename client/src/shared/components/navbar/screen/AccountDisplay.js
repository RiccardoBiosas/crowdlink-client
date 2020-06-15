import React from 'react';
import withHover from '../../../../hocs/withHover';
import splitTextWithEllipsis from '../../../../utils/splitTextWithEllipsis';

const AccountDisplay = ({ account }) => {
  console.log('current account display ', account);
  return (
    <div
      style={{
        backgroundColor: '#F3F3F3',
        borderRadius: '5px',
        width: '160px',
        fontSize: '16px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ color: '#2A4365' }}>
        {account ? splitTextWithEllipsis(account, 4) : 'not connected'}
      </p>
    </div>
  );
};

export default withHover(AccountDisplay);
