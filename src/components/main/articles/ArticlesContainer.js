import React, { useContext } from 'react';
import { Article } from './Article';
import AppContext from '../../../context/appContext';
import './Articles.css';

export const ArticlesContainer = () => {
	const appContext = useContext(AppContext);
	const { title, articles } = appContext;
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
