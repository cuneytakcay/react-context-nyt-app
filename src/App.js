import React, { useState, useEffect } from 'react';
import { Header } from './components/header/Header';
import { Home } from './components/main/Home';
import { Footer } from './components/footer/Footer';
import './App.css';
import GlobalState from './context/GlobalState';

const App = () => {
	return (
		<GlobalState>
			<div className="app-container">
				<Header />
				<Home />
				<Footer />
			</div>
		</GlobalState>
	);
};

export default App;
