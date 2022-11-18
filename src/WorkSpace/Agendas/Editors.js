import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

class App extends Component {
    editor = null;

    render() {
        return (
            <div className="editor">
               
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );

                        this.editor = editor;
                    } }
                    onError={ ( error, { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                  
                    // config={ /* the editor configuration */ }
                />
                </div>
        );
    }
}

export default App;



// import React, { Component } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// class Ckeditors extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h2>Using CKEditor 5 build in React</h2>
//                 <CKEditor
//                     editor={ ClassicEditor }
                    
//                     onReady={ editor => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event, editor ) => {
//                         const data = editor.getData();
//                         console.log( { event, editor, data } );
//                     } }
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />
//             </div>
//         );
//     }
// }

// export default Ckeditors;
// This sample assumes that the application is using a CKEditor 5 editor built from source.

