export enum METHOD {
  SUBSCRIBE = 'SUBSCRIBE',
  UNSUBSCRIBE = 'UNSUBSCRIBE',
  LIST_SUBSCRIPTIONS = 'LIST_SUBSCRIPTIONS',
  SET_PROPERTY = 'SET_PROPERTY',
  GET_PROPERTY = 'GET_PROPERTY',
}

export enum TimeFrame {
  '1m' = '1m',
  '5m' = '5m',
  '15m' = '15m',
  '30m' = '30m',
  '1h' = '1h',
  '4h' = '4h',
  '1d' = '1d',
  '1w' = '1w',
  '1M' = '1M',
}

// ['btcusdt@kline_4h']

export enum STREAM_NAME {
  /** Response Example {
    "e": "24hrMiniTicker",  // Event type
    "E": 123456789,         // Event time
    "s": "BTCUSDT",         // Symbol
    "c": "0.0025",          // Close price
    "o": "0.0010",          // Open price
    "h": "0.0025",          // High price
    "l": "0.0010",          // Low price
    "v": "10000",           // Total traded base asset volume
    "q": "18"               // Total traded quote asset volume
  } */
  miniTicker = 'miniTicker',
  /**  @kline_4h | TimeFrame
   https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Kline-Candlestick-Streams
   */
  kline_ = 'kline_',
}
export enum SYMBOL {
  btc,
  eth,
  bnb,
}
