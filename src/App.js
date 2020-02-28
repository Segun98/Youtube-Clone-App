import React, { useState, useEffect} from "react";
import "./App.css";
import youtube from "./api/youtube";
import Search from "./components/search";
import Videos from "./components/videos";
import VideoItem from "./components/videoItem";


function App() {
  const [Video, setVideo] = useState([]);
  const [selectedVid, setselectedVid] = useState(null);

useEffect(() => {
  handleSubmit('corona virus safety tips')
}, [])

  async function handleSubmit(Search) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "hidden",
        q: Search
      }
    });
    console.log(response);
    setVideo(response.data.items);
    setselectedVid(response.data.items[0]);
  }

  function onVideoSelect(video) {
    setselectedVid(video);
  }
  return (
    <>
    <div className="search-page">
      <Search formSubmit={handleSubmit} />
      </div>
      <div className='page-wrap'>
      <Videos selectedVideo={selectedVid} />
      <VideoItem videos={Video} onVideoSelect={onVideoSelect} />
      </div>
    </>
  );
}

export default App;
