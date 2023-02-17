import { Box, useMediaQuery } from "@chakra-ui/react";
import { Footer, Navbar } from "./components/Layout";
import {
  FifthLayer,
  FirstLayer,
  FourthLayer,
  SecondLayer,
  ThirdLayer,
} from "./containers";

const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");
  return (
    <Box overflowX="hidden" bg="#f7f7f7">
      <Navbar />
      <Box px={isMobile ? "40px" : "80px"} pt={isMobile ? "50px" : "20px"} bg="purpleColor">
        <FirstLayer />
      </Box>
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
      <FifthLayer />
      <Footer />
    </Box>
  );
};

export default App;
