import styled from "styled-components";

const Grid = styled.div`
  position: fixed;
  display: flex;
  background-color: #e4d9a6;
  float: left;
  font-size: 10px;
  box-sizing: border-box;
  padding: 1px;
  border-radius: 10px;
  transform: translateY(-80%);
  transition: 2s ease;

  &:hover {
    transform: translateY(0);
    transition: 2s ease;
  }
`;

export default Grid;
