import styled, {css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, Tile } from '../Shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;   
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
  grid-gap: 15px; 
  margin-top: 40px; 
`

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return <AppContext.Consumer>
    {({coinList}) => <CoinGridStyled>
        {Object.keys(coinList).map(coinKey =>
            <SelectableTile>{coinKey}</SelectableTile>
          )}
      </CoinGridStyled>}
  </AppContext.Consumer>
}