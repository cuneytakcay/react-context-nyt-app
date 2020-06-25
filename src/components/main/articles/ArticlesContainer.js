import React from 'react';
import { Article } from './Article';
import './Articles.css';

export const ArticlesContainer = ({ articles, title }) => {
	return (
		<React.Fragment>
			<h2>{title}</h2>
			<div className="articles-container">
				{articles.map((article, index) => {
					return (
						<Article
							key={index}
							article={article}
						/>
					)
				})}
			</div>
		</React.Fragment>
	)
}