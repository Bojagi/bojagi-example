// Just some comment
import React from 'react';
import styled, { css } from 'styled-components';

const outlinedStyle = css`
color: rgb(30, 136, 175);
background-color: transparent;
&:hover {
  background-color: #af1e6630;
}
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  font-size: 1em;
  background-color: rgb(30, 136, 175);
  color: #fff;
  border: 2px solid rgb(30, 136, 175);
  
  &:hover {
    background-color: rgb(30, 136, 175);
  }

  ${props => props.variant === 'outline' && outlinedStyle}
  ${props => props.variant === 'dotted' && css`
    ${outlinedStyle}
    border-style: dotted;
  `}

  outline: 0;
  border-radius: 3px;
  transition: background-color 0.5s;

  
`;
