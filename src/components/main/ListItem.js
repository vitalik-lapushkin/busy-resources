import { useContext } from 'react';
import styled from 'styled-components'
import StylesContext from '../../context/StylesContext';
import CustomeCheckbox from '../common/CustomeCheckbox';

const Li = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;

const ItemTitle = styled.span`
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: ${props => props.primaryColor};
  color: ${props => props.primaryTextColor};
  border: 0;
  border-radius: 5px;
  padding: 5px;
`;

function ListItem({ isChecked, title, onChangeChecked, onRemove }) {
  const { primaryColor, primaryTextColor } = useContext(StylesContext);
  return (
    <Li className="list__item">
      <CustomeCheckbox isChecked={isChecked} onChange={onChangeChecked} primaryColor={primaryColor}/>
      <ItemTitle>{title}</ItemTitle>
      <RemoveButton
        primaryColor={primaryColor}
        primaryTextColor={primaryTextColor}
        onClick={() => onRemove(title)}
      >
        Remove
      </RemoveButton>
    </Li>
  );
}

export default ListItem;