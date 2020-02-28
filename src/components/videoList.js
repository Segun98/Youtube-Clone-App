import React from 'react'

export default function VideoList({video, onVideoSelect, index}) {
    return (
        <div onClick={()=> onVideoSelect(video)} className="video-list">
        <div className="video-list-item" style={{margin:"10px 0"}}>
            <img src={video.snippet.thumbnails.medium.url} alt={index} />
            <h5 style={{margin:"10px 0"}}>{video.snippet.title}</h5>
            </div>
        </div>
    )
}
