import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import AppReducer from './appReducer';
import { GET_DATA, SEARCH_ARTICLES } from './types';
import { SearchForm } from '../components/main/form/SearchForm';

const GlobalState = props => {
	const initialState = {
		articles: [],
		sources: [],
		title: '',
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

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
				dispatch({
					type: GET_DATA,
					payload: allData,
				});
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
			dispatch({
				type: SEARCH_ARTICLES,
				payload: res.data.articles,
			});
		});
	};

	return (
		<AppContext.Provider
			value={{
				articles: state.articles,
				sources: state.sources,
				title: state.title,
				searchArticle,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default GlobalState;
