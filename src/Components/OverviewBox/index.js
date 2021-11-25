import React from 'react'
import { OverviewBoxContainer, OverviewBoxHeader, OverviewBoxWrapper, Subject, Icon, OverviewBoxStats, Stats, Change } from './OverviewBoxElements';

const OverviewBox = (props) => {
    return (
        <OverviewBoxContainer>
            <OverviewBoxWrapper>
                <OverviewBoxHeader>
                    <Subject>{props.label}</Subject>
                    <Icon src={props.img} ></Icon>
                </OverviewBoxHeader>
                <OverviewBoxStats>
                    <Stats>{props.count}</Stats>
                    <Change positiveChange={props.positiveChange}>{props.percentChange}%</Change>
                </OverviewBoxStats>
            </OverviewBoxWrapper>
        </OverviewBoxContainer>
    )
}

export default OverviewBox;
