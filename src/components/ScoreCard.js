import { StScoreCard, StSpacer } from "./styled-ui";

const ScoreCard = ({ id, score }) => {
    return <StScoreCard $bgClr={id === 1 ? 'orange' : 'mediumseagreen'}>
        <h1>{`0${score}`}</h1>
        <StSpacer />
        <h2>{`player ${id}`}</h2>
    </StScoreCard>
}

export { ScoreCard };
