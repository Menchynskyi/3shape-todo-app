import React, { useContext } from 'react';
import { TodoContext } from '../../App';

export const ActiveItem = () => {
    const { active } = useContext(TodoContext);
    return (
        <div>
            <p>{active.name}</p>
            <p>{active.description}</p>
        </div>
    );
};
