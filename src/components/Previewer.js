//STYLE
import './Previewer.css';

// MARKDOWN COMPILER
import { marked } from 'marked';

marked.setOptions({
breaks: true,    
  });

const Previewer = ({ editorText }) => {
    
    const parsedText = marked.parse(editorText);

  return (
  <div className='previewerContainer'>
      <div className='bar'>
          <p className='barTitle'>previewer</p>
      </div>
      <div className='preview' id='preview' dangerouslySetInnerHTML={{__html: parsedText}}></div>
  </div>
  );
};

export default Previewer;
