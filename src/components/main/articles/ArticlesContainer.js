import React, { useState } from 'react';
import Article from './Article';
import './Articles.css'

function ArticlesContainer() {
	const [articles, setArticles] = useState([
		{
			title: "Ethereum Poised to Rally as Options Volume Hits Fresh All-Time High",
			description: "Ethereum has been closely tracking Bitcoin’s price action throughout the past several days and weeks, which exposed it to some intense downwards pressure yesterday. It has been able to post a swift recovery from its daily lows, and has remained firmly within …",
			url: "https://www.newsbtc.com/2020/06/13/ethereum-well-positioned-to-rally",
			urlToImage: "https://www.newsbtc.com/wp-content/uploads/2020/06/shutterstock_634259750.jpg"
		},
		{
			title: "Ethereum Poised to Rally as Options Volume Hits Fresh All-Time High",
			description: "Ethereum has been closely tracking Bitcoin’s price action throughout the past several days and weeks, which exposed it to some intense downwards pressure yesterday. It has been able to post a swift recovery from its daily lows, and has remained firmly within …",
			url: "https://www.newsbtc.com/2020/06/13/ethereum-well-positioned-to-rally",
			urlToImage: "https://www.newsbtc.com/wp-content/uploads/2020/06/shutterstock_634259750.jpg"
		},
		{
			title: "Ethereum Poised to Rally as Options Volume Hits Fresh All-Time High",
			description: "Ethereum has been closely tracking Bitcoin’s price action throughout the past several days and weeks, which exposed it to some intense downwards pressure yesterday. It has been able to post a swift recovery from its daily lows, and has remained firmly within …",
			url: "https://www.newsbtc.com/2020/06/13/ethereum-well-positioned-to-rally",
			urlToImage: "https://www.newsbtc.com/wp-content/uploads/2020/06/shutterstock_634259750.jpg"
		}
	]);

	return ( 
		<div className="articles-container">
			{articles.map((article, index) => {
				return (
					<Article
						key={index}
						article={article}
					/>
				)
			})}
		</div>
	)
}

export default ArticlesContainer;