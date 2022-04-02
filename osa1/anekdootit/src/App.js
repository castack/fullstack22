import React, { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    
  }

   return (
    <div>
      <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <button  onClick={() =>handleVote()}>points</button>
      <button onClick={() =>setSelected(randomnum(anecdotes.length, selected))}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <BestAnecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App

const randomnum = (num, selected) => {
  let rnum = (Math.floor(Math.random() * num))
  if (rnum === selected) {
    return randomnum(num, selected) }
  else {
    return rnum
    }
  }


const BestAnecdote = ({ points, anecdotes }) => {
  let max = 0
  let i = 0

  for (i=0; i < points.length; i++) {
    if (points[i] > points[max]) {
      max = i
    }
  }
  if (points[max] === 0) {
    return ''
  } else {
  return (
    anecdotes[max]
  )}
}