import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const digimonApi = createApi({
  reducerPath: "digimonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/digimon",
    headers: {
      "x-api-key":
        "ab0f380237e9e4a019e66f7f650a6b1681a3725dbe9b3f49e970d5652043cb2a",
    },
  }),
  endpoints: build => ({
    getAllDigimonCard: build.query<any, void>({
      query: () => "",
    }),
  }),
})

export const { useGetAllDigimonCardQuery } = digimonApi
