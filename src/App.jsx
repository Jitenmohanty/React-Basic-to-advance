import { useContext, useReducer, useState } from "react";
import "./App.css";
import Video from "./Components/Video";
import data from "./assets/data.json";

import AddVideo from "./Components/AddVideo";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const Theme = useContext(ThemeContext)
  const [editableVideo, setEditableVideo] = useState(null);
  const [colorMode, setColorMode] = useState(Theme);

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
      <div className={`App ${colorMode}`}>
        <button
          onClick={() =>
            setColorMode(colorMode === "lightMode" ? "darkMode" : "lightMode")
          }
        >
          Mode
        </button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <Video dispatch={dispatch} videos={videos} editVideo={editVideo} />
      </div>
    </>
  );
}

export default App;
