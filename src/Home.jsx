import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import axios from "axios"


const Home = () => {
  const [sideBar,setSideBar] = useState("");
  useEffect(()=>{
    try{

      const res = async () => {
const response =   await fetch("https://dummyjson.com/recipes");

const data = await response.json();
setSideBar(data.recipes);
      }
   
      res();
    }
    catch(error){
      console.error("error message",error.message);
      setSideBar(error.message);

    }


  },[])
    return <SideBar data={sideBar} />;
  
}

export default Home