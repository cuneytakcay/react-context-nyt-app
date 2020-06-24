import React from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './articles/ArticlesContainer';

export const Main = ({ articles }) => {
	return (
		<main>
			<SearchForm />
			<ArticlesContainer articles={articles} />
		</main>
	);
};
