// 外部モジュールからのインポート
import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// ローカルファイルからのインポート
import theme from './theme/theme'
import { Router } from './router/Router';

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
