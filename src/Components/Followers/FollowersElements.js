import styled from "styled-components";

export const FollowContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem;
    background: ${props => props.dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"};
    
    @media screen and (min-width: 640px) {
       width: 100vw;
       display: flex;
       justify-content: center;
       flex-direction: column;
       align-items: center;
    }
`;

export const FollowWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 640px) {
       width: 80%;
    }
`;

export const FollowHeader = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media screen and (min-width: 640px) {
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 1rem;
    }
`;

export const HeaderTextWrap = styled.div`
    border-bottom: 1px solid hsl(228, 12%, 44%);

    @media screen and (min-width: 640px) {
        border-bottom: none;
        
    }
`;

export const FollowTitle = styled.h1`
    color: ${props => props.dark ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"};
`;

export const FollowSubTitle = styled.h3`
    color: ${props => props.dark ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
    margin-bottom: 2rem;
`;

export const Toggle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    align-items: center;

    @media screen and (min-width: 640px) {
        justify-content: unset;
        width: auto;
        justify-content: flex-end;
        margin-bottom: auto;
        margin-top: 0;
    }
`;

export const ToggleSubTitle = styled.h3`
    color: ${props => props.dark ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
`;

export const ToggleButton = styled.button`

`;

export const FollowBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 640px) {
        flex-direction: row;
        align-items: unset;
        gap: 2rem;
    }
`;