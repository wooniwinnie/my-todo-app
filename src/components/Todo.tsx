import React, { ChangeEvent, useState } from 'react';

type Props = {
    todo: Todo;
    onDelete: (deleted: Todo) => void;
    onUpdate: (updated: Todo) => void;
};

type Todo = {
    id: string;
    text: string;
    status: string;
};

export default function Todo({ todo, onDelete, onUpdate }: Props) {
    const { text, status } = todo;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const status = e.target.checked ? 'Completed' : 'Active';
        onUpdate({ ...todo, status });
    };
    const handleDelete = () => {
        onDelete(todo);
    };
    return (
        <li>
            <input
                type='checkbox'
                id='checkbox'
                checked={todo.status === 'Completed'}
                onChange={handleChange}
            />
            <label htmlFor=''>{todo.text}</label>
            <button onClick={handleDelete}>Del</button>
        </li>
    );
}
