import Button from "../Button/Button";
import css from "./ButtonBox.module.css";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const ButtonBox = () => {
  return (
    <div className={css.buttonBox}>
      {btnValues.flat().map((btn, index) => (
        <Button key={index} value={btn}></Button>
      ))}
    </div>
  );
};
export default ButtonBox;
