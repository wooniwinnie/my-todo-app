import React, { useState } from 'react';
import './App.css';

type Filter = string[];

const filters = ['all', 'active', 'completed'];
function App() {
    const [filter, setFilter] = useState<Filter>();
    return <div></div>;
}

export default App;
