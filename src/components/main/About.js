import React from 'react';

export const About = () => {
	return (
		<div className="main-container">
			<h2 style={{ marginBottom: '20px' }}>About This Project</h2>
			<p
				style={{
					maxWidth: '992px',
					padding: '0 16px',
					marginBottom: '20px',
				}}
			>
				Search and find articles published by NYT.
			</p>
		</div>
	);
};
