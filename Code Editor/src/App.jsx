import React from "react";
import CodeEditor from "./Code Editor/CodeEditor";
import useEditStore from "./Code Editor/EditorStore/EditorStore";

function App() {
  const { bgColor } = useEditStore((state) => state);

  return (
    <div className={`h-screen bg-black`}>
      <CodeEditor />
    </div>
  );
}

export default App;
