import React from 'react'
import { OverviewBoxContainer, OverviewBoxHeader, OverviewBoxWrapper, Subject, Icon, OverviewBoxStats, Stats, Change } from './OverviewBoxElements';

const OverviewBox = () => {
    return (
        <OverviewBoxContainer>
            <OverviewBoxWrapper>
                <OverviewBoxHeader>
                    <Subject>Page Views</Subject>
                    <Icon></Icon>
                </OverviewBoxHeader>
                <OverviewBoxStats>
                    <Stats>87</Stats>
                    <Change>3%</Change>
                </OverviewBoxStats>
            </OverviewBoxWrapper>
        </OverviewBoxContainer>
    )
}

export default OverviewBox;
