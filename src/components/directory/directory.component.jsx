import { categories } from "../../App";
import CategoryItem from "../category-item/category-item.component";
// import CategoryItem from "./components/category-item/category-item.component";
import "./directory.style.scss";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem categoryData={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
