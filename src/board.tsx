import * as React from 'react';
import { useState } from 'react';

import { Square } from './square'

export const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState('Next Player: X');

    const RenderSquare = ( props: { i: number } ) => {
        return <Square value={ props.i } /> 
    };

    return (
        <>
            <div className="status">{ status }</div>
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