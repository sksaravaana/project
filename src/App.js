import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

const PosterMaker = () => {
  const [elements, setElements] = useState([]);

  // Add a new text element
  const addText = () => {
    setElements([
      ...elements,
      {
        id: `text-${elements.length}`,
        type: "text",
        x: 50,
        y: 50,
        text: "New Text",
        fontSize: 20,
        draggable: true,
      },
    ]);
  };

  // Add a new rectangle element
  const addRectangle = () => {
    setElements([
      ...elements,
      {
        id: `rect-${elements.length}`,
        type: "rect",
        x: 100,
        y: 100,
        width: 100,
        height: 50,
        fill: "blue",
        draggable: true,
      },
    ]);
  };

  const handleDragEnd = (e, id) => {
    const { x, y } = e.target.attrs;
    setElements(
      elements.map((el) => (el.id === id ? { ...el, x, y } : el))
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addText}>Add Text</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addRectangle}>Add Rectangle</button>
      </div>
      <div className="border-2 border-gray-300 rounded-md" style={{ width: "800px", height: "600px", margin: "auto" }}>
        <Stage width={800} height={600} className="bg-white">
          <Layer>
            {elements.map((el) => {
              if (el.type === "text") {
                return (
                  <Text
                    key={el.id}
                    {...el}
                    draggable
                    onDragEnd={(e) => handleDragEnd(e, el.id)}
                  />
                );
              }
              if (el.type === "rect") {
                return (
                  <Rect
                    key={el.id}
                    {...el}
                    draggable
                    onDragEnd={(e) => handleDragEnd(e, el.id)}
                  />
                );
              }
              return null;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default PosterMaker;
