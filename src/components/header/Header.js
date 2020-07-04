import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header>
			<div className="logo">
				NYT <span>Article Finder</span>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
