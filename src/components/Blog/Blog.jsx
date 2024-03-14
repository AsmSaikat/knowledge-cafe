const Blog = ({ blog }) => {
	const { cover, name, posted_date, title } = blog;
	console.log(blog);
	return (
		<div>
			<img src={cover} alt="" />
		</div>
	);
};

export default Blog;
