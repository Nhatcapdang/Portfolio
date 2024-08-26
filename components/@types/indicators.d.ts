type Macd = {
  MACD: number
  signal: number
  histogram: number
}

type Input = {
  close: number[]
  open: number[]
  high: number[]
  low: number[]
  volume: number[]
}
type MACDCrossBB = Macd & {
  index: number
  close: number
  bb: BollingerBands
}

type Rsi = {
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
}

type BollingerBands = {
  lower: number
  middle: number
  pb: number
  upper: number
}

type FromOHLCV = {
  close: number[]
  open: number[]
  high: number[]
  low: number[]
  volume: number[]
}
