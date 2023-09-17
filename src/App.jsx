import { useState } from "react";
import "./App.css";
import Video from "./Components/Video";
import data from "./assets/data.json";

import AddVideo from "./Components/AddVideo";

function App() {
  const [videos, setVideos] = useState(data.projects);
  const [editableVideo, setEditableVideo] = useState(null);
  const addVideo = (video) => {
    setVideos([
      ...videos,
      {
        ...video,
        id: Date.now(),
        imgSrc:
          "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350",
      },
    ]);
  };
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };
  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };
  const updateVideo = (video) => {
    const index = videos.findIndex(v=> v.id === video.id)
    const uVideo = [...videos];
    uVideo.splice(index,1,video)
      setVideos(uVideo)
    // console.log(uVideo)
    // console.log(video);
  };

  return (
    <>
      <AddVideo
        addVideo={addVideo}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      />
      <Video deleteVideo={deleteVideo} videos={videos} editVideo={editVideo} />
    </>
  );
}

export default App;
