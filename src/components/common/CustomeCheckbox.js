import styled from 'styled-components';

const Label = styled.label`
  margin-right: 10px;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 2px;
    height: 15px;
    width: 15px;
    border: ${props => `1px solid ${props.primaryColor}`};
    border-radius: 5px;
  }
  &::after > input:checked {
    content: 1;
  }
`;

const Input = styled.input`
  z-index: -1;
  opacity: 0;
`;

function CustomeCheckbox({ isChecked, onChange, primaryColor }) {
  return (
    <Label className="list__item__checkbox" primaryColor={primaryColor}>
      <Input type="checkbox" checked={isChecked} onChange={onChange}/>
    </Label>
  );
}

export default CustomeCheckbox;
