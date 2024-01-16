"use client";

import { useEffect, useState } from "react";
import ingredients from "../../../../ingredients.json";
import SingleReciepi from "./SingleReciepi";
import AddReciepi from "./AddReciepi";
import { recipe_url } from "@/mainApi/api";


const AllReciepi = () => {
  const [data, setData] = useState([]);
  // ${}recipe_url/recipes"
  useEffect(() => {
    fetch(`${recipe_url}/recipes`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const allItems = data;
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  return (
    <div>
      <h2>All Reciep</h2>
      <div className="grid lg:grid-cols-4 gap-5">
        {allItems?.map((item) => (
          <SingleReciepi key={item?._id} item={item} />
        ))}
      </div>

      <button
        className="text-blue-500 cursor-pointer "
        onClick={openAddProductModal}
      >
        Add More
      </button>

      <AddReciepi
        isOpen={isAddProductModalOpen}
        onClose={closeAddProductModal}
      />
    </div>
  );
};

export default AllReciepi;
