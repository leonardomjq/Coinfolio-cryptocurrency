import React, { useState, useEffect } from 'react';
import { Text, Box, Grid, Flex, Image, Spinner, Link } from '@chakra-ui/core';
import axios from 'axios';
import Emoji from './Emoji';

const api = 'https://api.coinranking.com/v1/public/coins';

export default function CryptoList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(api);
      setCoins(response.data.data.coins);
    }
    fetchData();
  }, []);

  console.log('Returned Coins: ', coins);

  const arrOfSymbols = coins
    // shows only 11 items
    .slice(0, 11)
    // maps over it, and turn index 2 into false (USDT)
    .map((coin, index) => {
      return index !== 2 && `${coin.symbol} `;
    })
    // when false, don't show it
    .filter((item) => item !== false);
  // console.log('arrOfSymbols', arrOfSymbols);

  const arrOfPrices = coins
    .slice(0, 11)
    .map((coin, index) => {
      return index !== 2 && `${coin.price} `;
    })
    .filter((item) => item !== false);
  // console.log('arrOfPrices', arrOfPrices);
  // makes only 2 decimals show
  const decimalPrices = arrOfPrices.map((item) => {
    return `$${Number(item).toFixed(2)} `;
  });

  const arrOfChanges = coins
    .slice(0, 11)
    .map((coin, index) => {
      return index !== 2 && `${coin.change} `;
    })
    .filter((item) => item !== false);

  const arrOfImages = coins
    .slice(0, 11)
    .map((coin, index) => {
      return index !== 2 && `${coin.iconUrl} `;
    })
    .filter((item) => item !== false);

  // const Photo = arrOfImages.map((image) => {
  //   <Image src={arrOfImages} />;
  // });

  return (
    <div>
      <Grid
        as="main"
        height="100vh"
        templateColumns="1fr 250px 250px 250px 1fr"
        templateRows="1fr 500px 1fr"
        templateAreas="
         '. . text . .'
         '. one two three .'
         '. . goback . .'
       "
        justifyContent="center"
        alignItems="center"
      >
        <Box gridArea="text" w="100%" marginTop={20}>
          <Text fontSize="xl" color="gray.200" fontWeight="bold">
            <Flex justifyContent="center" alignItems="center">
              Cryptocurrency prices
              <Spinner
                marginLeft={2}
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="pink.700"
                size="sm"
              />
            </Flex>
          </Text>
        </Box>
        <Box gridArea="one" w="100%" h="100%" backgroundColor="gray.200">
          <Text p={10} m={20} fontSize="xl" color="pink.700" fontWeight="bold">
            <Flex justifyContent="center" alignItems="center">
              {/* {Photo}
              {''} */}
              {arrOfSymbols}
            </Flex>
          </Text>
        </Box>
        <Box gridArea="two" w="100%" h="100%" backgroundColor="gray.200">
          <Text p={10} m={20} fontSize="xl" color="gray.900" fontWeight="bold">
            <Flex justifyContent="center" alignItems="center">
              {decimalPrices}
            </Flex>
          </Text>
        </Box>
        <Box gridArea="three" w="100%" h="100%" backgroundColor="gray.200">
          <Text p={10} m={20} fontSize="xl" color="gray.900" fontWeight="bold">
            <Flex alignItems="center" justifyContent="center">
              {arrOfChanges}
            </Flex>
          </Text>
        </Box>
        <Box gridArea="goback" w="100%" marginTop={20}>
          <Link href="/">
            <Text>
              <Flex justifyContent="center" alignItems="center">
                Go back {''} <Emoji symbol="🏓" label="ping pong racket" />
              </Flex>
            </Text>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}
