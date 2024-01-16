'use client'
import { searched } from "@/redux/features/filterSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
    const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };
    return (
        <div className="bg-gray-100 border-b-2 shadow-sm">
            <div className="flex justify-between items-center mx-20 py-3 ">
            <Link href="/" className="text-orange-800 text-xl font-bold transition-all hover:text-yellow-500 duration-200 delay-150 ease-in-out">Food Recipes</Link>
              <menu className="lg:block hidden">
                   <ul>
                    
                    
               <Link href="/" className="text-orange-800 text-xl font-bold transition-all hover:text-yellow-500 duration-200 delay-150 ease-in-out lg:mx-7">Home </Link>
               <Link href="/reciepes/create" className="text-orange-800 text-xl font-bold transition-all hover:text-yellow-500 duration-200 delay-150 ease-in-out">Create Recipe </Link>
              
                   </ul>
              </menu>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <input
                    name="search"
                    type="search"
                    className=" relative pl-8 rounded py-2 w-[400px] outline-none"
                    placeholder="Search with title"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                 
                </form>
              </div>
              {/* <input type="text" placeholder="Search with title And ingredient" className="border rounded px-3 py-3 lg:w-80 outline-none"/> */}
               

            </div>
        </div>
    );
};

export default Navbar;