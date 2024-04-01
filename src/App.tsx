import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NavermapsProvider } from 'react-naver-maps';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import globalStyles from './styles/globalStyles';
import { emotionTheme, theme } from './styles/theme';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={emotionTheme}>
        <ChakraProvider theme={theme}>
          <NavermapsProvider ncpClientId={import.meta.env.VITE_NCP_CLIENT_ID}>
            <Global styles={globalStyles} />
            <RouterProvider router={router} />
          </NavermapsProvider>
        </ChakraProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
