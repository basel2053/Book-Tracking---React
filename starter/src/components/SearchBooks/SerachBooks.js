import Book from '../Book/Book';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import propTypes from 'prop-types';

const SearchBooks = ({ myBooks, onChangeShelf }) => {
	const [query, setQuery] = useState('');
	const [books, setBooks] = useState([]);

	const changeShelf = (bId, shelf) => {
		onChangeShelf(bId, shelf);
	};

	useEffect(() => {
		const searchedBooks = async () => {
			const res = await BooksAPI.search(query, 20);
			res.error ? setBooks(res.items) : setBooks(res);
		};
		let x;
		x = setTimeout(() => {
			query ? searchedBooks() : setBooks([]);
		}, 1500);
		return () => {
			clearTimeout(x);
		};
	}, [query]);

	const bookSearchHandler = e => {
		setQuery(e.target.value);
	};

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link className='close-search' to='/'>
					Close
				</Link>
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						placeholder='Search by title, author, or ISBN'
						value={query}
						onChange={bookSearchHandler}
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<ol className='books-grid'>
					{books.length > 0 &&
						books.map(b => (
							<Book
								books={myBooks}
								key={b.id}
								bookId={b.id}
								title={b.title}
								authors={b.authors ? b.authors : ''}
								thumbnail={b.imageLinks ? b.imageLinks.smallThumbnail : ''}
								shelf={b.shelf}
								onChangeShelf={changeShelf}
							/>
						))}
				</ol>
			</div>
		</div>
	);
};

SearchBooks.propTypes = {
	onChangeShelf: propTypes.func.isRequired,
};
export default SearchBooks;
