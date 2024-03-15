import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
	console.log(bookmarks);
	return (
		<div className="md:w-1/3 rounded-t-2xl overflow-y-scroll">
			<div>
				<h3 className="text-4xl">Reading Time: {readingTime}</h3>
			</div>
			<h2 className="text-3xl text-center bg-gray-400 mb-5 rounded-2xl">
				Bookmarked Blogs: {bookmarks.length}
			</h2>
			{bookmarks.map((bookmark, index) => (
				<Bookmark key={index} bookmark={bookmark}></Bookmark>
			))}
		</div>
	);
};

export default Bookmarks;
