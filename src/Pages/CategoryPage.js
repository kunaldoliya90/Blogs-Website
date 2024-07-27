import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import { useNavigate, useNavigation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Pagination from "../Components/Pagination";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs on <span>#{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
