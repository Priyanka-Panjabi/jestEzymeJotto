import React from 'react';
import PropTypes from 'prop-types';
class GuessedWords extends React.Component{
    render(){
        const {guessedWords} = this.props
        return(
            <div data-test="root-div">
                {guessedWords.length===0 ?
                    <div data-test="no-guessed-div">
                        <div data-test="no-guess-text-display">
                            No word guessed !
                        </div>
                    </div>
                    :
                    <table data-test="table-div"  style={{border: "1px solid"}}>
                        <th  style={{border: "1px solid"}}>
                            Guessed Words
                        </th>
                        <th  style={{border: "1px solid"}}>
                            Words Match
                        </th>
                        <tbody>
                            {guessedWords.map((ele, index)=>(
                                <tr key = {index}  data-test="each-guess-word">
                                <td style={{border: "1px solid"}}>
                                    {ele.guessedWords}
                                </td>
                                <td key = {index}  style={{border: "1px solid"}}>
                                    {ele.letterMatchCount}
                                </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}
GuessedWords.propTypes={
    // guessedWords:PropTypes.arrayOf(
    //     PropTypes.shape({
    //         guessedWords:PropTypes.string.isRequired,
    //         letterMatchCount:PropTypes.number.isRequired
    //     })
    // ).isRequired,
    guessedWords:PropTypes.array.isRequired
}
export default GuessedWords;
