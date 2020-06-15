import React, { useState, useEffect } from 'react';
import Article from './Article';
import axios from 'axios';
import './Articles.css';

function ArticlesContainer() {
	const [articles, setArticles] = useState({ articles: [] });

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios(
				`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
			);

			setArticles(response.data);
		};

		fetchData();
	}, []);

	return (
		<React.Fragment>
			<h2>{articles.articles.length} Top-Headline Articles from the US</h2>
			<div className="articles-container">
				{articles.articles.map((article, index) => {
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

export default ArticlesContainer;