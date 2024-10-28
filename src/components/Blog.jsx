const Blog = ({ blog }) => {
  const { cover_image, title, published_timestamp, tag_list } = blog;
  return (
    <article className="flex flex-col bg-gray-900 dark:bg-gray-50">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500"
          src={cover_image}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600"
        >
          <span className="flex gap-2">
            {tag_list.map((tag, id) => (
              <p key={id}>{tag}</p>
            ))}
          </span>
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {title}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
          <span>{published_timestamp}</span>
          <span>2.2K views</span>
        </div>
      </div>
    </article>
  );
};

export default Blog;
