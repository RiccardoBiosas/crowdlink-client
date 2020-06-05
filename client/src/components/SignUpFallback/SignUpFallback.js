import React from 'react';
import { Web3Consumer } from 'web3-react';
import {
  CardContainerLayout,
  CardLayoutWithBorderSpaceAround,
  CustomParagraph,
} from '../shared/GeneralCard';
import { RowContainer } from '../shared/PublisherWizard/styles';
import { PUBLISHER_GA_CONNECT_ROUTE, MARKETER_FEED_ROUTE } from '../../routes-config';
import SignupRedirect from './SignupRedirect';

export const CREATOR = 'CREATOR';
export const MARKETER = 'MARKETER';

const redirectRoutes = {
  CREATOR: PUBLISHER_GA_CONNECT_ROUTE,
  MARKETER: MARKETER_FEED_ROUTE,
};

const SignUpFallback = () => {
  return (
    <CardContainerLayout>
      <Web3Consumer>
        {(context) => {
          const { active } = context;
          // if (!active) {
          return (
            <CardLayoutWithBorderSpaceAround>
              <CustomParagraph
                paragraphColor="#959090"
                paragraphFontSize={22}
                paragraphFontWeight={900}
              >
                Sign up if you want to access our dashboards!
              </CustomParagraph>
              <RowContainer containerWidth="60%" containerJustify="space-around">
                {Object.keys(redirectRoutes).map((x, i) => (
                  <SignupRedirect
                    active={active}
                    redirectRoute={redirectRoutes[x]}
                    text={x.toLowerCase()}
                  />
                ))}
              </RowContainer>
            </CardLayoutWithBorderSpaceAround>
          );
          // }
          // return (
          //   <Redirect to={redirectRoute} />
          //   // <CardLayoutWithBorder>
          //   //   <ColumnContainer>
          //   //     <div>
          //   //       <ParagraphButton
          //   //         buttonColor={"#7838D5"}
          //   //         buttonFontWeight={900}
          //   //         buttonFontSize={24}
          //   //         onClick={() => history.push(PUBLISHER_GA_CONNECT_ROUTE)}
          //   //       >
          //   //         Create +
          //   //       </ParagraphButton>
          //   //       <CustomParagraph
          //   //         paragraphFontSize={22}
          //   //         paragraphColor={"#696868"}
          //   //       >
          //   //         reward per sale (commission)
          //   //       </CustomParagraph>
          //   //     </div>

          //   //     <div>
          //   //       <ParagraphButton
          //   //         buttonColor={"#4C83D4"}
          //   //         buttonFontWeight={900}
          //   //         buttonFontSize={24}
          //   //         onClick={() =>
          //   //           history.push(`${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/clicks`)
          //   //         }
          //   //       >
          //   //         Create +
          //   //       </ParagraphButton>
          //   //       <CustomParagraph
          //   //         paragraphFontSize={22}
          //   //         paragraphColor={"#696868"}
          //   //       >
          //   //         reward per click (traffic)
          //   //       </CustomParagraph>
          //   //     </div>
          //   //   </ColumnContainer>
          //   // </CardLayoutWithBorder>
          // );
        }}
      </Web3Consumer>
    </CardContainerLayout>
  );
};

export default SignUpFallback;
