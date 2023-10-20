import React, {useEffect, useMemo, useState} from 'react';
import { debounce } from 'lodash';

import styles from './app.module.css'
import './input.css'

const App = () => {
  const [inputData, setInputData] = useState('')
  const [data, setData] = useState()

  const debouncedFetchData = useMemo(() => debounce(async (searchString) => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
    const data = await response.json()
    console.log(data)
    setData(data?.results)
  }, 300), [])

  const handleInputChange = (e) => {
    const value = e?.target?.value
    setInputData(value)
    debouncedFetchData(value)
  }

  useEffect(() => {
    return () => {
      debouncedFetchData?.cancel()
    }
  }, [])

    return <>
      <h2>Welcome to Star Wars</h2>
      <input className={styles.inputElement} type="text" value={inputData} onChange={handleInputChange}/>
      <br/>
      {data && data?.length ? <ul>
          {data.map((item) => <li key={item?.created}>{item?.name}</li>)}
      </ul> : <span>Loading</span>}
    </>
}

export default App