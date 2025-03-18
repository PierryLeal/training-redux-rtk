import styled from "styled-components";
import { PageNumberProps } from "./Pagination.types";

export const PageContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
`;

export const PageNumbers = styled.span<PageNumberProps>`
  font-size: 1rem;
  height: 1.7rem;
  width: 1.7rem;
  text-align: center;
  align-content: center;
  margin: 0 0.2rem;
  color: ${({ theme, $selected }) =>
    $selected ? theme.primary.dark : "unset"};

  ${({ theme, $invalid }) =>
    !$invalid &&
    `
  &:hover {
    background-color: ${theme.primary.light};
    border-radius: 50%;
    cursor: pointer;
  }
  `}
`;

export const PageArrow = styled.span`
  display: flex;
  font-size: 1.4rem;
  height: 1.7rem;
  width: 1.7rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 0.2rem;
`;
