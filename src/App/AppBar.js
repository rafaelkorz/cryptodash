import styled, { css } from 'styled-components';
import { Component } from 'react';

const Logo = styled.div`
  font-size: 1.5em;
`

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
`

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({name, active}) => {
  return (
    <ControlButtonElem active={active}>
      {toProperCase(name)}
    </ControlButtonElem>
  )
}
const BarStyle = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px 100px;
`;

class Bar extends Component {
  render() {
    return (
      <BarStyle>
        <Logo> CrytoDash </Logo>
        <div />
        <ControlButton active name="dashBoard"/>
        <ControlButton name="settings"/>
      </BarStyle>
    )
  }
}

export default Bar;