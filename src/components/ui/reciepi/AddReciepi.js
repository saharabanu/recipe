"use client";

import { recipe_url } from "@/mainApi/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddReciepi = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
     
      const response = await axios.post(`${recipe_url}/recipes`, data);
      if(response?.data?.insertedId){
        toast.success(' recipe created')
        
      }
      else{
        toast.error('not created')
      }
      
      onClose();
    } catch (error) {
      toast.error("Error adding recipe:", error);
    }
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center z-10 bg-gray-200 px-20 pb-10">
     <div>
     <div className="flex justify-between items-center py-10">
            <h2 className="text-xl font-bold text-yellow-900 ">Add reciepi</h2>
           
           <button
             onClick={onClose}
             className=" text-red-500 text-2xl mb-2 font-bold border border-yellow-500 px-5 hover:bg-yellow-500 hover:text-white duration-300 delay-150 transition-all ease-in-out rounded"
           >
            X
           </button> 
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

export default AddReciepi;
