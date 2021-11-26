import React from 'react'
import FollowBox from '../FollowBox';
import { FollowContainer, FollowWrapper, FollowHeader, HeaderTextWrap, FollowTitle, FollowSubTitle, Toggle,
ToggleSubTitle, ToggleButton, FollowBody } from './FollowersElements';
import data from './followerData.json';
import Switch from '@mui/material/Switch';

const Followers = () => {

    const createBox = (info) => {
        return (
            <FollowBox 
                key={info.id}
                icon={info.icon}
                username={info.username}
                color={info.color}
                count={info.count}
                label={info.label}
                positiveChange={info.positiveChange}
                changeIcon={info.changeIcon}
                change={info.change}
            />
        )
    }
    return (
        <FollowContainer>
            <FollowWrapper>
                <FollowHeader>
                    <HeaderTextWrap>
                        <FollowTitle>Social Media Dashboard</FollowTitle>
                        <FollowSubTitle>Total Followers: 23,004</FollowSubTitle>
                    </HeaderTextWrap>
                    <Toggle>
                        <ToggleSubTitle>Dark Mode</ToggleSubTitle>
                        <Switch />
                    </Toggle>
                </FollowHeader>
                <FollowBody>
                    {data.map(createBox)}
                </FollowBody>
            </FollowWrapper>
        </FollowContainer>
    )
}

export default Followers;
