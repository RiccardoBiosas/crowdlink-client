import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { GlobalButton } from '../shared/styles'
import { PUBLISHER_WORKFLOW_ROUTE } from '../../routes-config'


export const PublisherCampaignHistory = () => {
    const history = useHistory()

    return(
        <div>
            <div>
                <GlobalButton onClick={() => history.push(PUBLISHER_WORKFLOW_ROUTE)}>Create</GlobalButton>
            </div>
        </div>

    )
}