import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Results from "./components/Results";
import SavedArticles from "./components/SavedArticles";



class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Container>
            <Form />
            <Results />
            <SavedArticles />
          </Container>
          <Footer />
      </div>
    );
  }
}

export default App;
