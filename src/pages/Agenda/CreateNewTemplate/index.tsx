//@ts-nocheck
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {add} from 'src/store/apps/Agenda'
import ReactHtmlParser from 'react-html-parser';
import './WorkspaceAgendaTemplates.css'
import { Link } from "react-router-dom";


const index = () => {
  const [addData, setVal] = useState([]);
  const [addedData, showData] = useState(0);

  const dispacth = useDispatch()
  const handlechange = (e:any, editor:any) => {
    const data = editor.getData();
        const abc = ReactHtmlParser(data)
        setVal({...addData,abc});    
  };
  const submitHandler =()=>{
        dispacth(add(addData))
        console.log(add(addData))
  }

  return (
    <div className="sec_temp">
      <div className="Agenda_buttons">
        <Link to="/workspacesfile/createnewtemplate">
        <button className="create_template" onClick={submitHandler}> Save As Template</button>
        </Link>
      </div>
      <CKEditor
        onReady={(editor) => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
          this.editor = editor;
        }}
        onError={(error, { willEditorRestart }) => {
          if (willEditorRestart) {
            this.editor.ui.view.toolbar.element.remove();
          }
        }}
        onChange={handlechange}
        editor={DecoupledEditor}
      />
    </div>
  )
}

export default index