import styled from "styled-components";

export const CardContainerLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardLayout = styled.div`
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DoubleButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: ${(props) => props.paragraphMargin};
  align-items: ${(props) =>
    props.horizontalAlign === "center"
      ? "center"
      : props.horizontalAlign === "right"
      ? "flex-end"
      : "flex-start"};
`;

export const CustomH1 = styled.h1`
  color: ${(props) => props.h1Color};
  font-size: ${(props) => props.h1FontSize}px;
  width: ${(props) => props.h1Width}vw;
  font-weight: ${(props) => props.h1FontWeight};
`;

export const CustomH2 = styled.h2`
  color: ${(props) => props.h2Color};
  font-size: ${(props) => props.h2FontSize}px;
  width: ${(props) => props.h2Width}vw;
  font-weight: ${(props) => props.h2FontWeight};
`;

export const ParagraphButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  color: ${(props) => props.buttonColor};
  font-weight: ${(props) => props.buttonFontWeight};
  font-size: ${(props) => props.buttonFontSize}px;
  margin: ${(props) => props.buttonMargin};
  width: ${(props) => `${props.buttonWidth}`};
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const CustomParagraph = styled.p`
  color: ${(props) => props.paragraphColor};
  margin: ${(props) => props.paragraphMargin};
  font-size: ${(props) => props.paragraphFontSize}px;
  font-weight: ${(props) => props.paragraphFontWeight};
  width: ${(props) => `${props.paragraphWidth}`};
  line-height ${(props) => `${props.paragraphLineHeight}`};
  border: ${(props) => `${props.paragraphBorder}`};
  padding: ${(props) => props.paragraphPadding};

`;

export const CardLayoutWithBorder = styled(CardLayout)`
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
  border-radius: 10px;
`;

export const CardLayoutWithBorderSpaceAround = styled(CardLayout)`
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.85);
  border-radius: 10px;

  && {
    justify-content: space-around;
  }
`;

export const DoubleButtonsContainerFilledHeight = styled(
  DoubleButtonsContainer
)`
  flex: 1;
  justify-content: space-around;
`;

export const CloseButtonContainer = styled.div`
  height: ${(props) => props.closeButtonContainerHeight};
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-content: flex-end;
`;

export const CardSubContainer = styled.div`
  height: ${(props) => props.subContainerHeight};
  margin: ${(props) => props.subContainerMargin};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
