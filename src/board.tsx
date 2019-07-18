import * as React from 'react';
import { useState } from 'react';

import { Square } from './square'

export const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i: number) => {
        const copiedSquares = squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        copiedSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(copiedSquares);
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }

    const RenderSquare = ( props: { i: number } ) => {
        return <Square
            value={ squares[props.i] }
            onClick={ () => { handleClick(props.i) } } /> 
    };

    const RenderStatus = () => {
        const winner = calculateWinner(squares);
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
        return <div className="status"> { status } </div>
    };

    return (
        <>
            <RenderStatus />
            <div className="board-row">
                <RenderSquare i={ 0 } />
                <RenderSquare i={ 1 } />
                <RenderSquare i={ 2 } />
            </div>
            <div className="board-row">
                <RenderSquare i={ 3 } />
                <RenderSquare i={ 4 } />
                <RenderSquare i={ 5 } />
            </div>
            <div className="board-row">
                <RenderSquare i={ 6 } />
                <RenderSquare i={ 7 } />
                <RenderSquare i={ 8 } />
            </div>
        </>
    );
};