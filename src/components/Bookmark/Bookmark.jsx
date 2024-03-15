const Bookmark = ({ bookmark }) => {
	return (
		<div className="bg-white-200 shadow-xl h-20 mb-5">
			<h2 className="text-2xl mb-4">{bookmark.title}</h2>
		</div>
	);
};

export default Bookmark;
