import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { IModalProps } from "../modal";
import YouTube from "react-youtube";
import YoutubeAPI, { TSearchResponse } from "@/components/youtube/api";
import PlayView from "@/components/youtube/playView";
import Thumbnails from "@/components/youtube/thumbnails";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      minWidth: "600px",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        minWidth: "auto",
      },
    },
    actionsRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      justifyContent: "center",
    },
  })
);

export type ProjectionContent = {
  title: string;
  icon: string;
  youtubeDataAPI: {
    key: string;
    q: string;
    channelId: string;
  };
};
export const isProjectionContent = (v: unknown): v is ProjectionContent =>
  v !== null &&
  typeof v === "object" &&
  (v as { youtubeDataAPI: unknown }).youtubeDataAPI instanceof Object;

export interface IProjectionModalProps extends IModalProps {
  content: ProjectionContent;
}
const ProjectionModal: React.FC<IProjectionModalProps> = (props) => {
  const [movies, setMovies] = useState<TSearchResponse>([]);
  const [playVideoId, setPlayVideoId] = useState<string | undefined>(undefined);

  const classes = useStyles();

  const searchMovies = async (
    apiProps: ProjectionContent["youtubeDataAPI"]
  ) => {
    YoutubeAPI.init(apiProps.key);
    const movies = await YoutubeAPI.search({
      part: "snippet",
      type: "video",
      order: "date",
      maxResults: 50,
      channelId: apiProps.channelId,
      q: apiProps.q,
      publishedAfter: "2020-07-31T15:00:00Z",
    });
    setMovies(movies);
  };

  useEffect(() => {
    const asyncs = async () => {
      await searchMovies(props.content.youtubeDataAPI);
    };
    asyncs();
  }, []);

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent className={classes.contentRoot}>
        <DialogTitle>{props.content.title}</DialogTitle>
        <PlayView videoId={playVideoId} />
        <Thumbnails videos={movies} setPlayVideoId={setPlayVideoId} />
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button variant="outlined" onClick={props.onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProjectionModal;
