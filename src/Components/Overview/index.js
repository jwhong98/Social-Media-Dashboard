import React from 'react'
import OverviewBox from '../OverviewBox';
import { OverviewContainer, OverviewWrapper, OverviewHeader } from './OverViewElements';
import data from './overviewStats.json';

const Overview = () => {

    const createBox = (stats) => {
        return (
            <OverviewBox 
                key={stats.id}
                label={stats.label}
                icon={stats.icon}
                count={stats.count}
                positiveChange={stats.positiveChange}
                percentChange={stats.percentChange}
            />
        )
    }
    return (
        <OverviewContainer>
            <OverviewWrapper>
                <OverviewHeader>Overview - Today</OverviewHeader>
                {data.map(createBox)}
            </OverviewWrapper>
        </OverviewContainer>
    )
}

export default Overview;
