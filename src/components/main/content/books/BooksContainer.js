import React, { useContext, Fragment } from 'react';
import { Book } from './Book';
import { Spinner } from '../Spinner';
import BooksContext from '../../../../context/books/booksContext';
import '../Content.css';

export const BooksContainer = () => {
	const booksContext = useContext(BooksContext);
	const { title, books, loading } = booksContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<h2>{title}</h2>
				<div className="content-container">
					{books.map((book, index) => {
						return <Book key={index} book={book} />;
					})}
				</div>
			</Fragment>
		);
	}
};
