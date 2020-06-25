import React from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './articles/ArticlesContainer';

export const Main = ({ articles, title, searchArticle }) => {
	return (
		<main>
			<SearchForm searchArticle={searchArticle} />
			<ArticlesContainer articles={articles} title={title} />
		</main>
	);
};
