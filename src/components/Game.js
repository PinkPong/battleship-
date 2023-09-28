import { useState } from 'react';
import { StList, StWrapper } from './styled-ui';

import { Board } from './Board';
import { Ship } from './Ship';
import { ScoreCard } from './ScoreCard';

const gameConfig = {
    shipTypes: {
        carrier: { size: 5, count: 1 },
        battleship: { size: 4, count: 1 },
        cruiser: { size: 3, count: 1 },
        submarine: { size: 3, count: 1 },
        destroyer: { size: 2, count: 1 }
    },
    layout: [
        { ship: 'carrier', positions: [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
        { ship: 'battleship', positions: [[5, 2], [5, 3], [5, 4], [5, 5]] },
        { ship: 'cruiser', positions: [[8, 1], [8, 2], [8, 3]] },
        { ship: 'submarine', positions: [[3, 0], [3, 1], [3, 2]] },
        { ship: 'destroyer', positions: [[0, 0], [1, 0]] }
    ]
}

const Game = () => {
    const [battleFiled, updateBattleField] = useState(Array(10).fill(Array(10).fill(null)));

    const handleBoardClcik = () => {
        console.info('board clicked');
    }

    return <StWrapper>
        <StList $wd='20%'>
        <ScoreCard key={'player-1-score'} score='00' label='player 1' id={1}/>
        <ScoreCard key={'player-2-score'} score='00' label='player 2' id={2}/>
        {Object.keys(gameConfig.shipTypes).map(shipId => {
            const ship = gameConfig.shipTypes[[shipId]]; 
            console.info('ship', shipId, ship);
            return <Ship key={`ship-${shipId}`} shipId={shipId} size={ship.size} hits={0} />
        })}
        </StList>
        <Board battleFiled={battleFiled} onClick={handleBoardClcik}/>
    </StWrapper>
}

export { Game };
