import ListItem from './ListItem';

function List({ items, onChangeList }) {
  const onChange = (title) => {
    const newItems = items.map(item => item.title === title
      ? { ...item, isChecked: !item.isChecked}
      : item);
      onChangeList(newItems);
  };
  const onRemove = (title) => {
    const newItems = items.filter(item => item.title !== title);
    onChangeList(newItems);
  }
  return (
    <ul style={ {listStyleType: 'none'} }>
      {items.map(item =>
        <ListItem key={item.title} isChecked={item.isChecked} title={item.title} onChange={onChange} onRemove={onRemove}/>)}
    </ul>
  );
}

export default List;