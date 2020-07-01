import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import AppReducer from './appReducer';
import { GET_HEADLINES, GET_SOURCES, SEARCH_ARTICLES } from './types';

const GlobalState = props => {
	const initialState = {
		articles: [],
		sources: [],
		title: '',
	};

	const [state, dispatch] = useReducer(AppReducer, initialState);

	const apiKey = process.env.REACT_APP_NEWS_API_KEY;

	// Fetch top headlines from the USA display at the first page load
	const fetchHeadlines = async () => {
		const res = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=us&language=en&sortBy=publishedAt&apiKey=${apiKey}`
		);

		dispatch({
			type: GET_HEADLINES,
			payload: res.data.articles,
		});
	};

	useEffect(() => {
		// fetchHeadlines();
	}, []);

	// Fetch the article sources to populate in the sources dropdown
	const fetchSources = async () => {
		const res = await axios.get(
			`https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`
		);

		dispatch({
			type: GET_SOURCES,
			payload: res.data.sources,
		});
	};

	// Search articles by keyword and publish date
	const searchArticle = async data => {
		let res = {};

		if (data.keywordPicker === "keyword") {
			res = await axios.get(
				`https://newsapi.org/v2/everything?q=${data.keyword}&language=en&from=${data.firstDate}&to=${data.lastDate}&sortBy=publishedAt&apiKey=${apiKey}`
			);
		} else if (data.categoryPicker === "category") {
			res = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=us&category=${data.keyword}&from=${data.firstDate}&to=${data.lastDate}&sortBy=publishedAt&apiKey=${apiKey}`
			);
		} else if (data.sourcePicker === "source") {
			res = await axios.get(
				`https://newsapi.org/v2/everything?sources=${data.source}&language=en&from=${data.firstDate}&to=${data.lastDate}&sortBy=publishedAt&apiKey=${apiKey}`
			);
		}

		dispatch({
			type: SEARCH_ARTICLES,
			payload: res.data.articles,
		});
	};

	return (
		<AppContext.Provider
			value={{
				articles: state.articles,
				sources: state.sources,
				title: state.title,
				fetchSources,
				searchArticle,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default GlobalState;
