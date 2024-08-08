import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader';
import {list} from "./HotelList.js"
import ResturantCard from './ResturantCard.js';
const Resturants = () => {


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://dev.foodkit.io/api/v5/storefront/content/tenants/{tenant}/branch-list", {
        
  //       });
  //       setData(response.data.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <Stack width="100%" height="100vh" sx={{background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)"}}>
{list.map((d:any,index:number)=>{
  return (
    <Box width={"100%"} key={index}>
    <ResturantCard data={d} />
    </Box>
  )
})}
    </Stack>
  )
}

export default Resturants


