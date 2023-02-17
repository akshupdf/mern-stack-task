import { useEffect, useState } from "react";
import axios from 'axios'
import Sidenav from "./sidenav";



function Womensstuff () {


    const [data,setData] = useState("")

    const getData = () =>{

        axios.get("https://fakestoreapi.com/products/category/women's%20clothing").then((res)=>{
        setData(res.data)
    })
        
    }
    

    useEffect(() => {
        getData();
   }, []);

    
    return(
        <div className="flex w-[100%]">
            <div className="w-[20%]"><Sidenav /></div>

        {
          data &&  data.map((data)=>{
                return(
                    <div className="mt-10  flex" key={data.id}>

                 

                    <div className="w-full max-w-sm p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="">
        <img className="p-8 rounded-t-lg" src={data.image} alt="product image" />
    </a>
    <div className="px-5 pb-5 ">
        <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </a>
        
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{data.price}$</span>
            <a href="/cart" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

                    </div>
                )
                
            })
        }
            


        </div>
    )
}

export default Womensstuff;