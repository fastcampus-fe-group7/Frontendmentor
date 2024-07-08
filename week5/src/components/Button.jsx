const Button = ({ width, height, text, value, className }) => {
  return (
    <>
      <button className={"calcBtn " + className}>{text}</button>
    </>
  );
};

export default Button;
