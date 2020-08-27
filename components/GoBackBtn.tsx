import React from 'react';
import { Flex, Button, Link } from '@chakra-ui/core';

export default function GoBackBtn() {
  return (
    <div>
      <Flex justify="center" align="center" paddingBottom={5}>
        <Link href="/">
          <Button rightIcon="arrow-back" color="pink.700" variant="outline">
            Go back
          </Button>
        </Link>
      </Flex>
    </div>
  );
}
