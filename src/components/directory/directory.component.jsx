import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const Directory = ({ categoriesData }) => {
  return (
    <div className="categories-container">
      {categoriesData.map((category) => (
        <CategoryItem categoryData={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
