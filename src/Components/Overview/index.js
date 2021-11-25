import React from 'react'
import OverviewBox from '../OverviewBox';
import { OverviewContainer, OverviewWrapper, OverviewHeader } from './OverViewElements';

const Overview = () => {
    return (
        <OverviewContainer>
            <OverviewWrapper>
                <OverviewHeader>Overview - Today</OverviewHeader>
                <OverviewBox />
            </OverviewWrapper>
        </OverviewContainer>
    )
}

export default Overview;
