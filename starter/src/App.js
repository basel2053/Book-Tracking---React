import './App.css';
import { useState, useEffect } from 'react';
import SearchBooks from './components/SearchBooks/SerachBooks';
import BookList from './components/BookList/BookList';
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [books, setBooks] = useState([]);
	const getBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};
	const changeShelfHandler = (bId, shelf) => {
		BooksAPI.update({ id: bId }, shelf);
		setTimeout(() => {
			getBooks();
		}, 300);
	};
	useEffect(() => {
		getBooks();
	}, []);
	return (
		<Routes>
			<Route exact path='/' element={<BookList books={books} onChangeShelf={changeShelfHandler} />} />
			<Route path='/search' element={<SearchBooks myBooks={books} onChangeShelf={changeShelfHandler} />} />
		</Routes>
	);
}

export default App;
