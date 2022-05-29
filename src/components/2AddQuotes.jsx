import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


export default function AddQuoteTwo () {

  let navigate = useNavigate();

  const [newQuote, setNewQuote] = useState({
    quote: '',
    author: '',
  })

  const[error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://quotes-project-as.web.app/addNewQuote', {
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
    const newValue = (e.target.value)
  setNewQuote({
    ...newQuote,
    [e.target.name]: newValue
  });
  }

  



  return (
    <section style={{margin: '2em 1em'}}>
      <form
        style={{
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }}
        onSubmit={handleSubmit}>
          <br />
        <label for="quote">
          Quote:
          <input placeholder="input Quote" name="quote" type='text' value={newQuote.quote} onChange={handleChange} />
        </label>
        <br />
        <label for="author">
          Author:
          <input placeholder="input Author" name="author" type='text' value={newQuote.author} onChange={handleChange} />
        </label>
        <br />
        <label 
          style={{
            wrapperCol: {
              span: 14,
              offset: 4,
            }}}>
          <button type="primary">Submit</button>
        </label>
      </form>
    </section>
  );
};