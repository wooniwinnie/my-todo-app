import React from 'react';

type Props = {
    filters: string[];
    filter: string;
    onFilterChange: (filter: string) => void;
};

export default function Header({ filters, filter, onFilterChange }: Props) {
    return (
        <ul>
            {filters.map((value, index) => (
                <li key={index}>
                    <button onClick={() => onFilterChange(value)}>
                        {value}
                    </button>
                </li>
            ))}
        </ul>
    );
}
