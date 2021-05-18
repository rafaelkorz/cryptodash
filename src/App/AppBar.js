import styled, { css } from 'styled-components';
import { Component } from 'react';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 30px #03ff03;
  `}
`

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}
const BarStyle = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px 100px;
`;

class AppBar extends Component {
  render() {
    return (
      <BarStyle>
        <Logo> CrytoDash </Logo>
        <div />
        <ControlButton name="dashboard" />
        <ControlButton name="settings" />
      </BarStyle>
    )
  }
}


export default AppBar;
