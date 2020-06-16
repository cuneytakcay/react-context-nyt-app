import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
	return (
		<GlobalProvider>
			<div className="app-container">
				<Header />
				<Main />
				<Footer />
			</div>
		</GlobalProvider>
	);
}

export default App;
