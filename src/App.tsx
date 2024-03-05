import { ThemeProvider, Global } from '@emotion/react';
import styled from '@emotion/styled';
import globalStyles from './styles/globalStyles';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Box>정말 반갑습니다</Box>
    </ThemeProvider>
  );
};

export default App;

const Box = styled.div`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.green[500]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media ${({ theme }) => theme.devices.mobile} {
    background-color: ${({ theme }) => theme.colors.orange[500]};
  }
`;
