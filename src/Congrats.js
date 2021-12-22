import PropTypes from 'prop-types';
import React from 'react';

class Congrats extends React.Component{
    render(){
        // child of app 
        const {success}= this.props;
            if(success){
                return(
                <div data-test="congrats">
                    {"Congratulations! You have guessed the word"}
                </div>
                )
            }
            else{
                return(
                    <div  data-test="congrats">
                    </div>
                )
            }
    }
}
Congrats.propTypes={
    success:PropTypes.bool.isRequired
}
export default Congrats;