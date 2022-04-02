import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
      <h1>give feedback</h1>
      <Button value={good} setValue={setGood} text="Good"/>
      <Button value={neutral} setValue={setNeutral} text="Neutral"/>
      <Button value={bad} setValue={setBad} text="Bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}
export default App



const Positive = ({good,bad,neutral}) => Math.round((100*good / (good+bad+neutral)) * 10) / 10

const Average = ({good,bad,neutral}) => Math.round(((good*1+bad*(-1)+neutral*0)/(good+bad+neutral))*10) / 10

const Statistics = ({good, bad, neutral}) => {
  let tot = good + bad + neutral;
  if (tot > 0) {
  return (
    <table width="90px">
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={good + neutral + bad} />
        <StatisticLine text="Average" value={<Average good={good} bad={bad} neutral={neutral}/>} />
        <StatisticLine text="Positive" t2="%" value={<Positive good={good} neutral={neutral} bad={bad}/>} />
      </tbody>
    </table>
  )} else {
    return (
      <table>
        <tbody>
          <StatisticLine text="No feedback given" />
        </tbody>
      </table>
    )}
}

const Button = ({value, setValue, text}) => <button onClick={() =>setValue(value +1)}>{text}</button>

const StatisticLine = ({text, value, t2}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
    <td>{t2}</td>
  </tr>
  )}
