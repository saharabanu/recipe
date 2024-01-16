'use client'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { recipe_url } from "@/mainApi/api";
import axios from "axios";


const EditPage = ({ id }) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`${recipe_url}/recipes/${id}`);
        if (response.status === 200) {
          setRecipeDetails(response.data);
          // Populate form fields with existing data
          Object.keys(response.data).forEach((field) => {
            setValue(field, response.data[field]);
          });
        } else {
          console.error("Error fetching recipe details");
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`${recipe_url}/recipes/${id}`, data);
      console.log(response, 'from edit')
      if (response.status === 200) {
        alert('updated')
        // Recipe updated successfully
        router.push("/");
      } else {
        console.error("Error updating recipe");
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 px-20 pb-10">
      {recipeDetails ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <label>Title</label> */}
          <input {...register("title")}  className="px-3 py-3 rounded bg-gray-50 outline-none my-2 w-full"/>

          <label>Ingredients</label>
          <input {...register("ingredients")} className="px-3 py-3 rounded bg-gray-50 outline-none my-2 w-full"/>

          {/* <label>Image</label>
          <input {...register("image")} /> */}

          <label>Instruction</label>
          <textarea {...register("instruction")} rows={10} className="px-3 py-3 rounded bg-gray-50 outline-none my-2 w-full h-full"></textarea>

          <button type="submit" className="bg-yellow-500 px-5 py-3 rounded text-white my-2">Update Recipe</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPage;
