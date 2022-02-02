import React, { useReducer } from 'react'
import axios from 'axios'
import BooksContext from './booksContext'
import BooksReducer from './booksReducer'
import { SEARCH_BOOKS, GET_BOOKS, SET_BOOKS, SET_LOADING } from '../types'

const apiKey = process.env.REACT_APP_ARTICLE_API_KEY

const BooksState = props => {
	const initialState = {
		books: [],
		title: '',
		loading: false,
		isBooks: false,
	}

	const [state, dispatch] = useReducer(BooksReducer, initialState)

	// Get top 5 bestseller books from NYT to display when books radio button selected
	const getBooks = async () => {
		setLoading()

		const res = await axios.get(
			`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`
		)

		const len = res.data.results.lists.length
		const ind = Math.floor(Math.random() * len)

		dispatch({
			type: GET_BOOKS,
			payload: res.data.results.lists[ind].books,
		})
	}

	// Search books by title
	const searchBooks = async data => {
		setLoading()

		if (data.keyword.trim() === '') return getBooks()

		const res = await axios.get(
			`https://api.nytimes.com/svc/books/v3/reviews.json?title=${data.keyword.trim()}&api-key=${apiKey}`
		)

		dispatch({
			type: SEARCH_BOOKS,
			payload: {
				data: data,
				books: res.data.results,
			},
		})
	}

	// Set Books container when selected
	const setBooksState = state => {
		dispatch({
			type: SET_BOOKS,
			payload: state,
		})
	}

	// Set Loading to display spinner
	const setLoading = () => dispatch({ type: SET_LOADING })

	return (
		<BooksContext.Provider
			value={{
				books: state.books,
				title: state.title,
				loading: state.loading,
				isBooks: state.isBooks,
				getBooks,
				searchBooks,
				setBooksState,
			}}
		>
			{props.children}
		</BooksContext.Provider>
	)
}

export default BooksState
