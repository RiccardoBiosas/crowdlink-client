import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledCustomForm = styled(Form)`
  height: ${(props) => props.customFormHeight};
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledCustomLabel = styled.label`
  display: block;
  margin: ${(props) => `${props.labelMargin}`};
  color: ${(props) => props.labelColor};
  font-weight: ${(props) => props.labelFontWeight};
  font-size: ${(props) => props.labelFontSize}px;
`;

export const StyledCustomField = styled(Field)`
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

export const StyledCustomHTMLinput = styled.input`
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
