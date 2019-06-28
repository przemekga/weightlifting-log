import React from "react";
import styled from "styled-components";

const TableRowStyle = styled.div`
  display: grid;
  ${({ col }) => {
    if (Array.isArray(col)) {
      return `grid-template-columns: ${col.join(" ")}`;
    } else if (Number.isInteger(col)) {
      return `grid-template-columns: repeat(${col}, 1fr);`;
    }
  }}
  padding: 12px 6px;
  &:first-of-type {
    font-weight: bold;
    border-bottom: 1px solid #cbcbcb;
  }
`;

const TableRow = ({ children, col }) => {
  return <TableRowStyle col={col}>{children}</TableRowStyle>;
};

export default TableRow;
