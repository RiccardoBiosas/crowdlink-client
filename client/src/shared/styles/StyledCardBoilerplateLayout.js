import styled from 'styled-components';

const StyledCardBoilerplateLayout = styled.div`
  height: 70vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: 880px) {
    width: 80vw;
    > div:not(:first-child) {
      width: 100%;
      display: flex;
      justify-content: center;
      > p {
        width: 60%;
        text-align: center;
      }
    }
  }
`;

export default StyledCardBoilerplateLayout;
