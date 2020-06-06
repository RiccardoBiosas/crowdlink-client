import styled from 'styled-components';
import { Field, Form } from 'formik';
import { CardLayoutWithBorder, CloseButtonContainer } from '../GeneralCard';

export const CampaignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomForm = styled(Form)`
  height: ${(props) => props.customformheight};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeadingContainer = styled.div`
  height: 10%;
  margin: ${(props) => `${props.headingMargin}`};
`;

export const NextButtonContainer = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
`;

export const DepositInfoContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const DepositButtonContainer = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomLabel = styled.label`
  display: block;
  margin: ${(props) => `${props.labelMargin}`};
  color: ${(props) => props.labelColor};
  font-weight: ${(props) => props.labelFontWeight};
  font-size: ${(props) => props.labelFontSize}px;
`;

export const CloseAndBackButtonContainer = styled(CloseButtonContainer)`
  && {
    height: 10%;
    justify-content: space-between;
  }
`;

export const RowContainer = styled.div`
  width: ${(props) => props.containerWidth};
  display: flex;
  justify-content: ${(props) =>
    props.containerJustify === 'around' ? 'space-around' : 'space-between'};
  align-items: center;
`;

export const CustomField = styled(Field)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e5ed;
  border-radius: 4px;
  width: 360px;
  height: 40px;
  padding-left: 8px;
  box-sizing: border-box;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::[type='number'] {
    -moz-appearance: textfield;
  }
  &::placeholder {
    color: #3e3f42;
    font-weight: 400;
  }
`;

export const CustomHTMLinput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e2e5ed;
  border-radius: 4px;
  width: 360px;
  height: 40px;
  padding-left: 8px;
  box-sizing: border-box;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::[type='number'] {
    -moz-appearance: textfield;
  }
  &::placeholder {
    color: #3e3f42;
    font-weight: 400;
  }
`;

// export const SignUpCard = styled(CardLayoutWithBorder)`
//   && {
//     justify-content: space-around;
//     height: 60vh;
//   }
// `;

// export const CampaignCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 60vw;
//   height: 60vh;
//   margin-top: 4vh;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
// `;
