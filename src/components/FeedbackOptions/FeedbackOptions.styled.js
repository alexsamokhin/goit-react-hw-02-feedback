import styled from "styled-components";

export const FeedbackBtn = styled.button`
  width: 90px;
  padding: 3px 5px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid rgb(170, 170, 170);
  cursor: pointer;
  &:hover {
    background-color: rgb(170, 170, 170);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
