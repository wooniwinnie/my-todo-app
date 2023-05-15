import React, { useState } from 'react';
import { styled } from 'styled-components';
import { MdDarkMode } from 'react-icons/md';

type Props = {};
type TodoMenu = string[];
export default function TodoHeader() {
    const todoMenu = ['All', 'Active', 'Completed'];
    return (
        <StyledContainer>
            <StyledMenuBox>
                {todoMenu.map((menu) => (
                    <StyledMenu>{menu}</StyledMenu>
                ))}
            </StyledMenuBox>
            <button>
                <MdDarkMode />
            </button>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
`;

const StyledMenuBox = styled.ul`
    display: flex;
    list-style: none;
`;

const StyledMenu = styled.li`
    padding: 0 1rem;
`;
