import React from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/core';

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      className="outline"
      height="50px"
      backgroundColor="gray.700"
      focusBorderColor="pink.400"
      borderRadius="sm"
      {...props}
    />
  );
};

export default Input;
