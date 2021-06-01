const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = { color: "steelblue" };

export default Button;
