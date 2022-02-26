import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import {} from '@chakra-ui/react';

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function gridListWithCTA() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Services We Provides You
            </chakra.h2>
            <Button colorScheme="yellow" size="md">
              Contact Now
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
            We are well-versed in IT solutions ,WEB development & CRM softwares, Lead/Sales/Revenue Generation . We work with just about any technology that a small business would encounter. Varsh use this expertise to help customers with small to mid-sized projects. 
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Business Development Solutions'}
          text={'Short text describing one of you features/service'}
        />
        <Feature
          heading={'WEB Development & CRM Software'}
          text={'Short text describing one of you features/service'}
        />
        <Feature
          heading={'Digital Marketing & Informetic Center'}
          text={'Short text describing one of you features/service'}
        />
       
      </Grid>
    </Box>
  );
}