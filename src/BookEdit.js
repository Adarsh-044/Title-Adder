import React, { useState } from 'react'
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'

const BookEdit = (props) => {
      const { book, handleSubmit } = props;
      const [value, setValue] = useState(book.title);

      const handleChangeEvent = (e) => {
            e.preventDefault();
            setValue(e.target.value);
      }
      const handleEditSubmit = (e) => {
            e.preventDefault();
            handleSubmit(book.id, value);
            setValue('');
      }
      return (
            <Form className='border border-1 rounded m-auto p-2' onSubmit={handleEditSubmit}>
                  <FormGroup className=''>
                        <Label>Enter Book Title</Label>
                        <Input
                              className='w-100'
                              value={value}
                              onChange={handleChangeEvent}
                        />
                  </FormGroup>
                  <Button onClick={handleEditSubmit}>Save</Button>

            </Form>
      )
}

export default BookEdit