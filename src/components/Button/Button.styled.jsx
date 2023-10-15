import styled from "@emotion/styled"

export const Btn = styled.button`

display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${props => {
     
     return props.selected ?  '#1976d2': '#e2e5e8';

  } }; 
  // color: ${props => (props.selected ? "#fff" : 'inherit')};

 
  &:hover {

    background-color: #1976d2;
    color: #fff;

  }

  &:active {

    background-color: #1565c0;
    color: #fff;
  }

`
