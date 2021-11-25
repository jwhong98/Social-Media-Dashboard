import styled from "styled-components";

export const OverviewBoxContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: hsl(227, 47%, 96%);
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 1.5rem;
`;

export const OverviewBoxWrapper = styled.div`

`;

export const OverviewBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    align-items: center;
`;

export const Subject = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: hsl(228, 12%, 44%);
`;

export const Icon = styled.img`

`;

export const OverviewBoxStats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Stats = styled.h1`
    color: hsl(230, 17%, 14%);
`;

export const Change = styled.p`
font-weight: 700;
    color: ${props => (props.positiveChange ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
`;