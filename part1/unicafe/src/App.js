import { useState } from 'react'

const Section = ({title}) => <h2>{title}</h2>

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const StatisticLine = ({text, value}) => {
  const str = text === "positive" ? "%" : ""
  if (isNaN(value)) {
    return (
      <tr><td>{text}</td><td>0</td></tr> 
    ) 
  }
  return (
    <tr><td>{text}</td><td>{value} {str}</td></tr>
  ) 
}
  
const Statistics = ({good, bad, neutral}) => {
  const total = good + neutral + bad
  return (
    <>
      <table>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={(good + bad*-1)/(total)} />
        <StatisticLine text="positive" value={(good * 100)/(total)} />
        </tbody>
      </table>
    </>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodClicked = () => setGood(good + 1)
  const neutralClicked = () => setNeutral(neutral + 1)
  const badClicked = () => setBad(bad + 1) 

  if ( (good +  bad + neutral ) === 0) {
    return (
      <div>
        <Section title="give feedback" />
        <Button name="good" handleClick={goodClicked} />
        <Button name="neutral" handleClick={neutralClicked} />
        <Button name="bad" handleClick={badClicked} />

        <Section title="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Section title="give feedback" />
      <Button name="good" handleClick={goodClicked} />
      <Button name="neutral" handleClick={neutralClicked} />
      <Button name="bad" handleClick={badClicked} />

      <Section title="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App