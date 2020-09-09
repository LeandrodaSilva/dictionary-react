import React from 'react';
import Routes from "../routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
