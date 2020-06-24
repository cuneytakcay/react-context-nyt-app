import React from 'react';
import { Article } from './Article';
import './Articles.css';

export const ArticlesContainer = ({ articles }) => {
	return (
		<React.Fragment>
			<h2>{articles.length} Top-Headline Articles from the US</h2>
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