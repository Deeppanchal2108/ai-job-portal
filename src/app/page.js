"use client"
import { Button } from "@/components/ui/button.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
const categories = [
  "ENGINEERING",
  "DESIGN",
  "MARKETING",
  "SALES",
  "FINANCE",
  "HR",
  "OPERATIONS",
  "SUPPORT",
];




export default function Home() {

  const [jobs , setJobs]=useState([])

  const fetch = async () => {
    
    try {
      const response = await axios.get("/api/jobs", {
        params: {
          category: "SUPPORT"
        }
      })

      console.log("response : ", response)

    }
    catch (err) {
      console.log("error : ", err)
    }
   


  }

  useEffect(() => {
    fetch()
  },[])

  return (

    <>
      <h1>
        Jobs
      </h1>
      
      <div className=" bg-white text-blue-300 flex flex-row">
        <h1 className="">React dev</h1>
        <p>
          kkfdksssssssssssssssssssssssssss

        </p>
        
    </div>
    
    
    
    </>

    
  );
}
