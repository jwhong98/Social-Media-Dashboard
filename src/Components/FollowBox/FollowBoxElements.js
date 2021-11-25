import styled from "styled-components";

export const FollowBoxContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: hsl(227, 47%, 96%);
    border-radius: 5px;
    border-top: 5px solid ${props => props.color};
    margin-bottom: 2rem;
`;

export const FollowBoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FollowMedia = styled.p`
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
    color: hsl(228, 12%, 44%)
`;

export const FollowCount = styled.h1`
    margin-bottom: 0.5rem;
    color: hsl(230, 17%, 14%);
`;

export const FollowLabel = styled.p`
    margin-bottom: 2rem;
    color: hsl(228, 12%, 44%);
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const FollowChange = styled.p`
    margin-bottom: 2rem;
    font-weight: 700;
    color: ${props => (props.positiveChange ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
`;