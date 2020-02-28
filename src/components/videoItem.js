import React from 'react'
import VideoList from './videoList'

export default function VideoItem({videos, onVideoSelect}) {


    return (
        <div className="video-item">
            {videos.map((video, index)=>(
                <VideoList key={index} video={video} index={index} onVideoSelect={onVideoSelect} />
            ))}

            <footer style={{textAlign:"center", color: "blue", paddingBottom:"10px"}}>
                Made by <a href="https://segunos.tk">SegunOS</a>
            </footer>
        </div>
    )
}
