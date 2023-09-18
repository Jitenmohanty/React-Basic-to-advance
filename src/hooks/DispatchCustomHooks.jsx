import { useContext } from "react";
import VideoDispatchContext from "../Context/VideoDispatchContext";

function useDispatchCustomHook(){
    return useContext(VideoDispatchContext)
}

export default useDispatchCustomHook;