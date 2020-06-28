import React from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './articles/ArticlesContainer';

export const Home = () => {
	return (
		<main>
			<SearchForm />
			<ArticlesContainer />
		</main>
	);
};
