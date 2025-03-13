import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardsPayloadProps, CardsReponseProps } from "./querys.types";

export const queryApi = createApi({
  reducerPath: "digimonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/digimon",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  }),
  endpoints: build => ({
    getDigimonCard: build.query<CardsReponseProps, CardsPayloadProps>({
      query: ({ search = "", page = 1 }) => ({
        url: "",
        params: {
          limit: 28,
          name: search,
          page,
        },
      }),
    }),
  }),
});

export const { useGetDigimonCardQuery } = queryApi;
