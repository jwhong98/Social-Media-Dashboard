import React from 'react'
import FollowBox from '../FollowBox';
import { FollowContainer, FollowWrapper, FollowHeader, HeaderTextWrap, FollowTitle, FollowSubTitle, Toggle,
ToggleButton, FollowBody } from './FollowersElements';

const Followers = () => {
    return (
        <FollowContainer>
            <FollowWrapper>
                <FollowHeader>
                    <HeaderTextWrap>
                        <FollowTitle>Social Media Dashboard</FollowTitle>
                        <FollowSubTitle>Total Followers: 23,004</FollowSubTitle>
                    </HeaderTextWrap>
                    <Toggle>
                        <FollowSubTitle>Dark Mode</FollowSubTitle>
                        <ToggleButton></ToggleButton>
                    </Toggle>
                </FollowHeader>
                <FollowBody>
                    <FollowBox />
                </FollowBody>
            </FollowWrapper>
        </FollowContainer>
    )
}

export default Followers;
