import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    onAdd: (todo: { id: string; text: string; status: string }) => void;
};

export default function AddTodo({ onAdd }: Props) {
    const [text, setText] = useState('');
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim().length === 0) {
            return;
        }
        onAdd({ id: uuidv4(), text, status: 'active' });
        setText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={text}
                placeholder='추가하기'
                onChange={handleOnChange}
            />
            <button>추가</button>
        </form>
    );
}
