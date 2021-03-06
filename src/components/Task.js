import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import crossed from "../crossed.png";
import { GlobalContext } from "../context/contextState";

const Task = ({ task, CheckedTask }) => {
  const ref = useRef(null);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const { deleteTask } = useContext(GlobalContext);
  const [cross, setCrossed] = useState("");

  const lineThrough = useCallback(
    (checked) => {
      if (checked) {
        return "line-through";
      }
      return "none";
    },
    [checked]
  );

  useEffect(() => {
    setCrossed(() => lineThrough(checked));
  }, [lineThrough]);
  useEffect(() => {
    setValue(task.text);
  }, []);

  const handleChange = () => {
    setChecked(!checked);
    CheckedTask(ref.current, checked);
  };

  return (
    <div
      style={{
        display: "flex",
        height: 30,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        textDecoration: `${cross}`,
      }}
      ref={ref}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <input
          style={{ fontSize: 20, border: "none" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <h1 >{task.text}</h1> */}
      </div>

      <img
        src={crossed}
        style={{ width: 20, height: 20 }}
        onClick={() => deleteTask(task.id)}
      />
    </div>
  );
};

export default React.memo(Task);
