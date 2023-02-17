import { Box, Center, Icon, Flex, Heading, Text } from "@chakra-ui/react";
import { FiRefreshCcw } from "react-icons/fi";
import PieChart from "../../components/Charts/PieChart";
import { process } from "../../components/common/constants";
import { motion } from "framer-motion";

const ThirdLayer = () => {
  return (
    <Box
      bg="linear-gradient(210.24deg, #812DE2 0%, #121139 40.63%)"
      px={["50px", "50px", "50px", "140px"]}
      pt={["55px", "55px", "75px", "105px"]}
      pb="195px"
    >
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center>
          <Heading
            className="heading"
            lineHeight="110%"
            textAlign="center"
            fontWeight={600}
            fontSize={["25px", "35px", "35px", "45px"]}
          >
            Delivering Value In Every <br /> Step Of Production
          </Heading>
        </Center>
      </motion.div>

      <Flex
        mt={["100px", "60px", "100px", "123px"]}
        flexDir={["column", "column", "row", "row"]}
        gap={["85px", "85px", "85px", "185px"]}
      >
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            align="center"
            w="100%"
          >
            <Box
              bg="purpleColor"
              color="#fff"
              w={["360px", "360px", "360px", "360px"]}
              p="24px"
              borderRadius="16px"
              boxShadow="5px 12px 15px 5px #812DE2"
            >
              <Flex align="flex-start" justifyContent="space-between">
                <Box>
                  <Text fontWeight={500} fontSize="13px">
                    Meta Info
                  </Text>
                  <Text my="8px" fontWeight={570} fontSize="20px">
                    This is the body title
                  </Text>
                  <Text fontWeight={700} fontSize="24px">
                    1,000 in Value
                  </Text>
                  <Text mt="8px" fontSize="15px" color="#B8C0CC">
                    This is a subtitle
                  </Text>
                </Box>
                <Box bg="#243B53" p="10px" borderRadius="8px" w="fit-content">
                  <FiRefreshCcw />
                </Box>
              </Flex>

              <Box my="16px">
                <PieChart />
              </Box>

              <Box>
                <Text fontWeight={500} fontSize="13px">
                  Meta Info
                </Text>
                <Text my="8px" fontWeight={570} fontSize="20px">
                  This is the body title
                </Text>
                <Text fontSize="15px" color="#B8C0CC">
                  This is a subtitle
                </Text>
              </Box>
            </Box>
          </Flex>
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box color="#fff">
            <Heading
              fontSize={["25px", "25px", "25px", "30px"]}
              fontWeight={600}
            >
              The Process
            </Heading>
            <Text
              w="85%"
              mt="22px"
              mb={["38px", "38px", "38px", "108px"]}
              fontSize={["16px", "16px", "16px", "20px"]}
              fontWeight={500}
            >
              Strategic phrases we run through with every client make it
              possible to implement highly efficinet processes, even in high
              pace startups that like to scale as fast as possible.
            </Text>

            <Flex gap="25px" w="100%" flexDir={["column", "row", "row", "row"]}>
              {process?.map((data) => (
                <Flex
                  flexDir="column"
                  key={data?.id}
                  justifyContent="center"
                  align="center"
                  pos="relative"
                  w="100%"
                  p="2px"
                  borderRadius="30px"
                  mt="34px"
                  bg="linear-gradient(263.24deg, #9130f4 21.05%, #4646f9 77.63%)"
                >
                  <Box
                    className="border-gradient border-gradient-purple"
                    bg="#1C1A50"
                    pt="14px"
                    pb="23px"
                    minW={["100%", "100%", "100%", "14vw"]}
                    textAlign="center"
                    borderRadius="30px"
                  >
                    <Icon
                      as={data?.icon}
                      w={["35px", "35px", "25px", "35px"]}
                      h={["35px", "35px", "25px", "35px"]}
                    />
                    <Heading
                      mt={["28px", "28px", "20px", "28px"]}
                      fontSize={["18px", "18px", "16px", "18px"]}
                      fontWeight={500}
                    >
                      {data?.title}
                    </Heading>
                  </Box>
                  <Text
                    className="heading"
                    fontWeight={500}
                    fontSize={["60px", "60px", "50px", "60px"]}
                    pos="absolute"
                    bottom={["-61px", "-61px", "-51px", "-61px"]}
                  >
                    {data?.id}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default ThirdLayer;
