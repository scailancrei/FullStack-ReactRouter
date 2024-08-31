/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useField } from "../hooks/index"

const CreateNew = (props) => {
  const content = useField("text")
  const author = useField("text")
  const info = useField("text")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })

    props.notification(content.value)
    navigate("/")
  }

  const handleReset = (e) => {
    content.reset(e)
    author.reset(e)
    info.reset(e)
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            type={content.type}
            value={content.value}
            onChange={content.onChange}
          />
        </div>
        <div>
          author
          <input
            name="author"
            type={author.type}
            value={author.value}
            onChange={author.onChange}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            type={info.type}
            value={info.value}
            onChange={info.onChange}
          />
        </div>
        <button>create</button>
        <button onClick={(e) => handleReset(e)}>Reset</button>
      </form>
    </div>
  )
}

export default CreateNew
