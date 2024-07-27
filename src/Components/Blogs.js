import React, { useContext } from "react";
import { AppContext } from "../Content/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[650px] py-8 flex flex-col  gap-y-7 mt-[70px] mb-[70px] justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
