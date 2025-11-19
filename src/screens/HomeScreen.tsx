import React from 'react';
import { Box, Text, Button, ButtonText, ButtonIcon, Heading, Center, VStack } from '@gluestack-ui/themed';
import { Home, ArrowRight } from 'lucide-react-native';

const HomeScreen = () => {
  return (
    <Box flex={1} backgroundColor="$white">
      <Center flex={1}>
        <VStack space="md" alignItems="center">
          <Box p="$4" bg="$primary100" borderRadius="$full">
            <Home color="#0077e6" size={48} />
          </Box>
          <Heading size="2xl" color="$textDark900">
            Welcome Home
          </Heading>
          <Text size="md" color="$textLight500" textAlign="center" px="$8">
            This is your new modern boilerplate home screen powered by Gluestack UI.
          </Text>
          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            mt="$4"
            onPress={() => console.log('Explore pressed')}
          >
            <ButtonText>Explore </ButtonText>
            <ButtonIcon as={ArrowRight} />
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default HomeScreen;
