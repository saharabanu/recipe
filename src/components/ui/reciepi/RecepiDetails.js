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
        <div>
            {recipeDetails ? (
        <>
          <h2>{recipeDetails.title}</h2>
          {/* Display other details as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    );
};

export default RecepiDetails;


