import { IoIosBookmarks } from "react-icons/io";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import { saveBlogs } from "../utils/localStorage";
const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const {
    title,
    user,
    published_at,
    reading_time_minutes,
    public_reactions_count,
    body_markdown,
    body_html,
    tags,
  } = blogDetails;

  const handleBookmark = (blog) => {
    saveBlogs(blog);
  };

  return (
    <div className="max-w-2xl px-6 pb-16 mx-auto space-y-12 relative">
      <IoIosBookmarks
        title="Bookmark this content"
        className="text-3xl text-indigo-900 absolute right-4 top-0 cursor-pointer"
        onClick={() => handleBookmark(blogDetails)}
      ></IoIosBookmarks>
      <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img
                src={user.profile_image}
                alt=""
                className="w-10 h-10 border rounded-full bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
              />
              <p className="text-sm">
                {user.name} • {published_at}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {reading_time_minutes} min read • {public_reactions_count} views
            </p>
          </div>
        </div>
        <div className="text-gray-100 dark:text-gray-800">
          <p>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_markdown}</Markdown>
          </p>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
          {tags.map((tag, index) => (
            <a
              rel="noopener noreferrer"
              key={index}
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
