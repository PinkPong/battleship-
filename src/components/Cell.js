import { StCell, StImg } from './styled-ui';

const Cell = ({cellData, rowIndex, colIndex}) => {
    return <StCell $isClickable={cellData === null} data-row={rowIndex} data-col={colIndex}>
        {cellData === 0 && <StImg alt='miss' src={`./assets/miss.png`} />}
        {cellData === 1 && <StImg alt='hit' src={`./assets/hit.png`} />}
    </StCell>
}

export { Cell };
