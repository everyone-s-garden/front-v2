import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import loginAPI from './services/login/api';
import useIsLoggedInStore from './stores/useIsLoggedInStore';
import globalStyles from './styles/globalStyles';
import { emotionTheme, theme } from './styles/theme';

const App = () => {
  const queryClient = new QueryClient();
  const { isLoggedIn } = useIsLoggedInStore();

  useEffect(() => {
    const refresh = async () => {
      const data = await loginAPI.refresh();
      loginAPI.onLoginSuccess(data);
    };

    if (isLoggedIn) refresh();
  }, []);

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
