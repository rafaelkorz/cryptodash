import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow} from './Styles';

export const Tile = styled.div`
  /* box-shadow: 0px 0px 5px 1px #a9b6ff; */
  background-color: #061a44;
  padding: 10px;   
`

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer; 
    box-shadow: 0px 0px 4px 2px #5fff17;
  }
`

export const DeletableTile = styled(SelectableTile)`
	&:hover{
		cursor: pointer; 
		${redBoxShadow}
	}
`;

export const DisabledTile = styled(Tile)`
	pointer-events: none;
  opacity: 0.4;
`;
