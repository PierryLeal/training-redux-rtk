import styled from "styled-components";

export const InputStyled = {
  Content: styled.input<{ $maxWidth: string; $isDisabled?: boolean }>`
    max-width: ${({ $maxWidth }) => $maxWidth ?? "unset"};
    opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  `,
};
