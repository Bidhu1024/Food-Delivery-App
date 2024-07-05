import { Box } from "@mui/material"
import Sidebar from "../../Components/Sidebar"

const Home = () => {
  return (
    <Box width={"100%"} display={"flex"} alignItems={"center"}>
<Box width="20%" height="100vh" borderRight={"1px solid grey"}>
  <Sidebar />
</Box>
<Box width={"80%"} height="100vh">Mainbar</Box>
    </Box>
  )
}

export default Home