import React, { useState } from 'react';
import FollowBox from '../FollowBox';
import { FollowContainer, FollowWrapper, FollowHeader, HeaderTextWrap, FollowTitle, FollowSubTitle, Toggle,
ToggleSubTitle, FollowBody } from './FollowersElements';
import data from './followerData.json';
import Switch from '@mui/material/Switch';
import Overview from '../Overview';

const Followers = () => {

    const [dark, setDark] = useState(false);

    const setTheme = () => {
        setDark(!dark);
    }

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
                dark={dark}
            />
        )
    }
    return (
        <FollowContainer dark={dark}>
            <FollowWrapper>
                <FollowHeader>
                    <HeaderTextWrap>
                        <FollowTitle dark={dark}>Social Media Dashboard</FollowTitle>
                        <FollowSubTitle dark={dark}>Total Followers: 23,004</FollowSubTitle>
                    </HeaderTextWrap>
                    <Toggle>
                        <ToggleSubTitle dark={dark}>Dark Mode</ToggleSubTitle>
                        <Switch onChange={setTheme}/>
                    </Toggle>
                </FollowHeader>     
                <FollowBody>
                    {data.map(createBox)}
                </FollowBody>
            </FollowWrapper>
            <Overview dark={dark}/>
        </FollowContainer>
    )
}

export default Followers;
