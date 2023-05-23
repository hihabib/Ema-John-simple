import classes from "./InputGroup.module.css";
const InputGroup = ({ type, name, label }) => {
  return (
    <div className={classes.inputGroup}>
      {type !== "submit" ? (
        <>
          <label htmlFor={name}>{label}</label>
          <input type={type} name={name} id={name} />
        </>
      ) : (
        <div className={classes.inputGroup}>
          <button type={type} name={name}>
            {label}
          </button>
        </div>
      )}
    </div>
  );
};

export default InputGroup;
