import React, { useState } from 'react'
import { Button, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import BookEdit from "./BookEdit"

const BookShow = (props) => {
  const { book, onDelete, onEdit } = props;
  const [showEdit, setShowEdit] = useState(0);
  const deleteBook = () => {
    onDelete(book.id);
  }
  const handleShowEdit = () => {
    setShowEdit(1);
  }
 
  const handleSubmit = (id, newTitle) => {
    setShowEdit(0);
    onEdit(id, newTitle);
  }

  return (
    <div
      className='d-inline-flex flex-row m-5 flex-wrap w-25'
    >
      <Card className='w-100 h-50 align-items-center '>
        <Row className='w-100 d-flex mt-1'>
          <Col>
            <Button className='w-10'
              onClick={handleShowEdit}
            >Edit</Button>
          </Col>
          <Col>
            <Button className='w-10 bg-danger'
              onClick={deleteBook}
            >Erase</Button>
          </Col>
        </Row>
        <CardBody>

          <CardTitle tag="h2">
            {book.title}
          </CardTitle>
          {
            showEdit ?
              <>
                <BookEdit book={book} handleSubmit={handleSubmit}  />
              </> :
              <></>
          }
        </CardBody>
      </Card>
    </div>
  )
}

export default BookShow