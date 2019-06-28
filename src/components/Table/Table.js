import React, { cloneElement, Children } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  display: grid;
`;

const Table = ({ children, col }) => {
  return (
    <StyledTable>
      {Children.map(children, child => cloneElement(child, { col: col }))}
    </StyledTable>
  );
};

export default Table;
