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
    @media (max-width: 320px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 5px solid orange;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

const StRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const StCell = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
    &:hover {
        background-color: ${props => props.$isClickable ? 'orange' : 'transparent'};
    }
`;

const StList = styled.div`
    width: ${props => props.$wd ? props.$wd : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 900px) {
        max-width: 90vw;
        width: 90vw;
    }
`;

const StScoreCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: ${props => props.$bgClr ? props.$bgClr : '#ccc'};
}`;

const StShip = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px dotted #f00;
`;

const StImg = styled.img`
    width: inherit;
    height: inherit;
`;

const StSpacer = styled.div`
    width: 100%;
    height: 1px;
    background-color: #000;
    margin: 10px 0;
`;

export {
    StWrapper,
    StBoard,
    StRow,
    StCell,
    StList,
    StScoreCard,
    StShip,
    StImg,
    StSpacer
};
