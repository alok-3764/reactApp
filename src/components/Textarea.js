import { useState } from "react";

function TextArea(){

    const [text, setText] = useState('');

    function handleOnclick() {        
        setText(text.toUpperCase());
    }

    function handleOnchange(e) {
        setText(e.target.value);
    }    

    return <div className="row d-flex justify-content-center">
        <div className="col-6">
            <label>Text Box</label>
            <textarea className="form-control" value={text} onChange={handleOnchange} rows="8" placeholder="Enter msg here..."></textarea>
            <button className="btn btn-primary mt-3" onClick={handleOnclick}>Make UpperCase</button>
        </div>
    </div>
}

export default TextArea;