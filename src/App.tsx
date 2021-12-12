import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme'

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
      </ChakraProvider>
    </div>
  );
}

export default App;
