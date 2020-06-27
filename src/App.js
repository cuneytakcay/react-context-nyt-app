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

	const apiKey = process.env.REACT_APP_NEWS_API_KEY;

	// Fetch top headlines from the USA display at the first page load
	// Fetch the article sources to populate in the sources dropdown
	const fetchData = () => {
		const topHeadlines = `https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${apiKey}`;
		const sources = `https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`;

		const getTopHeadlines = axios.get(topHeadlines);
		const getSources = axios.get(sources);

		axios.all([getTopHeadlines, getSources]).then(
			axios.spread((...allData) => {
				setArticles(allData[0].data.articles);
				setSources(allData[1].data.sources);
				setTitle(
					`${allData[0].data.articles.length} Top-Headline Articles from the USA`
				);
			})
		);
	};

	useEffect(() => {
		fetchData();
	}, []);

	// Search articles by keyword and publish date
	const searchArticle = data => {
		const keyword = data.keyword;
		const firstDate = data.firstDate;
		const lastDate = data.lastDate;
		const searchedArticles = `https://newsapi.org/v2/everything?q=${keyword}&from=${lastDate}&to=${firstDate}&sortBy=publishedAt&apiKey=${apiKey}`;

		axios.get(searchedArticles).then(res => {
			setArticles(res.data.articles);
			setTitle(
				`${res.data.articles.length} Articles About ${
					keyword.charAt(0).toUpperCase() +
					keyword.slice(1).toLowerCase()
				}`
			);
		});
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
