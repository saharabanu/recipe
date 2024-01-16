'use client'

import { useEffect, useState } from "react";
import ingredients from "../../../../ingredients.json"

const AllReciepi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(ingredients)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, []);

    return (
        <div>
            <h2>All Reciep</h2>
        </div>
    );
};

export default AllReciepi;