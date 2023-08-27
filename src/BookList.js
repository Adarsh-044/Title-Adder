import React from 'react'
import BookShow from './BookShow';

const BookList = (props) => {
      const { books, onDelete, onEdit } = props;
      return (
            <div className='d-inline'>
                  {
                        books.map((book, idx) => {
                              return (
                                    <>
                                          <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
                                    </>
                              )
                        })
                  }
            </div>
      )
}

export default BookList