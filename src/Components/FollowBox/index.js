import React from 'react'
import { FollowBoxContainer, FollowBoxWrapper, FollowMedia, FollowCount, FollowLabel, FollowChange } from './FollowBoxElements';

const FollowBox = (props) => {
    return (
        <FollowBoxContainer>
            <FollowBoxWrapper>
                <FollowMedia>@nathanF</FollowMedia>
                <FollowCount>1987</FollowCount>
                <FollowLabel>FOLLOWERS</FollowLabel>
                <FollowChange>12 Today</FollowChange>
            </FollowBoxWrapper>
        </FollowBoxContainer>
    )
}

export default FollowBox;
