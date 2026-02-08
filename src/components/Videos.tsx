import * as z from "zod/mini";

import { Video, VideoSchema } from "../types";

import videoJSON from "../content/text/videos.json";

const VideoComponent = ({ videoData }: { videoData: Video }) => {
  const { title, link } = videoData;

  return (
    <div className="outlined-content project-card">
      <iframe
        width="320"
        height="240"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={link}
      />
      <h3 style={{ alignSelf: "center", textAlign: "center" }}>{title}</h3>
    </div>
  );
};

export const Videos = () => {
  const videos: Video[] = z.array(VideoSchema).parse(videoJSON);
  return (
    <div className="projects-grid">
      {videos.map((v) => (
        <VideoComponent videoData={v} />
      ))}
    </div>
  );
};
