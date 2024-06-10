import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Header from './components/Header';
import Catchphrase from './components/Catchphrase';
import TechCardArea from './components/TechCardArea';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  palette: {
    text: {
      primary: '#333',
    },
    background: {
      default: 'rgba(255, 204, 153, 0.1)', // 背景色をオレンジに近い薄い色に設定
    },
  },
});

const AppContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  paddingTop: '0rem', // Header の高さ + 余裕
});

const MainContainer = styled(Container)(({ theme }) => ({
  padding: '1rem',
  width: '100%',
  maxWidth: '1200px',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem',
  },
}));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Header />
        <MainContainer>
          <Catchphrase />
          <TechCardArea/>
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
