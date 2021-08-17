
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

class CompB extends React.Component {

  constructor(props) {

    super();
    this.state = {
      value: 0
    }
  }

  changeState(newStateValue) {
    console.log(newStateValue)
    this.setState({
      value: newStateValue
    })
  }

  render() {
    const { value } = this.state;

    return (
      <>
        <h2>Class Component</h2>
        <div>
          <span>Current Value value: {value}</span>
          <button onClick={() => this.changeState(value + 1)}>+</button>
          <button onClick={() => this.changeState(value - 1)}>-</button>
        </div>
      </>
    )
  }
}

function CompA(props) {

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect is called')
  })

  return (
    <>
      <h2>Component A</h2>
      <div>
        <span>Current Value value: {value}</span>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <div>Number Props: {props.numberProps}</div>
        <div>String Props: {props.stringProps}</div>
        <div>Boolean Props: {props.boolProps.toString()}</div>
        <div>Function Props: {<props.funcProps />}</div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <CompA
        numberProps={1}
        stringProps="Simple String props"
        boolProps={true}
        funcProps={() => <div>New Inline JSX</div>}
      />
      <CompB />
    </>
  )
}
