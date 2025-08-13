import React, {useState} from 'react'
import { CounterContext } from './CounterContex'

export const CounterProvider = ({Children}) => {
    const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={(count, setCount)}>
        {Children}
    </CounterContext.Provider>
  )
}

export default CounterProvider