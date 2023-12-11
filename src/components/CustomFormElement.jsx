const CustomFormElement = ({ mode, label, value, onChange, id, options }) => {
  switch (mode) {
    case "input":
      return (
        <div key={id}>
          <label>{label}</label>
          <input value={value} type="text" />
        </div>
      );
    case "select":
      return (
        <div key={id}>
          <label>{label}</label>
          <select value={value}>
            {options.map((elem) => {
              return <option value={elem}>{elem}</option>;
            })}
          </select>
        </div>
      );
    case "checkbox":
      return (
        <div key={id}>
          <label>{label}</label>
          <input checked={value} type="checkbox" />
        </div>
      );

    case "radio":
      return (
        <div key={id}>
          <label>{label}</label>
          <input checked={value} type="radio" />
          {options.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </div>
      );

    default:
      return null;
  }
};

export default CustomFormElement;
