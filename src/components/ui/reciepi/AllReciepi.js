"use client";

import { useEffect, useState } from "react";
import ingredients from "../../../../ingredients.json";
import SingleReciepi from "./SingleReciepi";
import AddReciepi from "./AddReciepi";
import { recipe_url } from "@/mainApi/api";
import { useSelector } from "react-redux";


const AllReciepi = () => {
  const { search } = useSelector((state) => state.filter);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch(`${recipe_url}/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const allItems = allData;
  // console.log(allItems)
  const filteredItems = allItems?.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
 
);
console.log(filteredItems)
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

 

  return (
    <div className="py-20 ">
    <div className="flex justify-between items-center pb-10">
    <h2 className="font-bold text-xl text-orange-800">All Recipes</h2>
      <button
        className="text-white cursor-pointer bg-orange-800  px-5 py-2 rounded text-xl hover:bg-yellow-500 transition-all ease-in-out duration-500 delay-200 font-medium"
        onClick={openAddProductModal}
      >
        Add More
      </button>
    </div>
    {loading ? (
        <div>Loading...</div>
      ) : filteredItems && filteredItems.length > 0 ? (
        <div className="grid lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <SingleReciepi key={item?._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="font-bold text-xl text-red-500">No data found</div>
      )}
    

      

      <AddReciepi
        isOpen={isAddProductModalOpen}
        onClose={closeAddProductModal}
      />
    </div>
  );
};

export default AllReciepi;
