import { StImg, StShip } from './styled-ui';

const Ship = ({ shipId, size, hits }) => {
    const shipHealth = [...Array(hits).fill(1), ...Array(size - hits).fill(0)];

    return <StShip>
        <StImg alt={shipId} src={`./assets/${shipId}Shape.png`} />
        {
            shipHealth.map((hit, idx) => hit ? 
                <img alt='hit' key={`ship-${shipId}-health-${idx}`} src={`./assets/hitSmall.png`} width={15}/>
                : <img alt='miss' key={`ship-${shipId}-health-${idx}`} src={`./assets/missSmall.png`} width={15}/>
            )
        }
    </StShip>
}

export { Ship };
