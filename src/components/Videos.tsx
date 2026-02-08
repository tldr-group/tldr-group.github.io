import * as z from "zod/mini";

import { Video, VideoSchema } from "../types";

import videoJSON from "../content/text/videos.json";

const VideoComponent = ({ videoData }: { videoData: Video }) => {
  const { title, link } = videoData;

  return (
    <div className="outlined-content project-card">
      <iframe style={{ maxWidth: "75%" }} title="YouTube video player" src={link} />
      <h3 style={{ alignSelf: "center", textAlign: "center" }}>{title}</h3>
    </div>
  );
};

export const Videos = () => {
  const videos: Video[] = z.array(VideoSchema).parse(videoJSON);
  return (
    <div className="projects-grid">
      {videos.map((v, i) => (
        <VideoComponent key={i} videoData={v} />
      ))}
    </div>
  );
};
