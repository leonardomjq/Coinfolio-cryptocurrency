import React from 'react';
import { Stack, Checkbox, Flex, Box } from '@chakra-ui/core';

import Emoji from '../components/Emoji';

export default function Milestone() {
  return (
    <Flex justify="center" align="center" h="80vh">
      <Box
        padding={5}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justify="center" align="center" marginBottom={8}>
          Project Milestone
          <Emoji symbol="☕️" alt="coffee emoji" />
        </Flex>
        <Stack spacing={8}>
          <Checkbox defaultIsChecked isDisabled>
            Setup Nextjs + Typescript + Emotion
          </Checkbox>
          <Checkbox defaultIsChecked isDisabled>
            Finish landing page
          </Checkbox>
          <Checkbox defaultIsChecked isDisabled>
            Fetch data from Coinraking API
          </Checkbox>
          <Checkbox defaultIsChecked isDisabled>
            Display list of coins
          </Checkbox>
          <Checkbox defaultIsChecked isDisabled>
            Display based on volume, only top 10
          </Checkbox>
          <Checkbox variantColor="pink">Change color based on %</Checkbox>
          <Checkbox variantColor="pink">
            Display list based on increase in %
          </Checkbox>
          <Checkbox variantColor="pink">
            Clean code and make it responsive
          </Checkbox>
        </Stack>
      </Box>
    </Flex>
  );
}
