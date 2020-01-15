import React from "react";
import "./stylesheets/style.scss";
import { Provider } from "react-redux";
// import { DatePicker } from "antd";

// relative

import Header from "./components/Header";
import "bulma/css/bulma.css";
import MainLayout from "./components/MainLayout";
import Hero from "./components/Container";
import { Store } from "./Store/store";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={Store}>
      <main>
        <Header />
        <MainLayout />
        <Hero />
        <Footer />
      </main>
    </Provider>
  );
}

export default App;
