// Need to use the React-specific entry point to allow generating React hooks
import { TimeFrame } from '@/components/constant/enum'
import { calculateRSI3 } from '@/components/utils'
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonByName: builder.query<{}, string>({
      query: name => `pokemon/${name}`,
    }),
    flipCoin: builder.query<'heads' | 'tails', void>({
      // highlight-start
      queryFn(arg, queryApi, extraOptions, baseQuery) {
        const randomVal = Math.random()
        if (randomVal < 0.45) {
          return { data: 'heads' }
        }
        if (randomVal < 0.9) {
          return { data: 'tails' }
        }
        return {
          error: {
            status: 500,
            statusText: 'Internal Server Error',
            data: "Coin landed on it's edge!",
          },
        }
      },
      // highlight-end
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
