import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export default function Block({
  props,
  backgroundColor,
  color,
  fontSize,
  children,
}) {
  return (
    <Flex
      justify="center"
      align="center"
      h="80vh"
      backgroundColor={backgroundColor ? backgroundColor : ''}
    >
      <Flex w="100%" margin={5} align="center" justify="center">
        <Text fontSize={fontSize} fontWeight="700" color={color ? color : ''}>
          {children}
        </Text>
      </Flex>
    </Flex>
  );
}
