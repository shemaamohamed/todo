import '../styles/Checkbox.css';

function Checkbox({isChecked, onChange ,id}) {
  

  return (
    <div className="checkbox-wrapper">
    <input
      type="checkbox"
      className="check"
      id={id} 
      checked={isChecked}
      onChange={onChange}
    />
    <label htmlFor={id} className="label">
      <svg width="45" height="45" viewBox="0 0 95 95">
        <rect x="30" y="30" width="50" height="50" stroke="rgb(111,171,230)" fill="none" strokeWidth="5"></rect>
        <g transform="translate(0,-952.36222)">
          <path
            d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
            stroke="gray"
            strokeWidth="3"
            fill="none"
            className="path1"
          ></path>
        </g>
      </svg>
    </label>
  </div>
);

}

export default Checkbox;
