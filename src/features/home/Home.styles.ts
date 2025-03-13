import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  max-height: 90vh;
  margin: 1.5rem 1rem;
`;

export const CardStyle = {
  Content: styled.div`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 1rem;
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
    height: 100%;
    width: 100%;
    box-shadow: 6px 8px 10px 1px #0e0e0c47;
  `,
};
