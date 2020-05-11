import React from "react";
import { useHistory } from "react-router-dom";
import { PUBLISHER_SIGN_UP_ROUTE } from "../routes-config";

export const PublisherHomepage = () => {
  const history = useHistory();

  return (
    <div>
      <div>
        <h1> Create a referral campaign within minutes</h1>
      </div>
      <div>
        <p>
          set a commission per sale from links, and let the rest be history{" "}
        </p>
      </div>
      <div>
        <button onClick={() => history.push(PUBLISHER_SIGN_UP_ROUTE)}>
          Get Started
        </button>
        <p>I am a marketer ></p>
      </div>
    </div>
  );
};
