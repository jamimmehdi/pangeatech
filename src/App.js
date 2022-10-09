
import { Box } from "@chakra-ui/react";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import TableData from "./components/Table";

export default function App() {

  return (
    <Box>
      <Navbar />
      <Chart />
      <TableData />
    </Box>
  )
}
