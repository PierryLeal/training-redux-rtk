import React, { useEffect, useState } from "react";
import { CardStyle, Container } from "./Home.styles";
import { useGetDigimonCardQuery } from "../../store/services/querys";
import PagedList from "../shared/components/pagedList/PagedList";
import { PaginationProps } from "../shared/components/pagedList/PagedList.types";
import { DEFAULT_PAGE_PROPS } from "./../shared/components/pagedList/PagedList.consts";

const Home: React.FC = () => {
  const [pagination, setPagination] =
    useState<PaginationProps>(DEFAULT_PAGE_PROPS);
  const [search, setSearch] = useState<string>("");

  const { data, isLoading, isFetching } = useGetDigimonCardQuery({
    ...pagination,
    search,
  });
  console.log("isLoading:", isLoading || isFetching);
  useEffect(() => {
    if (data)
      setPagination({
        limit: data.limit,
        page: data.page,
        totalPages: data.totalPages,
      });
  }, [data]);

  if (!data || isLoading || isFetching) return <span>Carregando</span>;

  return (
    <PagedList pagination={pagination} setPagination={setPagination}>
      <Container>
        <CardStyle.Content>
          {data?.data.map(({ images }, index) => (
            <CardStyle.CardItem src={images.small} />
          ))}
          <CardStyle.LastItem></CardStyle.LastItem>
        </CardStyle.Content>
      </Container>
    </PagedList>
  );
};

export default Home;
