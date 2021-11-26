import React from 'react'
import { OverviewBoxContainer, OverviewBoxHeader, OverviewBoxWrapper, Subject, Icon, OverviewBoxStats, Stats,
    ChangeWrap, ChangeIcon, Change } from './OverviewBoxElements';

const OverviewBox = (props) => {
    return (
        <OverviewBoxContainer>
            <OverviewBoxWrapper>
                <OverviewBoxHeader>
                    <Subject>{props.label}</Subject>
                    <Icon src={props.icon} ></Icon>
                </OverviewBoxHeader>
                <OverviewBoxStats>
                    <Stats>{props.count}</Stats>
                    <ChangeWrap>
                        <ChangeIcon src={props.changeIcon} />
                        <Change positiveChange={props.positiveChange}>{props.percentChange}%</Change>
                    </ChangeWrap>
                </OverviewBoxStats>
            </OverviewBoxWrapper>
        </OverviewBoxContainer>
    )
}

export default OverviewBox;
