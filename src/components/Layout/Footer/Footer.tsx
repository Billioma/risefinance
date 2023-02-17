import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { AiOutlineBank } from "react-icons/ai";
import { foot } from "../../common/constants";

const Footer = () => {
  return (
    <Box
      bg="purpleColor"
      py="90px"
      px={["30px", "90px", "90px", "90px"]}
      color="#fff"
    >
      <Flex align="center" gap="14px" color="#3a49f9">
        <AiOutlineBank size="30px" />
        <Text fontWeight={700} fontSize="20px">
          Rise<span style={{ fontWeight: 700 }}>Finance</span>
        </Text>
      </Flex>
      <Grid
        mt="31px"
        gap={["20px", "20px", "20px", "0px"]}
        templateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(5,1fr)",
        ]}
      >
        {foot?.map((data) => (
          <GridItem key={data?.id}>
            <Heading color="#92989F" fontSize="17px" fontWeight={600}>
              {data?.title}
            </Heading>
            {data?.label?.map((dat, i) => (
              <Box mt="8px" fontSize="14px" lineHeight="35px" key={i}>
                {dat}
              </Box>
            ))}
          </GridItem>
        ))}
        <GridItem>
          <Heading color="#92989F" fontSize="17px" fontWeight={600}>
            Subscribe to our newsletter
          </Heading>
          <Text mt="8px" fontSize="14px" lineHeight="25px">
            Funding freemium long tail hypotheses first mover advantage assets
            ownership
          </Text>
        </GridItem>
      </Grid>

      <Text
        textAlign="center"
        pt="31px"
        mt="76px"
        color="#92989F"
        borderTop="1px solid #71777D"
      >
        All right reserved
      </Text>
    </Box>
  );
};

export default Footer;
