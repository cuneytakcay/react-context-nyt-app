import React, { useContext } from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './content/articles/ArticlesContainer';
import { BooksContainer } from './content/books/BooksContainer';
import BooksContext from '../../context/books/booksContext';

export const Home = () => {
	const booksContext = useContext(BooksContext);
	const { isBooks } = booksContext;

	return (
		<main>
			<SearchForm />
			{!isBooks ? <ArticlesContainer /> : <BooksContainer />}
		</main>
	);
};
