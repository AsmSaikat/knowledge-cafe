import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readingTime, setReadingTime] = useState(0);
	console.log(readingTime);

	const handleAddToBookmarks = (blog) => {
		const newBookmarks = [...bookmarks, blog];
		setBookmarks(newBookmarks);
	};

	const handleMarkAsRead = (id, time) => {
		const newReadingTime = readingTime + time;
		setReadingTime(newReadingTime);

		// remove the read blog from bookmark
		// console.log("remove bookmark", id);
		const remainingBookmarks = bookmarks.filter(
			(bookmark) => bookmark.id !== id
		);
		setBookmarks(remainingBookmarks);
	};

	return (
		<>
			<Header></Header>
			<div className="md:flex gap-10 max-w-7xl mx-auto mt-5">
				<Blogs
					handleMarkAsRead={handleMarkAsRead}
					handleAddToBookmarks={handleAddToBookmarks}
				></Blogs>
				<Bookmarks
					bookmarks={bookmarks}
					readingTime={readingTime}
				></Bookmarks>
			</div>
		</>
	);
}

export default App;
