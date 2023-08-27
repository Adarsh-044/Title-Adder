import React, { useState } from 'react'
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap'

const BookCreate = (props) => {
  const { addBook } = props;
  const [titleName, setTitleName] = useState('');

  const submitBook = (event) => {
    event.preventDefault();
    addBook(titleName);
    setTitleName('');
  }

  return (
    <>
      <Card
        className='m-2 p-2 w-25 d-flex'
      >
        <Form onSubmit={submitBook}>
          <FormGroup
            className='m-2 align-items-center'
          >
            <Label
              for="bookTitle"
            >
              Add a Book Title
            </Label>
            <Input
              name="bookTitle"
              placeholder='Title Name'
              type='text'
              value={titleName}
              onChange={(e) => setTitleName(e.target.value)}
            />
          </FormGroup>
          <Button
            className='m-2'
            onClick={submitBook}
          >
            Add Book</Button>
        </Form>
      </Card>
    </>
  )
}

export default BookCreate