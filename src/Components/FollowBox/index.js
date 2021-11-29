import React from 'react'
import { FollowBoxContainer, FollowBoxWrapper, FollowHead, FollowMedia, FollowIcon, FollowCount, FollowLabel, FollowChangeIcon, FollowChange } from './FollowBoxElements';

const FollowBox = (props) => {
    return (
        <FollowBoxContainer color={props.color} dark={props.dark}>
            <FollowBoxWrapper>
                <FollowHead>
                    <FollowIcon src={props.icon} />
                    <FollowMedia dark={props.dark}>{props.username}</FollowMedia>
                </FollowHead>
                <FollowCount dark={props.dark}>{props.count}</FollowCount>
                <FollowLabel dark={props.dark}>{props.label}</FollowLabel>
                <FollowHead>
                    <FollowChangeIcon src={props.changeIcon} />
                    <FollowChange positiveChange={props.positiveChange}>{props.change} Today</FollowChange>
                </FollowHead>
            </FollowBoxWrapper>
        </FollowBoxContainer>
    )
}

export default FollowBox;
