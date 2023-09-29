import styled from 'styled-components';

/***
 * layout components
 */

const StWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 375px) {
        gap: 0px;
        justify-content: flex-start;
    }
`;

const StBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 5px solid orange;
    @media (max-width: 768px) {
        order: -1;
    }
    @media (max-width: 375px) {
        gap: 0px;
        max-width: 100%;
        width: 100%;
    }

`;

const StRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    &:first-child {
        border-top: 1px solid #000;
    }
`;

const StCell = styled.div`
    width: 40px;
    height: 40px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
    &:hover {
        background-color: ${props => props.$isClickable ? 'orange' : 'transparent'};
        opacity: ${props => props.$isClickable ? '0.5' : '1'};
    }
    &:first-child {
        border-left: 1px solid #000;
    }
    @media (max-width: 768px) {
        width: 75px;
        height: 75px;
    }
    @media (max-width: 375px) {
        width: 36.5px;
        height: 36.5px;
    }
`;

const StList = styled.div`
    width: ${props => props.$wd ? props.$wd : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        padding: 5px;
    }
    @media (max-width: 375px) {
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        padding: 0;
    }
`;

const StScoreBoard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        width: 33%;
    }
    @media (max-width: 375px) {
        width: 100%;
        max-width: 100%;    
    }
`;

const StScoreCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    background-color: ${props => props.$bgClr ? props.$bgClr : '#ccc'};
}`;

const StShipsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 768px) {
        width: 66%;
        align-items: flex-start;
        flex-wrap: wrap;
        max-height: 150px;
    }
    @media (max-width: 375px) {
        width: 100%;
        max-width: 100%;
        max-height: 100px;
    }
`;

const StShip = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 5px;
    @media (max-width: 375px) {
        width: 75px;
        gap: 5px;
    }
`;

const StImg = styled.img`
    width: inherit;
    height: inherit;
`;

const StSpacer = styled.div`
    width: 90%;
    height: 1px;
    background-color: #000;
`;

export {
    StWrapper,
    StBoard,
    StRow,
    StCell,
    StList,
    StScoreBoard,
    StScoreCard,
    StShipsList,
    StShip,
    StImg,
    StSpacer
};
