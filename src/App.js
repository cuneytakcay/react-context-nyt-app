import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		articles: [],
	};

	componentDidMount() {
		axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
			.then(res => this.setState({ articles: res.data.articles }));
	}

	render() {
		return (
			<div className="app-container">
				<Header />
				<Main articles={this.state.articles} />
				<Footer />
			</div>
		);
	}
}

export default App;
