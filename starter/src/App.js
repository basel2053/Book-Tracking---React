import './App.css';
import { useState, useEffect } from 'react';
import SearchBooks from './components/SearchBooks/SerachBooks';
import BookList from './components/BookList/BookList';
import * as BooksAPI from './BooksAPI';

function App() {
	const [showSearchPage, setShowSearchpage] = useState('list');
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
			setBooks(res);
		};
		getBooks();
	}, []);

	return (
		<div className='app'>
			{showSearchPage === 'list' && (
				<BookList
					books={books}
					onNavigate={() => {
						setShowSearchpage('create');
					}}
				/>
			)}
			{showSearchPage === 'create' && (
				<SearchBooks
					books={books}
					onNavigate={() => {
						setShowSearchpage('list');
					}}
				/>
			)}
		</div>
	);
}

export default App;
