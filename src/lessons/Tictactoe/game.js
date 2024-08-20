import React, { useState } from 'react';
import Board from './board';
import { calculateWinner } from '../../helpers/main';
import { Button } from '@mui/material';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    return (
        <div>
            {winner && <div className="game-winner">Winner is {winner}</div>}
            <Board cells={board} onClick={handleClick} />
            <Button variant="outlined" color="error" onClick={() => setBoard(Array(9).fill(null))}>
                Reset game
            </Button>
        </div>
    );
};

export default Game;
