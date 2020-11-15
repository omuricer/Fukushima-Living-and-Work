import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TSearchResponse } from "@/components/youtube/api";
import Thumbnail from "@/components/youtube/thumbnail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thumbnails: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexFlow: "wrap",
    },
  })
);

export interface IThumbnailsProps {
  videos: TSearchResponse;
  setPlayVideoId: (videoId: string) => void;
}
const Thumbnails: React.FC<IThumbnailsProps> = (props) => {
  const classes = useStyles();

  const thumbnails = props.videos.map((v) => {
    return (
      <Thumbnail
        url={v.thumbnail.url}
        onClick={() => {
          props.setPlayVideoId(v.videoId);
        }}
      />
    );
  });

  return <div className={classes.thumbnails}>{thumbnails}</div>;
};
export default Thumbnails;
