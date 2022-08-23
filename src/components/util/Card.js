import styled from "styled-components";

const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  border: 1px solid #eaeaea;
  border-radius: 10px;

  &:hover {
    color: white;
    border-color: #0070f3;
    cursor:pointer;
  }
`;

export default Card;
