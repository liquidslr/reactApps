import React, {Component} from 'react';


class SearchBar extends Component{
        constructor(props){
            super(props);
            this.state = {
                term: '',

        }
        }
    
    render(){
    return(
        <div className="search-bar" >
            <input value={this.state.term} className="form-group" onChange={event => this.onInputChange(event.target.value)} />
            <button className="btn btn-primary" onClick={()=> this.props.onSearchTermChange(this.state)} >Search </button>
        </div>
    )
}
    onInputChange(term) {
    this.setState({ term });
    }
}



export default SearchBar;