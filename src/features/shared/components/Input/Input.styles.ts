import styled from "styled-components";

export const InputStyled = {
  Content: styled.span<{ $maxWidth: string; $isDisabled?: boolean }>`
    display: flex;
    position: relative;
    max-width: ${({ $maxWidth }) => $maxWidth ?? "unset"};
    opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
    border-radius: 0.2rem;
    border: 1px solid ${({ theme }) => theme.shadow};
    padding: 0.3rem;
    box-shadow: 4px 4px 10px 1px ${({ theme }) => theme.shadow};
    input:not(:placeholder-shown) + .placeholder,
    input:focus + .placeholder {
      top: 0;
      margin-top: -0.48rem;
      background-color: white;
      transition: 0.3s;
      font-size: 0.6rem;
      padding: 0 0.2rem;
    }
  `,

  Input: styled.input`
    width: 100%;
    border: none;
    outline: none;
  `,

  Placeholder: styled.span`
    position: absolute;
    margin: 0.1rem 0.4rem;
    left: 0;
    top: 0;
    font-size: 0.85rem;
    pointer-events: none;
    transition: 0.3s;
    span {
      opacity: 0.6;
    }
  `,
};
