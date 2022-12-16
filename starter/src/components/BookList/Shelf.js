import Book from '../Book/Book';
import propTypes from 'prop-types';

const BookShelf = ({ books, shelfName, onChangeShelf }) => {
	const changeShelf = (bId, shelf) => {
		onChangeShelf(bId, shelf);
	};
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{shelfName}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books.map(b => (
						<Book
							books={[]}
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

BookShelf.propTypes = {
	books: propTypes.array.isRequired,
	shelfName: propTypes.string.isRequired,
	onChangeShelf: propTypes.func,
};

export default BookShelf;
