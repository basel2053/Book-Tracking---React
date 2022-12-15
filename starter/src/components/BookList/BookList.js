import BookShelf from './Shelf';

const BookList = ({ books, onNavigate }) => {
	const reading = books.filter(book => book.category === 'reading');
	const want = books.filter(book => book.category === 'want');
	const read = books.filter(book => book.category === 'read');
	return (
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>MyReads</h1>
			</div>
			<div className='list-books-content'>
				<div>
					<BookShelf shelfName={'Currently Reading'} books={reading} />
					<BookShelf shelfName={'Want to Read'} books={want} />
					<BookShelf shelfName={'Read'} books={read} />
				</div>
			</div>
			<div className='open-search'>
				<a href='#serach' onClick={onNavigate}>
					Add a book
				</a>
			</div>
		</div>
	);
};

export default BookList;
