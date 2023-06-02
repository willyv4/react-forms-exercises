import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import "./BoxList.css";

const BoxList = () => {
  const [boxs, setBoxs] = useState([]);

  const removeBox = (id) => {
    const currentBoxes = boxs.filter((box) => box.id !== id);
    setBoxs(currentBoxes);
  };

  const addBoxs = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxs((boxs) => [...boxs, newBox]);
  };

  const renderBoxs = () => {
    return (
      <div>
        {boxs.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            bgColor={box.bgColor}
            w={box.w}
            h={box.h}
            removeBox={removeBox}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <NewBoxForm addBoxs={addBoxs} />
      {renderBoxs()}
    </div>
  );
};

export default BoxList;
