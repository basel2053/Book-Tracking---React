import Book from '../BookList/Book';
import { useState } from 'react';

const SearchBooks = ({ books, onNavigate }) => {
	const [query, setQuery] = useState('');
	const bookSearchHandler = e => {
		setQuery(e.target.value);
	};
	const showBooks =
		query === ''
			? []
			: books.filter(
					b =>
						b.industryIdentifiers[0].identifier.includes(query) ||
						b.title.toLowerCase().includes(query.toLowerCase()) ||
						b.authors.join(' ').toLowerCase().includes(query.toLowerCase())
			  );

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<a className='close-search' href='#list' onClick={onNavigate}>
					Close
				</a>
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
					{showBooks.map(b => (
						<Book
							key={b.industryIdentifiers[0].identifier}
							title={b.title}
							authors={b.authors}
							thumbnail={b.imageLinks.smallThumbnail}
						/>
					))}
				</ol>
			</div>
		</div>
	);
};
export default SearchBooks;
