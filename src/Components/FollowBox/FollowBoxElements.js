import styled from "styled-components";

export const FollowBoxContainer = styled.div`
    width: 100%;
    display: flex;
    background: ${({dark}) => (dark ? 'hsl(228, 28%, 20%)' : 'hsl(227, 47%, 96%)')};
    border-radius: 5px;
    border-top: 5px solid ${props => props.color};
    margin-bottom: 2rem;

    @media screen and (min-width: 640px) {
        flex-grow: 1;
        margin-bottom: 0;
    }
`;

export const FollowBoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FollowHead = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const FollowMedia = styled.p`
    font-weight: 700;
    color: ${({dark}) => (dark ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)')};
`;

export const FollowIcon = styled.img`
    margin-right: .5rem;
`;

export const FollowCount = styled.h1`
    margin-bottom: 0.5rem;
    color: ${({dark}) => (dark ? 'hsl(0, 0%, 100%)' : 'hsl(230, 17%, 14%)')};

    @media screen and (min-width: 640px){
        font-size: 4rem;
    }
`;

export const FollowLabel = styled.p`
    color: ${({dark}) => (dark ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)')};
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const FollowChangeIcon = styled.img`
    margin-right: 3px;
`;

export const FollowChange = styled.p`
    font-weight: 700;
    color: ${props => (props.positiveChange ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
`;