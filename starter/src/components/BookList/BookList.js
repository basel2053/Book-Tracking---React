import BookShelf from './Shelf';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const BookList = ({ books, onChangeShelf }) => {
	const changeShelf = (bId, shelf) => {
		onChangeShelf(bId, shelf);
	};
	const reading = books.filter(book => book.shelf === 'currentlyReading');
	const want = books.filter(book => book.shelf === 'wantToRead');
	const read = books.filter(book => book.shelf === 'read');
	return (
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>MyReads</h1>
			</div>
			<div className='list-books-content'>
				<div>
					<BookShelf shelfName={'Currently Reading'} books={reading} onChangeShelf={changeShelf} />
					<BookShelf shelfName={'Want to Read'} books={want} onChangeShelf={changeShelf} />
					<BookShelf shelfName={'Read'} books={read} onChangeShelf={changeShelf} />
				</div>
			</div>
			<div className='open-search'>
				<Link to='/search'>Add a book</Link>
			</div>
		</div>
	);
};

BookList.propTypes = {
	books: propTypes.array.isRequired,
	onChangeShelf: propTypes.func,
};

export default BookList;
