import React from 'react';
import './Main.css';

export const NotFound = () => {
	return (
		<div className="main-container">
			<h2 style={{ marginBottom: '20px' }}>404</h2>
			<p
				style={{
					maxWidth: '992px',
					padding: '0 16px',
					marginBottom: '20px',
				}}
			>
				The page you are looking for cannot be found.
			</p>
		</div>
	);
};
