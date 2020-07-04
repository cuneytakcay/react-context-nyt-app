import React from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './content/articles/ArticlesContainer';

export const Home = () => {
	return (
		<main>
			<SearchForm />
			<ArticlesContainer />
		</main>
	);
};
