import { Box, Stack } from '@mui/material';
import React from 'react'

interface IProps{
  data:any;
}

const ResturantCard:FC<IProps> = ({data}) => {
  console.log(data)
  return (
    <Box display={"flex"} justifyContent={"center"} width={"8rem"} height={"16rem"} >
<Box>
<img src={data.image} alt="hotel" style={{height:"50%", width:"100%"}} />
</Box>
    </Box>

  )
}

export default ResturantCard