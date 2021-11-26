import React from 'react'
import { FollowBoxContainer, FollowBoxWrapper, FollowHead, FollowMedia, FollowIcon, FollowCount, FollowLabel, FollowChangeIcon, FollowChange } from './FollowBoxElements';

const FollowBox = (props) => {
    return (
        <FollowBoxContainer color={props.color}>
            <FollowBoxWrapper>
                <FollowHead>
                    <FollowIcon src={props.icon} />
                    <FollowMedia>{props.username}</FollowMedia>
                </FollowHead>
                <FollowCount>{props.count}</FollowCount>
                <FollowLabel>{props.label}</FollowLabel>
                <FollowHead>
                    <FollowChangeIcon src={props.changeIcon} />
                    <FollowChange positiveChange={props.positiveChange}>{props.change} Today</FollowChange>
                </FollowHead>
            </FollowBoxWrapper>
        </FollowBoxContainer>
    )
}

export default FollowBox;
