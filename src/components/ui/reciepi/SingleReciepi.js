'use client'

import { useState } from "react";
import AddReciepi from "./AddReciepi";
import Link from "next/link";

const SingleReciepi = ({item}) => {
    
    return (
      <>
        <div>
            <h2>{item?.title}</h2>
            <Link href={`/reciepes/details/${item?._id}`}>See More Details</Link>
            
        </div>
       
      </>
    );
};

export default SingleReciepi;