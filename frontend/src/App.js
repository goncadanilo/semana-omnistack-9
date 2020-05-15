import React from "react";

import GlobalStyle from "./styles/globals";
import { Container } from "./styles/app";

import Routes from "./routes";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <Container>
        <img src={logo} alt="Aircnc" />

        <div className="content">
          <Routes />
        </div>
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
