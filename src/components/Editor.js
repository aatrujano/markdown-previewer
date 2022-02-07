//STYLE
import './Editor.css';

const Editor = ({ updateEditorText, placeholder }) => {
  return (
    <div className='editorContainer'>
      <div className='bar'>
          <p className='barTitle'>Editor</p>
      </div>
      <textarea className='textarea' value={placeholder} id='editor' cols='80' rows='10' onChange={updateEditorText}/>
    </div>
  );
};

export default Editor;
