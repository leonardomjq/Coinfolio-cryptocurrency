import {
  Heading,
  Grid,
  Flex,
  Button,
  Text,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/core';

import Link from 'next/link';
import Input from '../components/Input';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <Heading size="xl" lineHeight="bold" fontWeight="800" color="green.400">
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
      </Flex>

      <Flex gridArea="form" flexDir="column" alignItems="stretch" padding={16}>
        <Input placeholder="Your name" />

        <Link href="/main">
          <Button
            marginTop={6}
            backgroundColor="green.500"
            height="50px"
            borderRadius="sm"
            _hover={{ backgroundColor: 'green.600' }}
          >
            ENTER
          </Button>
        </Link>
      </Flex>
    </Grid>
  );
}
