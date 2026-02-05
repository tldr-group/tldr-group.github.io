import * as z from "zod/mini";

import { Video, VideoSchema } from "../types";

import videoJSON from "../../public/content/updates/videos.json";

const VideoComponent = ({ videoData }: { videoData: Video }) => {
  const { title, link } = videoData;

  return (
    <div>
      <p>{title}</p>
      <iframe
        width="320"
        height="240"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={link}
      />
    </div>
  );
};

export const Videos = () => {
  const videos: Video[] = z.array(VideoSchema).parse(videoJSON);
  return (
    <div>
      {videos.map((v) => (
        <VideoComponent videoData={v} />
      ))}
    </div>
  );
};
