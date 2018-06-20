import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Container>
            <Form />
           
            </Container>
            <Footer />
      </div>
    );
  }
}

export default App;
