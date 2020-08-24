import React from 'react';

import { Heading, Text, Grid, Box, Flex, Link } from '@chakra-ui/core';

// import { Head } from 'next/document';
import Emoji from '../components/Emoji';
import RainbowLine from '../components/RainbowLine';
import CryptoList from '../components/CryptoList';
export default function Main() {
  return (
    <main>
      <Grid
        as="main"
        height="90vh"
        templateColumns="1fr 730px 1fr"
        templateRows="10px 1fr 550px 1fr"
        templateAreas="
          'line line line line'
          '. . . .'
          '. heading . .'
          '. coins . .'
        "
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <RainbowLine />
        <Text
          fontSize="58px"
          fontWeight="700"
          alignItems="center"
          justifyContent="center"
          gridArea="heading"
          color="black"
        >
          This project fetches <br />
          data from{' '}
          <Link href="https://coinranking.com/" isExternal>
            <Text as="mark" backgroundColor="pink.400">
              Coinranking
            </Text>
          </Link>{' '}
          using{' '}
          <Link href="https://www.npmjs.com/package/axios" isExternal>
            <Text as="mark" backgroundColor="pink.700">
              Axios
            </Text>
          </Link>{' '}
          and{' '}
          <Link href="https://reactjs.org/docs/hooks-intro.html" isExternal>
            <Text as="mark" backgroundColor="purple.500">
              Hooks
            </Text>
          </Link>{' '}
          <Emoji symbol="🎉" label="birthday popper" />
        </Text>
      </Grid>

      {/* SECTION 2 */}
      <CryptoList />
    </main>
  );
}
