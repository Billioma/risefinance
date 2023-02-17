import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { mac } from "../../assets/exports";

const FifthLayer = () => {
  return (
    <Box
      color="#fff"
      bg="linear-gradient(177.23deg, #15123E -13.49%, #812DE2 109.75%)"
      pb="162px"
      pt={["50px", "50px", "80px", "100px"]}
    >
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center flexDir="column">
          <Heading
            fontSize={["25px", "45px", "35px", "45px"]}
            fontWeight={600}
            className="heading"
          >
            Coruma Finance
          </Heading>
        </Center>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center>
          <Text
            mt="55px"
            mb="72px"
            fontSize={["16px", "20px", "20px", "20px"]}
            fontWeight={500}
            w="50%"
            textAlign="center"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            officia velit, asperiores beatae esse cum, voluptatibus quae
            praesentium.
          </Text>
        </Center>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Center>
          <Image
            src={mac}
            w={["420px", "620px", "920px", "920px"]}
            h={["253px", "303px", "403px", "403px"]}
          />
        </Center>
      </motion.div>
    </Box>
  );
};

export default FifthLayer;
