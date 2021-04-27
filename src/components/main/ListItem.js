import "./ListItem.css";

function ListItem({ isChecked, title, onChange, onRemove }) {
  return (
    <li className="list__item">
      <label className="list__item__checkbox">
        <input type="checkbox" checked={isChecked} onChange={() => onChange(title)}/>
      </label>
      <span className="list__item__title">{title}</span>
      <button  className="list__item__remove" onClick={() => onRemove(title)}>Remove</button>
    </li>
  );
}

export default ListItem;