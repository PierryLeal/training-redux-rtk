import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { PaginationProps } from "../pagedList/PagedList.types";
import { PageArrow, PageContent, PageNumbers } from "./Pagination.styles";

const Pagination: React.FC<{
  pagination: PaginationProps;
  setPagination: Dispatch<SetStateAction<PaginationProps>>;
}> = ({ pagination, setPagination }) => {
  const { page, totalPages, limit } = pagination;
  const pages = useMemo(
    () =>
      Array(totalPages)
        .fill("")
        .map((_, index) => {
          const value = index + 1;
          if (
            (page > totalPages - 3 && value === 2) ||
            (page < 4 && value === totalPages - 1) ||
            (page >= 4 &&
              page <= totalPages - 3 &&
              ((page - 2 !== 1 && value === page - 2) ||
                (page + 2 !== totalPages && value === page + 2)))
          )
            return "...";
          if (
            !(page > totalPages - 4 && value >= totalPages - 4) &&
            !(page < 5 && value <= 5) &&
            value !== 1 &&
            value !== totalPages &&
            value !== page &&
            value !== page - 1 &&
            value !== page + 1
          )
            return null;
          return value;
        })
        .filter(Boolean),
    [pagination]
  );

  return (
    <PageContent>
      <PageArrow
        onClick={() =>
          setPagination(prev =>
            page !== 1 ? { ...prev, page: prev.page - 1 } : prev
          )
        }
      >
        «
      </PageArrow>
      {totalPages &&
        pages.map((value, index) => (
          <PageNumbers
            key={`${value}-${index}`}
            $selected={page === value}
            $invalid={value === "..."}
            onClick={() =>
              setPagination(prev => ({
                ...prev,
                page: typeof value === "number" ? value : page,
              }))
            }
          >
            {value}
          </PageNumbers>
        ))}
      <PageArrow
        onClick={() =>
          setPagination(prev =>
            page !== totalPages ? { ...prev, page: prev.page + 1 } : prev
          )
        }
      >
        »
      </PageArrow>
    </PageContent>
  );
};

export default Pagination;
