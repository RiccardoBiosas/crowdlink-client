import React, { useState, useEffect, useRef, createRef } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { Web3Consumer } from 'web3-react';
import { CardContainerLayout, CustomParagraph } from '../../shared/GeneralCard';
import { RowContainer } from '../../shared/PublisherWizard/styles';
import { PUBLISHER_WORKFLOW_ROUTE, MARKETER_FEED_ROUTE } from '../../../routes-config';
import SignupRedirect from '../screen/SignupRedirect';
import CardLayout from '../../shared/layout/CardLayout';

export const CREATOR = 'CREATOR';
export const MARKETER = 'MARKETER';

const redirectRoutes = {
  CREATOR: PUBLISHER_WORKFLOW_ROUTE,
  MARKETER: MARKETER_FEED_ROUTE,
};

const SignUpFallback = () => {
  const location = useLocation();

  console.group('----inspecting SignupFallback useLocation()');
  console.log('signup fallback location', location);
  console.log('signup fallback location state', location.state);
  console.groupEnd();

  const [redirectedRoute, setRedirectedRoute] = useState();
  const refs = useRef(Object.keys(redirectRoutes).map(() => createRef()));
  const ref = useRef();

  const handleMouseDown = (e) => {
    // console.log('ref0 contains', refs.current[0].current.contains(e.target));
    // console.log('ref1 containts', refs.current[1].current.contains(e.target));
    console.log(refs);
    if (!location.state) {
      if (refs.current[0].current.contains(e.target)) {
        setRedirectedRoute(redirectRoutes[refs.current[0].current.dataset.route]);
      }
      if (refs.current[1].current.contains(e.target)) {
        setRedirectedRoute(redirectRoutes[refs.current[1].current.dataset.route]);
      }
    } else {
      if (ref.current.contains(e.target)) {
        setRedirectedRoute(location.state.prevLocation);
        console.log('redirectedroute', redirectRoutes);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [refs, redirectedRoute]);

  return (
    <Web3Consumer>
      {(context) => {
        const { active } = context;
        if (!active) {
          return (
            <CardContainerLayout>
              <CardLayout>
                <CustomParagraph
                  paragraphColor="#959090"
                  paragraphFontSize={22}
                  paragraphFontWeight={900}
                >
                  Sign up if you want to access our dashboards!
                </CustomParagraph>
                {location.state ? (
                  <span ref={ref}>
                    <SignupRedirect text="" />
                  </span>
                ) : (
                  <RowContainer containerWidth="60%" containerJustify="space-around">
                    {Object.keys(redirectRoutes).map((x, i) => (
                      <span ref={refs.current[i]} data-route={x}>
                        <SignupRedirect text={x.toLowerCase()} />
                      </span>
                    ))}
                  </RowContainer>
                )}
              </CardLayout>
            </CardContainerLayout>
          );
        }
        return <Redirect to={redirectedRoute} />;
      }}
    </Web3Consumer>
  );
};

export default SignUpFallback;
