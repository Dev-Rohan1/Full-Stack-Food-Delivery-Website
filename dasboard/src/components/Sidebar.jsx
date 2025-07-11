import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="mt-4 ">
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-100 block text-blue-500 px-4 py-2 rounded-l-md"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-500 px-4 py-2 rounded-l-md block"
            }
          >
            Add Items
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/list-items"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-100 block text-blue-500 px-4 py-2 rounded-l-md"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-500 px-4 py-2 rounded-l-md block"
            }
          >
            List Items
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-100 block text-blue-500 px-4 py-2 rounded-l-md"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-500 px-4 py-2 rounded-l-md block"
            }
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
