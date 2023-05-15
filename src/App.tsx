import React from 'react';
import './App.css';

import styled from 'styled-components';
import TodoHeader from './components/Header/TodoHeader';
import TodoList from './components/Section/TodoList';

function App() {
    return (
        <StyledDiv>
            <header>
                <TodoHeader />
            </header>
            <TodoList />
        </StyledDiv>
    );
}

export default App;

// Style Component
const StyledDiv = styled.div`
    width: 40rem;
    height: 40rem;
    margin: auto;
    background-color: orange;
`;
