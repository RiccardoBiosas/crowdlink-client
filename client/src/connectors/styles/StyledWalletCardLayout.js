import styled from 'styled-components';

const StyledWalletCardLayout = styled.div`
  width: 340px;
  height: 190px;
  background-color: #ffff;
  border: 1px solid black;

  > choose-wallet {
    height: 30px;
  }

  > .wallets {
    height: 160px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export default StyledWalletCardLayout;
