import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Content/AppContext";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogID" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
