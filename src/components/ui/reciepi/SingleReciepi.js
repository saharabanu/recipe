'use client'

import { useState } from "react";
import AddReciepi from "./AddReciepi";

const SingleReciepi = ({item}) => {
    
    return (
      <>
        <div>
            <h2>{item?.label}</h2>
            
        </div>
       
      </>
    );
};

export default SingleReciepi;