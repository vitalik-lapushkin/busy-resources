import { useState, useMemo } from 'react';
import List from '../main/List';
import AddItem from '../main/AddItem';

function Main() {
  const [items, setItems] = useState([]);
  const list = useMemo(
    () => items.length > 0
      ? <List items={items} onChangeList={setItems}/>
      : <span>List is empty!</span>,
    [items],
  );

  const [errorMessage, setErrorMessage] = useState('');
  const checkIsUniqueTitle = (titles, checkedTitle) => !titles.some(title => title === checkedTitle);

  const onAddItem = (title) => {
    const isUniqueTitle = checkIsUniqueTitle(items.map(item => item.title), title);
    if (isUniqueTitle) {        
      setItems([
        ...items,
        { title, isChecked: false }
      ])
      setErrorMessage('');
    } else {
      setErrorMessage('Title is not unique');
    }
  };

  return (
    <div>
      <AddItem onAddItem={onAddItem}/>
      <div>{errorMessage}</div>
      <div>{list}</div>
    </div>
  );
}

export default Main;