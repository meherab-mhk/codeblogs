import { useLoaderData } from "react-router-dom";
import Blog from "../components/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <section className="py-6 sm:py-12  ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm text-gray-400 dark:text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
