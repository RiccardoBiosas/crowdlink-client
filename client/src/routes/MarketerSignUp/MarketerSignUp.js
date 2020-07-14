import React from 'react';
import { Web3Consumer } from 'web3-react';
import { useHistory, Redirect } from 'react-router-dom';
import StyledCustomParagraph from '../../shared/styles/StyledCustomParagraph';
import StyledParagraphButton from '../../shared/styles/StyledParagraphButton';
import StyledGeneralWrapper from '../../shared/styles/StyledGeneralWrapper';
import StyledCardLayout from '../../shared/styles/StyledCardLayout';
import { MARKETER_FEED_ROUTE } from '../../routes-config';
import ArrowDown from '../../assets/arrow-down.png';
import StyledCardBoilerplateLayout from '../../shared/styles/StyledCardBoilerplateLayout';
import OpenConnectorsModal from '../../connectors/containers';

const MarketerSignUp = () => {
  const history = useHistory();

  return (
    <StyledCardLayout>
      <StyledCardBoilerplateLayout>
        <StyledGeneralWrapper wrapperWidth="100%" wrapperFlex wrapperJustify="flex-end">
          <StyledParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push('/')}
          >
            x
          </StyledParagraphButton>
        </StyledGeneralWrapper>
        <Web3Consumer>
          {(context) => {
            const { active } = context;
            return active ? (
              <Redirect to={MARKETER_FEED_ROUTE} />
            ) : (
              <>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Sign up with Portis
                  </StyledCustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} alt="scroll down" />
                </div>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    You will receive funds via your selected Web3 wallet
                  </StyledCustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} alt="scroll down" />
                </div>
                <div>
                  <StyledCustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Referral links connected instantly to your account
                  </StyledCustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} alt="scroll down" />
                </div>

                {/* <PortisInstance /> */}
                <OpenConnectorsModal />
              </>
            );
          }}
        </Web3Consumer>
      </StyledCardBoilerplateLayout>
    </StyledCardLayout>
  );
};

export default MarketerSignUp;
