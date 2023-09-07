import { useState } from 'react';

const Section = ({ title }) => {
  return <h2>{title}</h2>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));

  const random = () => {
    let max = anecdotes.length;
    if (max === 1) return 0;
    let newrandom = selected;
    while (newrandom === selected) {
      newrandom = Math.floor(Math.random() * max);
    }
    return newrandom;
  };

  const updateVotes = (selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    setVote(copy);
  };

  const getFirstMostVoted = () => {
    let maxValue = Math.max(...votes);
    return votes.indexOf(maxValue);
  };

  return (
    <div>
      <Section title='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => updateVotes(selected)}>vote</button>
      <button onClick={() => setSelected(random())}>next anecdote</button>

      <Section title='Anecdote with most votes' />
      <p>{anecdotes[getFirstMostVoted()]}</p>
      <p>has {votes[getFirstMostVoted()]} votes</p>
    </div>
  );
};

export default App;
