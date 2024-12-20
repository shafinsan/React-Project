import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LaguageSelect from "./LaguageSelect";
import useEditStore from "./EditorStore/EditorStore";
import { CODE_SNIPPETS } from "./UtilityForCodeEditor/Constent";
import { executeCode } from "./UtilityForCodeEditor/Api";
import { Button } from "@/components/ui/button";

function CodeEditor() {
  const { currentLanguage } = useEditStore((state) => state);
  const myref = useRef(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleMount = (editor) => {
    myref.current = editor;
    editor.focus();
  };

  const [currentCode, setCurrentCode] = useState(
    CODE_SNIPPETS[currentLanguage] || "// Default code snippet"
  );
  const runCode = async () => {
    const sourceCode = myref.current.getValue();
    if (!sourceCode) return;

    try {
      setLoading(true);
      const { run: result } = await executeCode(sourceCode, currentLanguage);
      setOutput(result.output.split("\n"));
      result.code === 1 ? setError(true) : setError(false);
      console.log(result.output);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentCode(CODE_SNIPPETS[currentLanguage] || "// Default code snippet");
  }, [currentLanguage]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="h-[25rem] border-2 md:w-1/2">
          <div className="relative">
            <Button
              onClick={runCode}
              disabled={loading}
              className={`absolute px-3 py-1 border-2 right-3 top-1 cursor-pointer active:scale-95 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="text-white">Loading...</span>
              ) : (
                <h1 className="text-white">Run</h1>
              )}
            </Button>

            <LaguageSelect />

            <div className="h-[20rem]">
              <Editor
                language={currentLanguage}
                onMount={handleMount}
                theme="vs-dark"
                value={currentCode}
              />
            </div>
          </div>
        </div>

        <div className="h-[15rem] border-2 md:w-1/2 md:h-[25rem] bg-black text-white p-4 overflow-y-auto">
          <div>
            <span className="font-bold">Output</span>
          </div>
          <p
            className={`mt-2 outline-none h-full ${
              isError ? "text-red-500" : "text-white"
            }`}
          >
            {output
              ? output.map((t, i) => ( <span key={i} className="block">{t}</span>))
              : "Click Run Code to See the output here"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
