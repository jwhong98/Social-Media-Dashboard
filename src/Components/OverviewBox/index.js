import React from 'react'
import { OverviewBoxContainer, OverviewBoxHeader, OverviewBoxWrapper, Subject, Icon, OverviewBoxStats, Stats,
    ChangeWrap, ChangeIcon, Change } from './OverviewBoxElements';

const OverviewBox = (props) => {
    return (
        <OverviewBoxContainer dark={props.dark}>
            <OverviewBoxWrapper>
                <OverviewBoxHeader>
                    <Subject dark={props.dark}>{props.label}</Subject>
                    <Icon src={props.icon} ></Icon>
                </OverviewBoxHeader>
                <OverviewBoxStats>
                    <Stats dark={props.dark}>{props.count}</Stats>
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
