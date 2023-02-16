import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const light = {
  name: "light-theme",
  colors: {
    background: "#FFFFFF",
    text: "rgba(0, 0, 0, 1)",
    metaItem: "rgba(0, 0, 0, 0.5)",
  },
};

export const dark = {
  name: "dark-theme",
  colors: {
    background: "#1E2025",
    text: "rgba(255, 255, 255, 1)",
    metaItem: "rgba(255, 255, 255, 0.5)",
  },
};