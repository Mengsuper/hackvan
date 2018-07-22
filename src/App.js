import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import SearchBox from './components/SearchBox';
import purchasedItems from './components/dataset/purchase_history.json';
import Test from './components/Test';

class App extends Component {
    constructor() {
        super();
        this.state = {
          searchfield: '',
          items: []
        }
    }

    componentDidMount() {
        this.setState({ items: purchasedItems });
    }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const { searchfield, items } = this.state;
    const filteredItems = items.filter(item =>
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
        <Items filteredItems={filteredItems}/>
        <Test />
      </div>
    );
  }
}

export default App;
