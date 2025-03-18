import React, { useEffect, useState } from "react";
import { CardStyle, Container } from "./Home.styles";
import { useGetDigimonCardQuery } from "../../store/services/querys";
import PagedList from "../shared/components/pagedList/PagedList";
import { PaginationProps } from "../shared/components/pagedList/PagedList.types";
import { DEFAULT_PAGE_PROPS } from "./../shared/components/pagedList/PagedList.consts";
import Skeleton from "../shared/components/skeleton/Skeleton";

const Home: React.FC = () => {
  const [pagination, setPagination] =
    useState<PaginationProps>(DEFAULT_PAGE_PROPS);
  const [search, setSearch] = useState<string>("");

  const { data, isLoading, isFetching } = useGetDigimonCardQuery({
    ...pagination,
    search,
  });

  useEffect(() => {
    if (data) {
      setPagination({
        limit: data.limit,
        page: data.page,
        totalPages: data.totalPages,
      });
    }
  }, [data]);

  return (
    <PagedList
      pagination={pagination}
      setPagination={setPagination}
      setSearch={setSearch}
      isLoading={isLoading}
    >
      <Container>
        <CardStyle.Content>
          {!data || isLoading || isFetching
            ? Array(12)
                .fill("")
                .map(() => <Skeleton $height="10rem" $borderRadius=".7rem" />)
            : data.data.map(({ images, name }, index) => {
                return <CardStyle.CardItem src={images.small} alt={name} />;
              })}
          <CardStyle.LastItem></CardStyle.LastItem>
        </CardStyle.Content>
      </Container>
    </PagedList>
  );
};

export default Home;
