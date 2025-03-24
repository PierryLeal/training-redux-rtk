import React, { Dispatch, ReactElement, SetStateAction } from "react";
import Input from "../Input/Input";
import { PaginationProps } from "./PagedList.types";
import Pagination from "../pagination/Pagination";
import { PageListStyle } from "./PagedList.styles";

const PagedList: React.FC<{
  children: ReactElement;
  isLoading: boolean;
  pagination: PaginationProps;
  setPagination: Dispatch<SetStateAction<PaginationProps>>;
  setSearch: Dispatch<SetStateAction<string>>;
}> = ({ children, isLoading, pagination, setPagination, setSearch }) => {
  return (
    <PageListStyle>
      <Input
        isDisabled={isLoading}
        setSearch={setSearch}
        placeholder="Card Name"
      ></Input>
      {children}
      <Pagination
        isLoading={isLoading}
        pagination={pagination}
        setPagination={setPagination}
      ></Pagination>
    </PageListStyle>
  );
};

export default PagedList;
