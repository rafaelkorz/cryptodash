import { Component, createContext } from 'react'
const cc = require('cryptocompare');

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSetting(),
      confirmFavorites: this.confirmFavorites,
      setPage: this.setPage
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  confirmFavorites = () => {
    this.setState({
      firsVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }))
  }

  savedSetting = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return {page: 'settings', firsVisit: true}
    }
    return {};
  }

  setPage = page => this.setState({page: page})
    
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}