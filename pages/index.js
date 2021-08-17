
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

class CompB extends React.Component {

  state = {
    value: 0
  }

  changeState(newStateValue) {
    this.setState({
      value: newStateValue
    })
  }

  render() {
    const myValue = this.state.value;
    return (
      <>
        <h2>Class Component</h2>
        <div>
          <span>Current Value value: {myValue}</span>
          <button onClick={() => this.changeState(myValue + 1)}>+</button>
          <button onClick={() => this.changeState(myValue - 1)}>-</button>
        </div>
      </>
    )
  }
}

function CompA() {

  const [value, setValue] = useState(0);

  return (
    <>
      <h2>Component A</h2>
      <div>
        <span>Current Value value: {value}</span>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <CompA />
      <CompB />
    </>
  )
}
