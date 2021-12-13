// 外部モジュールからのインポート
import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// ローカルファイルからのインポート
import theme from './theme/theme'

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Button colorScheme="teal">ボタン</Button>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
