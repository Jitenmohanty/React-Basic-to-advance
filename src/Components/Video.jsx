import React, { useState } from "react";

const Video = ({ videos, deleteVideo,editVideo }) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{ position: "relative", marginLeft: "5px", width: "25vw" }}
          >
            <button
              onClick={() => deleteVideo(video.id)}
              style={{
                position: "absolute",
                top: "2px",
                right: "3px",
                backgroundColor: "tomato",
                padding:'0.5rem'
              }}
            >
              X
            </button>
            <button
              onClick={() => editVideo(video.id)}
              style={{
                position: "absolute",
                top: "2px",
                right: "2rem",
                backgroundColor: "tomato",
                padding:'0.5rem'
              }}
            >
              edit
            </button>
            <img
              src={video.imgSrc}
              alt="img"
              style={{ height: "40vh", width: "25vw" }}
            />
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Video;
