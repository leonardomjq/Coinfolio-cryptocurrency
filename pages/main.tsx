import React from 'react';
import { Text, Link, Stack, Checkbox } from '@chakra-ui/core';

import Emoji from '../components/Emoji';
import Hero from '../components/Hero';
import CryptoList from '../components/CryptoList';
import GoBackBtn from '../components/GoBackBtn';
import Block from '../components/Block';
import Milestone from '../components/Milestone';

export default function Main() {
  return (
    <main>
      <Hero />
      <Block fontSize="58px">
        It has some basic{' '}
        <Link href="https://www.typescriptlang.org/" isExternal>
          <Text as="mark" backgroundColor="blue.500">
            Typescript
          </Text>
        </Link>{' '}
        <Emoji symbol="👩🏽‍💻" label="laptom woman emoji" />
      </Block>

      <Block backgroundColor="gray.200" color="black" fontSize="58px">
        <Link href="https://www.npmjs.com/package/axios" isExternal>
          <Text as="mark" backgroundColor="pink.400">
            Axios
          </Text>
        </Link>{' '}
        <Emoji symbol="🐹" label="rat emoji" /> and{' '}
        <Link href="https://reactjs.org/docs/hooks-intro.html" isExternal>
          <Text as="mark" backgroundColor="purple.500">
            Hooks
          </Text>
        </Link>{' '}
        <Emoji symbol="🦄" label="unicorn emoji" /> <br />
        do the API fetching
      </Block>

      <Block backgroundColor="" color="" fontSize="25px">
        <Milestone />
      </Block>

      <CryptoList />

      <GoBackBtn />
    </main>
  );
}
