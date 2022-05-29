import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Radio } from 'antd';
import FormItem from "antd/lib/form/FormItem";


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
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Quote:" for='quote'>
        <Input name="quote" type='text' value={newQuote.quote} onChange={handleChange} />
      </Form.Item>
      <br />
      <Form.Item label="Author:" for='author'>
        <Input name="author" type='text' value={newQuote.author} onChange={handleChange} />
      </Form.Item>
      <Form.Item {...{wrapperCol: { span: 14, offset: 4 }}}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    </section>
  )
}