import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { card, logos } from "../../assets/exports";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

const FirstLayer = () => {
  return (
    <Box py={["50px", "100px", "100px", "100px"]} color="#fff">
      <Flex
        gap={["33px", "103px", "103px", "103px"]}
        flexDir={["column", "column", "column", "row"]}
        align="center"
      >
        <Box w="100%">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Box lineHeight="0em">
              <Heading
                className="heading"
                fontWeight={600}
                fontSize={["35px", "35px", "55px", "75px"]}
                lineHeight="100%"
              >
                <ReactRotatingText
                  pause={1000}
                  deletingInterval={100}
                  emptyPause={500}
                  items={["Scale Fintech"]}
                />
              </Heading>
              <Heading
                fontWeight={600}
                fontSize={["30px", "30px", "45px", "60px"]}
                lineHeight="100%"
              >
                Safe And Secure
              </Heading>
            </Box>
            <Text
              mt="26px"
              fontSize={["14px", "14px", "16px", "20px"]}
              fontWeight={500}
              lineHeight="140%"
            >
              Ship your fintech products to your customers with fast and
              reliable processes. Secure and highly customizable. Rise Finance
              is the best partner for you if you want to scale your finance
              products worldwide.
            </Text>
            <Box
              w="fit-content"
              p="4px"
              mt="36px"
              bg="linear-gradient(263.24deg, #9130f4 21.05%, #4646f9 77.63%)"
            >
              <Button
                bg="purpleColor"
                py="25px"
                px={["62px", "42px", "50px", "62px"]}
                borderRadius="0"
                className="border-gradient border-gradient-purple"
              >
                CONSULTATION
              </Button>
            </Box>
          </motion.div>
        </Box>

        <Box w="100%">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={card} w="600px" />
          </motion.div>
        </Box>
      </Flex>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center mt="92px">
          <Image src={logos} w={["100%", "70%", "70%", "70%"]} />
        </Center>
      </motion.div>
    </Box>
  );
};

export default FirstLayer;
