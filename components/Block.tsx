import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export default function Block({ backgroundColor, color, fontSize, children }) {
  return (
    <Flex
      margin={5}
      align="center"
      justify="center"
      h="80vh"
      backgroundColor={backgroundColor ? backgroundColor : ''}
    >
      <Text fontSize={fontSize} fontWeight="700" color={color ? color : ''}>
        {children}
      </Text>
    </Flex>
  );
}
