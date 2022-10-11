import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";

function TextEditor() {
  const [content, setContent] = useState("// some code");

  return (
   <Editor
     height="35vh"
     theme="vs-dark"
     defaultLanguage="javascript"
     defaultValue={content}
     onChange={() => setContent('')}
   />
  );
}

export default TextEditor;
