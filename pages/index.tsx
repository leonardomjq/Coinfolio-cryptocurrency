import {
  Heading,
  Grid,
  Box,
  Flex,
  Button,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/core';
import Link from 'next/link';

import Input from '../components/Input';
import RainbowLine from '../components/RainbowLine';

export default function Home() {
  return (
    <Grid
      as="main"
      height="95vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="10px 1fr 480px 1fr"
      templateAreas="
        'line line line line'
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <RainbowLine />
      <Box gridArea="logo" flexDir="column" alignItems="flex-start">
        <Heading size="2xl" lineHeight="bold" fontWeight="600" color="pink.700">
          Coinfolio
        </Heading>

        <Heading size="2xl" lineHeight="shorter" marginTop={2}>
          Built with Chakra UI
          <aside />
          and NextJS
          <AvatarGroup size="md" max={4}>
            <Avatar
              name="Leonardo Jaques"
              src="./leo.jpg
              "
            />
            <Avatar name="NextJS" src="./nextjs.jpg" />
            <Avatar name="Chakra UI" src="./chakra.jpg" />
          </AvatarGroup>
        </Heading>
      </Box>

      <Flex gridArea="form" flexDir="column" alignItems="stretch" padding={16}>
        <Input className="outline" placeholder="Your name" />

        <Link href="/main">
          <Button
            marginTop={6}
            backgroundColor="pink.700"
            height="50px"
            borderRadius="sm"
            _hover={{ backgroundColor: 'pink.600' }}
          >
            ENTER
          </Button>
        </Link>
      </Flex>
    </Grid>
  );
}
