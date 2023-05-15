import React from 'react';

type Todo = {
    id: string;
    text: string;
    status: string;
};

type Props = {
    todo: Todo;
    onUpdate: (updated: Todo) => void;
    onDelete: (deleted: Todo) => void;
};

export default function Todo({ todo, onUpdate, onDelete }: Props) {
    return (
        <li>
            <input type='checkbox' />
            <label htmlFor=''>{todo.text}</label>
        </li>
    );
}
