import React, { useState, useContext } from 'react'
import BooksContext from '../../../context/books/booksContext'

export const RadioField = ({ register }) => {
	const [articles, setArticles] = useState(true)
	const [books, setBooks] = useState(false)

	const booksContext = useContext(BooksContext)
	const { getBooks, setBooksState } = booksContext

	const handleArticles = () => {
		setArticles(true)
		setBooks(false)
		setBooksState(false)
	}

	const handleBooks = () => {
		setArticles(false)
		setBooks(true)
		getBooks()
		setBooksState(true)
	}

	return (
		<fieldset>
			<legend>Search for:</legend>
			<div className="radio form-item">
				<input
					type="radio"
					name="articlesPicker"
					id="radioArticles"
					ref={register}
					value="articles"
					onChange={handleArticles}
					checked={articles}
				/>
				<label htmlFor="radioArticles">Articles</label>

				<input
					type="radio"
					name="booksPicker"
					id="radioBooks"
					ref={register}
					value="books"
					onChange={handleBooks}
					checked={books}
				/>
				<label htmlFor="radioBooks">Books</label>
			</div>
		</fieldset>
	)
}
