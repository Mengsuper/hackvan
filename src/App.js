import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import SearchBox from './components/SearchBox';
// import Navigation from './components/Navigation';
import CompanyInfo from './components/Company/CompanyInfo';
import Product from './components/Product/Product';
import purchasedItems from './components/dataset/purchase_history.json';
import { Button, Panel, Grid, Row, Col } from 'react-bootstrap';
import statImage from './statisticsPieChart.png';

class App extends Component {
  constructor() {
      super();
      this.state = {
        searchfield: '',
        purchasedItems: [],
        displayCompany: false,
        displayProduct: false,
        selectedItem: {},
        displayUserStats: false
      }
      this.handleImageClick = this.handleImageClick.bind(this);
      this.handleBackToHome = this.handleBackToHome.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount() {
    this.setState({ purchasedItems });
  }

  handleImageClick(item, type) {
    if (type === 'company') {
      this.setState(prevState => ({
        displayCompany: !prevState.displayCompany,
        selectedItem: item
      }));
    } else if (type === 'product') {
      this.setState(prevState => ({
        displayProduct: !prevState.displayProduct,
        selectedItem: item
      }));
    }
  }

  handleBackToHome() {
    this.setState({
      displayCompany: false,
      displayProduct: false
    })
  }

  handleBtnClick() {
    this.setState(prevState => ({
      displayUserStats: !prevState.displayUserStats
    }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const { searchfield, purchasedItems } = this.state;
    const filteredItems = purchasedItems.filter(item => item.productTitle.toLowerCase().includes(searchfield.toLowerCase()));

    return (
      <div>
        {this.state.displayCompany && <CompanyInfo item={this.state.selectedItem} items={this.state.purchasedItems}
          handleBackToHome={this.handleBackToHome}/>}
        
        {this.state.displayProduct &&
          <Product
            item={this.state.selectedItem}
            handleBackToHome={this.handleBackToHome}
          />
        }
        
        {!this.state.displayCompany && !this.state.displayProduct &&
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to HackVan</h1>
            </header>
            
            <Panel eventKey="1">
              <Panel.Heading>
                <Panel.Title toggle> 
                  <Button bsStyle="success" 
                    onClick={this.handleBtnClick}> Display </Button> 
                </Panel.Title>
                <Panel.Body collapsible>
                  { this.state.displayUserStats && <img src={statImage}/>}
                </Panel.Body>
              </Panel.Heading >
            </Panel>

            <Grid>
                <Row>
                  <Col xsOffset={1} xs={10}>
                    <SearchBox searchChange={this.onSearchChange}/>
                  </Col>
                </Row>
                <Row>
                  <Col xsOffset={1} xs={10}>
                    <Items filteredItems={filteredItems} handleImageClick={this.handleImageClick} />
                  </Col>
                </Row>
            </Grid>

          </div>
        }

      </div>
    );
  }
}

export default App;
