import React from 'react';
import { SearchForm } from './form/SearchForm';
import { ArticlesContainer } from './articles/ArticlesContainer';

export const Home = ({ articles, sources, title, searchArticle }) => {
	return (
		<main>
			<SearchForm sources={sources} searchArticle={searchArticle} />
			<ArticlesContainer articles={articles} title={title} />
		</main>
	);
};
