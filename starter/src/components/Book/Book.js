import { useState } from 'react';
import propTypes from 'prop-types';

const Book = ({ bookId, title, authors, thumbnail, shelf, onChangeShelf, books }) => {
	const changeShelfHandler = e => {
		setBookShelf(e.target.value);
		onChangeShelf(bookId, e.target.value);
	};
	if (books.length > 0) {
		books.forEach(b => {
			if (b.id === bookId) {
				shelf = b.shelf;
			}
		});
	}
	const [bookShelf, setBookShelf] = useState(shelf);

	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${thumbnail})`,
						}}
					></div>
					<div className='book-shelf-changer'>
						<select value={bookShelf ? bookShelf : 'none2'} onChange={changeShelfHandler}>
							<option value='none' disabled>
								Move to...
							</option>
							<option value='currentlyReading'>Currently Reading</option>
							<option value='wantToRead'>Want to Read</option>
							<option value='read'>Read</option>
							<option value='none2'>None</option>
						</select>
					</div>
				</div>
				<div className='book-title'>{title}</div>
				<div className='book-authors'>{authors && authors.map(a => a + ', ')}</div>
			</div>
		</li>
	);
};
Book.propTypes = {
	bookId: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	authors: propTypes.oneOfType([propTypes.string, propTypes.array]),
	thumbnail: propTypes.string,
	shelf: propTypes.string,
	onChangeShelf: propTypes.func,
	books: propTypes.array,
};
export default Book;
