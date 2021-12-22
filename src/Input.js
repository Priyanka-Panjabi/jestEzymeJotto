import React from 'react';
import PropTypes from 'prop-types';
function Input(props){
    const { secretWord, success} = props;
    const [guessedWord, setGuessedWord]= React.useState("");
    const onbuttonClick=(e)=>{
        e.preventDefault();
        setGuessedWord('')
    }
    return(
        <div data-test="render-div">
            {!success&&
            <>
                <input type="text" data-test="input-text"
                onChange={(e)=>setGuessedWord(e.target.value)}
                value={guessedWord}
                >
                </input>
                <button 
                data-test="submit-button" 
                onClick={onbuttonClick}
                >
                    Submit
                </button>
            </>
            }
        </div>
    )
}
Input.propTypes={
    secretWord:PropTypes.string.isRequired
}
export default Input