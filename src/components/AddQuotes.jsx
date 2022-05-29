import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


export default function AddQuote () {

  let navigate = useNavigate();

  const [newQuote, setNewQuote] = useState({
    quote: '',
    author: '',
  })

  const[error, setError] = useState('')

  const handleSubmit = (e) => {
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
      <Form
        style={{
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }}
        onFinish={handleSubmit}>
        <Form.Item label="Quote" for="quote">
          <Input placeholder="input Quote" name="quote" type='text' value={newQuote.quote} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Author" for="author">
          <Input placeholder="input Author" name="author" type='text' value={newQuote.author} onChange={handleChange} />
        </Form.Item>
        <Form.Item 
          style={{
            wrapperCol: {
              span: 14,
              offset: 4,
            }}}>
          <Button type="primary" htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </section>
  );
};