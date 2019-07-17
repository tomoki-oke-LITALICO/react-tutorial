import * as React from 'react';
import { useState } from 'react';

export const Square = ( props: { value: number } ) => {

    const [value, setValue] = useState(null);

    return (
        <button className="square" onClick={() => { setValue('X'); }}>
            { value }
        </button>
    );
};