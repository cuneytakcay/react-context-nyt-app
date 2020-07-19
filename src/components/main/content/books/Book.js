import React from 'react';
import noImage from '../noImage.png';

export const Book = ({
	book: { amazon_product_url, title, book_image, description, author },
}) => {
	const img = book_image ? book_image : noImage;

	const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${amazon_product_url}&amp;src=sdkpreparse`;
	const twShareLink = `https://twitter.com/intent/tweet?text=${title} - ${amazon_product_url}`;

	return (
		<article>
			<div className="card">
				<div className="img-container">
					<a
						href={amazon_product_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={img} alt={title} />
					</a>
				</div>
				<div className="text-container">
					<a
						href={amazon_product_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h3>{title}</h3>
					</a>
					<span className="date">{author}</span>
					<p>{description}</p>
					<div className="card-actions">
						<a
							className="btn read-btn"
							href={amazon_product_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								Purchase
								<i
									className="fas fa-credit-card"
									aria-hidden="true"
								/>
							</span>
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
