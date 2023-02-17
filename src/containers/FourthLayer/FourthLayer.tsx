import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Logo, phone } from "../../assets/exports";
import { logoOpt } from "../../components/common/constants";
import { motion } from "framer-motion";

const FourthLayer = () => {
  const [isMobile] = useMediaQuery("(max-width: 991px)");

  return (
    <Box
      py={["40px", "50px", "80px", "100px"]}
      px={["49px", "89px", "89px", "89px"]}
    >
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center flexDir="column">
          <Text
            className="heading"
            mb="20px"
            fontSize={["25px", "35px", "35px", "45px"]}
            fontWeight={600}
          >
            Case Study
          </Text>
          <Text
            fontSize={["16px", "20px", "20px", "20px"]}
            mb={["86px", "86px", "86px", "106px"]}
            fontWeight={500}
          >
            Some results from our clients
          </Text>
        </Center>
      </motion.div>

      <Box pos="relative">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            w={isMobile ? "100%" : "61%"}
            color="#fff"
            pl="54px"
            pr={["54px", "191px", "191px", "191px"]}
            py={isMobile ? "40px" : "90px"}
            borderRadius="30px"
            bg="linear-gradient(20.24deg, #812DE2 0%, #121139 40.63%)"
          >
            <Flex
              gap="10px"
              align="center"
              flexDir={["column", "row", "row", "row"]}
            >
              <Box>
                <Heading fontSize="27px" fontWeight={600}>
                  Coruma Finance
                </Heading>
                <Text mt="50px" fontSize="20px" fontWeight={500}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis explicabo cumque fugit, iure sed doloremque illum
                  accusantium doloribus earum. Nesciunt quaerat
                </Text>

                <Box
                  w="fit-content"
                  p="4px"
                  mt="50px"
                  bg="linear-gradient(263.24deg, #9130f4 21.05%, #4646f9 77.63%)"
                >
                  <Button
                    bg="linear-gradient(20.24deg, #812DE2 0%, #121139 40.63%)"
                    py={["20px", "30px", "30px", "30px"]}
                    px={["5px", "50px", "50px", "50px"]}
                    borderRadius="0"
                    className="border-gradient border-gradient-purple"
                  >
                    READ MORE ABOUT THIS CLIENT
                  </Button>
                </Box>
              </Box>

              <Image
                src={Logo}
                display={["none", "flex", "flex", "flex"]}
                h={isMobile ? "400px" : "653px"}
                w="184px"
              />
            </Flex>
          </Box>
        </motion.div>

        <Flex
          display={isMobile ? "none" : "flex"}
          pos="absolute"
          bottom={100}
          right={"-2.5rem"}
        >
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [100, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Flex align="center" color="#fff">
              <Image src={phone} />
              <Box>
                {logoOpt?.map((data, i) => (
                  <Box
                    bg="purpleColor"
                    key={i}
                    zIndex={-2}
                    pos="relative"
                    mb={i !== 2 ? "54px" : ""}
                    borderTopRightRadius="30px"
                    borderBottomRightRadius="30px"
                    ml="-30px"
                    p="37px"
                    fontSize="17px"
                    fontWeight={500}
                  >
                    {data}
                  </Box>
                ))}
              </Box>
            </Flex>
          </motion.div>
        </Flex>
      </Box>
      <Flex
        align="center"
        mt="30px"
        justifyContent="center"
        display={["none", "flex", "flex", "none"]}
      >
        <Image src={phone} h="500px" />
        <Box>
          {logoOpt?.map((data, i) => (
            <Box
              bg="purpleColor"
              key={i}
              zIndex={-2}
              color="#fff"
              pos="relative"
              mb={i !== 2 ? "54px" : ""}
              borderTopRightRadius="30px"
              borderBottomRightRadius="30px"
              ml="-30px"
              p="27px"
              fontSize="17px"
              fontWeight={500}
            >
              {data}
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default FourthLayer;
