import React from 'react';
import noImage from '../../books-background.jpg';

export const Book = ({ book }) => {
	const img = book.book_image || noImage;
	const url = book.amazon_product_url || book.url;
	const title = book.title || book.book_title;
	const description = book.description || book.summary;
	const author = book.author || book.book_author;

	const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`;
	const twShareLink = `https://twitter.com/intent/tweet?text=${title} - ${url}`;

	return (
		<article>
			<div className="card">
				<div className="img-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={img} alt={title} />
					</a>
				</div>
				<div className="text-container">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<h3>{title}</h3>
					</a>
					<span className="date">{author}</span>
					<p>{description}</p>
					<div className="card-actions">
						<a
							className="btn read-btn"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{book.amazon_product_url && (
								<span>
									Buy
									<i
										className="fas fa-credit-card"
										aria-hidden="true"
									/>
								</span>
							)}
							{book.url && <span>Learn More</span>}
						</a>
						<div className="btn share-btn">
							<span className="share">
								Share
								<i
									className="fas fa-share"
									aria-hidden="true"
								/>
							</span>
							<div className="fb-tw">
								<a
									className="fb"
									href={fbShareLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fab fa-facebook-f"
										aria-hidden="true"
									></i>
								</a>
								<a
									className="tw"
									href={twShareLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i
										className="fab fa-twitter"
										aria-hidden="true"
									></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
