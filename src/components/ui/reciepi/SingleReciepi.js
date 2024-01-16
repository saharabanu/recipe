'use client'

import { useState } from "react";
import AddReciepi from "./AddReciepi";
import Link from "next/link";
import Swal from "sweetalert2";
import { recipe_url } from "@/mainApi/api";
import axios from "axios";

const SingleReciepi = ({item}) => {
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
       
        const response = await axios.delete(`${recipe_url}/recipes/${id}`);

        if (response.status === 200) {
         
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
         
          Swal.fire({
            title: "Error!",
            text: "Something went wrong with deletion.",
            icon: "error",
          });
        }
      }
    } catch (err) {

      Swal.fire({
        title: "Error!",
        text: "Something went wrong with deletion.",
        icon: "error",
      });
    }
  };
  

    
    return (
      <>
        <div className="border pt-10 pb-5 px-4  rounded text-xl space-y-3 bg-orange-400 text-white">
        <Link href={`/reciepes/details/${item?._id}`} cl><h2 className="font-bold cursor-pointer">{item?.title? item?.title : "title"}</h2></Link>
            
          <div className="flex justify-between pt-5">
          
            <Link href={`/reciepes/edit/${item?._id}`} className="bg-green-500 text-white px-7 rounded font-bold py-2">Edit</Link>
            <button
                    className="bg-red-500 text-white py-1 px-2 rounded-md"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
          </div>
            
        </div>
       
      </>
    );
};

export default SingleReciepi;