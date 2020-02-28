import React from "react";

export default function Videos({ selectedVideo }) {
  if (!selectedVideo) return <div>no video...</div>;
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="main-video-wrap">
        <div className="main-vid">
          <iframe
           
            src={videoSrc}
            frameBorder="0"
            title="videoPlayer"
          />
          <h3>
            {selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle}
          </h3>
          <p>{selectedVideo.snippet.channelTitle}</p>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}
