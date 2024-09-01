import { useField, useResource } from "./hooks/hooks"

const App = () => {
  const content = useField("text")
  const name = useField("text")
  const number = useField("text")

  const [notes, noteService] = useResource("http://localhost:3005/notes")
  const [persons, personService] = useResource("http://localhost:3005/persons")

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    content.onReset()
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value })
    name.onReset()
    number.onReset()
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name{" "}
        <input
          type={name.type}
          value={name.value}
          onChange={(e) => name.onChange(e)}
        />{" "}
        <br />
        number{" "}
        <input
          type={number.type}
          value={number.value}
          onChange={(e) => number.onChange(e)}
        />
        <button>create</button>
      </form>
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  )
}

export default App
