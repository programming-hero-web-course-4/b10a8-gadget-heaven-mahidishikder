import { NavLink } from "react-router-dom";

function Categoris({ categoris }) {
  return (
    <div className="bg-gray-100 shadow-lg p-6 rounded">
      {categoris.map(category => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.category}
          className={({ isActive }) =>
            `btn w-full my-3 rounded-full ${
              isActive ? "bg-violet-500 text-white" : "bg-white hover:bg-violet-500"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}

export default Categoris;
