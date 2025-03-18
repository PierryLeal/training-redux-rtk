import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import Input from "../Input/Input";
import { PaginationProps } from "./PagedList.types";
import { DEFAULT_PAGE_PROPS } from "./PagedList.consts";
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
      <Input isDisabled={isLoading} setSearch={setSearch}></Input>
      {children}
      {!isLoading && (
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
        ></Pagination>
      )}
    </PageListStyle>
  );
};

export default PagedList;
