import Book from './Book';

const BookShelf = ({ books, shelfName }) => {
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{shelfName}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'></ol>
			</div>
		</div>
	);
};

export default BookShelf;
