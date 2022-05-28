import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddQuote () {
  let navigate = useNavigate();

  const [newQuote, setNewQuote] = useState({
    quote: '',
    author: '',
  })
  const[error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://quotes-project-as.web.app/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuote)
    })
    .then(() => navigate('/'))
    .catch(setError)
  }

  const handleChange = (e) => {
    setNewQuote(e.target.value)
  }

  return(
    <section style={{margin: '2em 1em'}}>
    <h1>Add Restaurant</h1>
    {error && <h2 style={{color: 'red'}}>{error}</h2>}
    <form onSubmit={handleSubmit}>
      <label for='name'>
        Quote:
        <input name="name" type='text' value={newQuote.quote} onChange={handleChange} />
      </label>
      <br />
      <label for='address'>
        Author:
        <input name="address" type='text' value={newQuote.author} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </section>
  )
}