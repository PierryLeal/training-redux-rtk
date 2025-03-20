import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;
  margin: 0;
`;

export const CardStyle = {
  Content: styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: min-content;
    gap: 1rem;
    margin-right: 1rem;
    justify-items: center;
    max-width: 900px;
  `,
  LastItem: styled.div`
    display: flex;
    min-height: 0.3rem;
    width: 100%;
  `,
  CardItem: styled.img`
    border-radius: 0.7rem;
    width: 100%;
    box-shadow: 6px 8px 10px 1px ${({ theme }) => theme.shadow};
  `,
};
