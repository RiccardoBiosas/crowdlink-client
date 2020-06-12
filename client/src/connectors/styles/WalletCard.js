import styled from 'styled-components';

export const WalletCard = styled.div`

  flex: 1;
  > button {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 16px 16px 16px rgba(0,0,0,0.3);
    transition: all 0.3s ease-in-out;



    &:hover {
      transform: scale(1.1, 1.1);
    }

    > img {
      height: 80px;
    }
  }

`;
