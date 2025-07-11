import Sidebar from "../components/Sidebar";

const ListItems = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="flex gap-4">
        <div className="w-54 border-r border-gray-200 h-screen">
          <Sidebar />
        </div>
        <div className="w-full pt-4">List Item</div>
      </div>
    </section>
  );
};

export default ListItems;
