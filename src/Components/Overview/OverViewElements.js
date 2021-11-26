import styled from "styled-components";

export const OverviewContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem;

    @media screen and (min-width: 640px) {
        width: 100vw;
        display: flex;
        justify-content: center;
    }
`;

export const OverviewWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 640px) {
        width: 80%;
        justify-content: center;
    }
`;

export const OverviewHeader = styled.h1`
    color: hsl(228, 12%, 44%);
    margin-bottom: 2rem;

    @media screen and (min-width: 640px) {
        align-items: flex-start;
    }
`;

export const OverviewBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
`;