import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

type Filters = string[];

const filters: Filters = ['All', 'Active', 'Completed'];

function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <div>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={setFilter}
            />
            <TodoList filter={filter} />
        </div>
    );
}

export default App;
