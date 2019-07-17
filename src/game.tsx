import * as React from 'react';

import { Board } from './board'

export const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div> status </div>
                <ol> todo </ol>
            </div>
        </div>


    );
};