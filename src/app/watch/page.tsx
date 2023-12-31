"use client";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { getStorage } from "@/app/service/localStorage";
import { watchUrlKeyMap } from "@/util/consts";
import { IUrlKeyMap } from "@/util/types";
import { useSearchParams } from "next/navigation";

const Watch = () => {
  const urlKeyMap: IUrlKeyMap = getStorage(watchUrlKeyMap) ?? {};

  const query = useSearchParams();

  const videoUrl = query.get("url") ?? "";

  const startTime = urlKeyMap[videoUrl] ?? 0;

  return (
    <div>
      <h1>Video Player</h1>
      <VideoPlayer videoUrl={videoUrl} startTime={startTime} />
    </div>
  );
};

export default Watch;
