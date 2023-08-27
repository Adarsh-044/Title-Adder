import React, { useState } from 'react'
import BookCreate from './BookCreate'
import BookList from "./BookList"

const App = () => {
      const [books, setBooks] = useState([]);
      const addBookToList = (title) => {
            setBooks([...books,
            { id: Math.round(Math.random() * 1000), title }]);
      }
      const handleDeleteById = (id) => {
            const updatedBooks = books.filter((book) => {
                  return book.id !== id;
            })
            setBooks(updatedBooks);
      }
      const handleEdit = (id, newTitle) => {
            console.log(newTitle); 
            const updatedBooks = books.map((book) => {
                  if (book.id === id) {
                        return { ...book, title: newTitle }
                  }
                  return book
            });
            setBooks(updatedBooks);
      }
      return (
            <div>
                  <BookList books={books} onDelete={handleDeleteById} onEdit={handleEdit} />
                  <BookCreate addBook={addBookToList} />
            </div>
      )
}

export default App