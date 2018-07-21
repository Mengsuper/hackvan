import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import SearchBox from './components/SearchBox';
import purchasedItems from './components/dataset/purchase_history.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
          searchfield: '',
          products: []
        }
    }

    componentDidMount() {
        this.setState({ products: purchasedItems });
    }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const { searchfield, products } = this.state;
    const filteredProducts = products.filter(item =>
      item.productTitle.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HackVan</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBox searchChange={this.onSearchChange}/>
        <Items filteredProducts={filteredProducts}/>
      </div>
    );
  }
}

export default App;
