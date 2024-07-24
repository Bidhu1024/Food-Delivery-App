import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader';

const Resturants = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554', {
          headers: {
            'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
            'x-rapidapi-key': 'b40f7f0a85msh684994484a4b6a4p149f10jsn4940b2cc74c9'
          }
        });
        setData(response.data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data,loading);
  if(loading){
    return <Loader />
  }
  return (
    <Stack width="100%" bgcolor={"red"}>
{data.map((d:any,index:number)=>{
  return (
    <Box key={index}>
    {d?.averageRating}
    </Box>
  )
})}
    </Stack>
  )
}

export default Resturants


