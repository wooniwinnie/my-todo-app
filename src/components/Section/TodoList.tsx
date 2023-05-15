import React, { useState } from 'react';

import AddTodo from './AddTodo';
import Todo from './Todo';

type Props = {};
type TodoMenu = {
    id: string;
    text: string;
    status: string;
};

export default function TodoList({}: Props) {
    const [todos, setTodos] = useState<TodoMenu[]>([
        {
            id: '123',
            text: '공부하기',
            status: 'active',
        },
        {
            id: '124',
            text: '장보기',
            status: 'active',
        },
    ]);
    const handleAdd = (todo: {
        id: string;
        text: string;
        status: string;
    }): void => {
        // todo 추가하기
        setTodos([...todos, todo]);
    };
    const handleUpdate = (updated: TodoMenu) =>
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    const handleDelete = (deleted: TodoMenu) =>
        setTodos(todos.filter((t) => t.id !== deleted.id));
    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}
