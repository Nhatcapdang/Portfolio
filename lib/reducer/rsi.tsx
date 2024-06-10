import { apiSlicePublic } from '.'

const rsi = apiSlicePublic.injectEndpoints({
  endpoints: builder => ({
    getRsi: builder.query<any, void>({
      query: () => {
        return {
          url: '/discounts/applies-to/all',
        }
      },
    }),
  }),
})

export const { useGetRsiQuery } = rsi
