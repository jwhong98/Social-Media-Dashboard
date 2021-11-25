import React from 'react'
import { FollowBoxContainer, FollowBoxWrapper, FollowMedia, FollowCount, FollowLabel, FollowChange } from './FollowBoxElements';

const FollowBox = (props) => {
    return (
        <FollowBoxContainer color={props.color}>
            <FollowBoxWrapper>
                <FollowMedia>{props.username}</FollowMedia>
                <FollowCount>{props.count}</FollowCount>
                <FollowLabel>{props.label}</FollowLabel>
                <FollowChange positiveChange={props.positiveChange}>{props.change} Today</FollowChange>
            </FollowBoxWrapper>
        </FollowBoxContainer>
    )
}

export default FollowBox;
