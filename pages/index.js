
import { useState } from 'react'
import styles from '../styles/Home.module.css'

function CompA() {

  const [value, setValue] = useState(0);

  const changeValue = (increamentor) => {
    setValue(value + increamentor);
  }

  return (
    <>
      <h2>Component A</h2>
      <div>
        <span>Current Value value: {value}</span>
        <button onClick={() => changeValue(1)}>+</button>
        <button onClick={() => changeValue(-1)}>-</button>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <CompA />
    </>
  )
}
