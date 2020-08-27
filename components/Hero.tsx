import React from 'react';
import { Grid, Flex, Link, Text, Image } from '@chakra-ui/core';

import RainbowLine from './RainbowLine';
import Emoji from './Emoji';

const heroImage = require('../public/VR1.svg');

export default function Hero() {
  return (
    <div>
      <Grid
        as="main"
        height="90vh"
        templateColumns="1fr 1fr"
        templateRows="10px 1fr 550px 1fr"
        templateAreas="
          'line line'
          '. .'
          'heading blob'
          '. .'
        "
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <RainbowLine />
        <Flex align="center" justify="center" h="90vh">
          <Flex align="end">
            <Text
              fontSize="70px"
              fontWeight="700"
              alignItems="center"
              justifyContent="center"
              gridArea="heading"
              color="black"
              marginLeft={20}
            >
              This project fetches data from{' '}
              <Link href="https://coinranking.com/" isExternal>
                <Text as="mark" backgroundColor="pink.700">
                  Coinranking
                </Text>
              </Link>{' '}
              <Emoji symbol="👩🏻‍🚀" label="astronaut emoji" />
            </Text>
          </Flex>
        </Flex>
        <Flex justify="start" align="center">
          <Image src={heroImage} size="80%" marginRight={20} />
        </Flex>
      </Grid>
    </div>
  );
}
