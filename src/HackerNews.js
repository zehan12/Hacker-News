import React, { useState } from 'react';
import Stories from './components/Stories';
import HeaderBar from './components/HeaderBar';
import Favorite from './components/Favorite';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { dark, light, GlobalStyles } from './components/styled/theme';


export default function HackerNews() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <GlobalStyles />
        <HeaderBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      
        <Routes>
          <Route path="/" element={<Stories theme={theme}/>} />
          <Route path="/starred" element={<Favorite />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};