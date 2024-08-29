import React, { useState } from "react";
import { ComponentTypes, componentSchemas } from "../schemas/componentSchemas";

export function NodeBuilder({ onAdd, parentId = null }) {
  const [selectedType, setSelectedType] = useState(ComponentTypes.Table);

  const handleAdd = () => {
    const schema = componentSchemas[selectedType];
    const newNode = Object.keys(schema).reduce((acc, key) => {
      if (typeof schema[key] === "object" && schema[key] !== null) {
        acc[key] =
          typeof schema[key].default === "function"
            ? schema[key].default()
            : schema[key].default;
      } else {
        acc[key] = schema[key];
      }
      return acc;
    }, {});
    onAdd(newNode, parentId);
  };

  return (
    <div>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {Object.values(ComponentTypes).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={handleAdd}>Add Node</button>
    </div>
  );
}
