import React, { useState } from "react";
import { NodeBuilder } from "./components/NodeBuilder";
import { NodeTree } from "./components/NodeTree";

function App() {
  const [nodes, setNodes] = useState([]);

  const addNode = (newNode, parentId = null) => {
    if (parentId === null) {
      setNodes([...nodes, newNode]);
    } else {
      const updatedNodes = updateNodeTree(nodes, parentId, (parent) => ({
        ...parent,
        components: [...(parent.components || []), newNode],
      }));
      setNodes(updatedNodes);
    }
  };

  const updateNode = (id, updatedNode) => {
    const updatedNodes = updateNodeTree(nodes, id, () => updatedNode);
    setNodes(updatedNodes);
  };

  const deleteNode = (id) => {
    const updatedNodes = deleteNodeFromTree(nodes, id);
    setNodes(updatedNodes);
  };

  const updateNodeTree = (nodeArray, id, updateFn) => {
    return nodeArray.map((node) => {
      if (node.id === id) {
        return updateFn(node);
      }
      if (node.components) {
        return {
          ...node,
          components: updateNodeTree(node.components, id, updateFn),
        };
      }
      return node;
    });
  };

  const deleteNodeFromTree = (nodeArray, id) => {
    return nodeArray.filter((node) => {
      if (node.id === id) {
        return false;
      }
      if (node.components) {
        node.components = deleteNodeFromTree(node.components, id);
      }
      return true;
    });
  };

  return (
    <div>
      <h1>JSON Builder</h1>
      <NodeBuilder onAdd={addNode} />
      <NodeTree
        nodes={nodes}
        onAdd={addNode}
        onUpdate={updateNode}
        onDelete={deleteNode}
      />
      <pre>{JSON.stringify(nodes, null, 2)}</pre>
    </div>
  );
}

export default App;
