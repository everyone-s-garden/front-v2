import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import globalStyles from './styles/globalStyles';
import { chakraTheme, theme } from './styles/theme';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={chakraTheme}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
