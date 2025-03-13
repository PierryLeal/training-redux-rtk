import React from "react";
import { CardStyle, Container } from "./Home.styles";
import { useGetDigimonCardQuery } from "../../store/services/querys";

const Home: React.FC = () => {
  const { data } = useGetDigimonCardQuery({});

  return (
    <Container>
      <CardStyle.Content>
        {data?.data.map(({ images }, index) => (
          <CardStyle.CardItem src={images.small} />
        ))}
        <CardStyle.LastItem></CardStyle.LastItem>
      </CardStyle.Content>
    </Container>
  );
};

export default Home;
