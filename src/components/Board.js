import { StBoard, StRow } from './styled-ui';
import { Cell } from './Cell';

const Board = ({ battleField, turnHandler }) => {
    return <StBoard onClick={turnHandler}>
        {
            battleField.map((row, rowIndex) => {
                return <StRow key={`row-${rowIndex}`}>
                    {
                        row.map((cellData, colIndex) => {
                        return <Cell key={`cell-${rowIndex}-${colIndex}`} {...{rowIndex, colIndex, cellData}} />
                        })
                    }
                    </StRow>                   
            }
            )
        }
    </StBoard>
}

export { Board };
