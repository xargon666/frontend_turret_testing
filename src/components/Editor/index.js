import React, { useState, useRef } from "react";
// import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";
import { useSelector, useDispatch } from "react-redux";
import { setCode } from "../../Controllers/redux/codeSlice";

function TextEditor(props) {
  const dispatch = useDispatch();
  // const [content, setContent] = useState("// some code");
  const question = useSelector((state) => state.question.data);  

  function handleEditorChange(value, event) {
    dispatch(setCode(value));
  }

  return (
    <>
      <Editor
        height={props.height ? props.height : "100%"}
        theme="vs-dark"
        options={{
          readOnly: props.readOnly ? props.readOnly : false,
        }}
        defaultLanguage="javascript"
        // defaultValue={props.code}
        value={props.code}
        onChange={handleEditorChange}
      />
    </>
  );
}

export default TextEditor;
