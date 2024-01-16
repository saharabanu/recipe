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
        // Make the DELETE request to your server's API endpoint
        const response = await axios.delete(`${recipe_url}/recipes/${id}`);

        if (response.status === 200) {
          // Item deleted successfully
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          // Something went wrong with deletion
          Swal.fire({
            title: "Error!",
            text: "Something went wrong with deletion.",
            icon: "error",
          });
        }
      }
    } catch (err) {
      // Handle any errors that occur during the process
      console.error("Error deleting recipe:", err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong with deletion.",
        icon: "error",
      });
    }
  };
  // const handleDelete = async (id) => {
  //   try {
  //     const result = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to delete this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     });

  //     if (result.isConfirmed) {
        

  //       if (res?.data?._id === id) {
  //         // Item deleted successfully
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Your file has been deleted.",
  //           icon: "success",
  //         });
  //       } else {
  //         // Something went wrong with deletion
  //         Swal.fire({
  //           title: "Error!",
  //           text: "Something went wrong with deletion.",
  //           icon: "error",
  //         });
  //       }
  //     }
  //   } catch (err) {
  //     // Handle any errors that occur during the process
  //     toast.error(err.message);
  //   }
  // };

    
    return (
      <>
        <div>
            <h2>{item?.title}</h2>
            <Link href={`/reciepes/details/${item?._id}`}>See More Details</Link>
            <button
                    className="bg-red-500 text-white py-1 px-2 rounded-md"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
            
        </div>
       
      </>
    );
};

export default SingleReciepi;