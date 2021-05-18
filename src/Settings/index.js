import { Component } from 'react'
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page'
import WelcomeMessage from '../Settings/WelcomeMessage'
import CoinGrid from './CoinGrid'

class Settings extends Component {
  render() {
    return (
      <Page name="settings">
        <WelcomeMessage />
        <ConfirmButton />
        <CoinGrid />
      </Page>
    )
  }
}

export default Settings;