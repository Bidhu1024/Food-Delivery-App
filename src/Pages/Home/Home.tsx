import { Box, Button, Stack, Typography } from "@mui/material";
import "./Home.css";
import { FcRating } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import OrderSummary from './../../Components/OrderSummary';
const Home = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      bgcolor="#eec0c8"
    >
      <Box width={"100%"} height="100vh">
        <Stack width="100%" direction={"row"} padding="1rem">
          <Box width={"65%"}>
            <Typography variant="h2">
              Special Food Every Time For You and The Fastest Delivery in In
              Your City
            </Typography>
            <Typography variant="h6" color="grey">
             Be the fastest in delivering your healthy food with us order your best food anytime anywhere
            </Typography>
            <Button>Get Started</Button>
            <Button>Order process</Button>
            <Box display={"flex"} alignItems={"center"} gap="1rem">
              <Box className="info"><FcRating /> 20k Reviews</Box>
              <Box> <FaHome /> 250+ Resturants</Box>
              <Box><FaBeer /> 600+ Food Items</Box>
            </Box>
          </Box>
          <Box width={"35%"}>a image will be added here</Box>
        </Stack>
        <Box width={"100%"} mt="2rem">
          <Typography textAlign={"center"} fontSize={"2rem"} fontWeight={"bold"}>How we can serve and<br/>deliver your for favorite food</Typography>
          <Typography textAlign={"center"} fontSize="14px" color="grey">We always provide the best service for you and <br /> deliver your favorite food to your destination.</Typography>
        </Box>
        <Box width={"100%"} justifyContent={"space-evenly"} mt="2rem" display="flex">
          <OrderSummary Header={"Deliver your food"} subtype={"Deliver your best order"}/>
          <OrderSummary Header={"Order has arrived"} subtype={"Deliver your best order"} />
          <OrderSummary Header={"Order ready to serve"} subtype={"Deliver your best order"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
