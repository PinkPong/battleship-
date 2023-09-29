import { useMemo, useState } from 'react';
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
    const [battleField, updateBattleField] = useState(Array(10).fill(Array(10).fill(null)));
    const [ships, updateShips] = useState([
        ...gameConfig.layout.map(ship => (
            {
                ...ship,
                hits: 0,
                size: gameConfig.shipTypes[ship.ship].size
            })
        )])
    const [player1Score, updatePlayer1Score] = useState(0);

    const shipsMap = useMemo(() => {
        const map = {};
        ships.forEach(ship => {
            ship.positions.forEach(([row, col]) => {
                map[`${row}-${col}`] = ship;
            })
        })
        return map;
    }, [])

    const handleBoardClick = (evt) => {
        const { row, col } = evt.target.dataset;
        console.info('----board click', row, col);
        if (row !== undefined || col !== undefined) {
            const hitTarget = shipsMap[`${row}-${col}`];
            if (hitTarget) {
                const newShips = [...ships];
                const ship = newShips.find(ship => ship.ship === hitTarget.ship);
                ship.hits += 1;
                if (ship.hits === ship.size) {
                    updatePlayer1Score(player1Score + 1);
                }
                updateShips(newShips);
            }
            const newBattleField = [...battleField];
            newBattleField[row] = [...battleField[row]];
            newBattleField[row][col] = hitTarget ? 1 : 0;
            updateBattleField(newBattleField);
        }
    }

    return <>
        <StWrapper>
            <StList $wd='20%'>
                <ScoreCard key={'player-1-score'} score={player1Score} label='player 1' id={1} />
                <ScoreCard key={'player-2-score'} score='00' label='player 2' id={2} />
                {ships.map(ship => {
                    const { ship: shipId, size, hits } = ship;
                    console.info('ship', ship)
                    return <Ship key={`ship-${shipId}`} {...{ shipId, size, hits }} />
                })}
            </StList>
            <Board battleField={battleField} turnHandler={handleBoardClick} />
        </StWrapper>

    </>
}

export { Game };
