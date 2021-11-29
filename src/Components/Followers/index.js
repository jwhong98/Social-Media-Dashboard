import React, { useState } from 'react';
import FollowBox from '../FollowBox';
import { FollowContainer, FollowWrapper, FollowHeader, HeaderTextWrap, FollowTitle, FollowSubTitle, Toggle,
ToggleSubTitle, FollowBody, FollowFooter, FooterText, FooterLink } from './FollowersElements';
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
            <FollowFooter>
                <FooterText dark={dark}>
                Challenge by 
                <FooterLink href="https://www.frontendmentor.io?ref=challenge" target="_blank" dark={dark}> Frontend Mentor</FooterLink>. 
                Coded by 
                <FooterLink href="#" dark={dark}> Jaewon Hong</FooterLink>.
                </FooterText>
            </FollowFooter>
        </FollowContainer>
    )
}

export default Followers;
