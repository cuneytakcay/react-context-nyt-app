import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './components/main/Home';
import { About } from './components/main/About';
import { NotFound } from './components/main/NotFound';
import { Footer } from './components/footer/Footer';
import './App.css';
import ArticlesState from './context/articles/ArticlesState';

const App = () => {
	return (
		<ArticlesState>
			<Router>
				<div className="app-container">
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</ArticlesState>
	);
};

export default App;
