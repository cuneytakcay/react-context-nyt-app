import React, { useContext, Fragment } from 'react';
import { Article } from './Article';
import { Spinner } from '../Spinner';
import ArticlesContext from '../../../../context/articles/articlesContext';
import './Articles.css';

export const ArticlesContainer = () => {
	const articlesContext = useContext(ArticlesContext);
	const { title, articles, loading } = articlesContext;
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<h2>{title}</h2>
				<div className="articles-container">
					{articles.map((article, index) => {
						return <Article key={index} article={article} />;
					})}
				</div>
			</Fragment>
		);
	}
};
