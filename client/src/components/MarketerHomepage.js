import React from 'react'
import {useHistory} from 'react-router-dom'


export const MarketerHomepage = () => {
    const history = useHistory()


    return(
        <div>
        <div>
          <h1> Join a referral a campaign today</h1>
        </div>
        <div>
          <p>
          earn commission for every sale coming from your referral link
          </p>
        </div>
        <div>
          <button onClick={() => history.push("/marketer/feed")}>
            Get Started
          </button>
          <p>I am a creator  ></p>
        </div>
      </div>
    )
}