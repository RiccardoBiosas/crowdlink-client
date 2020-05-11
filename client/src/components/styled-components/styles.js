import styled from "styled-components";
import { Field } from "formik";

export const CampaignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CampaignCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 60vh;
  margin-top: 4vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  form {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .labelInputPair {
      margin-bottom: 20px;
      > div {
        margin-top: 4px;
      }
    }

  }


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
