const Button = ({ addTask, task }) => {
  return (
    <button
      onClick={() => addTask()}
      style={{ color: "white", background: "green" }}
      disabled={!task}
    >
      Add
    </button>
  );
};

export default Button;
