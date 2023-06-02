import "./Box.css";

const Box = ({ id, bgColor, w, h, removeBox }) => {
  const styles = {
    backgroundColor: bgColor,
    width: w,
    height: h,
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div>
      <div style={styles}></div>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;
