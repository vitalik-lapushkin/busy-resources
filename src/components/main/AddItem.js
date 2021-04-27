import { useState } from 'react';

function AddItem({ onAddItem }) {
  const [input, setInput] = useState('');

  const onChange = (event) => {
    setInput(event.target.value);
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      onAddItem(input);
      setInput('');
    }
  }

  return (
    <label>
      Title of new resource:
      <input type='text' value={input} onChange={onChange} onKeyPress={handleKeyPress}/>
    </label>
  );
}

export default AddItem;