import React from "react";
import styled from "styled-components";
import { StyledTableWrapper } from "./Table";

const TableRowStyle = styled.div`
  > div {
    display: grid;
    ${({ col }) => {
      if (Array.isArray(col)) {
        return `grid-template-columns: ${col.join(" ")}`;
      } else if (Number.isInteger(col)) {
        return `grid-template-columns: repeat(${col}, 1fr);`;
      }
    }}
  }
  padding: 12px 6px;
  ${({ center }) => center && `text-align: center;`}

  ${StyledTableWrapper} {
    transform-origin: top;
    ${({ hideSubTable }) => hideSubTable && `display: none;`}
  }

  &:first-of-type {
    font-weight: bold;
    border-bottom: 1px solid #cbcbcb;
  }
`;

const TableRow = ({ children, col, onClick, hideSubTable }) => {
  return (
    <TableRowStyle col={col} hideSubTable={hideSubTable}>
      <div onClick={onClick}>{children}</div>
    </TableRowStyle>
  );
};

export default TableRow;
