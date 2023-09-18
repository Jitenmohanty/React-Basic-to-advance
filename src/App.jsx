import { useReducer, useState } from "react";
import "./App.css";
import Video from "./Components/Video";
import data from "./assets/data.json";

import AddVideo from "./Components/AddVideo";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...videos,
          {
            ...action.payload,
            id: Date.now(),
            imgSrc:
              "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350",
          },
        ];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const uVideo = [...videos];
        uVideo.splice(index, 1, action.payload);
        //Not use inside...
        setEditableVideo(null);
        return uVideo;

      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, data.projects);

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  return (
    <>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
      <Video dispatch={dispatch} videos={videos} editVideo={editVideo} />
    </>
  );
}

export default App;
