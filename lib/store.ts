import { TimeFrame } from '@/components/constant/enum'
import { calculateRSI3 } from '@/components/utils'
import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { pokemonApi } from './createAPI'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlicePublic } from './reducer'

const initialState: {
  close: {
    rsi: number
    hint: string
  }
  open: {
    rsi: number
    hint: string
  }
  high: {
    rsi: number
    hint: string
  }
} = {
  close: {
    rsi: 0,
    hint: '',
  },
  open: {
    rsi: 0,
    hint: '',
  },
  high: {
    rsi: 0,
    hint: '',
  },
}
const counterSlice = createSlice({
  name: 'rsi',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // calculateRSI: async (
    //   state,
    //   action: PayloadAction<{
    //     symbol: string
    //     timeframe: TimeFrame
    //   }>,
    // ) => {
    //   const res = await calculateRSI3(action.payload)
    //   state = res
    // },
  },
})
export const middlewares = [pokemonApi.middleware, apiSlicePublic.middleware]

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      test: counterSlice.reducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      [apiSlicePublic.reducerPath]: apiSlicePublic.reducer,
    }),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({}).concat(middlewares),
  })
}

setupListeners(makeStore().dispatch)
// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore.>
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
