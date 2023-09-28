import { StBoard, StRow } from './styled-ui';
import { Cell } from './Cell';

const Board = ({ battleFiled, clickHandler }) => {
    return <StBoard>
        {
            battleFiled.map((row, rowIndex) => {
                return <StRow key={`row-${rowIndex}`}>
                    {
                        row.map((cell, colIndex) => {
                        return <Cell key={`cell-${rowIndex}-${colIndex}`} clickHandler={clickHandler} />
                        })
                    }
                    </StRow>                   
            }
            )
        }
    </StBoard>
}

export { Board };
