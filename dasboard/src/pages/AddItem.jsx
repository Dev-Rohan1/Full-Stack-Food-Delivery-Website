import { useState } from "react";
import Sidebar from "../components/Sidebar";

const AddItem = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="container mx-auto px-8">
      <div className="flex gap-4">
        <div className="w-56 border-r border-gray-200 h-screen">
          <Sidebar />
        </div>

        <div className="w-full pt-4">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Upload Image
              </label>
              {uploadImage ? (
                <div className="w-48 h-48 border border-gray-300 rounded overflow-hidden">
                  <img
                    src={uploadImage}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <label className="cursor-pointer flex items-center gap-2 border border-dashed border-gray-400 px-4 py-6 rounded w-48 text-gray-600 hover:bg-gray-100">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-upload"
                  >
                    <path d="M12 3v12" />
                    <path d="m17 8-5-5-5 5" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  </svg>
                  <span>Upload</span>
                </label>
              )}
            </div>

            <div>
              <label className="block mb-1">Product Name</label>
              <input
                type="text"
                className="border border-gray-300 outline-none rounded py-1.5 px-2 w-full"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block mb-1">Product Description</label>
              <textarea
                className="border border-gray-300 outline-none rounded py-1.5 px-2 w-full h-24"
                placeholder="Enter product description"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block mb-1">Product Category</label>
                <select className="border border-gray-300 outline-none rounded py-1.5 px-2 w-full">
                  <option value="salad">Salad</option>
                  <option value="rolls">Rolls</option>
                  <option value="desserts">Desserts</option>
                  <option value="sandwich">Sandwich</option>
                  <option value="cake">Cake</option>
                  <option value="pure-veg">Pure Veg</option>
                  <option value="pasta">Pasta</option>
                  <option value="noodles">Noodles</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block mb-1">Product Price</label>
                <input
                  type="number"
                  className="border border-gray-300 outline-none rounded py-1.5 px-2 w-full"
                  placeholder="Enter product price"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition text-white py-2.5 px-6 text-sm font-medium rounded "
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
