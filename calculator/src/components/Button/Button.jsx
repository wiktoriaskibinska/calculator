import css from "./Button.module.css";
const Button = ({ value }) => {
  return <div className={css.button}>{value}</div>;
};
export default Button;
