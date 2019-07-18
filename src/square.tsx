import * as React from 'react';

export const Square = ( props: { value: number, onClick: () => void } ) => (
    <button className="square" onClick={ props.onClick }>
        { props.value }
    </button>
);