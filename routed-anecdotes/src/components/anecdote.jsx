/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
const Anecdote = ({ anecdotes }) => {
  const id = useParams().id
  console.log(typeof id)
  const anecdoteFound = anecdotes.find((anecdote) => anecdote.id === Number(id))
  console.log(anecdoteFound)
  return (
    <div key={anecdoteFound.id}>
      <h1>{anecdoteFound.content + ` by ` + anecdoteFound.author}</h1>
    </div>
  )
}

export default Anecdote
