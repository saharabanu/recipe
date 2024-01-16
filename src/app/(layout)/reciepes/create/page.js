

"use client";

import { recipe_url } from "@/mainApi/api";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddReciepiPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to your API endpoint to insert data into the database
      const response = await axios.post(`${recipe_url}/recipes`, data);
      if(response?.data?.insertedId){
        alert(' recipe created')
      }
      else{
        alert('not created')
      }
      
     
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };
  
  return (
    <div className="  flex justify-center items-center  z-10  ">
     <div className="bg-gray-200 px-20 pb-10">
     <div className="flex justify-center items-center py-10">
            <h2 className="text-xl font-bold text-yellow-900 ">Add recipe</h2>
           
          
            </div>
     <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"  {...register("title", { required: true })}  placeholder="Enter Recipe Title" className="px-3 py-3 rounded bg-gray-50 outline-none my-2 w-full" />
        <input type="text"  {...register("ingredients", { required: true })}  placeholder="Enter Recipe ingredients" className="px-3 py-3 rounded bg-gray-50 outline-none my-2 w-full" />
        {/* <input type="text"  {...register("image", { required: true })}  placeholder="Enter Img url like: http://....png" className="px-3 py-3 rounded bg-gray-50 outline-none my-2 w-full" /> */}
        <textarea className="w-full my-2 px-3 py-3 outline-none h-24" type="text" {...register("instruction", { required: true })} placeholder="Enter recipe description ">

        </textarea>

        <input type="submit" value="Add New Recipe" className="bg-yellow-500 px-5 py-3 rounded text-white my-2" />
      </form>
     </div>
    </div>
  );
};

export default AddReciepiPage;
