import React from 'react';

export const Article = ({
	article: { url, title, urlToImage, description },
}) => {
	return (
		<article>
			<div className="article-card">
				<div className="img-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={urlToImage} alt={title} />
					</a>
				</div>
				<div className="text-container">
					<h3>
						<a href={url} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					</h3>
					<p>{description.substring(0, 120)}...</p>
					<div className="card-actions">
						<a
							className="btn read-btn"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							Read
						</a>
						<button className="btn save-btn">Save</button>
					</div>
				</div>
			</div>
		</article>
	);
};
