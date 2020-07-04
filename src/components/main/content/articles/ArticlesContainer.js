import React, { useContext } from 'react';
import { Article } from './Article';
import ArticlesContext from '../../../../context/articles/articlesContext';
import './Articles.css';

export const ArticlesContainer = () => {
	const articlesContext = useContext(ArticlesContext);
	const { title, articles } = articlesContext;
	return (
		<React.Fragment>
			<h2>{title}</h2>
			<div className="articles-container">
				{articles.map((article, index) => {
					return <Article key={index} article={article} />;
				})}
			</div>
		</React.Fragment>
	);
};
