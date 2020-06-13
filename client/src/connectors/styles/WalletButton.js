import styled from 'styled-components';

const WalletButton = styled.button`
  width: 42%;
  height: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.3);
  background-color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  > img {
    height: 60px;
  }
`;

export default WalletButton;
