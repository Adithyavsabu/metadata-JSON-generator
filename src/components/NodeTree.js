import React from "react";
import { NodeBuilder } from "./NodeBuilder";

export function NodeTree({ nodes, onAdd, onUpdate, onDelete }) {
  const renderNode = (node) => {
    return (
      <div
        key={node.id}
        style={{
          marginLeft: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h3>
          {node.name} (ID: {node.id})
        </h3>
        <button onClick={() => onDelete(node.id)}>Delete</button>
        <NodeBuilder onAdd={(newNode) => onAdd(newNode, node.id)} />
        {node.components && node.components.length > 0 && (
          <div style={{ marginLeft: "20px" }}>
            {node.components.map(renderNode)}
          </div>
        )}
      </div>
    );
  };

  return <div>{nodes.map(renderNode)}</div>;
}
