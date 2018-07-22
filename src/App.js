import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import SearchBox from './components/SearchBox';
// import Navigation from './components/Navigation';
import CompanyInfo from './components/Company/CompanyInfo';
import purchasedItems from './components/dataset/purchase_history.json';

class App extends Component {
  constructor() {
      super();
      this.state = {
        searchfield: '',
        items: [],
        route: 'home',
        display: {}
      }
      this.handleCompanyClick = this.handleCompanyClick.bind(this);
  }

  componentDidMount() {
    this.setState({ items: purchasedItems });
  }

  handleCompanyClick(item) {
    this.setState({route: 'companyinfo', display: item});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const { searchfield, items, route, display } = this.state;
    const filteredItems = items.filter(item =>
      item.productTitle.toLowerCase().includes(searchfield.toLowerCase()));
      switch(route) {
        case "home":
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
              <Items
                filteredItems={filteredItems}
                handleCompanyClick={this.handleCompanyClick}
              />
            </div>
          );
          break;
        case "companyinfo":
          return (
            <div>
              <CompanyInfo company={display}/>
            </div>
          );
          break;
        case "":
      };


  }
}

export default App;
