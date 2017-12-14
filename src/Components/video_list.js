import React from 'react';
import VideoListItem from './video_list_items';

const VideoList = (props) =>{
    const videoItems = props.videos.map(video =>{
    return <VideoListItem 
         video={video} 
         onVideoSelect = {props.onVideoSelect}
         key={video.etag}
    />
  })
    return(
        <ul>
            {videoItems}
        </ul>
    )
}

export default VideoList;

