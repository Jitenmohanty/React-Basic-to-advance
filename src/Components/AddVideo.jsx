import React, { useContext, useEffect, useState } from "react";
import VideoDispatchContext from "../Context/VideoDispatchContext";
const initialState = {
  title: "",
  description: "",
};
const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  const dispatch = useContext(VideoDispatchContext);
  const handleChange = (e) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
      setVideo(initialState);
    } else {
      dispatch({ type: "ADD", payload: video });
      setVideo(initialState);
    }
  };
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);
  return (
    <div style={{ height: "10vh", width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <label style={{fontWeight:'bolder'}}>
          Title
          <input
            type="text"
            placeholder="title"
            name="title"
            value={video.title}
            onChange={handleChange}
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: "#421f47",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
        </label>
        <label style={{fontWeight:'bolder'}}>
          Description
          <input
            type="text"
            placeholder=" Enter views"
            name="description"
            value={video.description}
            onChange={handleChange}
            style={{
              padding: "10px",
              margin: "5px",
              backgroundColor: "#421f47",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
        </label>
        <button type="submit">{editableVideo ? "Update" : "Add"} Video</button>
      </form>
    </div>
  );
};

export default AddVideo;
