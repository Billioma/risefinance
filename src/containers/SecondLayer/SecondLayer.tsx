import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FiRefreshCcw } from "react-icons/fi";
import { AreaChart } from "../../components/Charts/AreaChart";
import { motion } from "framer-motion";

const SecondLayer = () => {
  return (
    <Box px={["35px", "75px", "105px", "335px"]} pb="144px" pt="71px">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center flexDir="column" textAlign="center">
          <Heading
            className="heading"
            fontWeight={600}
            fontSize={["25px", "35px", "35px", "45px"]}
          >
            Consulting For Startups In <br />
            Fintech
          </Heading>
          <Text
            w="55%"
            lineHeight="130%"
            my="45px"
            fontWeight={500}
            fontSize={["14px", "14px", "16px", "20px"]}
            color="#121139"
          >
            Our Team consists of proven experts from finance, tech and science.
            This mix makes it possible for our team to deliver the best results
            to all our clients.
          </Text>
        </Center>
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          bg="purpleColor"
          color="#fff"
          boxShadow="20px 20px 25px #812DE2"
          borderRadius="30px"
          p="24px"
          w="100%"
        >
          <Flex mb="36px" align="flex-start" justifyContent="space-between">
            <Box>
              <Text fontWeight={500} fontSize="13px">
                Growth report
              </Text>
              <Text my="8px" fontWeight={500} fontSize="20px">
                Annual Growth of Our <br /> Customers
              </Text>
              <Text fontWeight={700} fontSize="24px">
                1,000% in Value
              </Text>
              <Text my="8px" fontSize="15px" color="#B8C0CC">
                Success rate
              </Text>
            </Box>
            <Box bg="#243B53" p="10px" borderRadius="8px" w="fit-content">
              <FiRefreshCcw />
            </Box>
          </Flex>

          <AreaChart />
        </Box>
      </motion.div>
    </Box>
  );
};

export default SecondLayer;
