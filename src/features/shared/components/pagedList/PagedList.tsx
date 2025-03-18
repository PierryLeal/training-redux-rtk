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
  pagination: PaginationProps;
  setPagination: Dispatch<SetStateAction<PaginationProps>>;
}> = ({ children, pagination, setPagination }) => {
  return (
    <PageListStyle>
      <Input></Input>
      {children}
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
      ></Pagination>
    </PageListStyle>
  );
};

export default PagedList;
