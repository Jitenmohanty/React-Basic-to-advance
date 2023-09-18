import { useContext } from "react";
import VideoContext from "../Context/VideoContext";

const useVideosCustomHook = () => {
  return useContext(VideoContext);
};

export default useVideosCustomHook;
