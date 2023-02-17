import { useEffect, useState } from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { AiOutlineBank } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <Box
      bg={scroll ? "rgba(255, 255, 255, 0.15)" : ""}
      backdropFilter={"blur(10px)"}
      pos="fixed"
      color="#fff"
      w="100%"
      px={isMobile ? "40px" : "80px"}
      py={isMobile ? "2vh" : "3vh"}
      zIndex="5"
    >
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Flex justifyContent="space-between" align="center" w="full">
          <Flex align="center" gap="14px">
            <AiOutlineBank size="30px" />
            <Text fontWeight={500} fontSize="20px">
              Rise<span style={{ fontWeight: 700 }}>Finance</span>
            </Text>
          </Flex>

          <MdMenu size="35px" />
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Navbar;
