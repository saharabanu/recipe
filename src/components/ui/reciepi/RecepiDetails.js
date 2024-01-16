'use client'

import { recipe_url } from "@/mainApi/api";
import { useEffect, useState } from "react";


const RecepiDetails = ({id}) => {
    const [recipeDetails, setRecipeDetails] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${recipe_url}/recipes/${id}`);
            if (response.ok) {
              const data = await response.json();
              setRecipeDetails(data);
            } else {
              console.error(`Error fetching recipe details. Status: ${response.status}`);
            }
          } catch (error) {
            console.error("Error fetching recipe details:", error);
          }
        };
    
        fetchData();
      }, [id]);
    return (
        <div className=" py-20 mx-20">
          <div className="border px-5 py-5 rounded text-xl">
          {recipeDetails ? (
        <>
         <div className="flex  space-x-44 items-center">
          <div className="w-96">
          <h2 className="font-bold">{recipeDetails?.title}</h2>
          

          <p className="">{recipeDetails?.instruction}</p>
          </div>
          <div className="">
            <h2 className="pb-5 text-xl font-bold">All Ingredients here</h2>
          <ul className="list-disc grid grid-cols-2 ">
                                        {recipeDetails.ingredients.split(',').map((ingredient, index) => (
                                            <li key={index} className="mb-2">{ingredient}</li>
                                        ))}
                                    </ul>
          {/* <AllIngrdients ingredients={recipeDetails?.ingredients} /> */}
          </div>
         </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
          </div>
        </div>
    );
};

export default RecepiDetails;


