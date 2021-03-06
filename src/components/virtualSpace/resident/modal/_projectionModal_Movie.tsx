import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { IModalProps } from "../modal";
import YoutubeAPI, { TSearchResponse } from "@/components/youtube/api";
import PlayView from "@/components/youtube/playView";
import Thumbnails from "@/components/youtube/thumbnails";
import Header from "./header";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Override MuiDialog-paper
    paper: {
      width: "90vw",
      margin: "0",
      maxHeight: "80vh",
      top: "-40px",
    },
    buttonConcierge: {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      MsTransform: "translateX(-50%)",
      zIndex: 1301,
    },
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
/**
 * Youtube動画 上映コンポーネント
 * @param props
 */
const ProjectionModal: React.FC<IProjectionModalProps> = (props) => {
  const [movies, setMovies] = useState<TSearchResponse>([]);
  const [playVideoId, setPlayVideoId] = useState<string | undefined>(undefined);

  const classes = useStyles();

  /**
   * Youtube Data APIをコールし、Stateのmoviesに設定する
   * @param apiProps Youtube Data API の検索条件
   */
  const searchMovies = async (
    apiProps: ProjectionContent["youtubeDataAPI"]
  ) => {
    YoutubeAPI.init(apiProps.key);
    setMovies(
      await YoutubeAPI.search({
        part: "snippet",
        type: "video",
        order: "date",
        maxResults: 50,
        channelId: apiProps.channelId,
        q: apiProps.q,
        publishedAfter: "2020-07-31T15:00:00Z",
      })
    );
  };

  useEffect(() => {
    const asyncs = async () => {
      await searchMovies(props.content.youtubeDataAPI);
    };
    asyncs();
  }, []);

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.closeModal}
        classes={{ paper: classes.paper }}
      >
        <Header icon={"icon/icon"} closeModal={props.closeModal} />
        <Typography variant="h3">{props.content.title}</Typography>
        <DialogTitle>
          <PlayView videoId={playVideoId} />
        </DialogTitle>
        <DialogContent className={classes.contentRoot}>
          <Thumbnails videos={movies} setPlayVideoId={setPlayVideoId} />
        </DialogContent>
      </Dialog>
      {props.open && (
        <Button
          onClick={() => {
            props.closeModal();
            props.handleAnothers.openModal("concierge");
          }}
          className={classes.buttonConcierge}
        >
          個別相談受付
        </Button>
      )}
    </React.Fragment>
  );
};
export default ProjectionModal;
