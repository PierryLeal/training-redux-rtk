import styled from "styled-components";

export const InputStyled = {
  Content: styled.input<{ $maxWidth: string }>`
    max-width: ${({ $maxWidth }) => $maxWidth ?? "unset"};
  `,
};
