import React, { useState, useRef } from "react";
// import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";
import { useSelector, useDispatch } from "react-redux";
import { setCode } from "../../Controllers/redux/codeSlice";

function TextEditor() {
  const dispatch = useDispatch();
  // const [content, setContent] = useState("// some code");
  const code = useSelector((state) => state.code.value);


  function handleEditorChange(value, event) {
    dispatch(setCode(value));
    console.log(value)
  }

  return (
    <>
      <Editor
        height="35vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleEditorChange}
      />
    </>
  );
}

export default TextEditor;
