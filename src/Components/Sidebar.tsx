import DashboardIcon from "@mui/icons-material/Dashboard";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import HotelIcon from "@mui/icons-material/Hotel";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const sidebarList = [
    { name: "Home", icon: <DashboardIcon />, link: "/home" },
    { name: "Resturants", icon: <HotelIcon />, link: "/resturants" },
    { name: "Favourites", icon: <FavoriteIcon />, link: "/favs" },
    { name: "Orders", icon: <DoneOutlineIcon />, link: "/orders" },
    { name: "Top Rated", icon: <GradeIcon />, link: "/top_rated" },
    { name: "Settings", icon: <SettingsIcon />, link: "/settings" },
    {
      name: "Customer Support",
      icon: <SupportAgentIcon />,
      link: "/customer_support",
    },
  ];
  const navigate = useNavigate();
  const handleRoutes = (item: any) => {
    navigate(item.link);
  };
  return (
    <>
      {sidebarList.map((item, index) => {
        return (
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap="10px"
            sx={{
              mt: "2rem",
              ":hover": {
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              },
            }}
            padding={"0.4rem .6rem"}
            key={index}
            onClick={() => handleRoutes(item)}
          >
            {item.icon}
            {item.name}
          </Stack>
        );
      })}
    </>
  );
};

export default Sidebar;
