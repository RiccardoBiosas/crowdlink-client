import React from 'react';
import { Web3Consumer } from 'web3-react';
import { useHistory, Redirect } from 'react-router-dom';
import {
  CustomParagraph,
  CardContainerLayout,
  CloseButtonContainer,
  ParagraphButton,
} from '../shared/GeneralCard';
import { MARKETER_FEED_ROUTE } from '../../routes-config';
import ArrowDown from '../../assets/arrow-down.png';
import CardLayout from '../shared/layout/CardLayout';
import OpenConnectorsModal from '../../connectors/containers';

const MarketerSignUp = () => {
  const history = useHistory();

  return (
    <CardContainerLayout>
      <CardLayout>
        <CloseButtonContainer>
          <ParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push('/')}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        <Web3Consumer>
          {(context) => {
            const { active } = context;
            return active ? (
              <Redirect to={MARKETER_FEED_ROUTE} />
            ) : (
              <>
                <div>
                  <CustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Sign up with Portis
                  </CustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} alt="scroll down" />
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    You will receive funds via your selected Web3 wallet
                  </CustomParagraph>
                </div>
                <div>
                  <img src={ArrowDown} alt="scroll down" />
                </div>
                <div>
                  <CustomParagraph
                    paragraphColor="#959090"
                    paragraphFontSize={22}
                    paragraphFontWeight={600}
                  >
                    Referral links connected instantly to your account
                  </CustomParagraph>
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
      </CardLayout>
    </CardContainerLayout>
  );
};

export default MarketerSignUp;
