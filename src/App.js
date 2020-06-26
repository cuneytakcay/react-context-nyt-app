import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { Home } from './components/main/Home';
import { Footer } from './components/footer/Footer';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		articles: [],
		title: '',
	};

	componentDidMount() {
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
			)
			.then(res =>
				this.setState({
					articles: res.data.articles,
					title: `${res.data.articles.length} Top-Headline Articles from the USA`,
				})
			);
	}

	searchArticle = data => {
		axios
			.get(
				`https://newsapi.org/v2/everything?q=${data.keyword}&from=${data.lastDate}&to=${data.firstDate}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
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

	render() {
		return (
			<div className="app-container">
				<Header />
				<Home
					title={this.state.title}
					articles={this.state.articles}
					searchArticle={this.searchArticle}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
