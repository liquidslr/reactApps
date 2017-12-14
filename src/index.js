import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './Components/search_bar'
import VideoList from './Components/video_list'
const API_KEY = 'AIzaSyALvAokjirery_gOkDGIeBl8VYtPCctCB4';




class App extends Component{
    constructor(props){
        super(props);
        this.state = {videos: ''}
        YTSearch({key: API_KEY, term: 'sex'}, (videos) => {
            this.setState({videos})
            console.log(videos)
        });
      
    }
     
    render(){
        return(
            <div>
            <SearchBar />
            <VideoList/>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById('root'));

