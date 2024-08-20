import React from 'react';
import Cell from './cell';

const Board = (props) => {
    return (
        <div className="game-board">
            {props.cells.map((cell, index) => {
                return (
                    <Cell
                        key={index}
                        value={cell}
                        onClick={() => props.onClick(index)}
                        className={cell === 'X' ? 'is-x' : cell === 'O' ? 'is-o' : ''}
                    />
                );
            })}
        </div>
    );
};

export default Board;
