import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  palette: {
    default: {
      dark: 'rgb(204, 204, 204)',
      main: 'rgb(237, 237, 237)',
      light: 'rgb(250, 250, 250)',
    },
    primary: {
      dark: 'rgb(0, 148, 126)',
      main: 'rgb(0, 209, 178)',
      light: 'rgb(235, 255, 252)',
    },
    secondary: {
      dark: 'rgb(41, 111, 168)',
      main: 'rgb(219, 219, 219)',
      light: 'rgb(239, 245, 251)',
    },
    link: {
      dark: 'rgb(56, 80, 183)',
      main: 'rgb(72, 95, 199)',
      light: 'rgb(239, 241, 250)',
    },
    info: {
      dark: 'rgb(41, 111, 168)',
      main: 'rgb(62, 142, 208)',
      light: 'rgb(239, 245, 251)',
    },
    success: {
      dark: 'rgb(37, 121, 83)',
      main: 'rgb(72, 199, 142)',
      light: 'rgb(239, 250, 245)',
    },
    warning: {
      dark: 'rgb(148, 108, 0)',
      main: 'rgb(255, 224, 138)',
      light: 'rgb(254, 236, 240)',
    },
    danger: {
      dark: 'rgb(204, 15, 53)',
      main: 'rgb(241, 70, 104)',
      light: 'rgb(254, 236, 240)',
    },
    dark: {
      main: 'rgb(54, 54, 54)',
    },
    light: {
      main: 'rgb(255, 255, 255)',
    },
    accent: {
      main: 'rgb(245, 245, 245)',
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.15)',
      main: 'rgba(0, 0, 0, 0.3)',
      dark: 'rgba(0, 0, 0, 0.6)',
    },
  },
};

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;