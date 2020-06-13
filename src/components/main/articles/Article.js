import React from 'react';

function Article({ article }) {
	return ( 
		<article>
			<div className="article-card">
				<div className="img-container">
					<a href={article.url} target="_blank">
						<img src={article.urlToImage} alt={article.title} />
					</a>
				</div>
				<div className="text-container">
					<h3>
						<a href={article.url} target="_blank">{article.title}</a>
					</h3>
					<p>{article.description}</p>
					<div className="card-actions">
						<a href={article.url} target="_blank" className="btn read-btn">Read</a>
						<button className="btn save-btn">Save</button>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Article;
//8fb26607476546999c5bf35724be417e