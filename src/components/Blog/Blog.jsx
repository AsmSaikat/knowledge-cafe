import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
	const {
		id,
		title,
		cover,
		author,
		author_img,
		posted_date,
		reading_time,
		hashtags,
	} = blog;

	return (
		<div className="mb-20">
			<img className="w-full mb-8" src={cover} alt="" />
			<div className="flex justify-between mb-4">
				<div className="flex">
					<img className="w-14" src={author_img} alt="" />
					<div className="ml-6">
						<h3 className="text-2xl">{author}</h3>
						<p>{posted_date}</p>
					</div>
				</div>
				<div className="flex justify-between items-center gap-2">
					<span>{reading_time} min read </span>
					<button
						onClick={() => handleAddToBookmarks(blog)}
						className="text-2xl"
					>
						<BsBookmarks />
					</button>
				</div>
			</div>
			<h2 className="text-4xl mb-4">{title}</h2>
			<p>
				{hashtags.map((hash, index) => (
					<span key={index}>
						<a href={`#${hash}`}>#{hash}</a>{" "}
					</span>
				))}
			</p>
			<button
				onClick={() => handleMarkAsRead(id, reading_time)}
				className="text-purple-800 font-bold underline mt-3"
			>
				Mark As Read
			</button>
		</div>
	);
};

export default Blog;
