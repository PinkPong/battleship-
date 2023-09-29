import { StScoreCard, StSpacer } from "./styled-ui";

const ScoreCard = ({ score, label, id }) => {
    return <StScoreCard $bgClr={id === 1 ? 'orange' : 'green'}>
        <div>{`0${score}`}</div>
        <StSpacer />
        <div>{label}</div>
    </StScoreCard>
}

export { ScoreCard };
