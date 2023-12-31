"use client";
import React from "react";
import ReactPlayer from "react-player";
import { getStorage, setStorage } from "@/app/service/localStorage";
import { watchUrlKeyMap } from "@/util/consts";

const VideoPlayer = ({
  videoUrl,
  startTime,
}: {
  videoUrl: string;
  startTime: number;
}) => {
  const handleProgress = (state: any) => {
    const urlKeyMap = getStorage(watchUrlKeyMap);

    urlKeyMap[videoUrl] = state.playedSeconds;

    setStorage(watchUrlKeyMap, urlKeyMap);
  };

  const handleReady = (player: any) => {
    setTimeout(() => {
      // Convert startTime from seconds to percentage
      const percentage = startTime / player.getDuration();

      // Seek to the calculated percentage
      player.seekTo(percentage);
    }, 500); // Adjust the delay as needed
  };

  return (
    <ReactPlayer
      url={videoUrl}
      controls={true}
      width="100%"
      height="50vh"
      playing={true}
      playbackRate={1}
      seek={startTime + 20}
      stopOnUnmount
      onReady={handleReady}
      onProgress={handleProgress}
    />
  );
};

export default VideoPlayer;
