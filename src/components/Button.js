import React from "react";
import './button.css';
import PublishIcon from '@material-ui/icons/Publish';



function Button({text,style}) {
    const handleChange=()=>{
        console.log('Upload button clicked')
    }

  return (
    <React.Fragment>
      <div className="button-wrap">
        <label className="new-button" for="upload" style={style}>
          <span style={{marginRight: '8px'}}>
          <PublishIcon />
          </span>
          {" "}
          {text}
        </label>
        <input onClick={handleChange} id="upload" type="file" />
      </div>
    </React.Fragment>
  );
}

export default Button;