import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

type Props = {
    filter: string;
};

type AllTodo = {
    id: string;
    text: string;
    status: string;
};

export default function TodoList({ filter }: Props) {
    const [todos, setTodos] = useState<AllTodo[]>([
        {
            id: '123',
            text: '밥하기',
            status: 'active',
        },
        {
            id: '124',
            text: '장보기',
            status: 'active',
        },
    ]);
    const handleAdd = (todo: AllTodo): void => {
        setTodos([...todos, todo]);
    };
    const handleUpdate = (updated: AllTodo) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    };
    const handleDelete = (deleted: AllTodo) =>
        setTodos(todos.filter((t) => t.id !== deleted.id));

    const filtered = getFilteredItems(todos, filter);
    return (
        <div>
            <ul>
                {filtered.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </div>
    );
}

function getFilteredItems(todos: AllTodo[], filter: string): AllTodo[] {
    if (filter === 'All') {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}
