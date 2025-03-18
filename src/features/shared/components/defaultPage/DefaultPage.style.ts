import styled from "styled-components";

export const DefaultPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const NavBarStyle = {
  Container: styled.nav`
    display: flex;
    justify-content: center;
    position: sticky;
    min-height: 3rem;
    width: 100%;
    top: 0;
  `,
  Content: styled.div`
    display: flex;
    width: 60%;
    background-color: ${({ theme }) => theme.black};
    border-radius: 0 0 0.7rem 0.7rem;
  `,
};
