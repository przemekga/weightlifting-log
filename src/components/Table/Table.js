import React, { cloneElement, Children } from "react";
import styled from "styled-components";

export const StyledTable = styled.div`
  display: grid;
`;

export const StyledTableWrapper = styled.div`
  grid-column: 1 / -1;

  > ${StyledTable} {
    margin-left: 30px;
  }
`;

const Table = ({ children, col }) => {
  return (
    <StyledTableWrapper>
      <StyledTable>
        {Children.map(children, child => cloneElement(child, { col: col }))}
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
