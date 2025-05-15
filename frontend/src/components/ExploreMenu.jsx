import { useContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
import { StoreContext } from "../contexts/StoreContext";
import ItemList from "../components/ItemList";

const ExploreMenu = ({ category, setCategory }) => {
  const { footList } = useContext(StoreContext);
  const [foodData, setFoodData] = useState([]);

  const filterCategoryFoodData = () => {
    if (category === "all") {
      setFoodData(footList);
    } else {
      const filtered = footList.filter((item) => item.category === category);
      setFoodData(filtered.length > 0 ? filtered : footList);
    }
  };

  const handleCategoryClick = (menuName) => {
    setCategory(category === menuName ? "all" : menuName);
  };

  useEffect(() => {
    filterCategoryFoodData();
  }, [category, footList]);

  return (
    <section id="menu" className="mt-16">
      {/* Heading */}
      <div className="mb-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 text-center">
          Explore Our Menu
        </h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto text-center">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and provide you with a memorable
          dining experience, one delicious meal at a time.
        </p>
      </div>

      {/* Menu Category Selector */}
      <div className="flex flex-wrap gap-4 md:gap-6 pb-4 items-center justify-center">
        {menu_list.map((menu, index) => {
          const isActive = category === menu.menu_name;
          return (
            <div
              key={index}
              onClick={() => handleCategoryClick(menu.menu_name)}
              className={`flex flex-col items-center w-20 md:w-28 cursor-pointer group transition-all duration-200 ${
                isActive ? "scale-105" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-1 flex items-center justify-center overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-orange-600 ring-offset-2"
                    : "hover:ring-2 hover:ring-orange-300"
                }`}
              >
                <img
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  src={menu.menu_image || "/fallback-image.jpg"}
                  alt={menu.menu_name || "menu item"}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/fallback-image.jpg";
                    e.target.alt = "Image not available";
                  }}
                />
              </div>
              <p
                className={`mt-2 text-xs md:text-sm font-medium text-center ${
                  isActive ? "text-orange-600 font-semibold" : "text-gray-700"
                }`}
              >
                {menu.menu_name || "Unnamed"}
              </p>
            </div>
          );
        })}
      </div>

      <hr className="mt-4 border-t border-gray-200 w-full" />

      {/* Food List Section */}
      <div className="mt-8 md:mt-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          {category === "all" ? "Top dishes near you" : `${category} dishes`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {foodData.length > 0 ? (
            foodData.map((item, index) => (
              <ItemList key={index} foodData={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No items found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreMenu;
