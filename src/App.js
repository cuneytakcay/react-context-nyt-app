import React, { useState, useEffect } from 'react';
import { Header } from './components/header/Header';
import { Home } from './components/main/Home';
import { Footer } from './components/footer/Footer';
import axios from 'axios';
import './App.css';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [sources, setSources] = useState([]);
	const [title, setTitle] = useState('');

	useEffect(async () => {
		// Get top headlines from the USA
		const headlines = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		);

		setArticles(headlines.data.articles);
		setTitle(
			`${headlines.data.articles.length} Top-Headline Articles from the USA`
		);

		// Get news sources in English
		// To populate sources in the search dropdown
		// const sources = axios.get(
		// 	`https://newsapi.org/v2/sources?language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		// );

		// setSources(sources.data.sources);
	}, []);

	const searchArticle = data => {
		axios
			.get(
				`https://newsapi.org/v2/everything?q=
				${data.keyword}&
				from=${data.lastDate}&
				to=${data.firstDate}&
				sortBy=publishedAt&
				apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
			)
			.then(res =>
				this.setState({
					articles: res.data.articles,
					title: `${res.data.articles.length} Articles About ${
						data.keyword.charAt(0).toUpperCase() +
						data.keyword.slice(1).toLowerCase()
					}`,
				})
			);
	};

	return (
		<div className="app-container">
			<Header />
			<Home
				title={title}
				articles={articles}
				sources={sources}
				searchArticle={searchArticle}
			/>
			<Footer />
		</div>
	);
};

export default App;
