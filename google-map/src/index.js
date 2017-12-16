import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Gaurav from './Components/map'

class MapRender extends Component {
   
    render(){
        return(
            <Gaurav />
        )
    }
}


ReactDOM.render(<MapRender />, document.getElementById('root'));

